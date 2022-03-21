import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import MapSection from './MapSection';

import style from './style.scss';

const cx = cn.bind(style);

const Contacts = () => (
  <Container id="contacts" maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="С нами выгодно"
      description="Как с нами связаться"
    />
    <div className={cx('contacts-wrap')}>
      <div className={cx('contacts-wrap__requisites')}>
        <span className={cx('contacts-wrap__requisites__title')}>Наши контакты</span>
        <ul className={cx('contacts-wrap__requisites__list')}>
          <li>
            <span>◼ </span>
            432012, г. Ульяновск, ул. Локомотивная, д. 140А
          </li>
          <li>
            <span>◼ </span>
            <a href="mailto:stroytandem73@bk.ru">stroytandem73@bk.ru</a>
          </li>
          <li>
            <span>◼ </span>
            Телефон: 8 8422 58 97 81
          </li>
          <li>
            <span>◼ </span>
            График работы: пн-пт 8.00-17.00
          </li>
        </ul>
      </div>
      <div className={cx('contacts-wrap__map')}>
        <MapSection />
      </div>
    </div>
  </Container>
);

export default Contacts;
