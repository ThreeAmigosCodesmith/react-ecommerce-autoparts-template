import React from 'react';
import MaterialTable from 'material-table';
import './PurchaseTable.css';

function PurchaseTable() {
  const data = [
    {
      purchasedDate: '6/5/2020',
      title: 'Front Bumper',
      make: 'BMW',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '3/02/2021',
      title: 'Front Bumper',
      make: 'Toyota',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '2/3/2021',
      title: 'Front Bumper',
      make: 'Lexus',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '4/4/2021',
      title: 'Front Bumper',
      make: 'Nissan',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '5/4/2021',
      title: 'Front Bumper',
      make: 'Toyota',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '1/1/2021',
      title: 'Front Bumper',
      make: 'Toyota',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '7/12/2021',
      title: 'Front Bumper',
      make: 'BMW',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
    {
      purchasedDate: '9/1/2021',
      title: 'Front Bumper',
      make: 'Lexus',
      model: '5 Series',
      borough: 'Brooklyn',
      year: 2019,
      imageLink: '-',
      description: 'Used',
      price: 1300,
      condition: 'Good',
      sellerID: 'Son & Co.',
    },
  ];
  const columns = [
    {
      title: 'Date',
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
      title: 'Location',
      field: 'borough',
    },
    {
      title: 'Year',
      field: 'year',
    },
    {
      title: 'Image',
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
      title: 'Seller',
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
