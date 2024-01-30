import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@repo/prisma/client';

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "email", type: "text", placeholder: "jsmith@doe.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials){
          try{
            const user = await prisma.educator.findUnique({
              where:{
                email: credentials?.email
              }
            })
            if(!user) return false;
          }catch(err){
            console.log(err)
          }
          return true;
        }
      })
    ],
    callbacks: {
      async signIn(user, account, profile) {
        // console.log(user,account,profile);
        try{
          const allowance = await prisma.account.findUnique({
            where:{
              email: user.user.email
            }
          })
          if(!allowance){
            await prisma.account.create({
              data:{
                email: user.user.email,
                allowed:false
              }
            })
          }
        }catch(err){
          console.log(err)
        }
        return true
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token and user id from a provider.
        try{
          const allowance = await prisma.account.findUnique({
            where:{
              email: session.user.email
            }
          })
          session.user.allowed = allowance?.allowed
        }catch(err){
          console.log(err)
          session.user.allowed = false
        }
        // console.log("session final",session)
        return session
      }
    },
  }