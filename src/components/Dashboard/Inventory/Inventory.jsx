/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './Inventory.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import MaterialTable from 'material-table';
import InventoryChart from './InventoryChart';
import * as types from '../../../redux/actions/actionTypes';

// import PurchaseTable from "../Purchases/PurchaseTable";

const Inventory = () => {
  const supplierID = useSelector((state) => state?.auth?.user?.id);
  const inventory = useSelector((state) => state.products.inventory);
  const dispath = useDispatch();

  const getInventory = async () => {
    const res = await axios.get(`/api/products/ByUser/${supplierID}`);
    console.log(res.data);
    dispath({ type: types.ADD_INVENTORY, payload: res.data });
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div id="inventory">
      <h1>Inventory</h1>
      {/* <InventoryChart /> */}
      <div>
        <MaterialTable title="Inventory" columns={columns} data={inventory} />
      </div>
    </div>
  );
};

export default Inventory;

const columns = [
  {
    title: 'Product',
    field: 'productName',
  },
  {
    title: 'Condition',
    field: 'condition',
  },
  {
    title: 'Image',
    field: 'images',
    render: (row) => {
      const { images } = row;
      return <img src={images[0]} style={{ height: 150, width: 150 }} alt="Product" />;
    },
  },
  {
    title: 'Price',
    field: 'price',
  },
];
