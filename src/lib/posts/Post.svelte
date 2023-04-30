<script lang="ts">
  import type { Post } from "../posts";

  export let post: Post;
</script>

<main class="py-8 lg:pt-16 bg-white dark:bg-gray-900">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header class="mb-4 lg:mb-6 not-format">
        <address class="flex items-center mb-6 not-italic">
          <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img class="mr-4 w-16 h-16 rounded-full" src={post.author.image} alt={post.author.name}>
            <div>
              <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{post.author.name}</a>
              <p class="text-base font-light text-gray-500 dark:text-gray-400">{post.author.title}</p>
              <p class="text-base font-light text-gray-500 dark:text-gray-400">
                <time pubdate datetime={post.pubdate} title={post.pubdate}>{post.pubdate}</time>
              </p>
            </div>
          </div>
        </address>
        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
      </header>
      <slot></slot>
    </article>
  </div>
</main>
