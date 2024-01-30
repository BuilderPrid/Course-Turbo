import {type  CourseType } from '@repo/zod/CourseSchema'; 
import prisma from '@repo/prisma/client'
import Course from '../course'
import { redirect } from 'next/navigation'
import EditForm from './form'
import { getServerSession } from 'next-auth'
import {authOptions} from "@/src/app/api/auth/[...nextauth]/auth-options"

interface CourseParams {
    id: string;
}

async function CoursePage({ params }: { params: CourseParams }): Promise<JSX.Element>{
    const session = await getServerSession({authOptions});
    if(!session) redirect('/')
    try{
        const course: CourseType|null = await prisma.course.findUnique({ where: { id: parseInt(params.id) } });
        return<div><p className='text-center text-red-700'>invalid params break the preview</p>
              <div className='grid grid-cols-2 w-2/3 m-auto mt-12'>

            <Course course={course} edit ={true} />
            <EditForm id={parseInt(params.id)}/>
            </div>;
            </div>
    }catch(e){
        console.log(e)
    }
    // if(course)  return <Course course={course} />;
    return <div>Course not found</div>
}

export default CoursePage