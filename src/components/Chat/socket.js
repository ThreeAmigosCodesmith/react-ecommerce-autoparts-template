/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import io from 'socket.io-client';
import * as types from '../../redux/actions/actionTypes';

const { localStorage } = window;

const initializeChat = async (dispatch, queryObj) => {
  const {
    chatSessionID,
    supplierID,
    customerID,
    createdAt,
  } = queryObj;
  const socket = await io('/', {
    query: {
      chatSessionID,
      supplierID,
      customerID,
      createdAt,
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

const sendMessage = (socket, newMessage, oldMessages) => {
  localStorage.setItem('latestChat', JSON.stringify([...oldMessages, newMessage]));

  socket.emit('new-message', newMessage);
};

const endChat = (socket) => {
  socket.emit('end');
};

export {
  initializeChat,
  endChat,
  sendMessage,
};
