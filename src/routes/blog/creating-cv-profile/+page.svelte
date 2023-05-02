<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
  import cvProfiles from "$lib/images/cv-profiles.png?webp";
  import cvProfileButtons from "$lib/images/cv-profile-buttons.png?webp";
</script>

<Post post={posts["importing-profile"]}>
  <p>
    With Skillbased, you can easily generate multiple tailored CV profiles based on the information you have entered about your career history. It is a powerful tool that can help you create
    customized profiles suited for specific jobs you are interested in applying to.
  </p>
  <p>
    To get started, simply add a new CV profile and choose from a variety of styles and layouts. Once you have selected a style that suits your purpose, the tool will automatically compile your career
    history as stored, including tags for skills, industries, functions, and more. You can then manually edit, hide sections, rearrange section order, and customize the profile to fit your needs.
  </p>
  <p>
    You can name CV profiles by type of role or specific job you are applying for, making it easy to reuse them later. And if you need to make changes to the text within each profile, you can do so
    independently, without affecting the data stored in the database.
  </p>
  <figure><img src={cvProfiles} alt="cv profiles">
    <figcaption></figcaption>
  </figure>
  <p>
    Remember to select <b>"Recreate"</b> to update the profile with any changes you have made.
  </p>
  <p>
    Once you have created your tailored profile, you can manage and distribute it in a variety of ways. You can share it with others by generating a unique URL, open it for review, generate a PDF
    document, update it, or remove it entirely. There is currently no limit to the number of profiles you can add and save, making it easy to keep track of all of your tailored profiles in one place.
  </p>
  <figure><img src={cvProfileButtons} alt="cv profile buttons">
    <figcaption></figcaption>
  </figure>
  <p>
    Skillbased's CV profile generator is a powerful tool that can help you create customized profiles for specific job applications. By following the tips and utilizing the features described above,
    you can increase your chances of getting hired and land your dream job or assignment.
  </p>
</Post>
