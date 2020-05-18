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
      }
      .select-option-container {
        position: relative;
        background-color: $white;
        margin-top: 15px;
        padding: 0 5px;
        border-radius: $globalBorderRadius;
        box-shadow: 0 0 20px $lightGrey;
        .option {
          padding: 5px;
          border-bottom: 1px dotted $lightGrey;
        }
        &:before {
          content: " ";
          display: inline-block;
          position: absolute;
          top: -10px;
          text-align: center;
          right: calc(100% - 55%);
          border-bottom: 10px solid $white;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
        }
      }
    }
  }
</style>

<div class="select-option">
  <span class="select-option-selected" on:click={toggleDropdown}>
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
          {opt.label}
        </li>
      {/each}
    </ul>
  {/if}
</div>
