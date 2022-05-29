import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import cn from 'classnames/bind';
import style from './style.scss';

const cx = cn.bind(style);

const Form = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [hidden, setHidden] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    emailjs.sendForm('service_je2je1p', 'template_lba4xzr', form.current, 'olbkdJJLGKzPQEbjq')
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setHidden(true);
      }, () => {
        setFailure(true);
        setLoading(false);
        setHidden(true);
      });
  };

  return (
    <form className={cx('form-wrap')} onSubmit={handleSubmit(sendEmail)} ref={form}>
      <div className={cx('form-wrap__title')}>Заполните форму</div>
      <div className={cx('field')}>
        <div className={cx('field__title')}>Ваше Имя:</div>
        <div>
          <input
            name="from_name"
            {...register('from_name', { required: 'Поле, обязательное для заполнения' })}
            className={cx('field__input')}
          />
        </div>
      </div>
      <div className={cx('field')}>
        {errors.from_name && <p className={cx('field__required')}>{errors.from_name.message}</p>}
        <div className={cx('field__title')}>Телефон:</div>
        <input
          name="telephone"
          {...register('telephone',
            {
              required: 'Поле, обязательное для заполнения',
              pattern: {
                value: /^\+?[0-9]{6,14}$/,
                message:
                  'Некорректные номер',
              },
            })}
          className={cx('field__input')}

        />
      </div>
      {errors.telephone && <p className={cx('field__required')}>{errors.telephone.message}</p>}
      {!hidden && (
      <button type="submit">
        Оставить заявку на звонок
        {isLoading && <div />}
      </button>
      )}
      {success && (
      <button type="button" disabled="true">
        Заявка успешно отправлена!
        {isLoading && <div />}
      </button>
      )}
      {failure && (
      <button type="button" disabled="true">
        Произошла ошибка.
        {isLoading && <div />}
      </button>
      )}
    </form>
  );
};

export default Form;
