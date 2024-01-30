import prisma from "@repo/prisma/client";
import Profile from "./profile"
import { getServerSession } from "next-auth";
import Course from "./course";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/auth-options";
async function AllCourses(){
    const session = await getServerSession({authOptions})
    const courses = await prisma.course.findMany({where:{accountEmail:session?.user?.email}})
  return (
    <div>
      <Profile/>
      <div className='flex flex-wrap mx-12 mt-8 justify-center items-center'>
      {courses.map((course)=>
        <Course course ={course}  key={course.id} />
      )}
      </div>
    </div>
  )
}


export default AllCourses;