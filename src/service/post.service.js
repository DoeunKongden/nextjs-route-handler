import { revalidateTag } from "next/cache"

export const  insertPostService = async (post) => {
    const res = await fetch('https://645865eb4eb3f674df739047.mockapi.io/api/v1/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: post.title,
            body: post.body
        }),
    })
    const data = await res.json()
    revalidateTag('posts')
    return data
}