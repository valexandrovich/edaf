<template>
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
        <a href="#" class="logotype">
          <img src="@/assets/images/logo/header-logo.svg" alt="Logotype" />
        </a>

        <button data-close class="menu__btn">
          <img src="@/assets/icons/close.svg" alt="Close" />
        </button>
      </header>

      <h3 class="form-section__heading h3">
        {{ $t("becomeForm.becomeAPartner") }}
      </h3>

      <div class="form-section__body">
        <form
          data-form
          action="mailto:someone@example.com"
          method="post"
          enctype="text/plain"
        >
          <div class="form-section__input-container">
            <label for="name">{{ $t("becomeForm.firstName") }}</label>
            <input
              required
              type="text"
              placeholder="First name"
              name="name"
              id="name"
            />
          </div>

          <div class="form-section__input-container">
            <label for="email">{{ $t("becomeForm.email") }}</label>
            <input
              required
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>

          <div class="form-section__input-container">
            <label for="company">{{ $t("becomeForm.company") }}</label>
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
            <label for="message">{{ $t("becomeForm.writeAMessage") }}</label>
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
                {{ $t("becomeForm.iAccept") }}
                <a href="#" class="form-section__input-accept social-link">
                  {{ $t("becomeForm.privacyPolicy") }}
                </a>
              </label>
            </div>

            <button type="submit" class="js-send-btn form-section__btn btn">
              {{ $t("becomeForm.send") }}
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
</template>

<script>
export default {};
</script>

<style>
</style>