import {atom } from "recoil";
import { FilteredCourseType } from "@repo/zod/CourseSchema";

export const CourseAtom = atom<FilteredCourseType>({
  key: "courseAtom",
  default: [],
});