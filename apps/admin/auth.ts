// import type { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import  CredentialsProvider from 'next-auth/providers/credentials';
// import PrismaClient from '@repo/prisma/prismaClient';;
// const prisma = new PrismaClient();

// export const authOptions: NextAuthOptions = {
//   // Secret for Next-auth, without this JWT encryption/decryption won't work
//   secret: process.env.NEXTAUTH_SECRET ?? '',
  
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
//     }),
//     CredentialsProvider({
//         name: 'Credentials',
//         credentials: {
//           email: { label: "email", type: "text", placeholder: "jsmith@doe.com" },
//           password: { label: "Password", type: "password" }
//         },
//         async authorize(credentials, req): Promise<any>{
//           const user = await prisma.user.findUnique({
//             where: { email: credentials?.email },
//           });
//           if(!user) return false;
//           return true;
//         }
//       })
//   ],
// };