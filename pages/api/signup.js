import { hash } from 'bcryptjs';
import User from '@/models/userModel'; // Import your User model
import { connectToDatabase } from '@/dbconfig/dbconfig'; // Use your database connector

// pages/api/signup.js
connectToDatabase();
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password, username } = req.body;

      if (!email || !password || !username) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password before storing it
      const hashedPassword = await hash(password, 10);

      // Create a new user document
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the new user document
      const savedUser = await newUser.save();
      console.log('User created: ', savedUser);

      // If you're using a different database connection method, replace the following with your code
      // const result = await connectToDatabase.query('INSERT INTO users (email, password, username) VALUES ($1, $2, $3)', [
      //   email,
      //   hashedPassword,
      //   username,
      // ]);

      // if (result.rowCount === 1) {
      //   // Successful signup
      //   res.status(201).json({ message: 'Signup successful' });
      // } else {
      //   // Error while saving to the database
      // }
      res.status(200).send(savedUser);
    } catch (error) {
      // Handle errors, including database errors
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
