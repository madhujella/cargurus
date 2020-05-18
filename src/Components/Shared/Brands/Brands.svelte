<script>
  export let list;
  export let value;
</script>

<style type="text/scss">

</style>

<div class="form-group car-model">
  {#each list as brand}
    <label for={brand.name} class="form-label">
      <input
        type="radio"
        class="form-control"
        name="brand"
        id={brand.name}
        value={brand.name}
        bind:group={value} />
      {brand.name}
    </label>
  {/each}
</div>
