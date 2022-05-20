<template>
  <div>
    <header-component></header-component>
    <menu-component></menu-component>
    <section class="collection-hero">
      <div class="collection-hero__container container">
        <h1 data-aos="fade-up" class="h2 collection-hero__heading">
          Online fair
        </h1>

        <div data-aos="fade-up" class="collection-hero__text">
          European Digital Art Fair is opened by the Ukrainian pavilion with
          exhibition "The Horizon of the Future"
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
              srcset="@/assets/images/background/collection-tabs-bg.jpeg"
              media="(max-width: 768px)"
            />
            <source
              srcset="@/assets/images/background/collection-tabs-bg.jpeg"
              media="(min-width: 767px)"
            />
            <img
              src="@/assets/images/background/collection-tabs-bg.jpeg"
              alt="Collection background image"
              data-sizes="auto"
              data-srcset="@/assets/images/background/collection-tabs-bg.jpeg 500w,
                  @/assets/images/background/collection-tabs-bg.jpeg 640w,
                  @/assets/images/background/collection-tabs-bg.jpeg 1024w"
            />
          </picture>
        </div>

        <div class="collection-content__tabs-wrapper">
          <div role="tablist" class="collection-content__tabs">
            <button
              class="collection-content__tab h4"
              role="tab"
              aria-selected="true"
              aria-controls="tab-content-1"
              id="tab-1"
              tabindex="0"
            >
              Pavillion 1
            </button>
            <button
              class="collection-content__tab h4"
              role="tab"
              aria-selected="false"
              aria-controls="tab-content-2"
              id="tab-2"
              tabindex="-1"
            >
              Pavillion 2
            </button>
          </div>
        </div>
      </div>

       <div class="collection-content__container container" role="tabpanel" id="tab-content-1" tabindex="0" aria-labelledby="tab-1">
           <iframe
          :src="`https://v-art-82948.web.app/galleries/edaf_ukr_pav/`"
          width="100%"
          height="650"
          allowfullscreen
          frameborder="0"
        >
        </iframe>
         <div class="collection-content__products grid">
          <div
            @click="go(product.id)"
            data-aos="fade-up"
            class="product-card grid-cell"
            v-for="product in products"
            :key="product.id"
          >
            <h2 class="product-card__heading h5">
              <a> {{ product.attributes.product.name }} </a>
            </h2>
            <div class="product-card__inner">
              <div class="product-card__image">
                <a class="product-card__image-wrapper">
                  <img
                    :src="product.attributes.product.imageUrl"
                    alt="The Afro-Futurist Guide To Time Travel image"
                  />
                </a>
              </div>
              <div class="product-card__author">
                {{ product.attributes.product.author }}
              </div>
              <div class="product-card__price h5">
                <span
                  class="product-card__price--token"
                  v-if="product.attributes.product.priceEth"
                >
                  ETH
                  {{ product.attributes.product.priceEth }}
                </span>
                <span
                  class="product-card__price--token"
                  v-if="product.attributes.product.priceNear"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M12.9907 0.817778L9.65223 5.77778C9.42138 6.11556 9.86533 6.52444 10.185 6.24L13.4702 3.37778C13.559 3.30667 13.6833 3.36 13.6833 3.48444V12.4267C13.6833 12.5511 13.5235 12.6044 13.4525 12.5156L3.50795 0.604445C3.1883 0.213333 2.72659 0 2.21161 0H1.85645C0.93303 0 0.169434 0.764444 0.169434 1.70667V14.2933C0.169434 15.2356 0.93303 16 1.87421 16C2.46022 16 3.01072 15.6978 3.33037 15.1822L6.66888 10.2222C6.89973 9.88444 6.45578 9.47556 6.13614 9.76L2.8509 12.6044C2.76211 12.6756 2.6378 12.6222 2.6378 12.4978V3.57333C2.6378 3.44889 2.79762 3.39556 2.86866 3.48444L12.8132 15.3956C13.1328 15.7867 13.6123 16 14.1095 16H14.4647C15.4058 16 16.1694 15.2356 16.1694 14.2933V1.70667C16.1694 0.764444 15.4058 0 14.4647 0C13.8609 0 13.3104 0.302222 12.9907 0.817778Z"
                      fill="white"
                    />
                  </svg>
                  {{ product.attributes.product.priceNear }}
                </span>
                <span
                  class="product-card__price--original"
                  v-if="product.attributes.product.priceUsd"
                  >($ {{ product.attributes.product.priceUsd }})</span
                >
              </div>
            </div>
          </div>
        </div>
        </div>

      <!-- Pavilion 1
      <div
        class="collection-content__container container"
        role="tabpanel"
        id="tab-content-1"
        tabindex="0"
        aria-labelledby="tab-1"
      >
        <iframe
          :src="`https://v-art-82948.web.app/galleries/edaf_ukr_pav/`"
          width="100%"
          height="650"
          allowfullscreen
          frameborder="0"
        >
        </iframe>

        <div class="collection-content__products grid">
          <div
            @click="go(product.id)"
            data-aos="fade-up"
            class="product-card grid-cell"
            v-for="product in products"
            :key="product.id"
          >
            <h2 class="product-card__heading h5">
              <a> {{ product.attributes.product.name }} </a>
            </h2>
            <div class="product-card__inner">
              <div class="product-card__image">
                <a class="product-card__image-wrapper">
                  <img
                    :src="product.attributes.product.imageUrl"
                    alt="The Afro-Futurist Guide To Time Travel image"
                  />
                </a>
              </div>
              <div class="product-card__author">
                {{ product.attributes.product.author }}
              </div>
              <div class="product-card__price h5">
                <span
                  class="product-card__price--token"
                  v-if="product.attributes.product.priceEth"
                >
                  ETH
                  {{ product.attributes.product.priceEth }}
                </span>
                <span
                  class="product-card__price--token"
                  v-if="product.attributes.product.priceNear"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M12.9907 0.817778L9.65223 5.77778C9.42138 6.11556 9.86533 6.52444 10.185 6.24L13.4702 3.37778C13.559 3.30667 13.6833 3.36 13.6833 3.48444V12.4267C13.6833 12.5511 13.5235 12.6044 13.4525 12.5156L3.50795 0.604445C3.1883 0.213333 2.72659 0 2.21161 0H1.85645C0.93303 0 0.169434 0.764444 0.169434 1.70667V14.2933C0.169434 15.2356 0.93303 16 1.87421 16C2.46022 16 3.01072 15.6978 3.33037 15.1822L6.66888 10.2222C6.89973 9.88444 6.45578 9.47556 6.13614 9.76L2.8509 12.6044C2.76211 12.6756 2.6378 12.6222 2.6378 12.4978V3.57333C2.6378 3.44889 2.79762 3.39556 2.86866 3.48444L12.8132 15.3956C13.1328 15.7867 13.6123 16 14.1095 16H14.4647C15.4058 16 16.1694 15.2356 16.1694 14.2933V1.70667C16.1694 0.764444 15.4058 0 14.4647 0C13.8609 0 13.3104 0.302222 12.9907 0.817778Z"
                      fill="white"
                    />
                  </svg>
                  {{ product.attributes.product.priceNear }}
                </span>
                <span
                  class="product-card__price--original"
                  v-if="product.attributes.product.priceUsd"
                  >($ {{ product.attributes.product.priceUsd }})</span
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </section>

    <partner-form></partner-form>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
import PartnerForm from "../components/PartnerForm.vue";
import FooterComponent from "../components/FooterComponent.vue";

import dimas from "../assets/scripts/dimas";

// import ProductService from "../service/productService";
// import productService from "../service/productService";

export default {
  data() {
    return {
      products: [],
    };
  },
  metaInfo: {
    title: "FIRST PAN-EUROPEAN DIGITAL ART FAIR",
  },
  components: {
    HeaderComponent,
    MenuComponent,
    PartnerForm,
    FooterComponent,
  },
  mounted() {
    dimas();
  },
  async created() {
    await this.$store.dispatch("products/LOAD_PRODUCTS");
    this.products = this.$store.getters["products/GET_ALL_PRODUCTS"];
  },
  methods: {
    go(id) {
      this.$router.push({ name: "product", params: { id: id } });
    },
  },
};
</script>

<style>
</style>