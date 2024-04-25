import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "Khushalmali",
          email: "Khushalmali0222@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: ({ user }) => {
      const isAllowed = user.email === "random@gmail.com";

      if (isAllowed) {
        return false;
      } else {
        return true;
      }
    },
  },
});

export { handler as GET, handler as POST };
