/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useRef } from 'react';
import SendIcon from '@material-ui/icons/Send';

const styles = {
  inputStyles: {
    width: '93%',
    border: 'none',
    height: '100%',
    background: 'lightblue',
    outline: 'none',
    fontSize: '1.5rem',
  },
  containerStyles: {
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    border: '3px solid darkgray',
  },
  buttonStyles: {
    border: 'none',
    verticalAlign: 'center',
    width: '7%',
  },
};

const ChatInput = ({ sendMessage }) => {
  const inputRef = useRef();

  return (
    <form
      style={styles.containerStyles}
      onSubmit={(e) => sendMessage(e, inputRef.current.value)}
    >
      <input ref={inputRef} style={styles.inputStyles} />
      <button type="submit" style={styles.buttonStyles}>
        <SendIcon color="primary" />
      </button>
    </form>
  );
};

export default ChatInput;
