import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";;
import { Badge } from "./ui/badge";

export function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="text-sm">
        {post.description}
      </div>
      <div>
        {post.tags?.map(t =>
          <Badge key={t}>
            <Link href={`/tags/${t}`}>
              {t}
            </Link>
          </Badge>)}
      </div>
    </div>
  );
}