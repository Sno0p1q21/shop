import React, { useState } from 'react';
import cn from 'classnames/bind';
import { FiAlignJustify, FiXCircle } from 'react-icons/fi';
import AppLink from '../../UI/AppLink';
import style from './style.scss';

const cx = cn.bind(style);

const MobileNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const burgerIcon = (
    <FiAlignJustify
      onClick={() => setOpen(!isOpen)}
      className={cx('mobile-navigation__burger')}
      size="30px"
    />
  );

  const closeIcon = (
    <FiXCircle
      onClick={() => setOpen(!isOpen)}
      className={cx('mobile-navigation__burger')}
      size="30px"
    />
  );

  return (
    <>
      <div className={cx('mobile-navigation')}>
        { isOpen ? closeIcon : burgerIcon }
        {
          isOpen && (
          <ul className={cx('mobile-navigation__list')}>
            <AppLink click={() => setOpen(false)} to="#">Главная</AppLink>
            <AppLink click={() => setOpen(false)} to="#about">О компании</AppLink>
            <AppLink click={() => setOpen(false)} to="#assortments">Каталог</AppLink>
            <AppLink click={() => setOpen(false)} to="#contacts">Контакты</AppLink>
          </ul>
          )
      }
      </div>
    </>
  );
};

export default MobileNavigation;
