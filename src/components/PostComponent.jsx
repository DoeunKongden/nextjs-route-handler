import PostNavBtn from "./PostNavBtn";

export default function PostComponent({ title, body, id }) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://imgs.search.brave.com/xTdXQqRXfGPu4vRbGPldh_DAuNGbeXAdGAwRt1NOyyo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMi1w/cm9kLm1hbmNoZXN0/ZXJldmVuaW5nbmV3/cy5jby51ay9zcG9y/dC9mb290YmFsbC9m/b290YmFsbC1uZXdz/L2FydGljbGUyODQ4/MzYzNC5lY2UvQUxU/RVJOQVRFUy9zNjE1/LzBfR2V0dHlJbWFn/ZXMtMTg1Mjg4NTIz/OS5qcGc" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-1">{title}</h2>
                    <p className="line-clamp-2">{body}</p>
                    <PostNavBtn id={id}>View Post</PostNavBtn>
                </div>
            </div>
        </div>
    )
}