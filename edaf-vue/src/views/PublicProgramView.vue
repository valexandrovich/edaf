<template>
  <div>
    <header-component></header-component>
    <main-menu></main-menu>
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
          <div data-aos="fade-up" class="services-card grid-cell">
            <a href="#" class="services-card__link"></a>
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
              <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a href="#" class="services-card__link"></a>
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
              <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a href="#" class="services-card__link"></a>
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
              <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a href="#" class="services-card__link"></a>
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
              <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a href="#" class="services-card__link"></a>
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
              <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="services-card grid-cell">
            <a href="#" class="services-card__link"></a>
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
              <div class="services-card__btn">
                {{$t('publicProgram.subscribe')}}
                <div class="btn-arrows">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
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

        <become-partner></become-partner>

    <section id="speaker-form" data-popup class="form-section animation hide">
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

        <h3 class="form-section__heading h3">{{$t('publicProgram.becomeASpeaker')}}</h3>

        <div class="form-section__body">
          <form
            data-form
            action="mailto:someone@example.com"
            method="post"
            enctype="text/plain"
          >
            <div class="form-section__input-container">
              <label for="name-2">{{$t('publicProgram.firstName')}}</label>
              <input
                required
                type="text"
                placeholder="First name"
                name="name"
                id="name-2"
              />
            </div>

            <div class="form-section__input-container">
              <label for="email-2">{{$t('publicProgram.email')}}</label>
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                id="email-2"
              />
            </div>

            <div class="form-section__input-container">
              <label for="company-2">{{$t('publicProgram.company')}}</label>
              <input
                type="text"
                placeholder="Company"
                name="company"
                id="company-2"
              />
            </div>

            <div
              class="
                form-section__input-container
                form-section__input-container--message
              "
            >
              <label for="message-2">{{$t('publicProgram.writeAMessage')}}</label>
              <input
                required
                type="text"
                placeholder="Write a Message"
                name="message"
                id="message-2"
              />
            </div>

            <div class="form-section__footer">
              <div class="form-section__input-container checkbox">
                <input
                  required
                  class="form-section__custom-checkbox"
                  type="checkbox"
                  name="accept"
                  id="accept-2"
                />

                <label for="accept-2">
                  {{$t('publicProgram.iAccept')}}
                  <a href="#" class="form-section__input-accept social-link">
                    {{$t('publicProgram.privacyPolicy')}}
                  </a>
                </label>
              </div>

              <button type="submit" class="js-send-btn form-section__btn btn">
                {{$t('publicProgram.send')}}
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
      <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import MainMenu from "../components/MainMenu.vue";
import BecomePartner from "../components/BecomePartner.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    MainMenu,
    BecomePartner
  },
};
</script>

<style>
</style>