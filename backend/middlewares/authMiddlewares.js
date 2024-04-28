
import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
 const token = req.headers.authorization?.split(' ')[1];
if (!token) {
 res.status(401).send('Authentication required.');
 return;
 }
jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
 if (err) {
 res.status(403).send('Invalid token.');
 return;
 }
req.user = info;
 next();
 });
};

export default authMiddleware
// Usage
// app.get('/protected', verifyToken, (req, res) => {
//  // Accessible only by users with a valid JWT token
//  res.send('Protected route');
// });