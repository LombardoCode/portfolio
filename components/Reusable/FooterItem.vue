<template>
  <nuxt-link
    :to="localePath(location)"
    class="w-full select-none roboto font-medium text-center inline-block px-7 py-5 lg:py-3 transition-all duration-200 hover:bg-white hover:text-black rounded-full mb-3 lg:mb-0"
  >
    {{ $t(lang_attr) || text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    location: String,
    text: String,
    lang_attr: String
  }
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap')

  $roboto: 'Roboto', 'Arial', 'sans-serif'

  .roboto
    font-family: $roboto
</style>
