/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ChatIcon from '@material-ui/icons/Chat';
import { socket } from './socket';
import ChatBubble from './ChatBubble/ChatBubble';
import ChatInput from './ChatInput/ChatInput';
import * as types from '../../redux/actions/actionTypes';
import './Chat.css';

const dummyMessages = [
  {
    userId: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
  {
    userId: 1,
    message: 'Hi. How are you?',
    sender: 'Ashley Pean',
  },
  {
    userId: 2,
    message: 'I\'m good. how are you?',
    sender: 'Not Ashley Pean',
  },
];

const iconStyles = {
  alignSelf: 'flex-end',
  margin: '1rem 0',
  background: 'white',
  padding: '.8rem',
  borderRadius: '99999px',
  fill: '#57ba98',
  border: '1px id ##57ba98',
  boxShadow: '1 1 1 1px #57ba98',
};

function Chat() {
  const [messages, changeMessages] = useState(dummyMessages);
  const chatUserID = useSelector((state) => state?.auth?.user?.id);
  const isOpen = useSelector((state) => state?.chat?.isOpen);
  const dispatch = useDispatch();
  const containerRef = useRef();
  const { localStorage } = window;

  // Scroll to end of chat on page load and new message
  useEffect(() => {
    if (isOpen) {
      const msgContainer = containerRef.current;
      msgContainer.scrollTop = msgContainer.scrollHeight - msgContainer.clientHeight;
    }
  }, [messages]);

  // Enable socket connection and create client event listeners
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isOpen) {
      // Update messages in state when a new message is received
      socket.on('newMessage', (newMessage) => {
        changeMessages((prev) => [...prev, newMessage]);
      });

      return socket.emit('end');
    }
  }, []);

  // Send message to server
  const sendMessage = (messageText) => {
    if (!messageText.trim()) return;

    const newMessage = {
      id: chatUserID,
      message: messageText,
      timestamp: new Date().toLocaleTimeString(),
    };

    localStorage.setItem('latestChat', JSON.stringify([...messages, newMessage]));

    socket.emit('send-message', newMessage);
  };

  const handleTypingDialog = (isTyping) => {
    if (isTyping) socket.emit('user-typing');
    else socket.emit('user-not-typing');
  };

  const toggleChatModal = () => {
    dispatch({ type: types.TOGGLE_CHAT });
  };

  const chatOpen = (
    <>
      <div id="mainChatContainerOpen">
        <div id="chatContainer">
          <div id="chatHeader">
            <p>Junkyard Company</p>
            <button id="exit-button" type="button" onClick={toggleChatModal}>X</button>
          </div>
          <div id="messagesContainer" ref={containerRef}>
            {messages ? messages.map((chat) => (
              <ChatBubble chat={chat} key={uuidv4()} />
            ))
              : null}
          </div>
          <ChatInput sendMessage={sendMessage} handleTyping={handleTypingDialog} />
        </div>
        <ChatIcon color="primary" fontSize="large" style={iconStyles} onClick={toggleChatModal} />
      </div>
    </>
  );

  const chatClosed = (
    <div id="mainChatContainerClosed">
      <ChatIcon color="primary" fontSize="large" style={iconStyles} onClick={toggleChatModal} />
    </div>
  );

  return isOpen ? chatOpen : chatClosed;
}

export default Chat;
