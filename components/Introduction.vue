<template>
  <div class="h-screen text-white">
    <div class="flex flex-col justify-center items-center h-full">
      <vue-typed-js
        :strings="[get_welcome_msg]"
        :contentType="'html'"
        :showCursor="false"
      >
        <h1 class="typing text-5xl"></h1>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
export default {
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

<style>

</style>
