export async function getPosts(){
    const res = await fetch('https://645865eb4eb3f674df739047.mockapi.io/api/v1/posts',{next: { tags: ['posts']}, cache:'no-store'})
    const data = await res.json()
    return data
}