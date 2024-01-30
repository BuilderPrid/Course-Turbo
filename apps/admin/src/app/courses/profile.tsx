import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@repo/shadcn/avatar"
import { redirect } from 'next/navigation'
import {getServerSession}  from 'next-auth'
import { authOptions } from '@/src/app/api/auth/[...nextauth]/auth-options'

async function Profile() {
  // const router = useRouter();
  const session= await getServerSession({authOptions})
  if(!session) return redirect('/')
  else
  return (
    <div className='grid grid-cols-12 gap-8 w-1/2 m-auto mt-16'>
      <Avatar className='w-30 h-40 col-span-3'>
        <AvatarImage src={session?.user?.image}/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='col-span-9 bg-gray-100 p-4 rounded-md'>
        <h2 className='text-xl font-bold mb-4'>User Details:</h2>
        <div className='flex flex-col'>
          <p className='mb-2'>
            <span className='font-bold'>Name:</span> {session?.user?.name}
          </p>
          <p>
            <span className='font-bold'>Email:</span> {session?.user?.email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile