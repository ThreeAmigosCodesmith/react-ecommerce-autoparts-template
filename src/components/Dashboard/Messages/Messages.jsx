/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import './Messages.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import MaterialTable from 'material-table';
import { Checkbox } from '@material-ui/core';
import Chat from '../../Chat/Chat2';
import * as types from '../../../redux/actions/actionTypes';

const Messages = () => {
  const userRole = useSelector((state) => state.auth.userRole);
  const { supplierID } = useSelector((state) => state.auth.user);
  const customer = useSelector((state) => state?.auth?.user?.customerID);
  const allChats = useSelector((state) => state.chat.allChats);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadChats = async () => {
      console.log('loading chats');
      if (userRole === 'CUSTOMER') {
        console.log(customer);
        const messages = await axios.post('/api/chat/customer', { customerID: customer });
        console.log(messages.data);
        dispatch({ type: types.ADD_CHATS, payload: messages.data });
      } else {
        const messages = await axios.post('/api/chat/owner', { supplierID });
        // eslint-disable-next-line no-console
        console.log(messages.data);
        dispatch({ type: types.ADD_CHATS, payload: messages.data });
      }
    };
    loadChats();
    return null;
  }, []);

  const handleChat = async (e, rowData) => {
    const { chatSessionID, customerID } = rowData;
    console.log('handling chat', customerID, chatSessionID, supplierID);
    if (rowData.active) {
      dispatch({
        type: types.START_CHAT,
        payload: {
          supplierID,
          chatSessionID,
          customerID,
        },
      });
    }
  };

  return (
    <div id="messages">
      <h1>Message History</h1>
      <MaterialTable style={tableStyle} title="" data={allChats.map((el) => el[0])} columns={userRole === 'CUSTOMER' ? customerColumns : ownerColumns} onRowClick={handleChat} />
      <Chat />
    </div>
  );
};

const tableStyle = {
  width: '100%',
};

const customerColumns = [
  {
    title: 'Supplier',
    field: 'supplier',
  },
  {
    title: 'Supplier Contact',
    field: 'supplierContact',
  },
  {
    title: 'Contact Phone',
    field: 'phone',
  },
  {
    title: 'Contact Email',
    field: 'email',
  },
  {
    title: 'Chat Started',
    field: 'createdAt',
    render: (row) => {
      const { createdAt } = row;
      return (
        <>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{new Date(createdAt).toLocaleTimeString()}</p>
        </>
      );
    },
  },
];

const ownerColumns = [
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
    render: (row) => {
      const { chatID, active } = row;
      return active
        ? (
          <p style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
            {`link.chat.${chatID}`}
          </p>
        )
        : (
          <p style={{ color: 'black' }}>
            {`link.chat.${chatID}`}
          </p>
        );
    },
  },
  {
    title: 'Active',
    field: 'active',
    render: (row) => {
      const { active } = row;
      return active
        ? <Checkbox checked={Boolean(active)} style={{ color: '#3ea175' }} />
        : <Checkbox checked={Boolean(active)} disabled />;
    },
  },
  {
    title: 'Chat Started',
    field: 'createdAt',
    render: (row) => {
      const { createdAt } = row;
      return (
        <>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{new Date(createdAt).toLocaleTimeString()}</p>
        </>
      );
    },
  },
];

// const messages = [
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link2',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     customerPhone: '123-456-7890',
//     customerEmail: 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
//   {
//     chatID: '12345',
//     customerName: 'Ashley Pean',
//     'Customer Phone': '123-456-7890',
//     'Customer Email': 'test@test.com',
//     active: 'true',
//     chatLink: 'link.link',
//   },
// ];

export default Messages;
