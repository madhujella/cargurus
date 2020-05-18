<script>
  import { Router } from "svelte-router-spa";
  import routes from "./routes/routes";
</script>

<style global type="text/scss">
  @import "./styles/main.scss";
</style>

<Router {routes} />
