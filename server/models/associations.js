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
    session,
    chat,
    vehicle,
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

  product.belongsTo(vehicle, {
    foreignKey: {
      name: 'vehicleID',
    },
  });

  /* Session */
  session.belongsTo(customer, {
    foreignKey: {
      name: 'customerID',
    },
  });

  /* Shipper */

  /* Supplier */

  /* Chat */
  chat.belongsTo(customer, {
    foreignKey: {
      name: 'customerID',
    },
  });

  chat.belongsTo(supplier, {
    foreignKey: {
      name: 'supplierID',
    },
  });
};

module.exports = { applyAssociations };
