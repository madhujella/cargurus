<script>
  export let list = [];
  export let showDropdown = false;
  export let navIcon = "";

  const toggleDropdown = e => (showDropdown = !showDropdown);
</script>

<style type="text/scss">
  @import "../../../../styles/variables.scss";
  .nav-section {
    border-radius: 50%;
    border: 1px solid $white;
    background-color: $lightGrey;
    padding: 10px;
    width: 25px;
    height: 25px;
    margin: 12px 5px 0 0;
    &.active {
      border: 1px solid $secondaryColor;
      box-shadow: 0 0 2px $secondaryColor;
    }
    .nav-icon {
      width: 20px;
    }
    .dropdown {
      margin-top: 5px;
      background-color: $white;
      box-shadow: 0px 0px 20px $lightGrey;
      padding: 10px 20px;
      border-radius: $globalBorderRadius;
      position: absolute;
      right: 0;
      width: max-content;
      top: 47px;
      &-item {
        position: relative;
        display: block;
        padding: 10px;
        border-bottom: 1px dotted $lightGrey;
        border-radius: $globalBorderRadius;
        &:hover {
          background-color: $lightGrey;
        }
      }
    }
  }
</style>

<div class="nav-section" on:click={toggleDropdown} class:active={showDropdown}>
  <div class="nav-icon" style="background-image: url({navIcon})" />
  {#if showDropdown && list.length}
    <div class="dropdown" class:active={showDropdown}>
      {#each list as l (l.label)}
        <a href={l.path} class="dropdown-item">{l.label}</a>
      {/each}
    </div>
  {/if}
</div>
