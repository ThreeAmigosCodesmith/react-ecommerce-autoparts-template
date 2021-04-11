/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useRef, useEffect } from 'react';
import socketClient from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {
  Container,
} from '@material-ui/core';
import ChatBubble from './ChatBubble/ChatBubble';
import ChatInput from './ChatInput/ChatInput';

const dummyMessages = [
  {
    id: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
    timestamp: new Date(),
  },
  {
    id: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
    timestamp: new Date(),
  },
];

const messagesContainer = {
  border: '3px solid darkgray',
  width: '101.5%',
  borderBottom: 'none',
  boxSizing: 'border-box',
  padding: '1rem .5rem',
  height: '80%',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const mainContainer = {
  position: 'relative',
  height: '600px',
  width: '400px',
};

function Chat() {
  // eslint-disable-next-line no-unused-vars
  const [messages, changeMessages] = useState(dummyMessages);
  const containerRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const socket = socketClient('http://localhost:8080');
  // socket.on('connection', () => {
  //   console.log('conntect to the backen');
  // });

  // Scroll to end of chat on page load
  useEffect(() => {
    const msgContainer = containerRef.current;
    msgContainer.scrollTop = msgContainer.scrollHeight - msgContainer.clientHeight;
  }, [messages]);

  const sendMessage = (e, message) => {
    e.preventDefault();
    console.log('sending');
    const newMessage = {
      id: 1,
      message,
      sender: 'Ashley Pean',
      timestamp: new Date(),
    };
    changeMessages([...messages, newMessage]);
  };

  return (
    <div style={mainContainer}>
      <p>Chat app</p>
      <div style={messagesContainer} ref={containerRef}>
        {messages.map((chat) => (
          <ChatBubble chat={chat} key={uuidv4()} />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
