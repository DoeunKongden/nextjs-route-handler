'use client'

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Let go explore some posts.</p>
            <Link href="/posts" className="btn btn-primary">View All Posts</Link>
            <Link href="/sharePost" className="btn btn-secondary ml-5">Create Post</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
