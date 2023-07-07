import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    role: string
    isEmailVerified: boolean
    name: string
    email: string
    accessToken: string
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId
      role: string
      isEmailVerified: boolean
      accessToken: string
    }
    accessToken: string
  }

  interface User {
    id: UserId
    role: string
    isEmailVerified: boolean
    accessToken: string
    name: string
    email: string
  }
}
