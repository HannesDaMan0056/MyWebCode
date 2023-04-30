<script lang="ts">
  import type { Author } from "../posts";

  export let author: Author;
  export let pubdate: string;


</script>

<main class="py-8 lg:pt-16 bg-white dark:bg-gray-900">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header class="mb-4 lg:mb-6 not-format">
        <address class="flex items-center mb-6 not-italic">
          <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img class="mr-4 w-16 h-16 rounded-full" src={author.image} alt={author.name}>
            <div>
              <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{author.name}</a>
              <p class="text-base font-light text-gray-500 dark:text-gray-400">{author.title}</p>
              <p class="text-base font-light text-gray-500 dark:text-gray-400">
                <time pubdate datetime="2023-05-02" title="May 2nd, 2023">{pubdate}</time>
              </p>
            </div>
          </div>
        </address>
        <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
      </header>
      <slot></slot>
    </article>
  </div>
</main>
