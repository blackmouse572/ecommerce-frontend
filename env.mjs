import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    NODE_ENV: z.string().min(1),
    NEXT_PUBLIC_PROD_API_URL: z.string().url(),
    NEXT_PUBLIC_DEV_API_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NODE_ENV: z.string().min(1),
    NEXT_PUBLIC_PROD_API_URL: z.string().url(),
    NEXT_PUBLIC_DEV_API_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_DEV_API_URL: process.env.NEXT_PUBLIC_DEV_API_URL,
    NEXT_PUBLIC_PROD_API_URL: process.env.NEXT_PUBLIC_PROD_API_URL,
  },
})
