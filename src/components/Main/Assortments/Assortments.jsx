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
          <div className="info-card">
            <img src={sewage} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Трубы канализационные</div>
            <div className="hidden-card">
              <a href="/docs/sewerage/Канализация и фитинги.docx" download="Канализация и фитинги.docx">Канализация и фитинги</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
            <img src={ppr} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>ППР трубы и фитинги</div>
            <div className="hidden-card">
              <a href="/docs/polypropylene/Отопление.docx" download="Отопление.docx">Отопление</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
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
            <img src={preview3} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Стальные трубы и фитинги</div>
            <div className="hidden-card">
              <a href="/docs/steel/Газоснабжение.docx" download="Газоснабжение.docx">Газоснабжение</a>
            </div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
            <img src={details} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>Детали трубопроводов</div>
          </div>
        </section>
        <section className={cx('assortments-list__item')}>
          <div className="info-card">
            <img src={another} alt="brick" width="335px" height="235px" />
            <div className={cx('assortments-list__button-card')}>И многое другое</div>
            <div className="hidden-card">
              <a href="/docs/other/Крепежи.docx" download="Крепежи.docx">Крепежи</a>
            </div>
          </div>
        </section>
      </div>

      <button className={cx('assortments-list__button')} type="button">
        <a href="/docs/list.docx" download="list.docx">Полный перечень</a>
      </button>
    </div>
  </Container>
);

export default Assortments;
