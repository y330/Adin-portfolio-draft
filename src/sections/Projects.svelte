<script>
  import Project from "../components/Project.svelte";

  import { onMount } from "svelte";
  import projects from "../../content/projects.json";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<section>
  {#if visible}
    {#each projects as project}
      <!-- fill Project with projects data -->
      <Project {...project} />
    {/each}
  {/if}
</section>

<style>
</style>
