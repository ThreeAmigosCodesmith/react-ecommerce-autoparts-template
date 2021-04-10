/* eslint-disable arrow-body-style */
const request = require('supertest');
const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const { models: { session } } = require('../models/index.js');

const randomID = uuidv4();

const server = 'http://localhost:8080';

beforeAll(() => {

});

describe('sessionController tests', () => {
  test('isLoggedIn function ', () => {

  });
});
