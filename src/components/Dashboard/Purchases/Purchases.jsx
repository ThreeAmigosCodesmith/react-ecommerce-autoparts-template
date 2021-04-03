import './Purchases.css';
import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../StateProvider';

const Purchases = () => {
  const [{ user }] = useStateValue();
  const [purchases, setPurchases] = useState([]);

  const getPurchases = () => {
    fetch(`/api/ordersByUser/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json())
      .then((parsedData) => setPurchases(parsedData));
  };

  useEffect(() => {
    getPurchases();
  }, []);

  return (
    <div id="purchases">
      <h1>Purchases History</h1>
      <div>
        {
          purchases.map((purchase) => (
            <div className="purchasedItems">
              <p>{`Data: ${purchase.date}`}</p>
              <p>{`ProductId: ${purchase.productId}`}</p>
              <p>{`SellerId: ${purchase.sellerId}`}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Purchases;
