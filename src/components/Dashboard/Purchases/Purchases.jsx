import './Purchases.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PurchaseTable from './PurchaseTable';

const Purchases = () => {
  const user = useSelector((state) => state.auth.user);
  const [purchases, setPurchases] = useState([]);
  const testingBool = true;

  if (testingBool === true) {
    const getPurchases = () => {
      fetch(`/api/orders/ordersByUser/${user.customerID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((data) => data.json())
        .then((parsedData) => setPurchases(parsedData));
    };

    useEffect(() => {
      getPurchases();
    }, [user]);
  }

  /* eslint-disable */

  console.log(purchases)

  return (
    <div id="purchases">
      <h1>Purchased History</h1>
      <PurchaseTable purchases={purchases}/>
      <div>
      </div>
    </div>
  );
};

export default Purchases;
