import type { SvelteComponent } from "svelte";
import WhySkillbased from "./posts/WhySkillbased.svelte";

export interface Author {
  name: string;
  title: string;
  image: string;
}

export interface Post {
  title: string;
  pubdate: string;
  author: Author;
  content: typeof SvelteComponent;
}

export const kristian: Author = {
  name: "Kristian Veem",
  title: "Managing Director / CEO Skillbased",
  image: "/images/ProfilePictures/kristian.jpg",
};

export type PostSlug = "why-skillbased";// | "registration" | "importing-profile" | "work-experience";
export const posts: Record<PostSlug, Post> = {
  "why-skillbased": {
    title: "Why Skillbased?",
    author: kristian,
    pubdate: "2023-05-01",
    content: WhySkillbased,
  },
};
