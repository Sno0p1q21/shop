import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import style from './style.scss';

const cx = cn.bind(style);

const Product = ({ img, description }) => (
  <div className={cx('product-wrap')}>
    <img src={img} width={220} height={220} alt="" />
    <span className={cx('product-wrap__description')}>{description}</span>
  </div>
);

Product.propTypes = {
  img: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
