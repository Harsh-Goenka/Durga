
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Message from './models/Message.js';
import User from './models/User.js';
import { auth } from './middleware/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

mongoose.connect('mongodb://localhost:27017/new', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Endpoint to send message
app.post('/send-email', (req, res) => {
    const { name, email, company, phone, message, isBulkOrder } = req.body;

    const newMessage = new Message({ name, email, company, phone, message, isBulkOrder });
    newMessage.save()
      .then(() => {
        res.status(200).send('Message stored successfully');
      })
      .catch(err => {
        console.error('Error saving message:', err);
        res.status(500).send('Failed to save message');
      });
});

// Admin Registration
// // Admin Registration
// app.post('/admin/register', async (req, res) => {
//     const { username, password } = req.body;

//     // Check if the admin user already exists
//     const existingUser  = await User.findOne({ username: 'admin' });
//     if (existingUser ) {
//         return res.status(400).send('Admin user already exists');
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash('admin', 10); // Default password
//     const user = new User({ username: 'admin', password: hashedPassword });
    
//     await user.save();
//     res.status(201).send('Admin registered successfully');
// });

// // Admin Login
// // Admin Login
// app.post('/admin/login', async (req, res) => {
//     const { username, password } = req.body;

//     // Check for hardcoded credentials
//     if (username === 'admin' && password === 'admin') {
//         const token = jwt.sign({ id: 'admin' }, 'your_secret_key'); // You can set a static ID for the admin
//         return res.json({ token });
//     }

//     return res.status(401).send('Invalid credentials');
// });

// // Get all users (admin only)
// app.get('/admin/users', auth, async (req, res) => {
//     try {
//         const users = await User.find(); // Fetch all users
//         res.json(users);
//     } catch (error) {
//         res.status(500).send('Server error');
//     }
// });
// Endpoint to get all messages
app.get('/get-messages', (req, res) => {
    Message.find()
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(err => {
            console.error('Error fetching messages:', err);
            res.status(500).send('Failed to fetch messages');
        });
});

// Get all user messages (admin only)
app.get('/admin/messages', auth, async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});