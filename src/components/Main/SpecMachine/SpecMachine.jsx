import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';

import Title from '../../UI/Title';

import machine from './assets/machine.jpg';

import style from './style.scss';


const cx = cn.bind(style);

const Assortments = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="Продукция"
      description="Спецтехника"
    />
    <section className={cx('spec-machine')}>
      <div>
        Также в наличии у нас имеется большой автопарк со спецтехникой. Удобно и по приятным ценам!
      </div>
      <img src={machine} width="335px" height="235px" alt="machine" />
    </section>
  </Container>
);

export default Assortments;
