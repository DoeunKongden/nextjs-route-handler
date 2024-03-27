import { sharePost } from "@/lib/action"


export default async function SharePost() {

    return (
        <form className="w-96 mx-auto" action={sharePost}>
            <h1 className="text-center my-8 font-bold text-5xl">Post Form</h1>
            <label className="input input-bordered flex items-center gap-2 my-5">
                <input type="text" name="title" className="grow" placeholder="Title" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                <input type="text" name="body" className="grow" placeholder="Description" />
            </label>

            <div className="w-full flex justify-center my-5">
                <button type="submit" className="btn btn-accent">Post</button>
            </div>
        </form>
    )
}