/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import io from 'socket.io-client';
import * as types from '../../redux/actions/actionTypes';

const { localStorage } = window;

const initializeChatCustomer = async (dispatch, queryObj) => {
  const {
    chatSessionID,
    supplierID,
    customerID,
    createdAt,
    userRole,
  } = queryObj;
  const socket = await io('/', {
    reconnectionDelayMax: 10000,
    query: {
      chatSessionID,
      supplierID,
      customerID,
      createdAt,
      userRole,
    },
  });

  socket.on('new-message', (newMessage) => {
    console.log('in the socket handler', newMessage);
    dispatch({
      type: types.ADD_MESSAGE,
      payload: newMessage,
    });
    console.log(newMessage);
    const oldMessages = JSON.parse(localStorage.getItem('latestChat')) || [];
    console.log('old messages', oldMessages);
    localStorage.setItem('latestChat', JSON.stringify([...oldMessages, newMessage]));
  });

  return socket;
};

const initializeChatOwner = async (dispatch, queryObj) => {
  const {
    chatSessionID,
    supplierID,
    userRole,
  } = queryObj;

  const socket = await io('/', {
    reconnectionDelayMax: 10000,
    query: {
      chatSessionID,
      supplierID,
      userRole,
    },
  });

  socket.on('new-message', (newMessage) => {
    console.log('in the socket handler', newMessage);
    dispatch({
      type: types.ADD_MESSAGE,
      payload: newMessage,
    });
    console.log(newMessage);
    const oldMessages = JSON.parse(localStorage.getItem('latestChat')) || [];
    console.log('old messages', oldMessages);
    localStorage.setItem('latestChat', JSON.stringify([...oldMessages, newMessage]));
  });

  return socket;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  initializeChatCustomer,
  initializeChatOwner,
};
