
import {useSession,getSession} from 'next-auth/react'
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {Button} from "@repo/shadcn/button"
import {authOptions} from "../app/api/auth/[...nextauth]/auth-options"
import Link from 'next/link';
async function Status(){
    const session = await getServerSession(authOptions);
    // const [allowed,setAllowed] = useState(false);
    if(!session){        
        // console.log(session)
        return <div>Not logged in</div>
    }
    else{
        if(session.user?.allowed){
        return <div className=''>
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> Congratulations your application has been approved</p>
            <p className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-center mt-4"> You can now publish courses with the button below</p>
            <Button variant="outline" className="block m-auto mt-4"><Link href='/createCourse'>Create courses</Link></Button>
        </div>
        }
        return <div className=''>
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">We're sorry this is taking longer</p>
        <p className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-center mt-4"> Your application is being reviewed. Please visit the site later to check your application status</p>
    </div>
    }
}
export default Status;