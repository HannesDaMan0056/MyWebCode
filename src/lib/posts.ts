// @ts-ignore
import kristianImage from "$lib/images/kristian.jpg?webp&h=400";
// @ts-ignore
import samuelImage from "$lib/images/samuel.jpg?webp&h=400";
// @ts-ignore
import johannesImage from "$lib/images/hannes.png?webp&h=400";

export interface Author {
  name: string;
  title: string;
  image: string;
}

export interface Post {
  title: string;
  pubdate: string;
  author: Author;
}

export const kristian: Author = {
  name: "Kristian Veem",
  title: "Managing Director / CEO Skillbased",
  image: kristianImage
};

export const samuel: Author = {
  name: "Samuel Veem",
  title: "Technical Writer / Multimedia Developer",
  image: samuelImage
};

export const johannes: Author = {
  name: "Johannes Veem",
  title: "Technical Writer / Tester",
  image: johannesImage
};

export type PostSlug = "why-skillbased" | "registration" | "importing-profile" | "work-experience";
export const posts: Record<PostSlug, Post> = {
  "why-skillbased": {
    title: "Why Skillbased?",
    author: kristian,
    pubdate: "2023-05-01",
  },
  "registration": {
    title: "Registration",
    author: samuel,
    pubdate: "2023-05-02",
  },
  "importing-profile": {
    title: "Importing Profile",
    author: johannes,
    pubdate: "2023-05-02",
  },
  "work-experience": {
    title: "Work Experience",
    author: kristian,
    pubdate: "2023-05-02",
  },
};
