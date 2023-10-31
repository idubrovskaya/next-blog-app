'use client';

import { getAllPosts } from '@/services/getPosts';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { Posts } from '../components/Posts';
import { PostSearch } from '../components/PostsSearch';

export const metadata: Metadata = {
  title: 'Blog | Next App', // изменится название вкладки браузера при переходе на страницу Blog
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
