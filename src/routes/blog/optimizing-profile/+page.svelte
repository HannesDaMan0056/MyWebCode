<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
  import profileScore from "$lib/images/profile-score.png?webp&h=80";
</script>

<Post post={posts["optimizing-profile"]}>
  <p>
    Optimizing your profile on Skillbased is important to increase your visibility and chances of getting matched with relevant assignments. Here are some tips for optimizing your profile:
  </p>
  <ol>
    <li>
      Complete your profile: Make sure you have filled in all the necessary fields, including your personal information, work experience, education, skills, and achievements. The more detailed and
      comprehensive your profile is, the better chances you have of getting matched.
    </li>
    <li>
      Use relevant keywords: Use keywords that are relevant to your skills, experience, and industry in your profile description and skills section. This will make it easier for potential clients to
      find you when searching for specific skills or expertise.
    </li>
    <li>
      Highlight your achievements: Describe your job responsibilities, but also highlight your achievements and contributions in your job or project descriptions. Use numbers and data to showcase your
      impact and results, when relevant.
    </li>
    <li>
      Keep your profile up-to-date: Regularly update your profile with new skills, work experiences, and achievements. This will show potential clients that you are active and engaged in your field.
    </li>
    <li>
      Request endorsements and recommendations: Ask former colleagues or clients to endorse your skills or provide a recommendation on your profile. This will add credibility and increase your chances
      of getting hired.
    </li>
  </ol>
  <p>

    By following these tips, you will create a strong and optimized profile that will help you stand out to potential clients and increase your chances of getting matched with relevant assignments.
  </p>

  <h2>
    The profile score
  </h2>
  <p>
    The profile score on Skillbased is a helpful tool to gauge how complete and optimized your profile is. The score ranges from 0 to 100, with a higher score indicating a more complete and optimized
    profile. You can also find your profile completion score at the top right on the menu.
  </p>
  <figure><img src={profileScore} alt="profile score">
    <figcaption></figcaption>
  </figure>
  <p>
    Having a fully filled in profile is crucial for increasing your visibility and chances of getting matched with relevant assignments. By aiming for a score of 100, you can ensure that all the
    necessary fields and sections have been filled in, including your personal information, work experience, education, skills, and achievements.
  </p>
  <p>
    It is important to keep in mind that the profile score is just a guide and should not be the sole focus of your profile optimization efforts. However, it can serve as a helpful reminder to fill in
    any missing information and continuously update your profile to stay relevant and competitive in your field.
  </p>
</Post>
