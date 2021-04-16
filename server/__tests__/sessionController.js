/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const sessionController = require('../controllers/sessionController');
const { models: { session } } = require('../models/index.js');

beforeAll(() => {

});

describe('sessionController tests', () => {
  describe('startSession function ', () => {
    const resolvedValueGood = { cookieId: '12345', createAt: Date.now() };
    const resolvedValueError = new Error('value should be a string');
    const mockDBAction = jest.spyOn(session, 'create').mockResolvedValueOnce(resolvedValueGood);
    const mockNext = jest.fn();
    const mockReq = {};
    const mockResLocal = {
      locals: {
        userId: '12345',
      },
      status: jest.fn().mockReturnThis(),
    };
    const mockResBadLocal = {
      locals: {
        userId: 123,
      },
    };
    const mockResNoLocal = {
      status: jest.fn().mockReturnThis(Error('userId not present')),
    };

    describe('behavior when userId is provided', () => {
      it('should call the next the function', async () => {
        await sessionController.startSession(mockReq, mockResLocal, mockNext);
        expect(mockNext).toBeCalledWith();
      });

      it('should create an entry in the database if userId is provided', async () => {
        await sessionController.startSession(mockReq, mockResLocal, mockNext);
        expect(mockDBAction).toHaveBeenCalled();
      });
    });

    describe('behavior when userId is not provided', () => {
      it('should throw error if no userId is provided', async () => {
        await sessionController.startSession(mockReq, mockResNoLocal, mockNext);
        expect(mockNext).toBeCalledWith(Error('userId not present'));
      });
    });

    describe('behavior when bad inputs are given', () => {
      it('should hit the catch block when bad inputs are given', async () => {
        await sessionController.startSession(mockReq, mockResBadLocal, mockNext);
      });
    });
  });

  // describe('stopSession function', () => {

  // });
});
