'use server'

import { insertPostService } from "@/service/post.service"
import { redirect } from "next/navigation"

export const sharePost = async (formData) => {
    'use server'
    console.log("Action working ")
    const post = {
        title: formData.get('title'),
        body: formData.get('body')
    }

     const data = await insertPostService(post);
     console.log("data : ",data)
     redirect('/posts')
}