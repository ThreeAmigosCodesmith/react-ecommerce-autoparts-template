const supertest = require('supertest');
const faker = require('faker');
const mongoose = require('mongoose');
const app = require('../../server');

const request = supertest(app);

beforeAll((done) => {
  done();
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close();
  done();
});

describe('Testing /users endpoint', () => {
  it('GET all users should return status of 200', async (done) => {
    const res = await request.get('/api/users');
    expect(res.status).toEqual(200);
    done();
  });

  it('GET one specific user should return status of 200', async (done) => {
    const res = await request.get('/api/users/60667a89a08ccaa3ed89c386');
    expect(res.status).toEqual(200);
    done();
  });

  it('create a new user', async (done) => {
    const res = await request.post('/api/users')
      .send({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.phone.phoneNumber(),
      });
    expect(res.status).toEqual(200);
    done();
  });

  // it('deletes an existing user', async (done) => {
  //   const res = await request.delete('/api/users/')
  //     .send({
  //       email: 'jest@test.com',
  //     });
  //   expect(res.status).toEqual(200);
  //   done();
  // });
});

describe('Dummy tests', () => {
  it('2 + 2 should equal 4', () => {
    const two = 2;
    expect(two + 2).toEqual(4);
  });

  it('2 + 2 should not equal 5', () => {
    const two = 2;
    expect(two + 2).not.toEqual(5);
  });
});
