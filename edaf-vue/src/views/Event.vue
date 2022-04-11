<template>
  <div >
    <header-component></header-component>
    <menu-component></menu-component>


    <section class="hero-video" v-if="event">
      <picture class="hero-video__background adaptive-image">
        <source
          srcset="@/assets/images/background/event-hero-bg-mob.png"
          media="(max-width: 768px)"
        />
        <source
          srcset="@/assets/images/background/event-hero-bg-desk.png"
          media="(min-width: 767px)"
        />
        <img
          src="@/assets/images/background/event-hero-bg-desk.png"
          alt="Event page background image"
        />
      </picture>

      <div class="hero-video__container container-desktop">
        <h3 data-aos="fade-up" class="hero-video__heading h3">
          {{ event.attributes.name }}
        </h3>
        <div data-aos="fade-up" class="hero-video__video container collection-content__video"
         data-video-config='{"autoplay": true, "loop": true, "mute": true, "controls": false}'
         :data-video-url="event.attributes.videoUrl"
         v-if="event.attributes.videoUrl"
         ></div>
  
      </div>
    </section>

    <section class="about-event" v-if="event">


      <div class="about-event__container container-desktop">
        <div class="about-event__block">
          <h3 data-aos="fade-up" class="about-event__heading h3">speaker</h3>

          <div class="about-event__body">
            <ul class="about-event__speakers">
              <li
                data-aos="fade-up"
                class="about-event__speaker"
                :key="speaker.id"
                v-for="speaker in speakers"
              >
                <div class="about-event__speaker-photo picture" v-if="speaker.attributes.img.data">
                  <img 
                  :src=  "'http://localhost:1337' + speaker.attributes.img.data.attributes.url"
                  alt="Speaker" />
                </div>


                <div class="about-event__speaker-container">
                  <div class="about-event__speaker-about">
                    <h4 class="about-event__speaker-name h4">
                      <!-- {{ speaker.attributes.name }} -->
                    </h4>

                    <p class="about-event__speaker-description">
                      {{ speaker.attributes.bio }}
                    </p>
                  </div>

                  <ul class="about-event__social-links">
                    <li class="about-event__social-link" v-if="speaker.attributes.instagramUrl">
                      <a :href="speaker.attributes.instagramUrl" class="social-link-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="32px"
                          height="32px"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 1024 1024"
                        >
                          <path
                            fill="currentColor"
                            d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li class="about-event__social-link" v-if="speaker.attributes.facebookUrl">
                      <a :href="speaker.attributes.facebookUrl" class="social-link-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="32px"
                          height="32px"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 1000 1000"
                        >
                          <path
                            fill="currentColor"
                            d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li class="about-event__social-link" v-if="speaker.attributes.twitterUrl">
                      <a :href="speaker.attributes.twitterUrl" class="social-link-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="32px"
                          height="32px"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li class="about-event__social-link" v-if="speaker.attributes.linkedinUrl">
                      <a :href="speaker.attributes.linkedinUrl" class="social-link-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="32px"
                          height="32px"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 1000 1000"
                        >
                          <path
                            fill="currentColor"
                            d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25H196.064zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854V384.193z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="about-event__block">
          <h3
            data-aos="fade-up"
            class="about-event__heading about-event__heading--description h3"
          >
            event description
          </h3>

          <div class="about-event__body">
            <p data-aos="fade-up" class="about-event__text">
              {{ event.attributes.description }}
            </p>
          </div>
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
import eventService from "../service/eventService.js";

import sam from '../assets/scripts/sam'
import dimas from '../assets/scripts/dimas'

export default {
  data() {
    return {
      event: null,
      speakers: []
    };
  },
  metaInfo: {
    title: "FIRST PAN-EUROPEAN DIGITAL ART FAIR",
  },
  components: {
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PartnerForm,
  },
  mounted(){
    dimas()
    sam()
  },
  async beforeMount() {
    this.event = this.$route.params.event
    this.event.attributes.speakers.data.forEach(speaker => {
      eventService.getSpeakerDetails(speaker.id).then(resp => {
        this.speakers.push(resp.data.data)
        // console.log(resp.data)
        
      })
    })
    // let event =  await eventService.getEventDetails(this.$route.params.eventId)
    // console.log(event)
  },
};
</script>

<style>
</style>