const { v4: uuidv4 } = require('uuid');
const chatController = require('../controllers/chatController.js');
const { models: { chat } } = require('../models/index');


module.exports = (io, socket) => {
  socket.on('create-chat', () => {
    const chatSessionID = uuidv4();
    socket.join(chatSessionID);

    
  });

  socket.on('find-chat-log', async (customerID) => {
    chat.findOne({
      where: { customerID, active: true },
    });
  });

  socket.on('send-message', (message) => {
    console.log('new message: ', message);
    io.emit('newMessage', message);
  });

  socket.on('end', () => {
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
