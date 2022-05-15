import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import style from './style.scss';
import sewage from './assets/sewage.jpg';
import preview3 from './assets/preview3.jpg';
import ppr from './assets/ppr.jpg';
import preview6 from './assets/preview6.jpg';
import another from './assets/another.jpg';
import details from './assets/details.jpg';

const cx = cn.bind(style);

const Assortments = () => (
  <Container id="assortments" maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="Продукция"
      description="В наличии или под заказ"
    />
    <div className={cx('assortments-list')}>
      <div className={cx('assortments-list__top')}>
        <section className={cx('assortments-list__item')}>
          <img src={sewage} alt="brick" width="335px" height="235px" />
          <div className={cx('assortments-list__button-card')}>Трубы канализационные</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={ppr} alt="brick" width="335px" height="235px" />
          <div className={cx('assortments-list__button-card')}>ППР трубы и фитинги</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={preview6} alt="brick" width="335px" height="235px" />
          <div className={cx('assortments-list__button-card')}>Трубы водоснабжения</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={preview3} alt="brick" width="335px" height="235px" />
          <div className={cx('assortments-list__button-card')}>Стальные трубы и фитинги</div>
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={details} alt="brick" width="335px" height="235px" />
          <div className={cx('assortments-list__button-card')}>Детали трубопроводов</div>
          {/* <div className={cx('info-card')}>
            <div>Фитинги </div>
            <div>Фитинги </div>
            <div>Фитинги </div>
          </div> */}
        </section>
        <section className={cx('assortments-list__item')}>
          <img src={another} alt="brick" width="335px" height="235px" />
          <div className={cx('assortments-list__button-card')}>И многое другое</div>
        </section>
      </div>
      <button className={cx('assortments-list__button')} type="button">
        <a href="/list.docx" download="list.docx">Полный перечень</a>
      </button>
    </div>
  </Container>
);

export default Assortments;
