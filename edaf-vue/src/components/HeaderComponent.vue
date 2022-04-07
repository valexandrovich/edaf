<template>
  <header class="menu container-desktop">
    <a @click="go('home')" class="social-link-secondary logotype">
      <img src="@/assets/images/logo/header-logo.svg" alt="Logotype" />
    </a>

    <button data-href="menu" class="menu__btn">
      <img src="@/assets/icons/header-btn-not-active.svg" alt="Menu" />
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      selectors: {
        form: "[data-form]",
        email: "#email",
        acceptForm: "#accept",
        popup: "[data-popup]",
        closeBtn: "[data-close]",
        sendBtn: ".js-send-btn",
        popupControl: "[data-href]",
        menuOpen: "[data-menu-open]",
        menuClose: "[data-menu-close]",
        menu: "#menu",
      },
    };
  },
  mounted() {
    const bodyScrollLock = require("body-scroll-lock");
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;
    //Hide popup sections
    document.querySelectorAll(this.selectors.popup).forEach((elem) =>
      elem
        .querySelector(this.selectors.closeBtn)
        .addEventListener("click", function (e) {
          elem.classList.add("hide");
          elem.classList.remove("show");
          enableBodyScroll();
        })
    );
    // //Open popup sections
    document.querySelectorAll(this.selectors.popupControl).forEach((elem) =>
      elem.addEventListener("click", function () {
        const popup = document.querySelector(`#${this.dataset.href}`);
        disableBodyScroll();
        popup.classList.add("show");
        popup.classList.remove("hide");
      })
    );
  },
  methods: {
    go(path) {
      this.$router.push({ name: path }).catch((err) => {});
    },
  },
};
</script>

<style>
</style>