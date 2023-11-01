import jwt from "jsonwebtoken";
import { parse } from "cookie"; // Import the parse function from the "cookie" package

export const getDataFromToken = (request) => {
  try {
    const cookies = parse(request.headers.cookie || ""); // Parse the cookies from the request headers
    console.log("cookies");
    console.log(cookies);
    const token = cookies.token; // Access the "token" cookie
    console.log("token");
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};


