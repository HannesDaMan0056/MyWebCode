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

export type PostType = "article" | "tutorial"

export interface Post {
  title: string;
  pubdate: string;
  author: Author;
  slug: string;
  summary: string;
  type: PostType;
}

export const kristian: Author = {
  name: "Kristian Veem",
  title: "Managing Director / CEO Skillbased",
  image: kristianImage,
};

export const samuel: Author = {
  name: "Samuel Veem",
  title: "Technical Writer / Multimedia Developer",
  image: samuelImage,
};

export const johannes: Author = {
  name: "Johannes Veem",
  title: "Technical Writer / Tester",
  image: johannesImage,
};

export type PostSlug = "why-skillbased" | "registration" | "importing-profile" | "work-experience";
export const posts: Record<PostSlug, Post> = {
  "why-skillbased": {
    title: "Why Skillbased?",
    author: kristian,
    pubdate: "2023-05-01",
    type: "article",
    slug: "/blog/why-skillbased",
    summary: `When working with Skillbased Consulting, you will be assigned a senior consultant with expert industry experience to advise and guide you throughout the process and service delivery. 
    We work closely with you to get a thorough understanding of your vision, goals, prerequisites, and requirements. Our goal is to deliver the most relevant skills based on your needs and requirements.`,
  },
  "registration": {
    title: "Registration",
    author: samuel,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/registration",
    summary: `If you're interested in creating a free Skillbased consultant account, registration is the first step. 
Here's a simple guide on how to create an account through registration: <br> 
Go to the Skillbased website and hover over "Register" or "Sign up" in the top navigation menu."`,
  },
  "importing-profile": {
    title: "Importing Profile",
    author: johannes,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/importing-profile",
    summary: `Are you looking to quickly populate your Skillbased profile with your LinkedIn information? 
Here's a step-by-step guide on how to do it: <br>
          Log into LinkedIn and view your profile.`,
  },
  "work-experience": {
    title: "Work Experience",
    author: kristian,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/work-experience",
    summary: `When registering your work experiences and projects on Skillbased, it's important to be as detailed as possible and keep them updated. Here's what you need to know:`,
  },
};
