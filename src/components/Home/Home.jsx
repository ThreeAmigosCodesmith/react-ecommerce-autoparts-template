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
            id="0000000000"
            title="OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight"
            price={96.98}
            image="https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg"
            condition="Good"
            location={
              { borough: 'Queens' }
            }
          />
          <Product
            id="0000000001"
            title="2016 2017 2018 2019 2020 Chevrolet Camaro ZL1 Front Bumper Cover OEM"
            price={445.98}
            image="https://i.ebayimg.com/images/g/iIUAAOSwo0RfDJJq/s-l300.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            id="0000000002"
            title="2nd Row Seat 2015-2019 Chevy Chevrolet Tahoe Yukon Cadillac Escalade"
            price={246.98}
            image="https://i.ebayimg.com/thumbs/images/g/Wg8AAOSwp8Jcp5~o/s-l300.jpg"
            condition="Excellent"
            location={
              { borough: 'Bronx' }
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="0000000003"
            title="2014-2018 GMC Sierra Denali 1500 Engine Motor 6.2L Vin J 8th Digit Option L86"
            price={650.93}
            image="https://i.ebayimg.com/images/g/s8oAAOSw5ClXxKIF/s-l300.jpg"
            condition="Good"
            location={
              { borough: 'Bronx' }
            }
          />
          <Product
            id="0000000004"
            title="2017-2018 Hyundai Elantra Left Driver Side Door Mirror 87610F3050S20"
            price={378.99}
            image="https://i.ebayimg.com/images/g/7tYAAOSwIGlekGdz/s-l640.jpg"
            condition="Good"
            location={
              { borough: 'Queens' }
            }
          />
          <Product
            id="0000000005"
            title="2014 Volkswaggen Jetta Hood"
            price={180.75}
            image="https://store.nurburgringautoparts.com/media/catalog/product/153/720/153720_014.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="0000000006"
            title="2014 Porsche Cayenne Display Screen Navigation GPS Radio"
            price={699.98}
            image="https://d27z5xsz0y1qnm.cloudfront.net/benzeen/large/436429_01.jpg"
            condition="Good"
            location={
              { borough: 'Queens' }
            }
          />
          <Product
            id="0000000007"
            title="2016 2017 2018 2019 2020 Honda Civic Sedan Front Left Side Driver Door OEM"
            price={389.99}
            image="https://i.ebayimg.com/thumbs/images/g/EOAAAOSw3RlgKZSR/s-l300.jpg"
            condition="Good"
            location={
              { borough: 'Brooklyn' }
            }
          />
          <Product
            id="0000000008"
            title="2017 2018 2019 Mini Cooper Countryman Left Driver LED Headlight"
            price={273.95}
            image="https://i.ebayimg.com/images/g/dtoAAOSwsBtaN8UQ/s-l640.jpg"
            condition="Good"
            location={
              { borough: 'Staten Island' }
            }
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
