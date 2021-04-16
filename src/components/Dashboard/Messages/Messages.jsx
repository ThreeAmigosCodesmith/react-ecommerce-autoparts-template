/* eslint-disable no-use-before-define */
import './Messages.css';
import React from 'react';
import MaterialTable from 'material-table';

const Messages = () => {
  // eslint-disable-next-line no-console
  console.log('placeholder');

  return (
    <div id="messages">
      <h1>Current Messages</h1>
      <MaterialTable style={tableStyle} title="Message History" data={messages} columns={columns} />
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
    title: 'Active?',
    field: 'active',
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
