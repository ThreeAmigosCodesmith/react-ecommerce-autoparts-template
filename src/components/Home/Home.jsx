import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => (
  <div className="home">
    <div className="home__container">
      <div className="home__query">
        <h2>Query will go here</h2>
      </div>
      <div className="home__productsNearby">
        <h2>Items near you:</h2>
        <div className="home__row">
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
        </div>
        <div className="home__row">
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
        </div>
        <div className="home__row">
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
