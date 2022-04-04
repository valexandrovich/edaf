<template>
  <div>
      <header-component></header-component>
      <main-menu></main-menu>
    <section class="collection-hero">
      <div class="collection-hero__container container">
        <h1 data-aos="fade-up" class="h2 collection-hero__heading">
          {{$t('application.application')}}
        </h1>

        <div data-aos="fade-up" class="collection-hero__text">
          {{$t('application.title')}}
        </div>
      </div>

      <picture class="collection-hero__background adaptive-image">
        <source
          srcset="@/assets/images/background/application-hero.png"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/application-hero.png"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/application-hero.png"
          alt="Collection background image"
        />
      </picture>
    </section>

    <div class="section-background gradient-overlay gradient-overlay--to-top">
      <picture class="adaptive-image">
        <source
          srcset="@/assets/images/background/application-header.jpeg"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/application-header.jpeg"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/application-header.jpeg"
          alt="Collection background image"
          data-sizes="auto"
          data-srcset="@/assets/images/background/application-header.jpeg 500w,
                  @/assets/images/background/application-header.jpeg 640w,
                  @/assets/images/background/application-header.jpeg 1024w"
        />
      </picture>
    </div>

    <section class="application">
      <div class="container-to-right container-desktop">
        <div data-aos="fade-up" class="vertical-text vertical-text--left">
          {{$t('application.application')}}
        </div>
        <div class="application-body">
          <div data-aos="fade-up" class="application-description">
            <p>
              {{$t('application.about1')}}
              <br /><br />
              {{$t('application.about2')}}
            </p>
          </div>

          <picture data-aos="fade-up" class="application-image adaptive-image">
            <source
              srcset="@/assets/images/background/application-body-image.jpeg"
              media="(max-width: 768px)"
            />
            <source
              srcset="@/assets/images/background/application-body-image.jpeg"
              media="(min-width: 767px)"
            />
            <img
              src="@/assets/images/background/application-body-image.jpeg"
              alt="Collection background image"
            />
          </picture>

          <h2 data-aos="fade-up" class="application-heading h3">
            {{$t('application.title2')}}
          </h2>
        </div>
      </div>

      <div class="tiles container-desktop">
        <ul class="tiles-list">
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f1')}}</li>
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f2')}}</li>
          <li data-aos="fade-left" class="tiles-item">
            {{$t('application.f3')}}
          </li>
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f4')}}</li>
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f5')}}</li>
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f6')}}</li>
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f7')}}</li>
          <li data-aos="fade-left" class="tiles-item">{{$t('application.f8')}}</li>
          <li data-aos="fade-left" class="tiles-item">
            {{$t('application.f9')}}
          </li>
        </ul>
      </div>
    </section>

    <section class="artists">
      <div class="artists-container container">
        <div
          data-aos="fade-up"
          class="vertical-text vertical-text-to-top vertical-text--right"
        >
          {{$t('application.artists')}}
        </div>
        <h2 data-aos="fade-up" class="artists-heading h3">
          {{$t('application.title3')}}
        </h2>
        <div class="artists-body">
          <h3 data-aos="fade-up" class="artists-subheading h4">
            <span>01 / </span>
            {{$t('application.artists2')}}
          </h3>
          <div class="artists-tiles">
            <div class="tiles-grid">
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a1')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a2')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a3')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a4')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a5')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a6')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a7')}}
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                {{$t('application.a8')}}
              </div>
              <div
                data-aos="fade-up"
                class="tiles-grid__item placeholder"
              ></div>
              <div
                data-aos="fade-up"
                class="tiles-grid__item placeholder_2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="criteria">
      <div class="criteria-container container-desktop">
        <div data-aos="fade-up" class="vertical-text vertical-text--left">
          {{$t('application.criteria')}}
        </div>
        <div class="criteria-block">
          <h3 data-aos="fade-up" class="criteria-heading container h4">
            <span>02 / </span>
            {{$t('application.title4')}} <br />
            {{$t('application.g1')}}
          </h3>
          <div class="criteria-wrapper">
            <div class="tiles">
              <ul class="tiles-list">
                <li data-aos="fade-up" class="tiles-item">
                  <span
                    >{{$t('application.g2')}}</span
                  >
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span
                    >{{$t('application.g3')}}</span
                  >
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>{{$t('application.g4')}}</span>
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>{{$t('application.g5')}}</span>
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>{{$t('application.g6')}}</span>
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span
                    >{{$t('application.g7')}}</span
                  >
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>{{$t('application.g8')}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="criteria-block">
          <h3 data-aos="fade-up" class="criteria-heading container h4">
            <span>03 / </span>
            {{$t('application.title5')}} - <br />
            03/04/2022
          </h3>
          <div class="criteria-wrapper">
            <div data-aos="fade-up" class="tiles tiles--row">
              <ul class="tiles-list">
                <li class="tiles-item">
                  {{$t('application.d1')}} - <br />
                  {{$t('application.d2')}}
                </li>
                <li class="tiles-item">
                  {{$t('application.d3')}} <br />
                  {{$t('application.d4')}}
                </li>
                <li class="tiles-item">
                  {{$t('application.d5')}} <br />
                  {{$t('application.d6')}}
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" class="criteria-body">
              <p>
                {{$t('application.d7')}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="participating">
      <div class="participating-container">
        <div class="participating-header container-desktop">
          <div data-aos="fade-up-right" class="participating-image">
            <picture class="adaptive-image">
              <source
                srcset="@/assets/images/other/participient.jpeg"
                media="(max-width: 768px)"
              />
              <source
                srcset="@/assets/images/other/participient.jpeg"
                media="(min-width: 767px)"
              />
              <img
                src="@/assets/images/other/participient.jpeg"
                alt="Collection background image"
              />
            </picture>
          </div>

          <div class="participating-column">
            <ul class="participating-buttons">
              <li data-aos="fade-up-left" class="participating-item">
                <a
                  href="https://unhptbqgobe.typeform.com/to/wAJv3n2s"
                  class="participating-btn btn-alternate"
                >
                  <span class="participating-label">
                    {{$t('application.artists')}}
                    <span class="btn-arrows">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up-left" class="participating-item">
                <a
                  href="https://unhptbqgobe.typeform.com/to/jiWEVidq"
                  class="participating-btn btn-alternate"
                >
                  <span class="participating-label">
                    {{$t('application.gm')}}
                    <span class="btn-arrows">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </a>
              </li>
              <li data-aos="fade-up-left" class="participating-item">
                <a
                  href="https://unhptbqgobe.typeform.com/to/hSfuyjI8"
                  class="participating-btn btn-alternate"
                >
                  <span class="participating-label">
                    {{$t('application.dealer')}}
                    <span class="btn-arrows">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <h2
              data-aos="fade-up"
              class="participating-heading hide-on-mobile h3"
            >
              {{$t('application.participating')}} <br />
              {{$t('application.countries')}}
            </h2>
          </div>
        </div>

        <div class="participating-footer">
          <div class="participating-footer__container container">
            <h2
              data-aos="fade-up"
              class="participating-heading show-on-mobile h3"
            >
              {{$t('application.participating')}} <br />
              {{$t('application.countries')}}
            </h2>
            <div data-aos="fade-up" class="participating-footer__wrapper">
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.austria')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.albania')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.andorra')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.belgium')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.belarus')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.bulgaria')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.bosnia_and_herzegovina')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.greece')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.denmark')}} </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.estonia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.ireland')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.iceland')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.latvia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.lithuania')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.liechtenstein')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.luxembourg')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.malta')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.moldova')}} </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.monaco')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.netherlands')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.germany')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.norway')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.uk')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.northern_macedonia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.poland')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.portugal')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.romania')}} </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.san_marino')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.vatican')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.serbia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.slovakia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.slovenia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.hungary')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.ukraine')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.finland')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.france')}} </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.croatia')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.czech_republic')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.montenegro')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.switzerland')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.sweden')}} </a>
                </li>
                <!-- <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.bulgaria')}} </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> {{$t('application.sweden')}} </a>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

        <become-partner></become-partner>
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