/* eslint-disable arrow-body-style */
const request = require('supertest');
const faker = require('faker');
const Customer = require('../models/Customer');

// eslint-disable-next-line prefer-const
let dummyCustomer = {
  firstName: 'Ashley',
  lastName: 'Pean',
  address1: '123 Main St',
  address2: null,
  city: 'Washington',
  state: 'DC',
  postalCode: 12345,
  country: 'USA',
  phone: 1234567890,
  email: 'pean.ashley@gmail.com',
  password: 'test',
  billingAddress: '123 Main St',
  billingCity: 'Washington',
  billingRegion: 'DC',
  billingPostalCode: 12345,
  billingCountry: 'USA',
  shipAddress: '123 Main St',
  shipCity: 'Washington',
  shipRegion: 'DC',
  shipPostalCode: 12345,
  shipCountry: 'USA',
  orders: null,
  createdAt: '2021-04-08',
  updatedAt: '2021-04-08',
};

const server = 'http://localhost:8080';

beforeAll(async () => {
  await Customer.findOrCreate({
    where: { customerID: 2 },
    defaults: dummyCustomer,
  });
  await Customer.destroy({
    where: { customerID: 2 },
  });
});

describe('userController functions', () => {
  test('getAllUsers controller', async () => {
    const response = await request(server).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].firstName).not.toBe(undefined);
    expect(response.body[0].lastName).not.toBe(undefined);
    expect(response.body[0].email).not.toBe(undefined);
    expect(response.body[0].address1).not.toBe(undefined);
  });

  test('getUser Controller', async () => {
    const response = await request(server).get('/api/users/1');
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
    expect(response.body).toHaveProperty('customerID');
    expect(response.body).toHaveProperty('firstName');
    expect(response.body).toHaveProperty('lastName');
    expect(response.body).toHaveProperty('address1');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('password');
    expect(response.body).toHaveProperty('updatedAt');
  });

  test('updateUser Controller', async () => {
    const newLastName = faker.name.lastName();
    const response = await request(server)
      .patch('/api/users/1')
      .send({ lastName: newLastName });
    console.log('response:', response.body);
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
    expect(response.body[1][0].lastName).toBe(newLastName);
  });

  test('createUser Controller', async () => {
    const { password, email } = dummyCustomer;
    const name = `${dummyCustomer.firstName} ${dummyCustomer.lastName}`;
    const address = dummyCustomer.address1;

    const response = await request(server)
      .post('/api/users/')
      .send({
        name, password, email, address,
      });
    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
    console.log(response.body);
  });
});
