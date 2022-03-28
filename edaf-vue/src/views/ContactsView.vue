<template>
  <div>
    <header-component></header-component>
    <main-menu></main-menu>
    <div class="contacts">
      <div class="contacts__container container-desktop">
        <!-- Absolute elements -->
        <div class="vertical-text">contacts</div>
        <!-- Absolute elements -->

        <h2 class="contacts__heading h2">contacts</h2>

        <picture
          class="
            contacts__background
            adaptive-image
            gradient-overlay gradient-overlay--to-top
          "
        >
          <source
            srcset="@/assets/images/background/contacts-bg-mob.png"
            media="(max-width: 768px)"
          />
          <source
            srcset="@/assets/images/background/contacts-bg-desk.png"
            media="(min-width: 767px)"
          />
          <img
            src="@/assets/images/background/contacts-bg-desk.png"
            alt="Home page background image"
          />
        </picture>

        <div class="contacts__body">
          <div class="contacts__body-image picture">
            <img src="@/assets/images/other/contacts-image.png" alt="Halery" />
          </div>

          <div class="contacts__body-info-container">
            <div class="contacts__body-info-item info-item">
              <div class="info-item__subitem">
                <h4 class="info-item__subitem-title h4">edaf</h4>

                <div class="info-item__subitem-logo logo">
                  <img
                    src="@/assets/images/logo/header-logo.svg"
                    alt="Logotype"
                  />
                </div>
              </div>

              <div class="info-item__subitem">
                <ul class="info-item__subitem-link-list">
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Linkedin</a
                    >
                  </li>
                  <li>
                    <a
                      href="mailto:info@edaf.eu.com"
                      class="info-item__subitem-link social-link"
                      >info@edaf.eu.com</a
                    >
                  </li>
                </ul>

                <ul class="info-item__subitem-link-list">
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Facebook</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="contacts__body-info-item info-item">
              <div class="info-item__subitem">
                <h4 class="info-item__subitem-title h4">v-art</h4>

                <div class="info-item__subitem-logo logo">
                  <img
                    class="vart-logo"
                    src="@/assets/images/logo/v-art-no-color.svg"
                    alt="Logotype"
                  />
                </div>
              </div>

              <div class="info-item__subitem">
                <ul class="info-item__subitem-link-list">
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Linkedin</a
                    >
                  </li>
                </ul>

                <ul class="info-item__subitem-link-list">
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Facebook</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer class="contacts__footer">
          <ul class="contacts__footer-list">
            <li>
              <a href="#" class="contacts__footer-item social-link">V-Art</a>
            </li>
            <li>
              <a href="#" class="contacts__footer-item social-link"
                >© 2022 V-Art</a
              >
            </li>
            <li>
              <a href="#" class="contacts__footer-item social-link"
                >Privacy policy</a
              >
            </li>
          </ul>
        </footer>
      </div>
    </div>

    <section id="partner-form" data-popup class="form-section animation hide">
      <picture class="form-section__background picture adaptive-image">
        <source
          srcset="@/assets/images/background/form-bg-mob.png"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/form-bg-desk.png"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/form-bg-desk.png"
          alt="Form background image"
        />
      </picture>

      <div class="form-section__container container-desktop">
        <header class="menu">
          <a href="index.html" class="logotype">
            <img src="@/assets/images/logo/header-logo.svg" alt="Logotype" />
          </a>

          <button data-close class="menu__btn">
            <img src="@/assets/icons/close.svg" alt="Close" />
          </button>
        </header>

        <h3 class="form-section__heading h3">Become a Partner</h3>

        <div class="form-section__body">
          <form
            data-form
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
          >
            <div class="form-section__input-container">
              <label for="name">First name</label>
              <input
                required
                type="text"
                placeholder="First name"
                name="name"
                id="name"
              />
            </div>

            <div class="form-section__input-container">
              <label for="email">Email</label>
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>

            <div class="form-section__input-container">
              <label for="company">Company</label>
              <input
                type="text"
                placeholder="Company"
                name="company"
                id="company"
              />
            </div>

            <div
              class="
                form-section__input-container
                form-section__input-container--message
              "
            >
              <label for="message">Write a Message</label>
              <input
                required
                type="text"
                placeholder="Write a Message"
                name="message"
                id="message"
              />
            </div>

            <div class="form-section__footer">
              <div class="form-section__input-container checkbox">
                <input
                  required
                  class="form-section__custom-checkbox"
                  type="checkbox"
                  name="accept"
                  id="accept"
                />

                <label for="accept">
                  I accept
                  <a href="#" class="form-section__input-accept social-link">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button type="submit" class="js-send-btn form-section__btn btn">
                Send
                <span class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import MainMenu from "../components/MainMenu.vue";
import "../assets/scripts/index.js";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    MainMenu,
  },
};
</script>

<style>
</style>