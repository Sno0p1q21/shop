import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import Product from './Product';
import img from './assets/brick.jpg';

import style from './style.scss';

const cx = cn.bind(style);
const FilterSection = () => (
  <Container maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="Большой ассортимент"
      description="В наличии или под заказ"
    />
    <div className={cx('content-wrap')}>
      <div className={cx('content-wrap__filter')}>
        <ul>
          <li>Трубы канализационные</li>
          <li>ППР трубы и фитинги</li>
          <li>Трубы водоснабжения</li>
          <li>Стальные трубы и фитинги</li>
          <li>Детали трубопроводов</li>
        </ul>
      </div>
      <div className={cx('content-wrap__products')}>
        <Product img={img} />
        <Product img={img} />
        <Product img={img} />
        <Product img={img} />
      </div>
      <div />
    </div>
    <button className={cx('filter-section-button')} type="button">
      <a href="/list.docx" download="list.docx">Полный перечень</a>
    </button>
  </Container>
);

export default FilterSection;
