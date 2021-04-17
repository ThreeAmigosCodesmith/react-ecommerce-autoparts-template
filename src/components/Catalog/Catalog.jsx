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
    fill: '#3b945e',
  },
};

function Catalog() {
  const products = useSelector((state) => state.products.catalog);
  console.log('loaded', products);
  const dispatch = useDispatch();
  const conditions = ['Good', 'Bad', 'Decent', 'New'];
  const colors = ['Red', 'Blue', 'Green', 'Purple', 'Orange'];
  const [searchText, setSearchText] = useState('');
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
          condition: el.condition,
          supplierID: el.supplierID,
        }));

        dispatch({ type: actions.LOAD_CATALOG, payload: allProducts });
      }
    }
    getAllProducts();
  }, []);

  const handleChange = (e) => {
    const { target: { checked, name } } = e;
    setCheckbox({ ...checkbox, [name]: checked });
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
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
                {conditions.map((condition) => (
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={checkbox[condition]}
                        onChange={handleChange}
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
                {colors.map((color) => (
                  <FormControlLabel
                    control={(
                      <Checkbox
                        checked={checkbox[color]}
                        onChange={handleChange}
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
            <div style={{ width: '450px' }}>
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
          )) : fallback}
        </div>
      </div>
    </div>
  );
}
export default Catalog;

const fallback = (
  <>
    <div className="home__row">
      <Product
        id="0000000000"
        title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
        price={96.98}
        images={['https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg']}
        condition="Good"
        location="Queens"
        supplierID="12345"
      />
      <Product
        id="0000000001"
        title="2016 2017 2018 2019 2020 Chevrolet Camaro ZL1 Front Bumper Cover OEM"
        price={445.98}
        images={['https://i.ebayimg.com/images/g/iIUAAOSwo0RfDJJq/s-l300.jpg']}
        condition="Good"
        location="Brooklyn"
        supplierID="12345"
      />
      <Product
        id="0000000002"
        title="2nd Row Seat 2015-2019 Chevy Chevrolet Tahoe Yukon Cadillac Escalade"
        price={246.98}
        images={['https://i.ebayimg.com/thumbs/images/g/Wg8AAOSwp8Jcp5~o/s-l300.jpg']}
        condition="Excellent"
        location="Bronx"
        supplierID="12345"
      />
    </div>
    <div className="home__row">
      <Product
        id="0000000003"
        title="2014-2018 GMC Sierra Denali 1500 Engine Motor 6.2L Vin J 8th Digit Option L86"
        price={650.93}
        images={['https://i.ebayimg.com/images/g/s8oAAOSw5ClXxKIF/s-l300.jpg']}
        condition="Good"
        location="Bronx"
        supplierID="12345"
      />
      <Product
        id="0000000004"
        title="2017-2018 Hyundai Elantra Left Driver Side Door Mirror 87610F3050S20"
        price={378.99}
        images={['https://i.ebayimg.com/images/g/7tYAAOSwIGlekGdz/s-l640.jpg']}
        condition="Good"
        location="Queens"
        supplierID="12345"
      />
      <Product
        id="0000000005"
        title="2014 Volkswaggen Jetta Hood"
        price={180.75}
        images={['https://store.nurburgringautoparts.com/media/catalog/product/153/720/153720_04.jpg']}
        condition="Good"
        location="Brooklyn"
        supplierID="12345"
      />
    </div>
    <div className="home__row">
      <Product
        id="0000000006"
        title="2014 Porsche Cayenne Display Screen Navigation GPS Radio"
        price={699.98}
        images={['https://d27z5xsz0y1qnm.cloudfront.net/benzeen/large/436429_01.jpg']}
        condition="Good"
        location="Queens"
        supplierID="12345"
      />
      <Product
        id="0000000007"
        title="2016 2017 2018 2019 2020 Honda Civic Sedan Front Left Side Driver Door OEM"
        price={389.99}
        images={['https://i.ebayimg.com/thumbs/images/g/EOAAAOSw3RlgKZSR/s-l300.jpg']}
        condition="Good"
        location="Brooklyn"
        supplierID="12345"
      />
      <Product
        id="0000000008"
        title="2017 2018 2019 Mini Cooper Countryman Left Driver LED Headlight"
        price={273.95}
        images={['https://i.ebayimg.com/images/g/dtoAAOSwsBtaN8UQ/s-l640.jpg']}
        condition="Good"
        location="Staten Island"
        supplierID="12345"
      />
    </div>
  </>
);
