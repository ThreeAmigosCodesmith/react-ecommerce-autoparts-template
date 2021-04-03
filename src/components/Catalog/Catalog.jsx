import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import './Catalog.css';
import CatalogProduct from './CatalogProduct';

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    fetch('/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json())
      .then((data) => setCatalog(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="catalog__container">
      <div className="catalog">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__productCont">
          {catalog.map((item) => (
            <CatalogProduct
              id={item.id}
              title={item.title}
              price={item.price}
              make={item.make}
              year={item.year}
              condition={item.condition}
              borough={item.borough}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
