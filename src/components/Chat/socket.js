import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const socket = io('/', {
  query: {
    chatSessionID: uuidv4(),
  },
});
