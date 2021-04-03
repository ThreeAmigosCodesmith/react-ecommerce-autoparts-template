import './Inventory.css';
import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../StateProvider';

const Inventory = () => {
  const [{ user }] = useStateValue();
  const [inventory, setInventory] = useState([]);

  const getInventory = () => {
    fetch(`/api/productsByUser/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json())
      .then((parsedData) => setInventory(parsedData));
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div id="inventory">
      <h1>Inventory</h1>
      <div>
        {
          inventory.map((item) => (
            <div className="inventoryItems">
              <p>{`title: ${item.title}`}</p>
              <p>{`make: ${item.make}`}</p>
              <p>{`model: ${item.model}`}</p>
              <p>{`borough: ${item.borough}`}</p>
              <p>{`year: ${item.year}`}</p>
              <p>{`description: ${item.description}`}</p>
              <p>{`price: ${item.price}`}</p>
              <p>{`condition: ${item.condition}`}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Inventory;
