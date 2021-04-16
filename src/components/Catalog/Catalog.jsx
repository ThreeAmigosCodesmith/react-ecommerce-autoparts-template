import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './Catalog.css';
import CatalogProduct from './CatalogProduct';

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetch('/api/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json())
      .then((data) => setCatalog(data.products))
      // eslint-disable-next-line no-console
      .catch(() => setCatalog([]));
  }, []);

  return (
    <div className="catalog__container">
      <div className="catalog">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__productCont">
          {(catalog
            ? catalog.map((item) => (
              <CatalogProduct
                id={item.id}
                title={item.title}
                price={item.price}
                make={item.make}
                year={item.year}
                condition={item.condition}
                description={item.description}
                borough={item.borough}
                key={uuidv4()}
              />
            ))
            : 'No sellers near you!')}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
