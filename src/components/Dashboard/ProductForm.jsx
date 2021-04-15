/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import { axios } from 'axios';
import './ProductForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { CLEAR_ALL_IMAGES } from '../../redux/actions/actionTypes';
import UploadImages from './UploadImages';
// import apiHeaders from '../../apiKeys';
import makes from '../../vehicles';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0.00);
  const [description, setDescription] = useState('');
  const [make, setMake] = useState('none');
  const [model, setModel] = useState('none');
  // const [models, setModels] = useState([]);
  const [condition, setCondition] = useState('none');
  const [year, setYear] = useState('none');
  const [color, setColor] = useState('none');
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state) => state.auth.user);
  const images = useSelector((state) => state.image.imageUrls);
  const dispatch = useDispatch();

  const submitProduct = (event) => {
    event.preventDefault();
    fetch('/api/products/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        title,
        price,
        description,
        make,
        model,
        condition,
        color,
        year,
        sellerID: user.id,
        images,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setTitle('');
        setPrice(0.00);
        setDescription('');
        setMake('none');
        setModel('none');
        setCondition('none');
        setColor('');
        setYear('none');
        dispatch({
          type: CLEAR_ALL_IMAGES,
        });
      }
    });
  };

  const clearFields = () => {
    // reset products state here
    setTitle('');
    setPrice(0.00);
    setDescription('');
    setMake('none');
    setModel('none');
    setCondition('none');
    setColor('');
    setYear('none');
    dispatch({
      type: CLEAR_ALL_IMAGES,
    });
  };

  const getMakes = () => {
    const carMakes = [];
    makes.forEach((brand) => carMakes.push(<option value={brand}>{brand}</option>));
    return carMakes;
  };
  // export const InitialState = {
  //   title: '',
  //   year: '',
  //   make: '',
  //   model: [],
  //   sku: '',
  //   productName: '',
  //   productDescription: '',
  //   color: '',
  //   discount: '',
  //   unitsInStock: 0,
  //   unitsOnOrder: 0,
  //   productAvailable: false,
  //   discountAvailable: false,
  //   images: [],
  //   note: '',
  //   price: '',
  // };
  // useEffect(() => {
  //   const carModels = [];
  //   fetch(`https://parseapi.back4app.com/classes/Carmodels_Car_Model_List_${make}?order=Model&keys=Model,Year`,
  //     {
  //       headers: apiHeaders,
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data.results.forEach((car) => {
  //         carModels.push(<option value={car.Model}>{car.Model}</option>);
  //       });
  //       const filteredModels = new Set(carModels);
  //       setModels(filteredModels);
  //     })
  //     .catch((error) => { throw error; });
  // }, [make]);

  // carChoices.carYears.push(<option value={car.Year}>{car.Year}</option>);
  return (
    <div className="productForm__container">
      <div className="productForm">
        <h2>New Product Listing</h2>

        <form>
          <div className="productForm__main">
            <div className="productForm__main1">
              <label className="form__title__cont" htmlFor="form__title">
                <h3>Product Title:</h3>
                <input name="title" type="text" id="form__title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>

              <label className="form__price__cont" htmlFor="form__price">
                <h3>Price:</h3>
                <input name="price" type="number" id="form__price" value={price} onChange={(e) => setPrice(e.target.value)} />
              </label>
            </div>

            <div className="productForm__main2">
              <label className="form__description__cont" htmlFor="form__description">
                <h3>Description</h3>
                <textarea rows="10" name="description" type="text" id="form__description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </label>
            </div>

          </div>

          <div className="productForm__details__cont">
            <h3>Product Details</h3>
            <div className="productForm__details">
              <label htmlFor="form__manufacturer">
                <h4>Make/Manufacturer</h4>
                <select name="make" id="form__manufacturer" value={make} onChange={(e) => setMake(e.target.value)}>
                  <option value="none" selected disabled>None</option>
                  <option value="multiple">Multiple</option>
                  {getMakes()}
                </select>
              </label>
            </div>

            <div className="productForm__details">
              <label htmlFor="form__manufacturer">
                <h4>Model</h4>
                <select name="model" id="form__manufacturer" value={model} onChange={(e) => setModel(e.target.value)}>
                  <option value="none" selected disabled>None</option>
                  <option value="Pinto">Pinto</option>
                  <option value="Prius">Prius</option>
                  <option value="multiple">Multiple</option>
                  {/* {models} */}
                </select>
              </label>
            </div>

            <div className="productForm__details">
              <label htmlFor="form__year">
                <h4>Year</h4>
                <select name="year" id="form__year" value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="none" selected disabled>Select</option>
                  <option value="2018">2018</option>
                  {/* {getModels().carYears} */}
                </select>
              </label>
            </div>

            <label htmlFor="form__condition">
              <h4>Condition</h4>
              <select name="condition" id="form__condition" value={condition} onChange={(e) => setCondition(e.target.value)}>
                <option value="none" selected disabled>Select</option>
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Salvage">Salvage</option>
              </select>
            </label>
            <UploadImages />
          </div>
          <div className="form__buttons">
            <Button color="primary" variant="contained" type="button" onClick={submitProduct} className="button__createListing">Create Listing</Button>
            <Button variant="contained" type="button" onClick={clearFields} className="button__clearListing">Clear All Fields</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
