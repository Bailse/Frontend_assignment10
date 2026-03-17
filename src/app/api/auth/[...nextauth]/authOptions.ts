import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from 'next-auth'
import userLogin from '@/libs/userLogIn';



export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        if (!credentials) return null

        const user = await userLogin(
          credentials.email,
          credentials.password
        )

        return user ?? null
      }
    })
  ],

  session: { strategy: "jwt" },

  callbacks: {

    async jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user }
      }
      return token
    },

    async session({ session, token }) {
      session.user = token as any
      return session
    },

    async redirect({ url, baseUrl }) {
      return baseUrl + "/"
    }

  }
}