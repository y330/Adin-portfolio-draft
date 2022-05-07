<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let title;
  export let imgSrc;
  export let description;
  export let stack;
  export let purpose;
  export let stack_explainer;
  export let code_link;
  export let live_link;
</script>

<div in:fade={{ duration: 1000 }} class="project">
  <div class="project__image-container">
    <img src={imgSrc} alt={title} />
  </div>

  <div class="project__content-wrapper">
    <h1>{title}</h1>
    <h2>{description}</h2>
    <p>{purpose}</p>
    <ul>
      {#each stack as item}
        <li>
          <p>{item}</p>
        </li>
      {/each}
    </ul>
    <p>{stack_explainer}</p>
    <div class="project__links-wrapper">
      {#if live_link}
        <a
          class="project__link-button"
          href={live_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          APP
        </a>
      {/if}
      <a
        class="project__link-button"
        href={code_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        CODE
      </a>
    </div>
  </div>
</div>

<style>
  .project {
    border: 1px solid rgba(14, 237, 207, 0.2);
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px rgba(14, 237, 207, 0.3);
    display: flex;
    margin-top: 6em;
    padding: 2em 1em;
  }

  .project__image-container {
    margin-right: 2em;
    width: 50%;
  }

  .project__image-container img {
    display: block;
    height: auto;
    width: 100%;
  }

  .project__content-wrapper {
    width: 50%;
  }

  .project__content-wrapper h2 {
    font-style: italic;
    margin: 0.75em 0;
  }

  .project__content-wrapper ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: circle;
    margin: 1em;
  }

  .project__content-wrapper li {
    margin: 0.25em 1.5em 0.25em 0.5em;
  }

  .project__links-wrapper {
    display: flex;
    margin-top: 2em;
  }

  .project__link-button {
    align-items: center;
    background: black;
    border-radius: 5px;
    border: 2px solid white;
    color: white;
    display: flex;
    font-weight: bold;
    margin-right: 1em;
    padding: 0.75em;
  }

  .project__link-button:hover {
    border-color: rgba(14, 237, 207, 0.8);
    color: rgba(14, 237, 207, 0.8);
  }

  /* Tablet */
  @media (max-width: 1000px) {
    .project {
      flex-wrap: wrap;
    }

    .project__image-container {
      margin-right: 0em;
      width: 100%;
    }

    .project__image-container img {
      width: 100%;
    }

    .project__content-wrapper {
      margin-top: 2em;
      width: 100%;
    }
  }

  /* Phone */
  @media (max-width: 400px) {
    .project {
      border: none;
      box-shadow: none;
      padding: 0;
    }

    .project__image-container img {
      border: 1px solid grey;
      width: 100%;
    }
  }
</style>
