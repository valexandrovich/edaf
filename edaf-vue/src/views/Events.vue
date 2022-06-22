<template>
  <div>
    <header-component></header-component>
    <menu-component></menu-component>
    <section class="collection-hero">
      <div class="collection-hero__container container">
        <h1 data-aos="fade-up" class="h2 collection-hero__heading">
          {{$t('events.'+this.$route.params.type + '.title')}}
        </h1>

        <div data-aos="fade-up" class="collection-hero__text">
           {{$t('events.'+this.$route.params.type + '.description')}}
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

    

    <section class="collection-content" data-tabs>
      <div class="collection-content__header">
        <div
          class="
            collection-content__background
            gradient-overlay gradient-overlay--to-top
          "
        >
          <picture class="adaptive-image">
            <source
              srcset="@/assets/images/background/public-program_artists.jpeg"
              media="(max-width: 768px)"
            />
            <source
              srcset="@/assets/images/background/public-program_artists.jpeg"
              media="(min-width: 767px)"
            />
            <img
              src="@/assets/images/background/public-program_artists.jpeg"
              alt="Collection background image"
              data-sizes="auto"
              data-srcset="@/assets/images/background/public-program_artists.jpeg 500w,
                    @/assets/images/background/public-program_artists.jpeg 640w,
                    @/assets/images/background/public-program_artists.jpeg 1024w"
            />
          </picture>
        </div>

        <div class="collection-content__tabs-wrapper" >
          <div class="collection-content__tabs"  role="tablist">
            <button
              class="collection-content__tab h4"
              role="tab"
              aria-selected="true"
              aria-controls="tab-content-1"
              id="tab-1"
              tabindex="0"
            >
               {{$t('events.newEvents')}}
            </button>
            <button
              class="collection-content__tab h4"
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-2"
              id="tab-2"
              tabindex="-1"
            >
              {{$t('events.pastEvents')}}
            </button>
            
          </div>
        </div>
      </div>

      <div class="collection-content__container container">
        <div class="vertical-text vertical-text--left">PUBLIC</div>
        <div class="vertical-text vertical-text--right">PROGRAM</div>

        <div
          role="tabpanel"
          id="tab-content-1"
          tabindex="0"
          aria-labelledby="tab-1"
        >
          <div class="collection-content__products grid" v-if="this.$store.getters['events/eventsByType'](this.$route.params.type)">
            <div @click="go('event', event)" data-aos="fade-up" class="product-card grid-cell" 
            v-for="event in this.$store.getters['events/eventsByType'](this.$route.params.type)" 
            :key="event.id">
              <h2 class="product-card__heading h5">
                <a > {{event.attributes.name}} </a>
              </h2>
              <div class="product-card__inner">
                <div class="product-card__image">
                  <a class="product-card__image-wrapper">
                    <img
                        :src = "'http://localhost:1337' + event.attributes.pic.data.attributes.url"
                      alt="The Afro-Futurist Guide To Time Travel image"
                    />
                  </a>
                </div>
                <div class="product-card__author">
                  {{ new Date(Date.parse(event.attributes.date)).toLocaleDateString($i18n.locale)}} -
                  {{ new Date(Date.parse(event.attributes.date)).toLocaleTimeString($i18n.locale, {hour: '2-digit', minute:'2-digit'})}}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div
          role="tabpanel"
          id="tab-content-2"
          tabindex="0"
          aria-labelledby="tab-2"
          hidden
        >
          <div class="collection-content__products grid">
            <div data-aos="fade-up" class="product-card grid-cell">
              <h2 class="product-card__heading h5">
                <a href="#"> Event name lorem ipsum dolor sit amet </a>
              </h2>
              <div class="product-card__inner">
                <div class="product-card__image">
                  <a href="product-card__image-wrapper">
                    <img
                      src="@/assets/images/product/product-image.jpeg"
                      alt="The Afro-Futurist Guide To Time Travel image"
                    />
                  </a>
                </div>
                <div class="product-card__author">
                  December 15, 2021 - 14:00
                  


                </div>
              </div>
            </div>

            <div data-aos="fade-up" class="product-card grid-cell">
              <h2 class="product-card__heading h5">
                <a href="#"> Event name lorem ipsum dolor sit amet </a>
              </h2>
              <div class="product-card__inner">
                <div class="product-card__image">
                  <a href="product-card__image-wrapper">
                    <img
                      src="@/assets/images/product/product-image.jpeg"
                      alt="The Afro-Futurist Guide To Time Travel image"
                    />
                  </a>
                </div>
                <div class="product-card__author">
                  December 15, 2021 - 14:00
                </div>
              </div>
            </div>

            <div data-aos="fade-up" class="product-card grid-cell">
              <h2 class="product-card__heading h5">
                <a href="#"> Event name lorem ipsum dolor sit amet </a>
              </h2>
              <div class="product-card__inner">
                <div class="product-card__image">
                  <a href="product-card__image-wrapper">
                    <img
                      src="@/assets/images/product/product-image.jpeg"
                      alt="The Afro-Futurist Guide To Time Travel image"
                    />
                  </a>
                </div>
                <div class="product-card__author">
                  December 15, 2021 - 14:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- <partner-form></partner-form> -->

    <footer-component></footer-component>
  </div>
</template>

<script>
import dimas from "../assets/scripts/dimas";
import HeaderComponent from "../components/HeaderComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
// import PartnerForm from "../components/PartnerForm.vue";
// import SpeakerForm from "../components/SpeakerForm.vue";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  metaInfo: {
    title: "FIRST PAN-EUROPEAN DIGITAL ART FAIR",
  },
  components: {
    HeaderComponent,
    MenuComponent,
    // PartnerForm,
    // SpeakerForm,
    FooterComponent,
  },
  mounted() {
    dimas()
    this.$store.dispatch('events/getAllEvents')



  },
  methods: {

    go(path, event){
      this.$router.push({
        name: path, 
        params: {'id': event.id}
        // name: path + '/' + event.id, 
        // params: { 'event': event } 
        })
    }
  }
};
</script>

<style>
</style>