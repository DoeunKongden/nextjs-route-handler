'use client'
import { useRouter } from "next/navigation"


export default function PostNavBtn({ id,children }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/posts/${id}`)
    }

    return (
        <div className="card-actions justify-end ">
            <button onClick={handleClick} className="btn btn-primary text-white">{children}</button>
        </div>
    )
}