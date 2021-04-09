const applyAssociations = (sequelize) => {
  const {
    category,
    customer,
    orderDetail,
    order,
    payment,
    product,
    shipper,
    supplier,
  } = sequelize.models;

  /* Category */

  /* Customer */

  /* Order Detail */
  orderDetail.belongsTo(order, {
    foreignKey: {
      name: 'orderID',
      targetKey: 'orderID',
    },
  });

  orderDetail.belongsTo(order, {
    foreignKey: {
      name: 'orderNumber',
      targetKey: 'orderNumber',
    },
  });

  orderDetail.belongsTo(product, {
    foreignKey: {
      name: 'productID',
      targetKey: 'productID',
    },
  });

  /* Order */
  order.belongsTo(customer, {
    foreignKey: {
      name: 'customerID',
    },
  });

  order.belongsTo(payment, {
    foreignKey: {
      name: 'paymentID',
    },
  });

  order.belongsTo(shipper, {
    foreignKey: {
      name: 'shipperID',
    },
  });

  /* Payment */

  /* Product */

  product.belongsTo(category, {
    foreignKey: {
      name: 'categoryID',
    },
  });

  product.belongsTo(supplier, {
    foreignKey: {
      name: 'supplierID',
    },
  });
  /* Session */

  /* Shipper */

  /* Supplier */

  // supplier.hasMany(product);
};

module.exports = { applyAssociations };
