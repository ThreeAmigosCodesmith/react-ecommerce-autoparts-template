/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ChatIcon from '@material-ui/icons/Chat';
import ChatBubble from './ChatBubble/ChatBubble';
import ChatInput from './ChatInput/ChatInput';
import * as types from '../../redux/actions/actionTypes';
import './Chat.css';
import { initializeChatCustomer, initializeChatOwner } from './socket';

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

function Chat(props) {
  const customerID = useSelector((state) => state?.auth?.user?.customerID);
  const userRole = useSelector((state) => state.auth.userRole);
  const {
    isOpen,
    chatSessionID,
    supplierID,
    messages,
  } = useSelector((state) => state?.chat);
  const [socketConnection, setSocketConnetion] = useState();
  const dispatch = useDispatch();
  const containerRef = useRef();
  const { localStorage } = window;
  // Scroll to end of window on page load and new message
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    console.log('opn1');
    if (isOpen) {
      const msgContainer = containerRef.current;
      msgContainer.scrollTop = msgContainer.scrollHeight - msgContainer.clientHeight;
    }
    // eslint-disable-next-line consistent-return
  }, [messages, isOpen]);

  // Enable socket connection and create client event listeners
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    console.log('opn2');
    console.log(chatSessionID, supplierID, customerID);
    if (isOpen) {
      if (!localStorage.getItem('latestChat')) localStorage.setItem('latesChat', JSON.stringify([]));
      const createConnection = async () => {
        console.log('initializing socket');
        if (userRole === 'CUSTOMER') {
          const newSocket = await initializeChatCustomer(dispatch, {
            chatSessionID,
            supplierID,
            customerID,
            userRole,
            createdAt: new Date(),
          });
          await setSocketConnetion(newSocket);
        } else {
          const newSocket = await initializeChatOwner(dispatch, {
            chatSessionID,
            supplierID,
            userRole,
          });
          await setSocketConnetion(newSocket);
        }
      };
      createConnection();
    } else return socketConnection ? socketConnection.disconnect() : null;
  }, [isOpen]);

  // Send message to server
  const handleMessage = (messageText) => {
    console.log('new message', { messageText, chatSessionID });
    if (!messageText.trim()) return;

    const newMessage = {
      chatSessionID,
      customerID,
      supplierID,
      sender: userRole === 'CUSTOMER' ? customerID : supplierID,
      message: messageText,
      active: true,
      timestamp: new Date().toDateString(),
    };

    console.log(newMessage);

    // sendMessage(socketConnection, newMessage, messages);
    localStorage.setItem('latestChat', JSON.stringify([...messages, newMessage]));

    socketConnection.emit('new-message', { newMessage, chatSessionID });
    // dispatch({ type: types.ADD_MESSAGE, payload: newMessage });
  };

  const closeChat = () => {
    dispatch({ type: types.TOGGLE_CHAT });
    socketConnection.emit('end', chatSessionID);
    localStorage.setItem('latestChat', JSON.stringify([]));
  };

  const handleTypingDialog = (isTyping) => {
    if (isTyping) socketConnection.emit('user-typing');
    else socketConnection.emit('user-not-typing');
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
            <button id="exit-button" type="button" onClick={closeChat}>X</button>
          </div>
          <div id="messagesContainer" ref={containerRef}>
            {messages ? messages.map((chat) => (
              <ChatBubble chat={chat} key={uuidv4()} />
            ))
              : <p>Start conversation here</p>}
          </div>
          <ChatInput sendMessage={handleMessage} handleTyping={handleTypingDialog} />
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
