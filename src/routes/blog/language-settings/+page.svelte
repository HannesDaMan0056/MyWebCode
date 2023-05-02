<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
  import language from "$lib/images/language.png?webp";
</script>

<Post post={posts["language-settings"]}>
  <p>
    On Skillbased, you can choose between the Swedish and English language settings. The language setting is displayed as a Swedish or English flag in the top right corner of the website. The language
    you select as your main language will determine the default language for your profile, but you can create separate profiles in both languages.
  </p>
  <p>
    Having the option to create profiles in both languages is essential for those who may be applying for jobs in both Swedish and English-speaking environments. Our CV creator tool also allows you to
    select the language of the CV you want to generate, with the respective flag for each language option. This means you can create customized CVs or resumes in either language, depending on the job
    application requirements.
  </p>
  <figure><img src={language} alt="language">
    <figcaption></figcaption>
  </figure>
  <p>
    In summary, our language settings allow you to tailor your profile and job applications to the language requirements of potential employers. By having the option to create profiles and CVs in both
    Swedish and English, you can increase your chances of being noticed and considered for job opportunities in different language environments.
  </p>
</Post>
