/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const makeStyles = (chat, userID) => (
  {
    messageStyle: {
      background: chat.sender === userID ? '#57ba98' : '#D3D3D3',
      borderRadius: '8px',
      color: 'black',
      padding: '.6rem',
      alignSelf: chat.sender === userID ? 'flex-end' : 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
    },
  }
);

const ChatBubble = ({ chat }) => {
  const userID = useSelector((state) => state?.auth?.user?.id || state?.auth?.user?.supplierID);
  const styles = makeStyles(chat, userID);

  return (
    <div style={styles.messageStyle}>
      {chat.message}
    </div>
  );
};

export default ChatBubble;
