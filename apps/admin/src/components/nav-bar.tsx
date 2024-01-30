"use client"

import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/shadcn/avatar"


function Navbar(): JSX.Element{
  const {data:session} = useSession();
  // const setUser = useSetRecoilState(User);
  if(!session){
    // setUser(session.user);
    return (
      <div className = "bg-gray-800 h-20 flex items-center justify-between text-slate-50 text-lg" >
        <Link className='ml-20' href='/'>Home</Link>
        <div className='m-20'>
        <button className='hover:bg-blue-500 rounded p-2' onClick={()=>signIn()} type="submit">Sign In</button>
        <button className='hover:bg-red-500 rounded ml-5 p-2' type='button' ><Link href='/signup'>Signup</Link></button>
        </div>
    </div>
  )
}
// console.log(session)
return(
  <div className = "bg-gray-800 h-20 flex items-center justify-between text-slate-50 text-lg" >
    <div>
      <Link className='ml-20' href='/' className='hover:bg-red-400 rounded p-2 ml-8'>Home</Link>
      <Link className='ml-20' href='/courses' className='hover:bg-blue-400 rounded p-2 ml-8'>My Courses</Link>
      </div>
      <div className='m-20 flex items-center '>
        <div className="flex items-center w-54 gap-2 justify-between">
      <p className=''>{session.user?.name}</p>
      <Avatar className=''>
        <AvatarImage src={session.user?.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </div>
      <button className='hover:bg-blue-500 rounded p-2 ml-2 text-slate-300' onClick={()=>signOut()} type="button">Logout</button>
      </div>
  </div>
      )
}

export default Navbar