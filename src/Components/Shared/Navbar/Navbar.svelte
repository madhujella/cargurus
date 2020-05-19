<script>
  import { USER_SETTINGS, ASSETS_PATHS } from "../../../utils/constants";
  import Internalization from "../../Shared/Internalization/Internalization.svelte";
  import Dropdown from "./Dropdown/Dropdown.svelte";
</script>

<style type="text/scss" global>
  @import "../../../styles/variables.scss";

  .navbar {
    height: 70px;
    max-height: 70px;
    box-shadow: 0 0px 6px $lightGrey;
    margin: 0;
    .logo {
      display: inline-block;
      width: 150px;
      margin: 22px 20px 18px 20px;
    }
    .lang {
      margin: 18px 0 16px 0;
    }
    .nav {
      &-icon {
        margin: 0 auto;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 25px;
        height: 25px;
      }
      &-section {
        cursor: pointer;
        display: inline-block;
        border-radius: $globalBorderRadius;
        position: relative;
        padding: 8px;
        margin: 4px;
        width: 80px;
        max-width: 80px;
        font-size: $fontSizeSM;
        text-align: center;
        &:hover {
          background: $lightGrey;
        }
      }
      .advertise {
        background-color: $greenColor;
      }
    }
    .user-nav {
      margin-right: 10px;
    }
  }
</style>

<nav class="navbar row">
  <div class="col-md-3 col-lg-3 col-sm-5">
    <div class="row">
      <div class="col-md-6">
        <a href="/" class="logo">
          <img src={ASSETS_PATHS.logo} alt="car gurus" />
        </a>
      </div>
      <div class="col-md-6 lang">
        <Internalization />
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-6 col-sm-5">
    <ul class="row nav center-md center-lg center-sm">
      <li class="nav-section">
        <div
          class="nav-icon"
          style="background-image: url({ASSETS_PATHS.carIcon})" />
        <a href="/cars/used" class="nav-link">Used</a>
        <a href="/cars/used" class="nav-link">New</a>
      </li>
      <li class="nav-section">
        <div
          class="nav-icon"
          style="background-image: url({ASSETS_PATHS.financeIcon})" />
        <a href="/cars/used" class="nav-link">Financing</a>
        <!-- <a href="/cars/used" class="nav-link">Car Values</a> -->
      </li>
      <li class="nav-section">
        <div
          class="nav-icon"
          style="background-image: url({ASSETS_PATHS.researchIcon})" />
        <a href="/cars/used" class="nav-link">Research</a>
        <!-- <a href="/cars/used" class="nav-link">Questions</a> -->
      </li>
      <li class="nav-section">
        <div
          class="nav-icon"
          style="background-image: url({ASSETS_PATHS.sellIcon})" />
        <a href="/cars/used" class="nav-link">Sell</a>
      </li>
      <li class="nav-section advertise">
        <div
          class="nav-icon"
          style="background-image: url({ASSETS_PATHS.sellIcon})" />
        <a href="/cars/used" class="nav-link">Advertise</a>
      </li>
    </ul>
  </div>
  <div class="col-md-3 col-lg-3 col-sm-2">
    <div class="row end-md end-sm end-lg">
      <div class="user-nav">
        <Dropdown navIcon={ASSETS_PATHS.notifyIcon} />
        <Dropdown navIcon={ASSETS_PATHS.userIcon} />
        <Dropdown list={USER_SETTINGS} navIcon={ASSETS_PATHS.caretDownIcon} />
      </div>
    </div>
  </div>
</nav>
