export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Clear the "token" cookie by setting it to an empty value and setting the expiration date in the past
      res.setHeader('Set-Cookie', 'token=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict');

      // Return the response
      return res.status(200).json({
        message: 'Logout successful',
        success: true,
        
      });


    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }

  }
}
