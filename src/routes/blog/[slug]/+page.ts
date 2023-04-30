import type { Post, PostSlug } from "../../../lib/posts";
import { posts } from "../../../lib/posts";
import type { LoadEvent } from "@sveltejs/kit";

export function load({ params }: LoadEvent): Post {
  // @ts-ignore
  return posts[params.slug || "why-skillbased" as PostSlug];
}
