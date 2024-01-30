import prisma from "@repo/prisma/client";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    try{

        const course = await req.json();
        const newCourse = await prisma.course.create({data: course});
        // console.log(newCourse)
        return Response.json({ newCourse },{status:200});
    }
    catch(e){
        console.log(e)
        return Response.json({}, { status: 500 })
    }
}