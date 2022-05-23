import React from 'react';
import Container from '@material-ui/core/Container';
import cn from 'classnames/bind';
import AppLink from '../../UI/AppLink';
import style from './style.scss';

const cx = cn.bind(style);

const Navigation = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <div className={cx('navigation')}>
      <img className={cx('navigation__image')} src="/logo1.png" alt="logo" width="250px" height="50px" />
      <div className={cx('navigation__address')}>
        <span>г. Ульяновск, ул. Локомотивная, д. 140А</span>
        <span>тел. (8422)58-97-81</span>
        <span>stroytandem73@bk.ru</span>
      </div>
      <ul className={cx('navigation__list')}>
        <AppLink to="#">Главная</AppLink>
        <AppLink to="#about">О компании</AppLink>
        <AppLink to="#assortments">Каталог</AppLink>
        <AppLink to="#contacts">Контакты</AppLink>
      </ul>
    </div>
  </Container>
);

export default Navigation;
