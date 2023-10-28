import bcrypt from 'bcryptjs';
import User from '@/models/userModel'; // Import your User model
import { connectToDatabase } from '@/dbconfig/dbconfig'; // Use your database connector

import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';


connectToDatabase();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // const reqBody = await req.json();
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'User does not exist' });
      }

      // Check if password is correct
      const validPassword = await bcrypt.compare(password, user.password);
      const invalidMsg = !validPassword ? 'Invalid Password' : '';

      if (!validPassword) {
        // return res.status(400).send({ error: invalidMsg });
        return res.status(200).json({
          message: invalidMsg,
          success: false,
        });
      }



      // Create token data
      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      // Create token
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET,
        { expiresIn: "1d" })

      // Set the token as a cookie in the response header
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`);

      // Return the response
      return res.status(200).json({
        message: 'Login successful',
        success: true,
      });



     


    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(405).json({
      error: 'Method Not Allowed',
    });
  }
}
