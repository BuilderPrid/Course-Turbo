"use client"
import * as React from "react"
import { Button } from "@repo/shadcn/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/shadcn/card"
import { Input } from "@repo/shadcn/input"
import { Label } from "@repo/shadcn/label"
import { FilteredCourseType } from "@repo/zod/CourseSchema"
import Image from "next/image"

type props = {course:FilteredCourseType};

export default function CoursePreview({course}:props): JSX.Element{
  return (
    <Card className="bg-gray-950 text-white pt-6">
      <CardHeader>
        <CardTitle className="text-lg">Couse Preview</CardTitle>
      </CardHeader>
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
      </div>
    </Card>
  )
}
