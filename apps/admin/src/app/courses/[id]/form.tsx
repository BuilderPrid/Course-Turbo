import {FilteredCourseInputs} from "@repo/zod/CourseSchema"
import prisma from "@repo/prisma/client"
import { revalidatePath } from 'next/cache'

function EditForm({id}): JSX.Element {

  async function handleSubmit(formData:FormData){
    'use server'
    
    try {
        // Validate the form data against the schema
        const course = {
            name: formData.get('name'),
            description: formData.get('description'),
            image: formData.get('image'),
            price: parseInt(formData.get('price')),
        }
        console.log(course)
        FilteredCourseInputs.parse(course);
        const res = await prisma.course.update({
            where:{
                id: id
            },
            data:{
                ...course,
                name:course.name,
                description: course.description,
                image: course.image,
                price: parseInt(course.price)
            }
        })
        revalidatePath(`/courses/${id}`)
    } catch (error) {
        // Handle validation errors
        if (error instanceof Error && error.errors) {
          console.log("errors",error)
      }
    }
  };

  return (
    <form className="max-w-md mx-auto w-96 h-[540px] p-8 bg-blue-100 rounded shadow-lg" action={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"

          className={`block w-full p-2 border rounded`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          name="description"
          className={`block w-full p-2 border rounded`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image link
        </label>
        <input
          type="text"
          name="image"
          className={`block w-full p-2 border rounded`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="text"
          name="price"

          className={`block w-full p-2 border rounded`}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-black border-solid border-2 border-sky-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default EditForm;
