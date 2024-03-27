import { getPosts } from "@/service/getPost.service";
import { insertPostService } from "@/service/post.service"
import { NextResponse } from "next/server"

export async function GET() {
    const posts = await getPosts()
    return NextResponse.json({ data: posts })
}

export async function POST() {
    const post = await insertPostService();
    return NextResponse.json({ data: post, message: 'Post Success', status: '200' })
}