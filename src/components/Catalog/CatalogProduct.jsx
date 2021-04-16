import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const CatalogProduct = ({
  id,
  title,
  price,
  make,
  year,
  condition,
  description,
}) => (
  <div className="catalogProduct">
    <Link to={`/catalog${id}`}>
      <h4 className="catalogProduct__title">{title}</h4>
    </Link>
    <small>$</small>
    <strong>{price}</strong>
    <p>{make}</p>
    <p>{moment(year).format('YYYY')}</p>
    <p className="catalogProduct__description">{description}</p>
    <p>{condition}</p>
  </div>
);

export default CatalogProduct;

CatalogProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
};
