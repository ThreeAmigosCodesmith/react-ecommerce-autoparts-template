/* eslint-disable */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/actionTypes'
import Product from '../Product/Product';
import './Home.css';
import Banner from '../../banner.jpg';
import Chat from '../Chat/Chat2';

const Home = () => {
  const products = useSelector((state) => state.products.homePage);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHomePageProducts() {
      console.log('fetching products')
      const res = await axios.get('/api/products/homepage');
      if(res.status === 200 && res.data !== "") {
        console.log(res.data)
        const allProducts = res.data.map((el, idx) => ({
          id: el.productId, 
          title: el.productName, 
          price: el.price,
          images: el.images, 
          location: 'Queens',  
          condition: el.condition, 
          supplierID: el.supplierID,
        }))

        dispatch({ type: actions.LOAD_HOME_PAGE, payload: allProducts });
      }
    }
    getHomePageProducts();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Banner} alt="" />
        <div className="home__productsNearby">
          <h2>Items near you:</h2>
          {/* {render products based on location} */}
          <div className="home__products">
            {products.length > 0 ? products.map((product) => (
              <div style={{ width: '450px'}}>
                <Product 
                  id={product.id} 
                  title={product.title} 
                  price={product.price} 
                  images={product.images} 
                  sliderLength = {product.images.length}
                  location={product.location}
                  condition={product.condition} 
                  supplierID={product.supplierID} /> 
              </div>)): fallback}
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
};

export default Home;


const fallback = (
  <>
    <div className="home__row">
    <Product
      id="0000000000"
      title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
      price={96.98}
      images={["https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"]}
      condition="Good"
      location= 'Queens'
      supplierID="12345"
    />
    <Product
      id="0000000001"
      title="2016 2017 2018 2019 2020 Chevrolet Camaro ZL1 Front Bumper Cover OEM"
      price={445.98}
      images={["https://i.ebayimg.com/images/g/iIUAAOSwo0RfDJJq/s-l300.jpg"]}
      condition="Good"
      location= 'Brooklyn'
      supplierID="12345"
    />
    <Product
      id="0000000002"
      title="2nd Row Seat 2015-2019 Chevy Chevrolet Tahoe Yukon Cadillac Escalade"
      price={246.98}
      images={["https://i.ebayimg.com/thumbs/images/g/Wg8AAOSwp8Jcp5~o/s-l300.jpg"]}
      condition="Excellent"
      location= 'Bronx'
      supplierID="12345"
    />
  </div>
  <div className="home__row">
    <Product
      id="0000000003"
      title="2014-2018 GMC Sierra Denali 1500 Engine Motor 6.2L Vin J 8th Digit Option L86"
      price={650.93}
      images={["https://i.ebayimg.com/images/g/s8oAAOSw5ClXxKIF/s-l300.jpg"]}
      condition="Good"
      location= 'Bronx'
      supplierID="12345"
    />
    <Product
      id="0000000004"
      title="2017-2018 Hyundai Elantra Left Driver Side Door Mirror 87610F3050S20"
      price={378.99}
      images={["https://i.ebayimg.com/images/g/7tYAAOSwIGlekGdz/s-l640.jpg"]}
      condition="Good"
      location= 'Queens'
      supplierID="12345"
    />
    <Product
      id="0000000005"
      title="2014 Volkswaggen Jetta Hood"
      price={180.75}
      images={["https://store.nurburgringautoparts.com/media/catalog/product/153/720/153720_014.jpg"]}
      condition="Good"
      location= 'Brooklyn'
      supplierID="12345"
    />
  </div>
  <div className="home__row">
    <Product
      id="0000000006"
      title="2014 Porsche Cayenne Display Screen Navigation GPS Radio"
      price={699.98}
      images={["https://d27z5xsz0y1qnm.cloudfront.net/benzeen/large/436429_01.jpg"]}
      condition="Good"
      location= 'Queens'
      supplierID="12345"
    />
    <Product
      id="0000000007"
      title="2016 2017 2018 2019 2020 Honda Civic Sedan Front Left Side Driver Door OEM"
      price={389.99}
      images={["https://i.ebayimg.com/thumbs/images/g/EOAAAOSw3RlgKZSR/s-l300.jpg"]}
      condition="Good"
      location= 'Brooklyn'
      supplierID="12345"
    />
    <Product
      id="0000000008"
      title="2017 2018 2019 Mini Cooper Countryman Left Driver LED Headlight"
      price={273.95}
      images={["https://i.ebayimg.com/images/g/dtoAAOSwsBtaN8UQ/s-l640.jpg"]}
      condition="Good"
      location= 'Staten Island'
      supplierID="12345"
    /> 
    </div>
            </>
)
