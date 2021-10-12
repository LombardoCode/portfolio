<template>
  <div>
    <div class="w-full lg:w-48rem mx-auto h-screen text-white text-center">
      <div class="flex flex-col justify-center items-center h-full">
        <vue-typed-js
          class=""
          :strings="[get_welcome_msg]"
          :contentType="'html'"
          :showCursor="false"
          :typeSpeed="44"
          :startDelay="typing_delay"
          @onStringTyped="typing_status = true"
        >
          <div>
            <span ref="typing" class="typing text-5xl leading-normal fnt_raleway font-semibold"></span>
            <span
              class="cursor-pointer-icon"
              :class="typing_status ? 'typing-animation' : ''"
            ></span>
          </div>
        </vue-typed-js>
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
      typing_delay: 1000
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
    width: 10px
    height: 56px
    background-color: #ffffff
    border-radius: 4px
    transform: translateY(8px)
    margin-left: 4px

  .typing-animation
    animation-duration: 1s
    animation-iteration-count: infinite
    animation-name: slidein

  @keyframes slidein
    0%, 100%
      opacity: 1

    40%, 60%
      opacity: 0

</style>
