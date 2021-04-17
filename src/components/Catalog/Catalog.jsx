/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Chip,
} from '@material-ui/core';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './Catalog.css';
import Product from '../Product/Product';
import * as actions from '../../redux/actions/actionTypes';

const styles = {
  formLabel: {
    fontWeight: 'bold',
    color: 'black',
    padding: '2rem 0 0',
    textAlign: 'left',
  },
  conditionButton: {
    color: '#3b945e',
  },
  input: {
    border: '1px solid gray',
    fontSize: '.8rem',
    padding: '.6rem',
    marginBottom: '1rem',
  },
  chip: {
    padding: '1.2rem',
    background: '#3b945e',
    color: '#3b945e',
  },
};

function Catalog() {
  const products = useSelector((state) => state.products.catalog);
  const dispatch = useDispatch();
  // const conditions = ['Good', 'Bad', 'Decent', 'New'];
  // const colors = ['Red', 'Blue', 'Green', 'Purple', 'Orange'];
  const [searchText, setSearchText] = useState('');
  const [conditions, setConditions] = useState({
    Good: true,
    Bad: true,
    Decent: true,
    New: true,
  });
  const [colors, setColors] = useState({
    Red: true,
    Blue: true,
    Green: true,
    Purple: true,
    orange: true,
  });
  const [checkbox, setCheckbox] = useState({
    Good: true,
    Bad: true,
    Decent: true,
    New: true,
    Red: true,
    Blue: true,
    Green: true,
    Purple: true,
    orange: true,
  });

  useEffect(() => {
    async function getAllProducts() {
      const res = await axios.get('/api/products');
      if (res.status === 200) {
        const allProducts = res.data.map((el) => ({
          id: el.productId,
          title: el.productName,
          price: el.price,
          images: el.images,
          location: 'Queens',
          colors: ['Red', 'Blue', 'Green', 'Purple', 'Orange'],
          condition: el.condition,
          supplierID: el.supplierID,
        }));

        dispatch({ type: actions.LOAD_CATALOG, payload: allProducts });
      }
    }
    getAllProducts();
  }, []);

  const handleCondition = (e) => {
    const { target: { checked, name } } = e;
    setConditions({ ...conditions, [name]: checked });
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    // setSearchText(e.target.value);
  };

  const handleColor = (e) => {
    const { target: { checked, name } } = e;
    console.log(checked, name);
  };

  return (
    <div className="homeCatalog">
      <div className="title__container">
        <h2 className="catalog_title">Catalog</h2>
        <h2>Items near you:</h2>
      </div>
      <div className="catalog__container">
        <div className="filter__features">
          <input type="text" placeholder="Enter search here" style={styles.input} onKeyUp={handleSearch} />
          {searchText ? <Chip label={searchText} variant="outlined" /> : null}
          <div className="checkbox__options">
            <FormControl component="fieldset">
              <FormLabel style={styles.formLabel} component="legend">Condition</FormLabel>
              <FormGroup>
                {Object.keys(conditions).map((condition) => (
                  <FormControlLabel
                    key={uuidv4()}
                    control={(
                      <Checkbox
                        checked={conditions[condition]}
                        onChange={handleCondition}
                        name={condition}
                        style={styles.conditionButton}
                      />
                      )}
                    label={condition}
                  />
                ))}
              </FormGroup>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel style={styles.formLabel} component="legend">Color</FormLabel>
              <FormGroup>
                {Object.keys(colors).map((color) => (
                  <FormControlLabel
                    key={uuidv4()}
                    control={(
                      <Checkbox
                        checked={colors[color]}
                        onChange={handleColor}
                        name={color}
                        style={{ color }}
                      />
                      )}
                    label={color}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>
        </div>

        <div className="home_productsNearby">
          {products.length > 0 ? products.map((item) => (
            <div style={{ width: '450px' }} key={uuidv4()}>
              <Product
                id={item.id}
                title={item.title}
                price={item.price}
                make={item.make}
                year={item.year}
                images={item.images}
                condition={item.condition}
                description={item.description}
                location={item.location}
              />
            </div>
          )) : 'No products found'}
        </div>
      </div>
    </div>
  );
}
export default Catalog;
