<script>
  export let zipCode;
</script>

<style type="text/scss">

</style>

<div class="form-group">
  <label class="form-label" for="zipcode">Zipcode</label>
  <input type="number" id="zipcode" class="form-control" bind:value={zipCode} />
</div>
