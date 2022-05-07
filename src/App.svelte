<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  //   import Socials from "./Socials.svelte";
  import Projects from "./sections/Projects.svelte";
  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<main>
  {#if visible}
    <div transition:slide={{ delay: 250, duration: 300 }} class="copy">
      <h1>Hey, Im Adin.</h1>
      <h2>
        I am Adin. I am an Engineer. Ooga Booga.
        <a
          href="https://linkedin.com/in/adin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on LinkedIn
        </a>
      </h2>
      <!-- <Socials /> -->
    </div>
  {/if}
  <Projects />
  <footer>
    Developed by <a href="https://github.com/y330"> Yonah Aviv </a>
  </footer>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 4em auto;
    padding: 0 2em;
  }
  .copy {
    width: 50%;
  }
  h2 {
    margin: 0.75em 0;
  }
  a {
    text-decoration: underline;
  }
  footer {
    margin-top: 10em;
    text-align: center;
  }
  /* Tablet */
  @media (max-width: 1000px) {
    main {
      max-width: 800px;
    }
    .copy {
      width: 100%;
    }
  }
  /* Phone */
  @media (max-width: 400px) {
    main {
      padding: 0 1em;
    }
  }
</style>
