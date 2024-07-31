const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('./models/User');
const ChatRoomModal = require('./models/ChatRooms');
const MessagesModal = require('./models/Messages');
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

app.use(express.json());
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Database Connected Successfully!'))
  .catch(err => console.error('Database Connection Error:', err));

io.on('connection', socket => {
  console.log('New user connected (Server) ✔', socket.id);
  app.post('/message', async (req, res) => {
    const {chatRoomId, sendBy, receiveBy, message, dateStamp, createdAt} =
      req.body;
    if (!chatRoomId || !sendBy || !receiveBy || !message || !dateStamp) {
      return res.status(400).json({error: 'All fields are required'});
    }
    try {
      let chatRoom = await MessagesModal.findOne({chatRoomId});
      if (!chatRoom) {
        chatRoom = new MessagesModal({chatRoomId, messages: []});
        await chatRoom.save();
      }
      const newMessage = {
        message,
        sendBy,
        receiveBy,
        createdAt: new Date(),
        dateStamp: new Date(dateStamp),
        chatRoomId,
      };
      chatRoom.messages.push(newMessage);
      await chatRoom.save();
      io.emit('message', chatRoom.messages);
      res.json(chatRoom);
    } catch (error) {
      console.error('Error saving message:', error);
      res
        .status(500)
        .json({error: 'An error occurred while saving the message'});
    }
  });
  app.post('/chatroom', async (req, res) => {
    const {senderUid, receiverUid, chatRoomId} = req.body;
    try {
      const chatRoomData = {senderUid, receiverUid, chatRoomId};
      const newRoom = new ChatRoomModal(chatRoomData);
      await newRoom.save();
      res.status(201).json(newRoom);
      io.emit('chatRoom', newRoom);
    } catch (error) {
      console.error('Error creating chat room:', error);
      res
        .status(500)
        .json({error: 'An error occurred while creating the chat room'});
    }
  });
  app.patch('/user', async (req, res) => {
    const {uid} = req.query;
    if (!uid) {
      return res.status(400).json({error: 'UID is required'});
    }
    try {
      const updatedUser = await UserModel.findOneAndUpdate({uid}, req.body, {
        new: true,
      });
      if (!updatedUser) {
        return res.status(404).json({error: 'User not found'});
      }
      res.json(updatedUser);
      io.emit('user', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res
        .status(500)
        .json({error: 'An error occurred while updating the user'});
    }
  });
  socket.on('disconnect', reason => {
    console.log('User disconnected ❌', socket.id, 'Reason:', reason);
  });
  socket.on('error', error => {
    console.log('Socket error:', error);
  });
});

const PORT = process.env.PORT || 4000;

app.get('/messages', async (req, res) => {
  const {chatRoomId} = req.query;
  if (!chatRoomId) {
    return res.status(400).json({error: 'Chat Room ID is required'});
  }
  try {
    const chatRoom = await MessagesModal.findOne({chatRoomId});
    if (!chatRoom) {
      return res.status(404).json({error: 'Chat Room not found'});
    }
    res.json(chatRoom.messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({error: 'An error occurred while fetching messages'});
  }
});

app.get('/users', async (req, res) => {
  const {ids} = req.query;

  if (!ids) {
    return res.status(400).json({error: 'IDs are required'});
  }

  const idsArray = ids.split(',');

  try {
    const users = await UserModel.find({uid: {$in: idsArray}});
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({error: 'An error occurred while fetching users'});
  }
});

app.get('/user', async (req, res) => {
  const {uid} = req.query;

  if (!uid) {
    return res.status(400).json({error: 'UID is required'});
  }

  try {
    const user = await UserModel.findOne({uid});
    if (!user) {
      return res.status(404).json({error: 'User not found'});
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({error: 'An error occurred while fetching the user'});
  }
});

app.post('/register', async (req, res) => {
  const {email, password, displayName, photoUrl, status, uid} = req.body;
  try {
    const existingUser = await UserModel.findOne({email});
    if (existingUser) {
      return res.status(409).json({error: 'Email already exists'});
    }

    const userData = {
      email,
      displayName,
      photoUrl,
      status,
      uid,
      password: password ? bcrypt.hashSync(password, 10) : undefined,
    };

    const newUser = new UserModel(userData);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({error: 'An error occurred during registration'});
  }
});

app.get('/allUsers', async (req, res) => {
  try {
    const getAllUsers = await UserModel.find();
    res.json(getAllUsers);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({error: 'An error occurred while fetching users'});
  }
});
app.get('/chatrooms', async (req, res) => {
  const {uid} = req.query;

  if (!uid) {
    return res.status(400).json({error: 'UID is required'});
  }

  try {
    const rooms = await ChatRoomModal.find({
      $or: [{senderUid: uid}, {receiverUid: uid}],
    });
    res.json(rooms);
  } catch (error) {
    console.error('Error fetching chat rooms:', error);
    res
      .status(500)
      .json({error: 'An error occurred while fetching chat rooms'});
  }
});

app.delete('/chatroom', async (req, res) => {
  const {chatRoomId} = req.query;
  if (!chatRoomId) {
    return res.status(400).json({error: 'Chat Room ID is required'});
  }
  try {
    await ChatRoomModal.findByIdAndDelete(chatRoomId);
    res.status(204).json({});
  } catch (error) {
    console.error('Error deleting chat room:', error);
    res
      .status(500)
      .json({error: 'An error occurred while deleting the chat room'});
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
