/* eslint-disable no-unused-vars */
import io from 'socket.io-client';

const { localStorage } = window;

// eslint-disable-next-line import/prefer-default-export
// export const socket = io.connect('/', {
//   query: {
//     chatSessionID: uuidv4(),
//   },
// });
const initializeChat = async (queryObj) => {
  const {
    chatSessionID,
    supplierID,
    customerID,
    createdAt,
  } = queryObj;
  const socketIO = await io.connect('/', {
    query: {
      chatSessionID,
      supplierID,
      customerID,
      createdAt,
    },
  });

  return socketIO;
};

const sendMessage = (socket, message) => {
  socket.emit('new-message', message);
};

export {
  initializeChat,
  sendMessage,
};
