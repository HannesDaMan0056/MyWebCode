<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
  import uploadProfile from "$lib/images/importing-profile.png?webp&quality=100";
</script>

<Post post={posts["importing-profile"]}>
  <p>
    Are you looking to quickly populate your Skillbased profile with your LinkedIn information? Here's a step-by-step guide on how to do it:
  </p>
  <ol>
    <li>
      Log into LinkedIn and view your profile.
    </li>
    <li>
      In the header section, click the 'More' button and select 'Save to PDF'.
    </li>
    <li>
      Save the profile, and make sure to remember the filename and path.
    </li>
    <li>
      Go back to Skillbased and navigate to the 'Settings' section.
    </li>
    <li>
      Select 'Upload LinkedIn PDF Profile'.
      <figure><img src={uploadProfile} alt="upload profile button">
        <figcaption></figcaption>
      </figure>
    </li>
    <li>
      Look for and select the LinkedIn profile you just saved.
    </li>
    <li>
      After a few seconds, relevant data that was possible to capture will be added to the relevant sections of your Skillbased profile. You'll be able to detect what data was added
      through the orange frame.
    </li>
    <li>
      The imported data sections need to be updated and completed with certain meta-data (industry, functional area, etc.) before you can save it.
    </li>
    <li>
      Update and save all data fields that you want to reuse, remove the ones that you don't want to use.
    </li>
    <li>
      You can repeat the import process anytime. Data circled by the orange frame will not be saved to your profile until you update and save it.
    </li>
  </ol>
  <p>
    Sections that typically could be updated from the LinkedIn profile are:
  </p>
  <ul>
    <li>
      Profile (name and contact information, if the fields are empty)
    </li>
    <li>
      Work Experience (title, name of company, start and end date, description)
    </li>
    <li>
      Education (name of institution, start and end date)
    </li>
    <li>Training (name of course/certification, issuing organization, issue date)
      Skills (skill name)
    </li>
  </ul>
  <p>
    Please note that skills that are imported are not rated to skill level and years practiced, nor are they tagged to the project or work experience where it was practiced. You can update
    the skills in the 'Skills' section and later tag them to each project or work experience where they were used and developed.
  </p>
</Post>
