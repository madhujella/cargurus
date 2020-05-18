<script>
  import { USER_SETTINGS, ASSETS_PATHS } from "../../../../utils/constants";
  export let showDropdown = false;

  const toggleDropdown = e => (showDropdown = !showDropdown);
</script>

<style type="text/scss">
  @import "../../../../styles/variables.scss";
  .user-settings-dropdown {
    margin-top: 5px;
    background-color: $white;
    box-shadow: 0px 0px 20px $lightGrey;
    padding: 0 20px;
    border-radius: $globalBorderRadius;
    .dropdown-item {
      position: relative;
      display: block;
      padding: 10px;
      border-bottom: 1px dotted $lightGrey;
      &:before {
        content: " ";
        display: inline-block;
        position: absolute;
        top: -10px;
        text-align: center;
        right: calc(100% - 102%);
        border-bottom: 10px solid $white;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
      }
    }
  }
</style>

<div
  class="nav-section user-settings"
  on:click={toggleDropdown}
  on:active={toggleDropdown}>
  <div
    class="nav-icon"
    style="background-image: url({ASSETS_PATHS.caretDownIcon})" />
</div>
{#if showDropdown}
  <div class="user-settings-dropdown" class:active={showDropdown}>
    {#each USER_SETTINGS as opt (opt.label)}
      <a href={opt.path} class="dropdown-item">{opt.label}</a>
    {/each}
  </div>
{/if}
