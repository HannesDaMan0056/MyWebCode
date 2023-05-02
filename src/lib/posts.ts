// @ts-ignore
import kristianImage from "$lib/images/kristian.jpg?webp&h=400";
// @ts-ignore
import samuelImage from "$lib/images/samuel.jpg?webp&h=400";
// @ts-ignore
import johannesImage from "$lib/images/hannes.png?webp&h=400";
// @ts-ignore
import marcinImage from "$lib/images/marcin.jpg?webp&h=400";

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

export const marcin: Author = {
  name: "Marcin Walczyk",
  title: "Architect / Developer",
  image: marcinImage,
};

export type PostSlug = "why-skillbased" | "registration" | "importing-profile"
  | "work-experience" | "skills-tagging" | "optimizing-profile" | "creating-cv-profile"
  | "controlling-distribution" | "job-offers" | "language-settings";
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
  "skills-tagging": {
    title: "Skills Tagging",
    author: johannes,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/skills-tagging",
    summary: `By connecting your skills to each job and project you have worked on, you can showcase how your competence has developed and contributed to your professional growth.`,
  },
  "optimizing-profile": {
    title: "Optimizing your profile",
    author: samuel,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/optimizing-profile",
    summary: `Optimizing your profile on Skillbased is important to increase your visibility and chances of getting matched with relevant assignments.`,
  },
  "creating-cv-profile": {
    title: "Optimizing your profile",
    author: kristian,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/creating-cv-profile",
    summary: `With Skillbased, you can easily generate multiple tailored CV profiles based on the information you have entered about your career history. It is a powerful tool that can help you create customized profiles suited for specific jobs you are interested in applying to.`,
  },
  "controlling-distribution": {
    title: "Optimizing your profile",
    author: johannes,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/controlling-distribution",
    summary: `Controlling distribution is an important aspect of using Skillbased. When you create your profile or CV on Skillbased, you have complete control over who can see it. You can choose to share your CV profile with specific clients or employers, or you can keep it private and only share it when you're ready to apply for a specific job.`,
  },
  "job-offers": {
    title: "Job boards & offers",
    author: kristian,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/job-offers",
    summary: `When browsing through the open job offers on Skillbased, you may notice that some of them are a perfect fit for your qualifications and experience. To increase your chances of being noticed by the hiring company and getting the job, it's important to submit a customized profile that showcases your skills and experience.`,
  },
  "language-settings": {
    title: "Language settings",
    author: marcin,
    pubdate: "2023-05-02",
    type: "tutorial",
    slug: "/blog/language-settings",
    summary: `On Skillbased, you can choose between the Swedish and English language settings. The language setting is displayed as a Swedish or English flag in the top right corner of the website. The language you select as your main language will determine the default language for your profile, but you can create separate profiles in both languages.`,
  },
};
