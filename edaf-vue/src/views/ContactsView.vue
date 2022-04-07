<template>
  <div>
    <header-component></header-component>
    <menu-component></menu-component>
    <div class="contacts">
      <div class="contacts__container container-desktop">
        <!-- Absolute elements -->
        <div class="vertical-text">{{$t('contacts.contacts')}}</div>
        <!-- Absolute elements -->

        <h2 class="contacts__heading h2">{{$t('contacts.contacts')}}</h2>

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
                <h4 class="info-item__subitem-title h4">{{$t('contacts.edaf')}}</h4>

                <div class="info-item__subitem-logo logo">
                  <img
                    src="@/assets/images/logo/header-logo.svg"
                    alt="Logotype"
                  />
                </div>
              </div>

              <div class="info-item__subitem">
                <ul class="info-item__subitem-link-list">
                  <!-- <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Linkedin</a
                    >
                  </li> -->
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
                    <a href="https://www.facebook.com/V.Art.digital/" class="info-item__subitem-link social-link"
                      >Instagram</a
                    >
                  </li>
                  <!-- <li>
                    <a href="#" class="info-item__subitem-link social-link"
                      >Facebook</a
                    >
                  </li> -->
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
                    <a href="https://twitter.com/V_Art_Digital" class="info-item__subitem-link social-link"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/42436332/" class="info-item__subitem-link social-link"
                      >Linkedin</a
                    >
                  </li>
                </ul>

                <ul class="info-item__subitem-link-list">
                  <li>
                    <a href="https://instagram.com/v.art.digital?igshid=twe6mh6mrdcz" class="info-item__subitem-link social-link"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a href="https://www.facebook.com/V.Art.digital/" class="info-item__subitem-link social-link"
                      >Facebook</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </div>
    </div>
<partner-form></partner-form>
    
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
import PartnerForm from "../components/PartnerForm.vue";
// import "../assets/scripts/index.js";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PartnerForm
  },
};
</script>

<style>
</style>