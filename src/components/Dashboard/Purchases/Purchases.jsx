import './Purchases.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PurchaseTable from "./PurchaseTable";

const Purchases = () => {
  const user = useSelector((state) => state.auth.user);
  const [purchases, setPurchases] = useState([]);
  const testingBool = false;

  if (testingBool === true) {
    const getPurchases = () => {
      fetch(`/api/ordersByUser/${user.id}`, {
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
    }, []);
  }

  return (
    <div id="purchases">
      <h1>Purchased History</h1>
      <PurchaseTable />
      <div>
        {purchases.map((purchase) => (
          <div className="purchasedItems">
            <p>{`Data: ${purchase.date}`}</p>
            <p>{`ProductId: ${purchase.productId}`}</p>
            <p>{`SellerId: ${purchase.sellerId}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
