<template>
  <div>
    <section class="product-page">
      <div class="product-page__hero product-hero">
        <div class="product-hero__container">
          <div class="product-hero__header">
            <div class="product-hero__gallery product__swiper">
              <div class="swiper-wrapper">
                <div class="product-hero__slide swiper-slide">
                  <img
                    src="@/assets/images/product/pdp-image_1.jpeg"
                    alt="Data Fossils"
                    class="product-hero__image"
                  />
                </div>
                <div class="product-hero__slide swiper-slide">
                  <img
                    src="@/assets/images/product/pdp-image_1.jpeg"
                    alt="Data Fossils"
                    class="product-hero__image"
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>

            <div class="product-hero__info">
              <div class="product-hero__wrapper">
                <h1 data-aos="fade-up" class="product-hero__heading h3">
                  Data Fossils
                </h1>
                <div class="product-hero__author">Nirit Binyamini Ben-Meir</div>
                <div class="product-hero__price h5">
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
                    1, 500
                  </span>
                  <span class="product-hero__price--original">
                    ($ I5,630)
                  </span>
                </div>
              </div>
              <ul class="product-hero__list">
                <li class="product-hero__item">
                  <span> Edition 1 of 1 </span>
                </li>
                <li class="product-hero__item">
                  <span> Owned by: V-Art </span>
                </li>
                <li class="product-hero__item">
                  <span> Presented by: V-Art </span>
                </li>
                <li class="product-hero__item">
                  <span> Collection: Test Name </span>
                </li>
              </ul>
              <form action="cart/add" method="POST" class="product-hero__form">
                <select name="id" id="product-select" class="no-js">
                  <option
                    value="product_id_here"
                    data-price="product_price_here"
                    data-id="product_id_here"
                  >
                    PRODUCT_NAME_HERE
                  </option>
                </select>

                <button class="product-hero__btn btn">
                  <span class="show-on-mobile">Bacome a speaker</span>
                  <span class="hide-on-mobile">Buy</span>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
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
              <img src="@/assets/images/product/author-img.jpeg" alt="Artist" />
            </div>
            <ul class="artist-info__social">
              <li class="artist-info__social-item">
                <a href="#" class="artist-info__social-link social-link">
                  Instagram
                </a>
              </li>
              <li class="artist-info__social-item">
                <a href="#" class="artist-info__social-link social-link">
                  Faceebook
                </a>
              </li>
            </ul>
          </div>
          <div class="artist-info__column">
            <div class="artist-info__description">
              <h3 class="h4">Fewocious</h3>
              <div class="artist-info__text">
                <p>
                  One of the first responses that Victor Langlois, aka
                  Fewocious, ever sparked when showing his digital art to the
                  world was brutally negative: “Your art is so ugly and that’s
                  why you can’t do it.” That he received this feedback from his
                  own grandmother, who had taken him in after he ran away from
                  an abusive home at age 12, made it all the more cutting.
                </p>
                <p>
                  Of course, that’s now ancient history. At the age of 18, the
                  queer transgender artist— who has said he found in the crypto
                  community the support he lacked from his family—is today
                  breaking boundaries with his blazingly colorful, fiercely
                  personal NFT work, which can command prices in the millions.
                </p>
                <p>
                  Unlike many top players in the NFT space, who painstakingly
                  preserve their anonymity behind cyphers and screen names,
                  Fewocious has placed his own biography in the center of his
                  practice. Most famously, his 2021 work Hello, i’m Victor
                  (FEWOCiOUS) and This Is My Life details his harrowing
                  experience between the ages of 14 and 18, when he struggled to
                  find himself (and his talent) under the gaze of his
                  disapproving family. A combination of digital pieces and
                  tangible paintings accompanied by a series of drawings, it
                  sold for $2.2 million at Christie’s New York this June—making
                  him the youngest artist to sell at the auction house, as well
                  as the first to crash its site due to high demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dimas from "../assets/scripts/dimas";
export default {
props: ['productId'],
mounted(){
  dimas() 
}
}

</script>

<style>
</style>