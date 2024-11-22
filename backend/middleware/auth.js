// middleware/auth.js
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).send('Access denied.');

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.status(403).send('Invalid token.');
    req.user = user;
    next();
  });
};