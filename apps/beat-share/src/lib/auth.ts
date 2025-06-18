// lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import prisma from "./prisma";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    revokeSessionsOnPasswordReset: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token}, request) => {
      await resend.emails.send({
        to: user.email,
        from,
        subject: "Verify your e-mail to complete account creation at BeatShare!",
        react: 
      })
    }
},
  account: { accountLinking: { enabled: false } },
  plugins: [nextCookies()],
});
