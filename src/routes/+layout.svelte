<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from 'flowbite-svelte';
  let navClass = 'bg-white dark:bg-black border-gray-200 px-4 lg:px-6 dark:bg-gray-800';
  let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
  const breadcrumb_title = 'Headers';
  const title = 'Header';
  const dir = 'marketing';
  const description =
    'Get started with the header component for the navigation of a website featuring multi-level dropdowns, mega-menus, search bars, language selectors, and more.';
  import "../app.postcss";
  import "../app.postcss";

  import logo from "$lib/images/black-logo.png";
</script>

<header class="dark">
  <Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
    <NavBrand href="/" data-sveltekit-preload-data="off" >
        <img src={logo} class="mr-3 h-14" alt="Skillbased Logo" />
    </NavBrand>
    <div class="flex items-center lg:order-2">
      <NavHamburger
        on:click={toggle}
        btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      />
    </div>
    <NavUl
      {hidden}
      divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 uppercase"
    >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/home-consultant">Consultant</NavLi>
      <NavLi href="/consultancy">Consultancy</NavLi>
      <NavLi href="/blog" active={true}>Guide</NavLi>
    </NavUl>
  </Navbar>
</header>

<slot />
