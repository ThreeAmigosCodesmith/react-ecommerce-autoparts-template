/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import SendIcon from '@material-ui/icons/Send';

const styles = {
  inputStyles: {
    width: '93%',
    border: 'none',
    height: '100%',
    background: 'white',
    outline: 'none',
    fontSize: '1.5rem',
    boxShadow: 'none',
  },
  containerStyles: {
    width: '100%',
    margin: 0,
    padding: '10px',
    boxSizing: 'border-box',
    background: 'white',
    display: 'flex',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    borderTop: '1px solid #57ba98',
  },
  buttonStyles: {
    border: 'none',
    verticalAlign: 'center',
    width: '7%',
    outline: 'none',
    background: 'white',
  },
};

const ChatInput = ({ sendMessage }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      sendMessage(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <form
      style={styles.containerStyles}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        style={styles.inputStyles}
      />
      <button type="submit" style={styles.buttonStyles}>
        <SendIcon color="primary" style={{ fill: '#57ba98' }} />
      </button>
    </form>
  );
};

export default ChatInput;
