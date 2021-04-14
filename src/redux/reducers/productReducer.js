// /* eslint-disable no-underscore-dangle */
// import * as types from '../actions/actionTypes';

// export const InitialState = {
//   title: '',
//   year: '',
//   make: '',
//   model: [],
//   sku: '',
//   productName: '',
//   productDescription: '',
//   color: '',
//   discount: '',
//   unitsInStock: 0,
//   unitsOnOrder: 0,
//   productAvailable: false,
//   discountAvailable: false,
//   images: [],
//   note: '',
//   price: '',
// };

// const imageReducer = (state = InitialState, action) => {
//   switch (action.type) {
//     case types.ADD_IMAGE_URL:
//       return {
//         ...state,
//         ...{ images: [...state.images, action.url] },
//       };

//     case types.DELETE_IMAGE:
//       return {
//         ...state,
//         ...{ msg: action.data._res, type: action.data._type },
//       };
//     // case types.UPLOAD_IMAGE:
//     //   return {
//     //     ...state,
//     //     ...{ }
//     //   }
//     default:
//       return state;
//   }
// };

// export default imageReducer;
