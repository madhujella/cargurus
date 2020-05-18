<script>
  import { LANGUAGES } from "../../../utils/constants";
  import SelectDropdown from "../../UI/SelectDropdown/SelectDropdown.svelte";

  export let selectedLang = LANGUAGES[1];
</script>

<SelectDropdown defaultValue={selectedLang} options={LANGUAGES} caretDown />
