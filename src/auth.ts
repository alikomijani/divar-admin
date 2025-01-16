import { AUTH_BASE_URL } from "@/config.server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    session({ session, user, token }) {
      console.log("token", token);
      return session;
    },
    jwt({ account, token, user, profile, session, trigger }) {
      console.log("account", { account });
      console.log("user", { user });
      console.log("===========");
      console.log("token", { token });
      console.log("===========");
      return {
        ...token,
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
          return user.user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
