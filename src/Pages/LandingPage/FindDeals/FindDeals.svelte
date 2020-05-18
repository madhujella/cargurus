<script>
  import ZipcodeInput from "../../../Components/Shared/ZipcodeInput/ZipcodeInput.svelte";
  import Brands from "../../../Components/Shared/Brands/Brands.svelte";
  import MoreButton from "../../../Components/UI/MoreButton/MoreButton.svelte";
  import DealType from "../../../Components/Shared/DealType/DealType.svelte";
  import { DEALTYPES, POP_BRANDS } from "../../../utils/constants";
  let zipCode = null;
  let showModal = false;
  let selectedBrand = "";
  let selectedDealType = "";
  let selectedModel = "";
  let showBodyStyle = false;

  $: toggleZipCode = zipCode > 10000;

  $: toggleModal = e => (showModal = !showModal);

  $: toggleCarSelection = e => (showBodyStyle = !showBodyStyle);
</script>

<style type="text/scss">

</style>

<div class="search-deals">
  <nav class="search-tab">
    <ul class="tab-nav" />
    <div class="tab-content">
      {#if !toggleZipCode}
        <div class="form-heading">Enter zipcode to proceed</div>
        <ZipcodeInput bind:zipCode />
      {:else}
        <DealType list={DEALTYPES} bind:value={selectedDealType} />
        <div class="row">
          <div class="col-md-12">
            <span>Brand</span>
            <button on:click={toggleCarSelection}>swap</button>
            <span>Body</span>
          </div>
        </div>
        {#if !showBodyStyle}
          <label>Popular Brands</label>
          <Brands list={POP_BRANDS} bind:value={selectedBrand} />
          <MoreButton handler={toggleModal} />
          <div class="selected-car">
            <span class="selected-brand">{selectedBrand}</span>
            <span class="selected-model">{selectedModel}</span>
          </div>
        {:else}
          <label>Some body styles</label>
          <Brands list={POP_BRANDS} bind:value={selectedBrand} />
        {/if}
        <ZipcodeInput bind:zipCode />
      {/if}
    </div>
  </nav>

</div>
