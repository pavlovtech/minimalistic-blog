export const runtime = 'edge';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import '../../prism.css';
import { PostCard } from '@/components/post-card';

const PostPage = ({ params }: { params: { slug: string } }) => {
  const tag = params.slug;

  const posts = allPosts.filter(post => post.tags?.includes(tag)).sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="py-8 mx-auto max-w-xl">
      <h1 className="mb-8 text-xl font-bold text-center">{tag}</h1>

      {!posts?.length && 'No posts found.'}

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}

export default PostPage
