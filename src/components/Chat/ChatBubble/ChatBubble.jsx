/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';

const makeStyles = (chat) => (
  {
    messageStyle: {
      background: chat.sender === 'Ashley Pean' ? 'lightgreen' : 'lightblue',
      borderRadius: '8px',
      color: 'black',
      padding: '.6rem',
    },
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: chat.sender === 'Ashley Pean' ? 'flex-end' : 'flex-start',
      width: '60%',
    },
    senderStyles: {
      fontWeight: 'bold',
    },
    timeStyles: {
      color: 'gray',
    },
  }
);

const ChatBubble = ({ chat }) => {
  const styles = makeStyles(chat);

  return (
    <div style={styles.containerStyle}>
      <span style={styles.senderStyles}>{chat.sender}</span>
      <div style={styles.messageStyle}>
        {chat.message}
      </div>
      <span style={styles.timeStyles}>
        {chat.timestamp.toLocaleTimeString('en-US')}
      </span>
    </div>

  );
};

export default ChatBubble;
