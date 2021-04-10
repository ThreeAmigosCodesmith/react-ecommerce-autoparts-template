/* eslint-disable arrow-body-style */
const request = require('supertest');
const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const { models: { customer } } = require('../models/index.js');

const hash = bcrypt.hashSync('test', 10);

const randomID = uuidv4();
let randomID2;

const dummyCustomer = {
  firstName: 'Ashley',
  lastName: 'Pean',
  address1: '123 Main St',
  address2: null,
  city: 'Washington',
  state: 'DC',
  postalCode: 12345,
  country: 'USA',
  phone: 1234567890,
  email: 'test@test.com',
  password: hash,
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
  createdAt: '2021-04-08',
  updatedAt: '2021-04-08',
};

const server = 'http://localhost:8080';

beforeAll(async () => {
  await customer.destroy({
    where: {
      firstName: 'Ashley',
      address1: '123 Main St',
    },
  });
  await customer.findOrCreate({
    where: { customerID: randomID },
    defaults: dummyCustomer,
  });
});

describe('userController functions', () => {
  describe('getAllUsers controller', () => {
    let response;

    it('returns a success response', async () => {
      response = await request(server).get('/api/users');
      expect(response.statusCode).toBe(200);
    });

    it('returns an array of non-empty data', () => {
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('returns the firstName, lastName, email, and address properties as defined values', () => {
      expect(response.body[0].firstName).not.toBe(undefined);
      expect(response.body[0].lastName).not.toBe(undefined);
      expect(response.body[0].email).not.toBe(undefined);
      expect(response.body[0].address1).not.toBe(undefined);
    });
  });

  describe('getUser Controller', () => {
    let response;

    it('returns a success response', async () => {
      response = await request(server).get(`/api/users/${randomID}`);
      expect(response.statusCode).toBe(200);
    });

    it('returns an object', () => {
      expect(typeof response.body).toBe('object');
    });

    it('returns an object with the correct properties', () => {
      expect(response.body).toHaveProperty('customerID');
      expect(response.body).toHaveProperty('firstName');
      expect(response.body).toHaveProperty('lastName');
      expect(response.body).toHaveProperty('address1');
      expect(response.body).toHaveProperty('createdAt');
      expect(response.body).toHaveProperty('email');
      expect(response.body).toHaveProperty('password');
    });
  });

  describe('createUser Controller', () => {
    const { password, email } = dummyCustomer;
    const name = `${dummyCustomer.firstName} ${dummyCustomer.lastName}`;
    const address = dummyCustomer.address1;
    let response;

    it('returns a success response', async () => {
      response = await request(server)
        .post('/api/users')
        .send({
          name, password, email, address,
        });
      randomID2 = response.body.id;
      expect(response.statusCode).toBe(200);
    });

    it('returns an object', () => {
      expect(typeof response.body).toBe('object');
    });

    it('returns data with the same properties that were passed in', () => {
      expect(response.body.name).toBe(name);
    });
  });

  describe('updateUser Controller', () => {
    const newLastName = faker.name.lastName();
    let response;

    it('returns a success response', async () => {
      response = await request(server)
        .patch(`/api/users/${randomID2}`)
        .send({ lastName: newLastName });
      expect(response.statusCode).toBe(200);
    });

    it('returns an object', () => {
      expect(typeof response.body).toBe('object');
    });

    it('updates the lastname property in the database', () => {
      expect(response.body[1][0].lastName).toBe(newLastName);
    });
  });

  describe('deleteUser controller', () => {
    let response;
    it('returns a success response', async () => {
      response = await request(server)
        .delete(`/api/users/${randomID2}`);
      expect(response.statusCode).toBe(200);
    });

    it('removes user for database', async () => {
      const removedUser = await customer.findAll({
        where: {
          customerID: randomID2,
        },
      });

      expect(Array.isArray(removedUser)).toBe(true);
      expect(removedUser.length).toBe(0);
    });
  });

  describe('verifyUser controller', () => {
    let response;

    it('should return a success response', async () => {
      response = await request(server)
        .post('/api/users/verify')
        .send({ email: 'test@test.com', password: 'test' });
      expect(response.statusCode).toBe(200);
    });

    it('should return the correct customerID and name', () => {
      const { id, name } = response.body;
      expect(id).toBe(randomID);
      expect(name).toBe(`${dummyCustomer.firstName} ${dummyCustomer.lastName}`);
    });
  });
});
