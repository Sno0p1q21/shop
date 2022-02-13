import React from 'react';
import cn from 'classnames/bind';
import AppLink from '../../UI/AppLink';

import style from './style.scss';

const cx = cn.bind(style);

const Footer = () => (
  <div className={cx('footer-wrap')}>
    <div className={cx('footer-wrap__menu')}>
      <span className={cx('footer-wrap__title')}>Меню</span>
      <span className={cx('footer-wrap__item')}><AppLink secondary to="#main">Главная</AppLink></span>
      <span className={cx('footer-wrap__item')}><AppLink secondary to="#about">О компании</AppLink></span>
      <span className={cx('footer-wrap__item')}><AppLink secondary to="#advantages">Преимущества</AppLink></span>
      <span className={cx('footer-wrap__item')}><AppLink secondary to="#assortments">Каталог</AppLink></span>
    </div>
    <div className={cx('footer-wrap__contacts')}>
      <span className={cx('footer-wrap__title')}><AppLink secondary to="#contacts">Связь с нами</AppLink></span>
      <span className={cx('footer-wrap__item')}>Телефон: +7 8422 58 97 81</span>
      <span className={cx('footer-wrap__item')}>
        Mail:
        {' '}
        <a href="mailto:stroytandem73@bk.ru" style={{ color: '#395ACB' }}>stroytandem73@bk.ru</a>
      </span>
    </div>
  </div>
);

export default Footer;
