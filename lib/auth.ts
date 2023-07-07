import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { env } from "@/env.mjs"
import { AxiosInstance } from "./axiosUtils"


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await AxiosInstance.post("/auth/login", {
          email: credentials?.email,
          password: credentials?.password,
        }
        ).catch((err) => {
          throw err.response.data
        }
        )
        const user: User = {
          name: res.data.user.name,
          email: res.data.user.email,
          id: res.data.user.id,
          accessToken: res.data.tokens.access.token,
          role: res.data.user.role,
          isEmailVerified: res.data.user.isEmailVerified,
        }
        console.log(user)
        return user;

      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;

      return false;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = { ...session.user, ...token }
      return session;
    },
    async jwt({ token, user }) {
      console.log({ token, user })
      if (user) {
        token.accessToken = user.accessToken;
        token = { ...token, ...user }
      }
      return token;
    },
  },
}
