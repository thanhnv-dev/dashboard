import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sendGet, sendPost } from "@/network/requests";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const loginResult: any = await sendPost(
          "api/admin/login",
          credentials as Object
        );
        if (loginResult?.data?.status === 200) {
          return loginResult.data;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
