<template>
  <section data-popup id="menu" class="menu-section animation hide">
    <div class="menu container-desktop">
      <a @click="go('home')" class="social-link-secondary logotype">
        <img src="@/assets/images/logo/header-logo.svg" alt="Logotype" />
      </a>

      <button data-close class="menu__btn">
        <img src="@/assets/icons/burger.svg" alt="Menu close" />
      </button>
    </div>

    <picture class="menu-section__background adaptive-image">
      <source
        srcset="@/assets/images/background/menu-bg-mob.png"
        media="(max-width: 768px)"
      />
      <source
        srcset="@/assets/images/background/menu-bg.png"
        media="(min-width: 767px)"
      />
      <img
        src="@/assets/images/background/menu-bg.png"
        alt="Home background image"
      />
    </picture>

    <div class="menu-section__container container-desktop">
      <div class="menu-section__body">
        <div class="menu-section__column">
          <ul class="menu-section__link-list">
            <li>
              <a class="menu-section__link-item h3" @click="go('home')">{{
                $t("mainMenu.home")
              }}</a>
            </li>

            <li>
              <a
                class="menu-section__link-item h3"
                @click="go('public-program')"
                >{{ $t("mainMenu.publicProgram") }}</a
              >
            </li>

            <li>
              <a
                class="menu-section__link-item h3"
                @click="go('application')"
                >{{ $t("mainMenu.application") }}</a
              >
            </li>

            <li>
              <a class="menu-section__link-item h3" @click="go('contacts')">{{
                $t("mainMenu.contacts")
              }}</a>
            </li>
          </ul>
        </div>

        <div class="menu-section__column">
          <div class="menu-section__lang menu-section__lang--desk">
            <button
              class="
                menu-section__lang-btn menu-section__lang-btn-l
                social-link
              "
              @click="setLocale('uk')"
            >
              Uk
            </button>
            <span>|</span>
            <button
              class="
                menu-section__lang-btn
                active
                menu-section__lang-btn-l
                social-link
              "
              @click="setLocale('en')"
            >
              En
            </button>
          </div>

          <div class="menu-section__images-container" >
            <a @click="go('fairs-online')" class="menu-section__container-IWT">
              <picture class="picture menu-section__IWT-image">
                <source
                  srcset="@/assets/images/other/menu1-mob.png"
                  media="(max-width: 768px)"
                />
                <source
                  srcset="@/assets/images/other/menu1-desk.png"
                  media="(min-width: 767px)"
                />
                <img src="@/assets/images/other/menu1-desk.png" alt="#" />
              </picture>

              <h4 class="menu-section__link-heading h4">
                {{ $t("mainMenu.onlineFair") }}
              </h4>

              <div class="menu-section__btn btn-alternate">
                {{ $t("mainMenu.goToOnlineFair") }}
                <div class="btn-arrows btn-arrows--white">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </a>

            <a @click="go('physical-fairs')" class="menu-section__container-IWT" style="visibility: hidden">
              <picture class="picture menu-section__IWT-image">
                <source
                  srcset="@/assets/images/other/menu2-mob.png"
                  media="(max-width: 768px)"
                />
                <source
                  srcset="@/assets/images/other/menu2-desk.png"
                  media="(min-width: 767px)"
                />
                <img src="@/assets/images/other/menu2-desk.png" alt="#" />
              </picture>

              <h4 class="menu-section__link-heading h4">
                {{ $t("mainMenu.physccalFair") }}
              </h4>

              <div class="menu-section__btn btn-alternate">
                {{ $t("mainMenu.goToPhysccalFair") }}
                <div class="btn-arrows btn-arrows--white">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </a>
          </div>

          <a
            href="#"
            data-href="partner-form"
            class="menu-section__IWT-desk-btn btn"
          >
            {{ $t("mainMenu.becomeAPartner") }}
            <span class="btn-arrows">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="menu-section__footer container-desktop footer">
      <ul
        class="
          menu-section__footer-link-list menu-section__footer-link-list--left
        "
      >
        <li>
          <a
            href="https://v-art.digital/"
            class="menu-section__footer-link social-link"
            >V-Art</a
          >
        </li>
        <li class="menu-section__footer-link-container--center">
          <p class="menu-section__footer-link social-link">© 2022 V-Art</p>
        </li>
      </ul>

      <ul
        class="
          menu-section__footer-link-list menu-section__footer-link-list--right
        "
      >
        <li>
          <div class="menu-section__lang menu-section__lang--mob">
            <button class="menu-section__lang-btn menu__lang-btn-l social-link">
              ru
            </button>
            <span>|</span>
            <button
              class="
                menu-section__lang-btn
                active
                menu-section__lang-btn-l
                social-link
              "
            >
              En
            </button>
          </div>
        </li>
        <li>
          <a href="#" class="menu-section__footer-link social-link">{{
            $t("mainMenu.privacyPolicy")
          }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      localStorage.setItem("lang", locale);
      this.$i18n.locale = locale;
      let params = this.$route.params
      params.locale = locale
      this.$router.push({name: this.$route.name, params : params})
  // console.log(this.$route.p);
    },
    go(path) {
      this.$router.push({ name: path }).catch((err) => {});
    },
  },
  mounted() {
    const bodyScrollLock = require("body-scroll-lock");
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;
    const homeSection = document.querySelector("#home-section");
    if (homeSection) {
      disableBodyScroll(homeSection);
      setTimeout(() => {
        homeSection.classList.add("hide");
        homeSection.classList.remove("show");
        enableBodyScroll(homeSection);
      }, 2000);
    }
    const AOS = require("aos");
    AOS.init();
  },
};
</script>

<style>
</style>