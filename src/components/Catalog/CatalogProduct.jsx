import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CatalogProduct = ({
  id,
  title,
  price,
  make,
  year,
  condition,
  borough,
}) => (
  <div className="catalogProduct">
    <Link to={`/catalog${id}`}>
      <h4>{title}</h4>
    </Link>
    <small>$</small>
    <strong>{price}</strong>
    <p>{make}</p>
    <p>{year}</p>
    <p>{condition}</p>
    <p>{borough}</p>
  </div>
);

export default CatalogProduct;

CatalogProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  borough: PropTypes.string.isRequired,
  location: PropTypes.shape({ borough: PropTypes.string.isRequired }).isRequired,
};
