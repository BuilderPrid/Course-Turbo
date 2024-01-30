import { type CourseType } from '@repo/zod/CourseSchema'
import React from 'react'
import { Button } from "@repo/shadcn/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/shadcn/card"
import Link from "next/link"
import { CourseType } from '@repo/zod/CourseSchema'; // Import the CourseType interface



function Course({course,edit}:{ course: CourseType,edit?:boolean }):JSX.Element{
  if(edit === undefined) edit =false;
  return (
    <Card className="bg-gray-300 pt-6 w-96  mx-2 mb-4" >
      <div className="mx-2 mb-2">
      <CardContent className='h-72 bg-gray-200 rounded-lg'>
          <img src={course?.image}  className='h-72 text-center' />
      </CardContent>
      <CardFooter className="flex justify-between">
      <div className="grid w-full items-center gap-4">
            <div className="grid grid-cols-2 space-y-1.5">
                <h3 className="scroll-m-20  pb-2 text-md font-semibold tracking-tight transition-colors first:mt-0">
                    Name
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
                    {course?.name}
                </p>
                <h3 className=" scroll-m-20  pb-2 text-md font-semibold tracking-tight transition-colors first:mt-0">
                    Description
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
                     {course?.description.slice(0,80)}...
                </p>
                <h3 className=" scroll-m-20  pb-2 text-md font-semibold tracking-tight transition-colors first:mt-0">
                    Price
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
                     {course?.price}
                </p>
            </div>
            </div>
      </CardFooter>
            {!edit && <Button variant = 'default' className='w-32' ><Link href={`/courses/${course.id}`}>Edit</Link></Button>}
      </div>
    </Card>
  )
}

export default Course