import express from 'express';
const router = express.Router();

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15minutes
  max: 10,
  message:
    'Too many requests from this IP address, please try again after 15 minutes',
});

import { sendForm } from '../controllers/formController.js';

router.route('/form').post(apiLimiter, sendForm);

export default router;
