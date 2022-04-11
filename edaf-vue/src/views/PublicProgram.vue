<template>
  <div>
    <header-component></header-component>
    <menu-component></menu-component>
    <section class="collection-hero">
      <div class="collection-hero__container container">
        <h1 data-aos="fade-up" class="h2 collection-hero__heading">
          {{$t('publicProgram.publicProgram')}}
        </h1>

        <div data-aos="fade-up" class="collection-hero__text">
          {{$t('publicProgram.about')}}
        </div>
      </div>

      <picture class="collection-hero__background adaptive-image">
        <source
          srcset="@/assets/images/background/collection-header-bg.png"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/collection-header-bg.png"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/collection-header-bg.png"
          alt="Collection background image"
        />
      </picture>
    </section>

    <div class="section-background gradient-overlay gradient-overlay--to-top">
      <picture class="adaptive-image">
        <source
          srcset="@/assets/images/background/pubic-program.jpeg"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/pubic-program.jpeg"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/pubic-program.jpeg"
          alt="Collection background image"
          data-sizes="auto"
          data-srcset="@/assets/images/background/pubic-program.jpeg 500w,
                  @/assets/images/background/pubic-program.jpeg 640w,
                  @/assets/images/background/pubic-program.jpeg 1024w"
        />
      </picture>
    </div>

    <div class="public-program">
      <div class="public-program__container container">
        <div data-aos="fade-up" class="vertical-text vertical-text--left">
          {{$t('publicProgram.public')}}
        </div>
        <div data-aos="fade-up" class="vertical-text vertical-text--right">
          {{$t('publicProgram.program')}}
        </div>
        <div class="public-program__grid grid">
          <div  data-aos="fade-up" class="services-card grid-cell">
            <a class="services-card__link" @click="go('events', 'panelDiscussionAndForum')" ></a>
            <h2 class="services-card__heading h5">
              {{$t('publicProgram.panel')}}
            </h2>
            <div class="services-card__inner">
              <div class="services-card__image">
                <div class="services-card__image-wrapper">
                  <img
                    src="@/assets/images/product/image 23.png"
                    alt="Panel discussions and forum"
                  />
                </div>
              </div>
              <!-- <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> -->
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a class="services-card__link" @click="go('events', 'artistTalks')"></a>
            <h2 class="services-card__heading h5">{{$t('publicProgram.artistTalks')}}</h2>
            <div class="services-card__inner">
              <div class="services-card__image">
                <div class="services-card__image-wrapper">
                  <img
                    src="@/assets/images/product/image 23(1).png"
                    alt="Artist  talks"
                  />
                </div>
              </div>
              <!-- <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> -->
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a  class="services-card__link" @click="go('events', 'collectorsTalks')"></a>
            <h2 class="services-card__heading h5">{{$t('publicProgram.collectorsTalks')}}</h2>
            <div class="services-card__inner">
              <div class="services-card__image">
                <div class="services-card__image-wrapper">
                  <img
                    src="@/assets/images/product/image 23(2).png"
                    alt="Collector talks"
                  />
                </div>
              </div>
              <!-- <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> -->
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a @click="go('events', 'galleriesMuseumesSessions')" class="services-card__link"></a>
            <h2 class="services-card__heading h5">
              {{$t('publicProgram.galleriesMuseumesSessions')}}
            </h2>
            <div class="services-card__inner">
              <div class="services-card__image">
                <div class="services-card__image-wrapper">
                  <img
                    src="@/assets/images/product/image 23(3).png"
                    alt="Galleries & museums sessions"
                  />
                </div>
              </div>
              <!-- <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> -->
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a @click="go('masterclasses')" class="services-card__link"></a>
            <h2 class="services-card__heading h5">{{$t('publicProgram.masterclasses')}}</h2>
            <div class="services-card__inner">
              <div class="services-card__image">
                <div class="services-card__image-wrapper">
                  <img
                    src="@/assets/images/product/image 23(4).png"
                    alt="Masterclasses"
                  />
                </div>
              </div>
              <!-- <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> -->
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a @click="go('events', 'privatePressTours')" class="services-card__link"></a>
            <h2 class="services-card__heading h5">{{$t('publicProgram.privatePressTours')}}</h2>
            <div class="services-card__inner">
              <div class="services-card__image">
                <div class="services-card__image-wrapper">
                  <img
                    src="@/assets/images/product/image 23(5).png"
                    alt="Private & press tours"
                  />
                </div>
              </div>
              <!-- <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="public-program__wrapper">
        <button data-href="speaker-form" class="public-program__link btn">
          {{$t('publicProgram.becomeASpeaker')}}
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
    </div>

        <partner-form></partner-form>
        <speaker-form></speaker-form>

    
      <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
import PartnerForm from "../components/PartnerForm.vue";
import SpeakerForm from "../components/SpeakerForm.vue";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  metaInfo: {
    title: "FIRST PAN-EUROPEAN DIGITAL ART FAIR",
  },
  components: {
    HeaderComponent,
    MenuComponent,
    PartnerForm,
    SpeakerForm,
    FooterComponent,
  },
  methods: {
    go(path, type){
      this.$router.push({name: path, params: {
        'type': type
      } })
    }
  }
};
</script>

<style>
</style>