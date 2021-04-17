import React from 'react';
import MaterialTable from 'material-table';
import './PurchaseTable.css';

const PurchaseTable = (props) => {
  /*eslint-disable*/

  const { purchases } = props;

  console.log(purchases);

  const columns = [
    {
      title: 'Purchase Date',
      field: 'orderDate',
    },
    {
      title: 'Order ID',
      field: 'orderID',
    },
    {
      title: 'Price ($ USD)',
      field: 'amount',
    },

  ];

  return (
    <div className="purchaseParent">
      <MaterialTable title="Purchase History" data={purchases} columns={columns} />
    </div>
  );
};

export default PurchaseTable;
