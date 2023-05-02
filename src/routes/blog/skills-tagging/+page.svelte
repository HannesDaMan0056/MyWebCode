<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
</script>

<Post post={posts["skills-tagging"]}>
  <p>
    By connecting your skills to each job and project you have worked on, you can showcase how your competence has developed and contributed to your professional growth. Here's how you can add and
    connect skills to each job or project on Skillbased:
  </p>
  <ol>
    <li>
      Select the job or project that you want to add skills to.
    </li>
    <li>
      Click on 'Connect skills'.
    </li>
    <li>
      You will see a pop-up window that lists all the skills you have already defined. The skills that are already selected for the specific job or project you want to add to will be ticked.
    </li>
    <li>
      To add a new skill, click the 'Add skill' button. A dialog box will open up where you can define the skill name, level, and practice period.
    </li>
    <li>
      If you start typing the first character of a skill name, related skills already registered in the system will appear. You can select the appropriate skill from the list or add a new one if you
      don't find what you're looking for.
    </li>
    <li>
      Self-assess the skill on its level of competence and years practiced, and update it as you progress.
    </li>
    <li>
      In the 'Skills' section, you can manage and update the skills you have added and how they are connected to your jobs and projects. You can view which position or project you tagged it to and
      select the link back to the project if you want to edit it.
    </li>
  </ol>
  <p>
    Since the skills are self-rated, it's important to review and update them as you progress. You can add skills to your summary list on this page, or when tagging them to specific jobs or projects
    where they were practiced. By doing this, you build a comprehensive story of what you know and how you have grown professionally.
  </p>
</Post>
