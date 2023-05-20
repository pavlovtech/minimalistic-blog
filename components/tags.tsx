import { allPosts } from '@/.contentlayer/generated';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Tags() {
    const allTags = allPosts.map(post => post.tags!).flat()!;
  
    const tags = [...new Set(allTags)];
  
    return (
      <div className="py-8">
        <h1 className="mb-8 text-xl font-bold text-center">Tags</h1>
  
        {tags?.length === 0 && 'No tags found.'}
        {tags.map((tag) => {
          return (
            <Link key={tag} href={`tags/${tag}`} legacyBehavior>
              <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                {tag}
              </a>
            </Link>
          )
        })}
      </div>
    );
  }