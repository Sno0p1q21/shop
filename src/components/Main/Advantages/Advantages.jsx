import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';

import style from './style.scss';

const cx = cn.bind(style);

const Advantages = () => (
  <Container id="advantages" maxWidth="lg" style={{ background: '#fff' }}>
    <div className={cx('catalog')} id="home">
      <div className={cx('catalog__requisites')}>
        <div />
        <ul className={cx('catalog__list')}>
          <li>
            <span>◼ </span>
            Высокое качество наших товаров позволяет нам почти не тратиться на рекламу,
            люди находят нас сами.
            Следовательно, сбереженные на рекламе средства &quot;облегчают&quot; стоимость продукции
          </li>
          <li>
            <span>◼ </span>
            Мы являемся дистрибьюторами компании &quot;Чебоксарский трубный завод&quot;,
            являющимся одним из лидеров отрасли
          </li>
          <li>
            <span>◼ </span>
            Продажа продукции только на прямую, минуя посредников
          </li>
          <li>
            <span>◼ </span>
            Мы еще не первые в своей отрасли, а потому нам приходится стараться больше других,
            чтобы доказать, что мы достойны быть первыми
          </li>
          <li>
            <span>◼ </span>
            Гарантируем надежную упаковку и быструю доставку
          </li>
        </ul>
      </div>
    </div>
  </Container>
);

export default Advantages;
