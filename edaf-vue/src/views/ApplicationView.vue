<template>
  <div>
      <header-component></header-component>
      <main-menu></main-menu>
    <section class="collection-hero">
      <div class="collection-hero__container container">
        <h1 data-aos="fade-up" class="h2 collection-hero__heading">
          Application
        </h1>

        <div data-aos="fade-up" class="collection-hero__text">
          To take part in the European Digital Art Fair you are able to apply as
          an artist, a gallery/museum/other institution or a dealer.
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
          Application
        </div>
        <div class="application-body">
          <div data-aos="fade-up" class="application-description">
            <p>
              At the selection stage, you must submit preview files that are
              used only for prescreening and selection, not for presentation at
              the fair.
              <br /><br />
              Requests for original artworks will be sent exclusively to
              selected applicants.
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
            The artworks / projects in the following techniques are eligible for
            the fair:
          </h2>
        </div>
      </div>

      <div class="tiles container-desktop">
        <ul class="tiles-list">
          <li data-aos="fade-left" class="tiles-item">static digital images</li>
          <li data-aos="fade-left" class="tiles-item">time-based media</li>
          <li data-aos="fade-left" class="tiles-item">
            interactive digital installations
          </li>
          <li data-aos="fade-left" class="tiles-item">XR / VR / AR / MR art</li>
          <li data-aos="fade-left" class="tiles-item">Game Art</li>
          <li data-aos="fade-left" class="tiles-item">Generative Art</li>
          <li data-aos="fade-left" class="tiles-item">Crypto Art</li>
          <li data-aos="fade-left" class="tiles-item">Web Art or Net Art</li>
          <li data-aos="fade-left" class="tiles-item">
            Digitized art or other forms of digital art
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
          Artists
        </div>
        <h2 data-aos="fade-up" class="artists-heading h3">
          Each application group should match the following criteria:
        </h2>
        <div class="artists-body">
          <h3 data-aos="fade-up" class="artists-subheading h4">
            <span>01 / </span>
            ARTISTS
          </h3>
          <div class="artists-tiles">
            <div class="tiles-grid">
              <div data-aos="fade-up" class="tiles-grid__item">
                Adulthood in accordance with the legislation of Ukraine (full 18
                years)
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                Maximum 5 artworks per artist
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                Fluent English
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                Absence of hate or other features to be recognized negative in
                artworks
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                If NFT is already minted, add the link in form
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                Submitting only digital or digitalized art (file size up to 10
                MB, file format - png, pdf, mp4, mov / links to third-party
                resources and video services)
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                Filling in the form
              </div>
              <div data-aos="fade-up" class="tiles-grid__item">
                Born or based in any of the 43 participating European countries
                (full list attached)
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
          Criteria
        </div>
        <div class="criteria-block">
          <h3 data-aos="fade-up" class="criteria-heading container h4">
            <span>02 / </span>
            GALLERIES MUSEUMS OTHER <br />
            INSTITUTIONS AND DEALERS
          </h3>
          <div class="criteria-wrapper">
            <div class="tiles">
              <ul class="tiles-list">
                <li data-aos="fade-up" class="tiles-item">
                  <span
                    >Based in any of the 43 participating European countries
                    (full list attached)</span
                  >
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span
                    >Permission directly from the artists to sell or display and
                    publish their work. The responsibility lies with the
                    participants of the fair, directly to the work of which
                    there are claims from third parties.</span
                  >
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>Filling in the form</span>
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>Submitting only digital or digitalized art</span>
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>Maximum 10 artworks per exhibitor</span>
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span
                    >Artworks do not represent hate or defamatory content</span
                  >
                </li>
                <li data-aos="fade-up" class="tiles-item">
                  <span>If NFT is already minted, add the link in form</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="criteria-block">
          <h3 data-aos="fade-up" class="criteria-heading container h4">
            <span>03 / </span>
            DEADLINE OPEN CALL - <br />
            04/03/2022
          </h3>
          <div class="criteria-wrapper">
            <div data-aos="fade-up" class="tiles tiles--row">
              <ul class="tiles-list">
                <li class="tiles-item">
                  NEW DEADLINE - <br />
                  4th of March
                </li>
                <li class="tiles-item">
                  Announcement of 100 nominees, as well as <br />
                  selected institutions / dealers - until 20/02/2022
                </li>
                <li class="tiles-item">
                  European Digital Art Fair - the start date <br />
                  of the fair will be announced soon.
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" class="criteria-body">
              <p>
                * If the works submitted by you pass the selection stage, a
                commercial offer will be sent to your e-mail with the rules of
                sale of works at the fair, which include the terms of the
                commission in case of sale of works at the fair. The letter will
                also specify further conditions of participation, which will
                include a registration fee of 30 euros. This amount includes:
                creation of a virtual pavilions on the platform, technical
                preparation and adaptation of works, solving administrative
                issues.
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
                    Artist
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
                    Gallery / Museum / Other Institution
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
                    Dealer
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
              PARTICIPATING <br />
              COUNTRIES
            </h2>
          </div>
        </div>

        <div class="participating-footer">
          <div class="participating-footer__container container">
            <h2
              data-aos="fade-up"
              class="participating-heading show-on-mobile h3"
            >
              PARTICIPATING <br />
              COUNTRIES
            </h2>
            <div data-aos="fade-up" class="participating-footer__wrapper">
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Austria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Albania </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Andorra </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belgium </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belarus </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Bulgaria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Bosnia and Herzegovina </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Greece </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Denmark </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Austria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Albania </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Andorra </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belgium </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belarus </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Bulgaria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Lithuania </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Greece </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Denmark </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Austria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Albania </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Andorra </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belgium </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belarus </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Bulgaria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> UK </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Greece </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Denmark </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Austria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Albania </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Andorra </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belgium </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belarus </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Bulgaria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Slovenia </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Greece </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Denmark </a>
                </li>
              </ul>
              <ul class="participating-footer__list">
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Austria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Albania </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Andorra </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belgium </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Belarus </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Bulgaria </a>
                </li>
                <li class="participating-footer__item">
                  <a href="#" class="social-link"> Sweden </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

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
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import MainMenu from "../components/MainMenu.vue";

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