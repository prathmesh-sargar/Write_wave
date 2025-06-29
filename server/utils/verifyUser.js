import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = async(req, res, next) => {
  
  const token = await req?.cookies.access_token;
  
  if (!token) {
    return next(errorHandler(401, 'no token Unauthorized'));
  }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
