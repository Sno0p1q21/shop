/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import style from './style.scss';

const cx = cn.bind(style);

const AppLink = ({
  to, children, secondary, click,
}) => (
  <Link
    className={cx('app-link', `${secondary ? 'app-link--secondary' : ''}`)}
    to={to}
    onClick={click}
    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
  >
    {children}
  </Link>
);

AppLink.defaultProps = {
  secondary: false,
  click: () => ({}),
};

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
  secondary: PropTypes.bool,
  click: PropTypes.func,
};

export default AppLink;
