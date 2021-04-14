// const chatController = require('../controllers/chatController.js');
const { models: { chat } } = require('../models/index');

module.exports = (io, socket) => {
  socket.on('new-message', async (message) => {
    console.log(message);
    chat.create(message);
  });

  // End the chat for the user and update active status to FALSE in the datbase
  socket.on('end', (chatSessionID) => {
    chat.update({ active: false }, {
      where: {
        chatSessionID,
      },
    });
    socket.disconnect(0);
  });
};

// module.exports = (socket, io) => {
//   socket.on('send-message', (message) => {
//     io.emit('message', message);
//   });
// };

// router.post('/:chatSessionID', chatController.addMesasageToChat, (req, res) => {
//   if (res.locals.error) res.status(400).json(res.locals.error);
//   else res.status(200).json(res.locals.message);
// });

// router.post('/', chatController.startChat, (req, res) => {
//   if (res.locals.error) res.status(400).json(res.locals.error);
//   else res.status(200).json(res.locals.chat);
// });

// router.get('/:chatSessionID', chatController.getAllUserChats, (req, res) => {
//   if (res.locals.error) res.status(400).json(res.locals.error);
//   else res.status(200).json(res.locals.chat);
// });

// router.get('/user/:userID', chatController.getAllUserChats, (req, res) => {
//   if (res.locals.error) res.status(400).json(res.locals.error);
//   else res.status(200).json(res.locals.chats);
// });

// router.get('/', chatController.getAllChats, (req, res) => {
//   if (res.locals.error) res.status(400).json(res.locals.error);
//   else res.status(200).json(res.locals.chats);
// });

// module.exports = router;
