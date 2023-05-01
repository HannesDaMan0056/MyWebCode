<script>
  import Post from "$lib/posts/Post.svelte";
  import { posts } from "$lib/posts";
</script>

<Post post={posts["registration"]}>
  <p>
    If you're interested in creating a free Skillbased consultant account, registration is the first step. Here's a simple guide on how to create an account through registration:
  </p>
  <ol>
    <li>
      Go to the Skillbased website and hover over "Register" or "Sign up" in the top navigation menu.
    </li>
    <li>
      Click on "Consultants" in the dropdown menu that appears.
      <!--<figure><img src="/assets/images/Skillbased/registration.png" alt="registration">
        <figcaption></figcaption>
      </figure>-->
    </li>
    <li>
      Fill in your first name, last name, email address, and create a strong password. Read and agree to the User Agreement & Privacy Policy.
    </li>
    <li>
      Confirm your email address through the email verification sent to the email you provided during registration.
    </li>
    <li>
      Once your email is verified, log in and start using the platform.
    </li>
  </ol>
  <p>
    Creating an account on Skillbased as a consultant is quick and simple. All you need is your first name, last name, email address, and a strong password. After confirming your email
    address, you can login and start using the platform for free.
  </p>
</Post>
