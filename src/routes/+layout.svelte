<script>
  import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader, Chevron } from 'flowbite-svelte';
  import "../app.postcss";
  import logo from "$lib/images/color-logo.gif";

  let mobileMenuOpen = false;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<nav class="bg-[#111] min-h-[50px]" style="font-family: 'Montserrat', 'Open Sans', sans-serif;">
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4">
    <a href="/" class="flex items-center py-[2px]" data-sveltekit-preload-data="off">
      <img src={logo} class="h-[45px]" alt="Skillbased Logo" />
    </a>

    <div class="flex items-center lg:order-2">
      <div class="hidden lg:block">
        <button class="text-[#999] hover:text-white text-[13px] uppercase font-medium tracking-[2px] transition-colors duration-500"><Chevron aligned>Log in</Chevron></button>
        <Dropdown class="w-44 bg-neutral-800 border-neutral-700">
          <DropdownHeader class="text-gray-300">SkillBased platform</DropdownHeader>
          <DropdownDivider class="bg-neutral-700" />
          <DropdownItem href="/consultant/" target="_blank" class="text-gray-300 hover:bg-neutral-700">Consultant</DropdownItem>
          <DropdownItem href="/agent/" target="_blank" class="text-gray-300 hover:bg-neutral-700">Consultancy</DropdownItem>
        </Dropdown>
      </div>
      <button
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-300 rounded-lg lg:hidden hover:bg-neutral-800"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>

    <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 {mobileMenuOpen ? '' : 'hidden'}">
      <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-6 lg:mt-0 uppercase text-[13px] font-medium tracking-[2px]">
        <li><a href="/" class="block py-2 lg:py-4 text-[#999] hover:text-white transition-colors duration-500">Home</a></li>
        <li><a href="/home-consultant" class="block py-2 lg:py-4 text-[#999] hover:text-white transition-colors duration-500 flex items-center">
          <svg class="w-[14px] h-[14px] mr-[7px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          Consultant</a></li>
        <li><a href="/consultancy" class="block py-2 lg:py-4 text-[#999] hover:text-white transition-colors duration-500 flex items-center">
          <svg class="w-[14px] h-[14px] mr-[7px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z"/></svg>
          Consultancy</a></li>
        <li><a href="/about_us" class="block py-2 lg:py-4 text-[#999] hover:text-white transition-colors duration-500 flex items-center">
          <svg class="w-[14px] h-[14px] mr-[7px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
          About Us</a></li>
        <li><a href="/blog" class="block py-2 lg:py-4 text-[#999] hover:text-white transition-colors duration-500 flex items-center">
          <svg class="w-[14px] h-[14px] mr-[7px]" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          Guide</a></li>
      </ul>
    </div>
  </div>
</nav>

<slot />
