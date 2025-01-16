import { AUTH_BASE_URL } from "@/config.server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  callbacks: {
    jwt({ token, user, account, profile, session, trigger }) {
      console.log({ token, account, profile, session, trigger });
      return {
        token: user.tokens,
        account: user.user,
        profile: user.profile,
        session,
        trigger,
      };
    },
  },

  pages: {
    signIn: "/auth/login", // Custom sign-in page
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET || "some secret", // Ensure this is set in your environment
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "نام کاربری",
          type: "text",
          placeholder: "نام کاربری",
        },
        password: { label: "کلمه عبور", type: "password" },
      },
      authorize: async (credentials, req) => {
        const res = await fetch(`${AUTH_BASE_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
