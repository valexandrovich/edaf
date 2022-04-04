<template>
  <div>
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

        <h3 class="form-section__heading h3">
          {{ $t("becomePartner.becomeAPartner") }}
        </h3>

        <div class="form-section__body">
          <form data-form enctype="text/plain">
            <div class="form-section__input-container">
              <label for="name">{{ $t("becomePartner.firstName") }}</label>
              <input
                required
                type="text"
                placeholder="First name"
                name="name"
                id="name"
                v-model="name"
              />
            </div>

            <div class="form-section__input-container">
              <label for="email">{{ $t("becomePartner.email") }}</label>
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                v-model="email"
              />
            </div>

            <div class="form-section__input-container">
              <label for="company">{{ $t("becomePartner.company") }}</label>
              <input
                type="text"
                placeholder="Company"
                name="company"
                id="company"
                v-model="company"
              />
            </div>

            <div
              class="
                form-section__input-container
                form-section__input-container--message
              "
            >
              <label for="message">{{
                $t("becomePartner.writeAMessage")
              }}</label>
              <input
                required
                type="text"
                placeholder="Write a Message"
                name="message"
                id="message"
                v-model="message"
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
                  {{ $t("becomePartner.iAccept") }}
                  <a href="#" class="form-section__input-accept social-link">
                    {{ $t("becomePartner.privacyPolicy") }}
                  </a>
                </label>
              </div>

              <button @click="send()" type="button" class="js-send-btn form-section__btn btn">
                {{ $t("becomePartner.send") }}
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      company: "",
      message: "",
    };
  },

  methods: {
    send() {
      var agree = document.getElementById("accept");
      if (agree.checked) {
        var axios = require("axios");
        var data = JSON.stringify({
          data: {
            name: this.name,
            email: this.email,
            company: this.company,
            message: this.message,
          },
        });

        var config = {
          method: "post",
          url: "https://edaf.sbs/api/partner-requests",
          headers: {
            Authorization:
              "bearer a3dfa9be05685a433a1e55cdf47d8c9e0ac350e704ebca9380e6c996ff9f8243ddce8da133d9a3c23e5e1b3626565807ecd41eed1778e2809e8205c1b58d0e9226f902083ef24b542d326c0b42c9b4b61ce8e983a7aae274fca12d3669a662f5cc2a41084c7a2043d1d12245273972616731373626c96c374133089be91d57f0",
            "Content-Type": "application/json",
          },
          data: data,
        };



        axios(config)
          .then(function (response) {
            window.location.href = "/";
          })
          .catch(function (error) {
            console.log(error)
          });
      }
    },
  },
};
</script>

<style>
</style>