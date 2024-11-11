import NextAuth, { AuthError } from "next-auth";
import { getUserByMail, login } from "@/actions/authActions";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          const response = await login({ email, password });
          if (response.error) {
            throw new Error(response.error);
          }
          if (response.email) {
            const user = await getUserByMail(email);
            if (user) {
              return {
                id: user.userId,
                username: user.username,
                email: user.email,
                role: user.role,
              };
            }
          }
        } catch (error) {
          throw new AuthError((error as AuthError).message);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role as string;
        token.username = user.username as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.id as string;
      session.user.role = token.role as string;
      session.user.username = token.username as string;

      return session;
    },
  },
});
