import React from 'react';
import MaterialTable from 'material-table';
import './PurchaseTable.css';

function PurchaseTable() {
  const data = [
    {
      purchasedDate: '6/5/2020',
      title: 'Front Bumper',
      make: 'Bmw',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '3/02/2021',
      title: 'Front Bumper',
      make: 'Toyota',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '2/3/2021',
      title: 'Front Bumper',
      make: 'Lexus',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '4/4/2021',
      title: 'Front Bumper',
      make: 'Nissan',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '5/4/2021',
      title: 'Front Bumper',
      make: 'Toyota',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '1/1/2021',
      title: 'Front Bumper',
      make: 'Toyota',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '7/12/2021',
      title: 'Front Bumper',
      make: 'Bmw',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
    {
      purchasedDate: '9/1/2021',
      title: 'Front Bumper',
      make: 'Lexus',
      model: '5 series',
      borough: 'brooklyn',
      year: 2019,
      imageLink: 'no link',
      description: 'used',
      price: 1300,
      condition: 'good',
      sellerID: 123,
    },
  ];
  const columns = [
    {
      title: 'Purchase Date',
      field: 'purchasedDate',
    },
    {
      title: 'Make',
      field: 'make',
    },
    {
      title: 'Model',
      field: 'model',
    },
    {
      title: 'Borough',
      field: 'borough',
    },
    {
      title: 'Year',
      field: 'year',
    },
    {
      title: 'Image Link',
      field: 'imageLink',
    },
    {
      title: 'Description',
      field: 'description',
    },
    {
      title: 'Price',
      field: 'price',
    },
    {
      title: 'Condition',
      field: 'condition',
    },
    {
      title: 'SellerId',
      field: 'sellerID',
    },
  ];

  return (
    <div className="purchaseParent">
      <MaterialTable title="Purchase History" data={data} columns={columns} />
    </div>
  );
}

export default PurchaseTable;
