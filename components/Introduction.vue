<template>
  <div class="px-4">
    <div class="w-full lg:w-48rem mx-auto h-screen text-white text-center">
      <div class="relative flex flex-col justify-center items-center h-full">
        <vue-typed-js
          class="md:absolute transform duration-1000"
          :class="{'md:-translate-y-10': buttons_visibility}"
          :strings="[get_welcome_msg]"
          :contentType="'html'"
          :showCursor="false"
          :typeSpeed="44"
          :startDelay="typing_delay"
          @onStringTyped="typing_status = true"
          @onComplete="buttons_visibility = true"
        >
          <div>
            <span ref="typing" class="typing text-3xl sm:text-4xl xl:text-5xl leading-relaxed sm:leading-normal fnt_raleway font-semibold"></span>
            <span
              class="cursor-pointer-icon transform translate-y-2 w-2 h-10 lg:h-14"
              :class="typing_status ? 'typing-animation' : ''"
            ></span>
          </div>
        </vue-typed-js>
        <div
          id="buttons"
          class="fnt_raleway w-full md:absolute mt-8 transform duration-500"
          :class="{'hidden': !buttons_visibility, 'flex flex-col md:flex-row md:justify-center md:translate-y-20 buttons_behaviour': buttons_visibility}"
        >
          <nuxt-link :to="localePath('about')" class="bg-blue-700 hover:bg-blue-900 duration-200 text-white px-10 py-6 md:py-4 md:mr-2 mb-6 md:mb-0 rounded-full">{{ $t('pages.index.buttons.about_me') }}</nuxt-link>
          <nuxt-link :to="localePath('projects')" class="bg-blue-700 hover:bg-blue-900 duration-200 text-white px-10 py-6 md:py-4 md:ml-2 rounded-full">{{ $t('pages.index.buttons.my_projects') }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
export default {
  data() {
    return {
      typing_status: true,
      typing_delay: 1000,
      buttons_visibility: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.typing_status = false;
    }, this.typing_delay);
  },
  computed: {
    get_welcome_msg() {
      if (this.$i18n.locale == "es") {
        return this.$i18n._vm.messages.es.pages.index.welcome_html;
      }

      if (this.$i18n.locale == "en") {
        return this.$i18n._vm.messages.en.pages.index.welcome_html;
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700&display=swap')

  .fnt_raleway
    font-family: 'Raleway', 'Arial', sans-serif

  .cursor-pointer-icon
    content: ''
    display: inline-block
    background-color: #ffffff
    border-radius: 4px
    margin-left: 4px

  .typing-animation
    animation-duration: 1s
    animation-iteration-count: infinite
    animation-name: typingIn

  @keyframes typingIn
    0%, 100%
      opacity: 1

    40%, 60%
      opacity: 0

  .welcome_msg_behaviour
    transform: translateY(-40px)

  .buttons_behaviour
    animation-duration: 1s
    animation-iteration-count: 1
    animation-name: fadeIn

  @keyframes fadeIn
    0%
      opacity: 0

    100%
      opacity: 1
</style>
