import {z} from 'zod'

export const CourseInputs = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  price: z.number(),
  description: z.string(),
  educatorEmail: z.string(),
})
;

export type CourseType = z.infer<typeof CourseInputs>;
export type FilteredCourseType =Pick<CourseType, 'name' | 'image' | 'description' | 'price'>;
export const FilteredCourseInputs = z.object({
  name: z.string(),
  image: z.string(),
  price: z.number(),
  description: z.string(),
});