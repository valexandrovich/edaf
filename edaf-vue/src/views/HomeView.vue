<template>
  <div>
    <header-component></header-component>

    <section id="home-section" class="home animation show">
      <picture class="home__background adaptive-image">
        <source
          srcset="@/assets/images/background/home-bg-mob.png"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/home-bg-desk.png"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/home-bg-desk.png"
          alt="Home background image"
        />
      </picture>

      <div class="home__container">
        <div class="home__logo logotype">
          <img src="@/assets/images/logo/header-logo.svg" alt="logotype" />
        </div>

        <h1 class="home__heading h1">
          FIRST <br />
          PAN-EUROPEAN <br />
          DIGITAL <br />
          ART FAIR <br />
        </h1>
      </div>
    </section>

    <menu-component></menu-component>

    <section data-aos="fade-up" class="index-hero">
      <picture
        class="
          index-hero__background
          adaptive-image
          gradient-overlay gradient-overlay--to-right
        "
      >
        <source
          srcset="@/assets/images/background/index-hero-m.png"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/index-hero-bg.jpg"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/index-hero-bg.jpg"
          alt="Home page background image"
        />
      </picture>

      <div class="index-hero__container container-desktop">
        <div class="index-hero__body">
          <h1 class="index-hero__heading h2">
            {{ $t("home.head_1") }}
            <br />
            {{ $t("home.head_2") }}
            <br />
            {{ $t("home.head_3") }}
            <br />
            {{ $t("home.head_4") }}
          </h1>

          <a
            style="visibility: hidden"
            href="fairs.html"
            class="index-hero__btn btn btn--transparent"
          >
            {{ $t("home.goToTheFairs") }}
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

        <div class="index-hero__footer">
          <div
            class="index-hero__footer-column index-hero__footer-column--left"
          >
            <p class="index-hero__footer-heading">
              {{ $t("home.organizers") }}:
            </p>

            <div class="index-hero__footer-logos">
              <img
                class="index-hero__footer-logo"
                src="@/assets/images/logo/Subtract.svg"
                alt="logo"
              />
              <img
                class="index-hero__footer-logo"
                src="@/assets/images/logo/m17.svg"
                alt="logo"
              />
            </div>
          </div>
          <div
            class="index-hero__footer-column index-hero__footer-column--right"
          >
            <p class="index-hero__footer-heading">{{ $t("home.partners") }}:</p>

            <div class="index-hero__footer-logos">
              <img
                class="index-hero__footer-logo"
                src="@/assets/images/logo/image6.svg"
                alt="logo"
              />
              <img
                class="index-hero__footer-logo"
                src="@/assets/images/logo/image9.svg"
                alt="logo"
              />
              <img
                class="index-hero__footer-logo"
                src="@/assets/images/logo/image10.svg"
                alt="logo"
              />
              <img
                class="index-hero__footer-logo"
                src="@/assets/images/logo/image5.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="fade-up" class="index-about">
      <div class="container-to-right container-desktop">
        <!-- Absolute elements -->
        <div data-aos="fade-up" class="vertical-text">
          {{ $t("home.wie1") }}
        </div>
        <div data-aos="fade-up" class="left-top-decor decor"></div>
        <div data-aos="fade-up" class="right-top-decor decor"></div>
        <div data-aos="fade-up" class="left-bottom-decor decor"></div>
        <!-- Absolute elements -->

        <div class="index-about__body">
          <h2 data-aos="fade-up" class="index-about__body-heading h3">
            {{ $t("home.wie2") }}
          </h2>

          <div class="index-about__body-content">
            <div class="index-about__body-content--top">
              <div class="index-about__body-iwt">
                <div data-aos="fade-up" class="picture">
                  <img src="@/assets/images/other/about1.png" alt="#" />
                </div>

                <p data-aos="fade-up" class="index-about__body-text">
                  {{ $t("home.about_1") }}
                </p>
              </div>

              <div
                data-aos="fade-up"
                class="
                  index-about__body-images
                  gradient-overlay gradient-overlay--to-top-semitone
                "
              >
                <div class="picture">
                  <img
                    class="index-about__image"
                    src="@/assets/images/other/about2.png"
                    alt="#"
                  />
                </div>
                <div class="picture">
                  <img
                    class="index-about__image"
                    src="@/assets/images/other/about2.png"
                    alt="#"
                  />
                </div>
                <div class="picture">
                  <img
                    class="index-about__image"
                    src="@/assets/images/other/about2.png"
                    alt="#"
                  />
                </div>
                <div class="picture">
                  <img
                    class="index-about__image"
                    src="@/assets/images/other/about2.png"
                    alt="#"
                  />
                </div>
              </div>
            </div>

            <div class="index-about__body-content--bottom">
              <div class="index-about__body-iwt">
                <img
                  data-aos="fade-up"
                  src="@/assets/images/other/about3.png"
                  alt="#"
                />

                <div class="index-about__body-text-container">
                  <p data-aos="fade-up" class="index-about__body-text">
                    {{ $t("home.about_2") }}
                  </p>
                  <p data-aos="fade-up" class="index-about__body-text">
                    {{ $t("home.about_3") }}
                  </p>
                  <p data-aos="fade-up" class="index-about__body-text">
                    {{ $t("home.about_4") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="fade-up" class="index-IWT">
      <div class="index-IWT__container container-desktop">
        <!-- Absolute elements -->
        <div data-aos="fade-up" class="vertical-text">
          {{ $t("home.organizers") }}
        </div>
        <!-- Absolute elements -->

        <h2 data-aos="fade-up" class="index-IWT__heading h3">
          {{ $t("home.organizers") }}
        </h2>

        <div class="index-IWT__body">
          <div class="index-IWT__column index-IWT__column--left">
            <div class="index-IWT__column-top-container">
              <div class="index-IWT__column-heading-container">
                <h2 data-aos="fade-up" class="index-IWT__heading--mobile h3">
                  {{ $t("home.organizers") }}
                </h2>

                <div data-aos="fade-up" class="index-IWT__logo-container">
                  <img
                    class="index-IWT__logo"
                    src="@/assets/images/logo/v-art.svg"
                    alt="logo"
                  />
                </div>

                <h3 data-aos="fade-up" class="index-IWT__column-heading">
                  {{ $t("home.part1name") }}
                </h3>
              </div>
              <div
                data-aos="fade-up"
                class="picture index-IWT__column-img-mobile"
              >
                <img
                  class="index-IWT__adapt-img"
                  src="@/assets/images/other/img-iwt1.png"
                  alt="picture"
                />
              </div>
            </div>

            <div data-aos="fade-up" class="index-IWT__column-body">
              <p class="index-IWT__column-text">
                {{ $t("home.part1about1") }}
              </p>
              <!--
                <div class="index-IWT__column-links">
                  <a
                    href="#"
                    class="index-IWT__column-instagram social-link-secondary"
                    >{{$t('home.instagram')}}</a
                  >
                  <a
                    href="#"
                    class="index-IWT__column-facebook social-link-secondary"
                    >{{$t('home.facebook')}}</a
                  >
                </div> -->
            </div>

            <div data-aos="fade-up" class="index-IWT__column-img-desktop">
              <picture>
                <source
                  srcset="@/assets/images/other/img-iwt21-small.png"
                  media="(max-width: 400px)"
                />
                <source
                  srcset="@/assets/images/other/img-iwt21-med.png"
                  media="(max-width: 989px)"
                />
                <source
                  srcset="@/assets/images/other/img-iwt21.png"
                  media="(min-width: 989px)"
                />
                <img
                  class="index-IWT__adapt-img adaptive-image"
                  src="@/assets/images/other/img-iwt21.png"
                  alt="picture"
                />
              </picture>

              <picture>
                <source
                  srcset="@/assets/images/other/img-iwt22-small.png"
                  media="(max-width: 400px)"
                />
                <source
                  srcset="@/assets/images/other/img-iwt22-med.png"
                  media="(max-width: 989px)"
                />
                <source
                  srcset="@/assets/images/other/img-iwt22.png"
                  media="(min-width: 989px)"
                />
                <img
                  class="index-IWT__adapt-img adaptive-image"
                  src="@/assets/images/other/img-iwt22.png"
                  alt="picture"
                />
              </picture>
            </div>
          </div>

          <div class="index-IWT__column index-IWT__column--right">
            <div class="index-IWT__column-img-desktop">
              <img
                class="index-IWT__adapt-img"
                src="@/assets/images/other/img-iwt1.png"
                alt="picture"
              />
            </div>

            <div class="index-IWT__column-top-container">
              <div class="index-IWT__column-heading-container">
                <div data-aos="fade-up" class="index-IWT__logo-container">
                  <img
                    class="index-IWT__logo"
                    style="display: none"
                    src="@/assets/images/logo/m17-color.svg"
                    alt="logo"
                  />
                </div>

                <h3 data-aos="fade-up" class="index-IWT__column-heading">
                  {{ $t("home.part1name") }}
                </h3>
              </div>
            </div>

            <div data-aos="fade-up" class="index-IWT__column-body">
              <p class="index-IWT__column-text">
                {{ $t("home.part1about2") }}
              </p>
              <div class="index-IWT__column-links">
                <a
                  href="https://instagram.com/v.art.digital?igshid=twe6mh6mrdcz"
                  class="index-IWT__column-instagram social-link-secondary"
                  >{{ $t("home.instagram") }}</a
                >
                <a
                  href="https://www.facebook.com/V.Art.digital/"
                  class="index-IWT__column-facebook social-link-secondary"
                  >{{ $t("home.facebook") }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="fade-up" class="index-partners">
      <div class="index-partners__container container-desktop">
        <!-- Absolute elements -->
        <div data-aos="fade-up" class="vertical-text">partners</div>
        <!-- Absolute elements -->

        <h2 data-aos="fade-up" class="index-partners__heading h3">
          <br /><br />{{ $t("home.partners") }}
        </h2>

        <div class="index-partners__body">
          <div data-aos="fade-up" class="index-partners__item">
            <div class="index-partners__logo-container">
              <img
                class="index-partners__logo"
                src="@/assets/images/logo/image6.svg"
                alt="logo"
              />
            </div>

            <div class="index-partners__item-content">
              <h3 class="index-partners__item-heading h4">
                {{ $t("home.part2name") }}
              </h3>

              <p class="index-partners__item-body">
                {{ $t("home.part2about1") }}
              </p>

              <div class="index-partners__item-links">
                <a
                  href="https://www.instagram.com/dslcollection/"
                  class="index-partners__item-instagram social-link"
                  >{{ $t("home.instagram") }}</a
                >
                <a
                  href="https://www.facebook.com/Dslcollection-120844704764687"
                  class="index-partners__item-facebook social-link"
                  >{{ $t("home.facebook") }}</a
                >
              </div>
            </div>
          </div>

          <div data-aos="fade-up" class="index-partners__item">
            <div class="index-partners__logo-container">
              <img
                class="index-partners__logo"
                src="@/assets/images/logo/SF logo_White_V1.png"
                alt="logo"
              />
            </div>

            <div class="index-partners__item-content">
              <h3 class="index-partners__item-heading h4">
                {{ $t("home.part3name") }}
              </h3>

              <p class="index-partners__item-body">
                {{ $t("home.part3about1") }}
              </p>

              <div class="index-partners__item-links">
                <a
                  href="https://www.instagram.com/straightfirenft/"
                  class="index-partners__item-instagram social-link"
                  >{{ $t("home.instagram") }}</a
                >
                <!--
                  <a href="#" class="index-partners__item-facebook social-link"
                    >{{$t('home.facebook')}}</a
                  > -->
              </div>
            </div>
          </div>

          <div data-aos="fade-up" class="index-partners__item">
            <div class="index-partners__logo-container">
              <img
                class="index-partners__logo"
                src="@/assets/images/logo/image9.svg"
                alt="logo"
              />
            </div>

            <div class="index-partners__item-content">
              <h3 class="index-partners__item-heading h4">
                {{ $t("home.part4name") }}
              </h3>

              <p class="index-partners__item-body">
                {{ $t("home.part4about1") }}
              </p>

              <div class="index-partners__item-links">
                <a
                  href="https://www.instagram.com/harddiskmuseum/"
                  class="index-partners__item-instagram social-link"
                  >{{ $t("home.instagram") }}</a
                >
                <a
                  href="https://www.facebook.com/harddiskmuseum"
                  class="index-partners__item-facebook social-link"
                  >{{ $t("home.facebook") }}</a
                >
              </div>
            </div>
          </div>

          <div data-aos="fade-up" class="index-partners__item">
            <div class="index-partners__logo-container">
              <img
                class="index-partners__logo"
                src="@/assets/images/logo/image5.svg"
                alt="logo"
              />
            </div>

            <div class="index-partners__item-content">
              <h3 class="index-partners__item-heading h4">
                {{ $t("home.part5name") }}
              </h3>

              <p class="index-partners__item-body">
                {{ $t("home.part5about1") }}
              </p>

              <div class="index-partners__item-links">
                <a
                  href="https://www.instagram.com/electricartefacts/"
                  class="index-partners__item-instagram social-link"
                  >{{ $t("home.instagram") }}</a
                >
                <a
                  href="https://www.facebook.com/electricartefacts"
                  class="index-partners__item-facebook social-link"
                  >{{ $t("home.facebook") }}</a
                >
              </div>
            </div>
          </div>

          <button data-aos="fade-up" data-href="partner-form" class="btn">
            {{ $t("home.becomeAPartner") }}
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
    </section>

    <partner-form></partner-form>
    <speaker-form></speaker-form>
    <footer></footer>
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
};
</script>

<style>
</style>