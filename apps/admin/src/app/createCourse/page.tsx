"use client"
import React from 'react'
import CourseForm from './CourseForm'
import CoursePreview from './CoursePreview'
import { FilteredCourseType } from '@repo/zod/CourseSchema'


function CreateCoursePage():JSX.Element{
  const [course, setCourse] = React.useState<FilteredCourseType>({
    name:"",
    description: "",
    image: "",
    price:0
  })
  function handleSave(course:FilteredCourseType){
    setCourse(course)
  }
  return (
    <div className='w-3/4 m-auto'>
      <div className='flex flex-col justify-center h-36 p-3'>
        <p className='text-2xl p-2'>Your workspace</p>  
        <p className='text-5xl p-2'>Create and Publish Course</p>  
      </div>
      <div className='grid gap-3 grid-cols-2'>
        <div className='p-3 pr-5 scroll-m-20 border-r'>
          <CoursePreview course={course}/>
        </div>
        <div className='p-3'>
          <CourseForm setCourse={ handleSave }/>
        </div>
      </div>  
    </div>
  )
}

export default CreateCoursePage