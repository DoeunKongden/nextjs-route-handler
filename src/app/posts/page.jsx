import PostComponent from "@/components/PostComponent";
import { getPosts } from "@/service/getPost.service";

async function getAllPost(){
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()
    return data.data
}

export default async function Posts() {
    const posts = await getPosts()
    return (
        <div className="p-10 space-y-5 grid grid-cols-4 items-center w-screen ">
            {
                posts.map((post) => {
                    return(
                        <PostComponent key={post.id} title={post.title} body={post.body} id={post.id}/>
                    )
                })
            }
        </div>
    )
}