<template>
  <div v-if="product">
    <header-component></header-component>
    <menu-component></menu-component>
    <section class="product-page" >
      <div class="product-page__hero product-hero">
        <div class="product-hero__container">
          <div class="product-hero__header">
            <div class="product-hero__gallery product__swiper" >
              <div class="swiper-wrapper">
                <div class="product-hero__slide swiper-slide" >
                  <img
                    :src="this.product.attributes.product.imageUrl"
                    alt="Data Fossils"
                    class="product-hero__image"
                  />
                </div>
                <!-- <div class="product-hero__slide swiper-slide">
                  <img
                    src="@/assets/images/product/pdp-image_1.jpeg"
                    alt="Data Fossils"
                    class="product-hero__image"
                  />
                </div> -->
              </div>
              <div class="swiper-pagination"></div>
            </div>

            <div class="product-hero__info">
              <div class="product-hero__wrapper">
                <h1 data-aos="fade-up" class="product-hero__heading h4" style="max-width: 800px;">
                  {{ this.product.attributes.product.name }}
                </h1>
                <div class="product-hero__author">
                  {{ this.product.attributes.product.author }}
                </div>
                 <div class="product-hero__price h5" v-if="this.product.attributes.product.priceEth">
                  <span class="product-hero__price--token">
                   ETH
                    {{ this.product.attributes.product.priceEth }}
                  </span>
                  <span class="product-hero__price--original">
                    ($ {{ this.product.attributes.product.priceUsd }})
                  </span>
                </div>
                <div class="product-hero__price h5" v-if="this.product.attributes.product.priceNear">
                  <span class="product-hero__price--token">
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
                    {{ this.product.attributes.product.priceNear }}
                  </span>
                  <span class="product-hero__price--original">
                    ($ {{ this.product.attributes.product.priceUsd }})
                  </span>
                </div>
              </div>
              <ul class="product-hero__list">
                <li class="product-hero__item">
                  <span>
                    Edition {{ this.product.attributes.product.edition }}
                  </span>
                </li>
                <li class="product-hero__item">
                  <span>
                    Owned by: {{ this.product.attributes.product.owner }}
                  </span>
                </li>
                <li class="product-hero__item">
                  <span>
                    Presented by:
                    {{ this.product.attributes.product.presenter }}</span
                  >
                </li>
                <li class="product-hero__item">
                  <span>
                    Collection:
                    {{ this.product.attributes.product.collectionName }}
                  </span>
                </li>
              </ul>
              <form action="cart/add" method="POST" class="product-hero__form">
                <select name="id" id="product-select" class="no-js">
                  <option
                    value="product_id_here"
                    data-price="product_price_here"
                    data-id="product_id_here"
                  >
                    {{ this.product.attributes.product.name }}
                  </option>
                </select>

                <button class="product-hero__btn btn" type="button" @click="buy(product.attributes.product.buyUrl)">
                  
                  <div v-if="product.attributes.product.buyUrl">
                    <span class="show-on-mobile" > Buy</span>
                  <span class="hide-on-mobile" > Buy </span>
                  </div>
                  <div v-else>
                    <span class="show-on-mobile" > Coming soon </span>
                  <span class="hide-on-mobile" > Coming soon </span>
                  </div>
                  <span class="btn-arrows">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div class="product-hero__footer container">
            <div class="product-hero__description">
              <h2 data-aos="fade-up" class="product-hero__heading h3">
                Artwork description
              </h2>
              <div data-aos="fade-up" class="product-hero__text">
                {{ this.product.attributes.product.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script type="application/ld+json">
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Data Fossils",
          "image": "/@/assets/images/product/pdp-image_1.jpeg",
          "description": "Description placeholder",
          "brand": {
            "@type": "Brand",
            "name": "EDAF"
          },
          "sku": "1234",
          "offers": {
            "@type": "Offer",
            "url": "/",
            "priceCurrency": "USD",
            "price": "15630",
            "availability": "https://schema.org/InStock"
          }
        }
      </script>
    </section>

    <section class="artist-info">
      <h2 data-aos="fade-up" class="artist-info__heading container h3">
        information about the artist
      </h2>
      <div data-aos="fade-up" class="artist-info__wrapper">
        <div class="artist-info__inner">
          <div class="artist-info__media">
            <div class="artist-info__image">
              <img
                :src="this.product.attributes.product.authorImageUrl"
                alt="Artist"
              />
            </div>
            <ul class="artist-info__social">
              <li
                class="artist-info__social-item"
                v-if="this.product.attributes.product.authorInstagramUrl"
              >
                <a
                  :href="this.product.attributes.product.authorInstagramUrl"
                  class="artist-info__social-link social-link"
                >
                  Instagram
                </a>
              </li>
              <li
                class="artist-info__social-item"
                v-if="this.product.attributes.product.authorFacebookUrl"
              >
                <a
                  :href="this.product.attributes.product.authorFacebookUrl"
                  class="artist-info__social-link social-link"
                >
                  Faceebook
                </a>
              </li>
              <li
                class="artist-info__social-item"
                v-if="this.product.attributes.product.authorTwitterUrl"
              >
                <a
                  :href="this.product.attributes.product.authorTwitterUrl"
                  class="artist-info__social-link social-link"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div class="artist-info__column">
            <div class="artist-info__description">
              <h3 class="h4">{{ this.product.attributes.product.author }}</h3>
              <div class="artist-info__text">
                {{ this.product.attributes.product.authorBio }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import MenuComponent from "../components/MenuComponent.vue";
import dimas from "../assets/scripts/dimas";
import ProductService from '../service/productService'
export default {
  components: {
    HeaderComponent,
    MenuComponent,
  },
  data() {
    return {
      product: null
    };
  },
  async beforeMount() {
    const p= await ProductService.getProductById(this.$route.params.id)
    this.product = p.data.data
  },
  mounted() {
    dimas();
    window.scrollTo(0, 0);
  },
  methods: {
    buy(url){
      console.log(url);
       window.open(url, '_blank').focus();
    }
  }
};
</script>

<style>
</style>