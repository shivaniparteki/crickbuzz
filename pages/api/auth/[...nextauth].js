import UserModel from '@/models/userModel';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const nextAuth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await UserModel.findOne({
        email: session.user.email
      })

      session.user.id = sessionUser._id.toString()

      console.log({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
      console.log("session");
      console.log(session);

      return session;
    },

    async signIn({ profile }) {
      try {
        // await connectToDatabase()

        // if the user already exists
        const user = await UserModel.findOne({
          email: profile.email
        })

        // if not, then create a new user
        if (!user) {
          await UserModel.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.image,
          })
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});


export default nextAuth;

