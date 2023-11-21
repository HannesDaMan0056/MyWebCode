<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
  import uploadProfile from "$lib/images/importing-profile.png?webp&quality=100";
</script>

<Post post={posts["importing-profile"]}>
  <p>
    Are you interested in enriching your Skillbased profile with your LinkedIn information? We'll guide you through the process, offering two options for profile import. In this step-by-step guide,
    we'll explain both methods and why having access to your complete LinkedIn data can significantly benefit your Skillbased profile.
  </p>
  <h2>Option 1: Profile Import</h2>
  <p>Importing your profile is quick and easy but does not capture that much detail.</p>
  <h3>Quick Import Steps:</h3>
  <ol>
    <li>Log into LinkedIn and view your profile.</li>
    <li>In the header section, click the 'More' button and select 'Save to PDF.'</li>
    <li>Save the profile, and make sure to remember the filename and path.</li>
    <li>Go back to Skillbased and navigate to the 'Settings' section.</li>
    <li>Select 'Upload LinkedIn Profile.'
      <figure><img src={uploadProfile} alt="upload profile button">
        <figcaption></figcaption>
      </figure>
    </li>
    <li>Look for and select the LinkedIn profile you just saved.</li>
    <li>After a few seconds, relevant data that was possible to capture will be added to the relevant sections of your Skillbased profile. You'll be able to detect what data was added through the
      orange frame.
    </li>
  </ol>

  <h2>Option 2: Download Full LinkedIn Data</h2>
  <p>If you have spent some effort in making a good LinkedIn profile, it will be worth going for this option, that will get all your essential information from your public profile to your Skillbased
    profile. It is comprehensive download of all your data, including work experiences, projects, educational history, certifications, and more.</p>
  <h3>Steps to Download Your Full LinkedIn Data:</h3>
  <ol>
    <li>Log into LinkedIn and go to the 'Settings &amp; Privacy' section.</li>
    <li>Under the 'How LinkedIn uses your data' section, click on 'Getting a copy of your data.'</li>
    <li>Select the data you want to export. Make sure to include everything you might want to showcase on Skillbased.</li>
    <li>Request your data archive, and when prompted, choose to download it in .zip format. Please note that it might take up to 24 hours for the data to be ready.</li>
    <li>You will receive a confirmation email from LinkedIn acknowledging your data download request.</li>
    <li>After the data is prepared, typically within 24 hours, LinkedIn will send you another email with a download link.</li>
    <li>Once you receive the download link, save the .zip archive to your computer.</li>
  </ol>

  <h3>Completing the Import Process:</h3>
  <p>Once you have your LinkedIn data archive, follow the same steps mentioned in the quick import section to upload your data to Skillbased.</p>
  <p>After the import, you'll need to update and save the data fields you want to reuse and remove any unnecessary information. Remember that the sections typically updated from LinkedIn data include
    your Profile, Work Experience, Education, Training, and Skills.</p>
  <p><em>Please note that skills that are imported are not rated to skill level and years practiced, nor are they tagged to the project or work experience where it was practiced. You can update the
    skills in the 'Skills' section and later tag them to each project or work experience where they were used and developed.</em></p>
  <h3>Conclusion</h3>
  <p>Enhance your Skillbased profile by importing your LinkedIn data effectively. In this guide, we've outlined two options for profile import, with a strong recommendation for downloading your full
    LinkedIn data. This approach ensures a more thorough and accurate representation of your professional journey on Skillbased. By making this choice, you can save time, avoid manual data entry, and
    maintain data integrity in your profile.</p>
</Post>
