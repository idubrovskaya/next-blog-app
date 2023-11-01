import { Metadata } from 'next';
import { Posts } from '../components/Posts';
import { PostSearch } from '../components/PostsSearch';

export const metadata: Metadata = {
  title: 'Blog | Next App', // изменится название вкладки браузера при переходе на страницу Blog
};

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
