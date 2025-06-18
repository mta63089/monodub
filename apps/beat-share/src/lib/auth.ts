// lib/auth.ts
import { reactVerificationEmail } from "@/components/email/verification-email";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";
import prisma from "./prisma";
import { resend } from "./resend";

const from = process.env.RESEND_EMAIL || "empty";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    requireEmailVerification: true,
    enabled: true,
    autoSignIn: false,
    revokeSessionsOnPasswordReset: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        to: user.email,
        from,
        subject:
          "Verify your e-mail to complete account creation at BeatShare!",
        text: "Verify your e-mail!",
        react: reactVerificationEmail({ username: user.name, url }),
      });
    },
  },
  account: { accountLinking: { enabled: false } },
  plugins: [nextCookies(), username()],
});
