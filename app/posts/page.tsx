import { allPosts } from '@/.contentlayer/generated';
import { PostCard } from '@/components/post-card';
import { compareDesc } from 'date-fns';

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-xl py-8 mx-auto">
      <h1 className="mb-8 text-xl font-bold text-center">My posts</h1>
      
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}