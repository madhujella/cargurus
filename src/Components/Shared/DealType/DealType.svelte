<script>
  export let list;
  export let value;
</script>

<style>

</style>

{#each list as type}
  <label for={type} class="form-label">
    <input
      type="radio"
      class="form-control"
      name="brand"
      id={type}
      value={type}
      bind:group={value} />
    {type}
  </label>
{/each}
