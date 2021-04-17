/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import './Messages.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import Modal from '@material-ui/core/Modal';
import Chat from '../../Chat/Chat';
import * as types from '../../../redux/actions/actionTypes';

const Messages = () => {
  // eslint-disable-next-line no-console
  console.log('placeholder');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChat = (e, rowData) => {
    console.log(rowData);
    setModalOpen(true);
    // dispatch({ type: types. })
  };

  return (
    <div id="messages">
      <h1>Message History</h1>
      <h4>Current Chats</h4>
      <MaterialTable style={tableStyle} title="" data={messages} columns={columns} onRowClick={handleChat} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Chat />
      </Modal>
      <h4>Past Chats</h4>
      <MaterialTable style={tableStyle} title="" data={messages} columns={columns} />
    </div>
  );
};

const tableStyle = {
  width: '100%',
};

const columns = [
  {
    title: 'Chat ID',
    field: 'chatID',
  },
  {
    title: 'Customer Name',
    field: 'customerName',
  },
  {
    title: 'Customer Phone',
    field: 'customerPhone',
  },
  {
    title: 'Customer Email',
    field: 'customerEmail',
  },
  {
    title: 'Chat Link',
    field: 'chatLink',
  },
];

const messages = [
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    customerPhone: '123-456-7890',
    customerEmail: 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
  {
    chatID: '12345',
    customerName: 'Ashley Pean',
    'Customer Phone': '123-456-7890',
    'Customer Email': 'test@test.com',
    active: true,
    chatLink: 'link.link',
  },
];

export default Messages;
