import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';
import style from './style.scss';
import sewage from './assets/sewage.jpg';
import gas from './assets/gas.jpg';
import another from './assets/aa.jpg';
import preview6 from './assets/preview6.jpg';
import preview10 from './assets/preview10.jpeg';
import details from './assets/details.jpg';
import machine from './assets/machine.jpg';

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
          <div className="info-card info-card--margin">
            <img src={sewage} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Трубы канализационные</div>
            <div className="hidden-card">
              <a href="/docs/sewerage/Канализация и фитинги.docx" download="Канализация и фитинги.docx">Канализация и фитинги</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card info-card--margin">
            <img src={preview10} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Отопление и водоснабжение</div>
            <div className="hidden-card">
              <a href="/docs/polypropylene/Отопление.docx" download="Отопление.docx">Отопление</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card info-card--margin">
            <img src={preview6} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Трубы водоснабжения</div>
            <div className="hidden-card">
              <a href="/docs/water_supply/Трубы водоснабжения.docx" download="Трубы водоснабжения.docx">Трубы водоснабжения</a>
              <a href="/docs/water_supply/Фитинги литые.docx" download="Фитинги литые.docx">Фитинги литые</a>
              <a href="/docs/water_supply/Фитинги сварные.docx" download="Фитинги сварные.docx">Фитинги сварные</a>
              <a href="/docs/water_supply/Фитинги электросварные.docx" download="Фитинги электросварные.docx">Фитинги электросварные</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
            <img src={gas} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Трубы газоснабжения</div>
            <div className="hidden-card">
              <a href="/docs/steel/Газоснабжение.docx" download="Газоснабжение.docx">Газоснабжение</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
            <img src={details} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Детали трубопроводов</div>
            <div className="hidden-card">
              <a href="/docs/details/Детали трубопроводов.docx" download="Детали трубопроводов.docx">Детали</a>
              <a href="/docs/other/Крепежи.docx" download="Крепежи.docx">Крепежи</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
            <img src={machine} alt="brick" width="320px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Аренда спецтехники</div>
            <div className="hidden-card">
              <a href="/docs/other/Аренда спецтехники.docx" download="Аренда спецтехники.docx">Спецтехника</a>
            </div>
          </div>
        </section>
      </div>

      {/* <button className={cx('assortments-list__button')} type="button">
        <a href="/docs/list.docx" download="list.docx">Полный перечень</a>
      </button> */}
    </div>
  </Container>
);

export default Assortments;
