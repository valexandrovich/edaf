<template>
  <div>
    <header-component></header-component>
    <menu-component></menu-component>
    <section class="fairs-section">
      <div class="fairs-section__container container-desktop">
        <picture class="fairs-section__background adaptive-image">
          <source
            srcset="@/assets/images/background/fairs-bg-mob.png"
            media="(max-width: 768px)"
          />
          <source
            srcset="@/assets/images/background/fairs-bg-desk.png"
            media="(min-width: 767px)"
          />
          <img
            src="@/assets/images/background/fairs-bg-desk.png"
            alt="Fairs background image"
          />
        </picture>

        <div class="fairs-section__body">
          <a @click="go('fairs-online')" class="fairs-section__container-IWT">
            <picture class="picture fairs-section__IWT-image">
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

            <h2 class="fairs-section__link-heading h2">
              {{$t('fairs.online')}} <br />
              {{$t('fairs.fair')}}
            </h2>

            <div class="fairs-section__btn btn-alternate">
              {{$t('fairs.goToOnlineFair')}}
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

          <a @click="go('physical-fairs')"  class="fairs-section__container-IWT">
            <picture class="picture fairs-section__IWT-image">
              <source
                srcset="@/assets/images/other/fairs-mob.png"
                media="(max-width: 768px)"
              />
              <source
                srcset="@/assets/images/other/menu2-desk.png"
                media="(min-width: 767px)"
              />
              <img src="@/assets/images/other/menu2-desk.png" alt="#" />
            </picture>

            <h2 class="fairs-section__link-heading h2">
                  {{$t('fairs.physical')}} <br />
              {{$t('fairs.fair')}}
            </h2>

            <div class="fairs-section__btn btn-alternate">
              {{$t('fairs.goToPhysicalFair')}}
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
      </div>
    </section>
    <partner-form></partner-form>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import PartnerForm from "../components/PartnerForm.vue";
export default {
  metaInfo: {
    title: "FIRST PAN-EUROPEAN DIGITAL ART FAIR",
  },
  components: {
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PartnerForm,
  },
  methods: {
    go(path){
      this.$router.push(path)
    }
  }
};
</script>

<style>
</style>