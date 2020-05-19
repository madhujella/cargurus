<script>
  import { ASSETS_PATHS } from "../../../utils/constants";

  export let defaultValue;
  export let options = [];
  export let caretDown = false;

  let showDropdown = false;

  $: defaultValue;

  const toggleDropdown = e => (showDropdown = !showDropdown);

  const onSelect = value => {
    defaultValue = options.find(v => v.value === value);
    toggleDropdown();
  };
</script>

<style type="text/scss">
  @import "../../../styles/variables.scss";
  .select {
    &-option {
      width: max-content;
      font-size: $fontSizeSM;
      &-selected {
        display: inline-block;
        padding: 5px 10px;
        cursor: pointer;
        border: 1px solid $lightGrey;
        border-radius: $globalBorderRadius;
        .caret-down img {
          width: 8px;
          height: 8px;
        }
        &.active {
          border: 1px solid $secondaryColor;
          box-shadow: 0 0 2px $secondaryColor;
        }
      }
      .select-option-container {
        position: relative;
        background-color: $white;
        margin-top: 5px;
        padding: 5px;
        border-radius: $globalBorderRadius;
        box-shadow: 0 0 20px $lightGrey;
        .option {
          cursor: pointer;
          padding: 5px;
          border-bottom: 1px dotted $lightGrey;
          border-radius: $globalBorderRadius;
          &:hover {
            background-color: $lightGrey;
          }
        }
      }
      .option-icon {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        display: inline-block;
        padding: 11px;
        margin-bottom: -6px;
        margin-right: 5px;
      }
    }
  }
</style>

<div class="select-option">
  <span
    class="select-option-selected"
    on:click={toggleDropdown}
    class:active={showDropdown}>
    {#if defaultValue.icon}
      <span
        class="option-icon"
        style="background-image: url({defaultValue.icon})" />
    {/if}
    {defaultValue.label}
    {#if caretDown}
      <span class="caret-down">
        <img src={ASSETS_PATHS.caretDownIcon} />
      </span>
    {/if}
  </span>
  {#if showDropdown}
    <ul class="select-option-container" class:active={showDropdown}>
      {#each options as opt (opt.value)}
        <li
          class="option"
          class:active={defaultValue.value !== opt.value}
          value={opt.value}
          on:click={() => onSelect(opt.value)}>
          {#if opt.icon}
            <span
              class="option-icon"
              style="background-image: url({opt.icon})" />
          {/if}
          {opt.label}
        </li>
      {/each}
    </ul>
  {/if}
</div>
