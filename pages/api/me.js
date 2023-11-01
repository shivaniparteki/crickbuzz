import User from '@/models/userModel'; // Import your User model
import { connectToDatabase } from '@/dbconfig/dbconfig'; // Use your database connector
import { getDataFromToken } from '@/helpers/getDataFromToken';

// connectToDatabase();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userId = await getDataFromToken(req);
      const user = await User.findOne({ _id: userId }).select("-password");

      // Return the response
      return res.status(200).json({
        message: "User found",
        data: user,

      });


    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }

  }
}
