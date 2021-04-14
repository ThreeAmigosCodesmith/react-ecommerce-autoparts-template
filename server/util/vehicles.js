// /* eslint-disable no-console */
// const fs = require('fs');
// const fetch = require('node-fetch');

// const getVehicles = async () => {
//   // const where = encodeURIComponent(JSON.stringify({
//   //   Make: {
//   //     $exists: true,
//   //   },
//   //   Model: {
//   //     $exists: true,
//   //   },
//   // }));
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await fetch(
//       `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List_${make}?order=Model&Keys=Category&Model,Year`,
//       {
//         headers: {
// eslint-disable-next-line max-len
//           'X-Parse-Application-Id': 'Eq82CcOJuGw3dvaCXOOSIrMmUrYoTlEOgXHP7gKI', // This is your app's application id
// eslint-disable-next-line max-len
//           'X-Parse-REST-API-Key': '2Xq252o4IMhAXyO3n1wP9DcFvMnp4qCixFJaZKog', // This is your app's REST API key
//         },
//       },
//     );
//     const data = await response.json(); // Here you have the data that you need
//     const carData = JSON.stringify(data, null, 2);
//     fs.writeFile('vehicles.json', carData, (err) => {
//       if (err) throw err;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   getVehicles,
// };
