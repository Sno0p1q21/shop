/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import Product from './Product';

import style from './style.scss';

import list from './constants';

const cx = cn.bind(style);
const FilterSection = () => {
  const [selected, setSelected] = useState(1);
  return (
    <Container maxWidth="lg" style={{ background: '#fff' }}>
      <Title
        title="Большой ассортимент"
        description="В наличии или под заказ"
      />
      <div className={cx('content-wrap')}>
        <div className={cx('content-wrap__filter')}>
          <ul>
            <li onClick={() => setSelected(1)}>Трубы канализационные</li>
            <li onClick={() => setSelected(2)}>ППР трубы и фитинги</li>
            <li onClick={() => setSelected(3)}>Трубы водоснабжения</li>
            <li onClick={() => setSelected(4)}>Стальные трубы и фитинги</li>
            <li onClick={() => setSelected(5)}>Детали трубопроводов</li>
          </ul>
        </div>
        <div className={cx('content-wrap__products')}>
          {
            selected && (list[selected]
              .map(({ id, description, image }) => (
                <Product
                  key={id}
                  description={description}
                  img={image}
                />
              )))
          }
        </div>
        <div />
      </div>
      <button className={cx('filter-section-button')} type="button">
        <a href="/list.docx" download="list.docx">Полный перечень</a>
      </button>
    </Container>
  );
};

export default FilterSection;
