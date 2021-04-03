import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './ProductForm.css';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0.00);
  const [borough, setBorough] = useState('none');
  const [description, setDescription] = useState('');
  const [make, setMake] = useState('none');
  const [condition, setCondition] = useState('none');
  const [year, setYear] = useState('none');

  const submitProduct = (event) => {
    event.preventDefault();
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        title,
        price,
        borough,
        description,
        make,
        condition,
        year,
        sellerID: Cookies.get('ssid'),
      }),
    }).then((res) => {
      if (res.status === 200) {
        setTitle('');
        setPrice(0.00);
        setBorough('none');
        setDescription('');
        setMake('none');
        setCondition('none');
        setYear('none');
      }
    });
  };

  const clearFields = () => {
    setTitle('');
    setPrice(0.00);
    setBorough('none');
    setDescription('');
    setMake('none');
    setCondition('none');
    setYear('none');
  };

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

              <label className="form__location__cont" htmlFor="form__location">
                <h3>Borough:</h3>
                <select name="borough" id="form__location" value={borough} onChange={(e) => setBorough(e.target.value)}>
                  <option value="none" selected disabled>Select</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Queens">Queens</option>
                  <option value="Staten Island">Staten Island</option>
                </select>
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
                  <option value="none" selected disabled>Select</option>
                  <option value="Ford">Ford</option>
                  <option value="Dodge">Dodge</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Honda">Honda</option>
                  <option value="Mini">Mini</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Porsche">Porsche</option>
                </select>
              </label>

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

              <label htmlFor="form__year">
                <h4>Year</h4>
                <select name="year" id="form__year" value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="none" selected disabled>Select</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                  <option value="1939">1939</option>
                  <option value="1938">1938</option>
                  <option value="1937">1937</option>
                  <option value="1936">1936</option>
                  <option value="1935">1935</option>
                  <option value="1934">1934</option>
                  <option value="1933">1933</option>
                  <option value="1932">1932</option>
                  <option value="1931">1931</option>
                  <option value="1930">1930</option>
                </select>
              </label>
            </div>

          </div>
          <div className="form__buttons">
            <button type="button" onClick={submitProduct} className="button__createListing">Create Listing</button>
            <button type="button" onClick={clearFields} className="button__clearListing">Clear All Fields</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
