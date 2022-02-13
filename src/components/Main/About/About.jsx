import React from 'react';
import cn from 'classnames/bind';
import Container from '@material-ui/core/Container';
import Title from '../../UI/Title';

import style from './style.scss';

const cx = cn.bind(style);

const About = () => (
  <Container id="about" maxWidth="lg" style={{ background: '#fff' }}>
    <Title
      title="С нами выгодно"
      description="О нас"
    />
    <div className={cx('about-container')}>
      &quot;Строй Тандем&quot; - еще молодая фирма,
      но уже успевшая себя зарекомендовать на таких больших строительных объектах,
      как гофрокартонный завод АО &quot;Архбум&quot; и имеющая множество крупных партнеров.
    </div>
  </Container>
);

export default About;
