<template>
  <div
    class="w-full relative inline-block lg:w-44 py-3 transition-all duration-200 hover:bg-white hover:text-black rounded-full ml-3 cursor-pointer z-10"
    @click="dropdown.languages = !dropdown.languages"
  >
    <div class="flex justify-center items-center relative">
      <i class="fas fa-globe text-lg mr-3"></i>
      <span>{{ $t(lang_attr) }}</span>
      <div id="languages-dropdown" class="absolute" v-show="dropdown.languages">
        <div
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
          class="text-center bg-black text-white hover:bg-white hover:text-black transition-all duration-200"
          @click="dropdown.languages = false"
        >
          <nuxt-link
            :to="localePath('index', lang.code)"
            class="inline-block w-full py-3"
          >
            {{ lang.name }}
          </nuxt-link>
        </div>
      </div>

      <svg class="ml-1 w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang_attr: String
  },
  data() {
    return {
      dropdown: {
        languages: false
      }
    }
  }
}
</script>

<style scoped>
  #languages-dropdown {
    top: 140%;
    width: 100%;
  }
</style>
