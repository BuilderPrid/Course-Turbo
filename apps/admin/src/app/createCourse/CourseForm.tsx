"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import {CourseInputs,CourseType} from "@repo/zod/CourseSchema"
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
import {CourseAtom} from "@repo/store/CourseAtom"
import { useSetRecoilState } from "recoil"
import { FilteredCourseType } from "@repo/zod/CourseSchema"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@repo/shadcn/form"
import axios from "axios"
import { useRecoilValue } from "recoil"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
function CourseForm({setCourse}:{setCourse:any}):JSX.Element{
    const {data:session} = useSession();
    const router = useRouter()
    const  form  = useForm<FilteredCourseType>({
        resolver: zodResolver(z.object({
            name: z.string().min(10),
            description: z.string().min(30),
            image: z.string().url(),
            price: z.coerce.number(),
        })),
        defaultValues: {
            name:"",
            description: "",
            image: "",
            price:0
        },
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values: FilteredCourseType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log("userid",userId)
        const res = await axios.post("/api/createCourse",{
            ...values,
            accountEmail: session?.user?.email
            // authorId:userId,
        })
        if(res.status === 200){
            console.log('dfsdsd')
            router.push('/courses')
        }
        else{
          console.log(res);
        }
        
      }
      function onSave(values: FilteredCourseType) {
        // console.log("userid",userId)
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        setCourse(values)
      }
      function onClear() {
        form.reset({
          name: "",
          description: "",
          image: ""
        });
    }
    
    return (

        <Card className="p-4">
        <CardHeader>
          <CardTitle>Create Course</CardTitle>
          <CardDescription>Publish your course in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
        <div className="flex flex-col items-center">
        <div className="w-96 sm:max-w-sm">
        <Form {...form}>
            <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Course1" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desciption</FormLabel>
              <FormControl>
                <Input type="text" placeholder="This is course one" {...field} />
              </FormControl>
              <FormDescription>
                This is your course description.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image link</FormLabel>
              <FormControl>
                <Input type="text" placeholder="https://course1.png" {...field} />
              </FormControl>
              <FormDescription>
                This is your course thumbnail.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder='' {...field} />
              </FormControl>
              <FormDescription>
                This is your course price.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button variant="outline" className="w-full mt-8" onClick={form.handleSubmit(onSubmit)}>Submit</Button> */}
        </Form>
        </div>
    </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClear}>Clear</Button>
          <Button variant="ghost" onClick={form.handleSubmit(onSave)}>Preview</Button>
          <Button onClick={form.handleSubmit(onSubmit)}>Publish</Button>
        </CardFooter>
      </Card>
      )
}

export default CourseForm;