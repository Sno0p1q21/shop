import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import AppLink from '../../UI/AppLink';
import style from './style.scss';

const cx = cn.bind(style);

const Header = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <div className={cx('container')}>
      <span>
        г. Ульяновск, ул. Локомотивная, д. 140А, тел. (8422)58-97-81,
        stroytandem73@bk.ru
      </span>
      <ul className={cx('container__list')}>
        <AppLink to="#">Главная</AppLink>
        <AppLink to="#about">О компании</AppLink>
        <AppLink to="#assortments">Каталог</AppLink>
        <AppLink to="#contacts">Контакты</AppLink>
      </ul>
    </div>
  </Container>
);

export default Header;
