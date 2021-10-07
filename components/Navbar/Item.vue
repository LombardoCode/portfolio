<template>
  <li class="w-full">
    <nuxt-link
      :to="localePath(location)"
      class="w-full lg:w-auto text-center lg:text-left inline-block px-7 py-5 lg:py-3 transition-all duration-200 hover:bg-white hover:text-black rounded-full lg:ml-3 mb-3 lg:mb-0"
    >
      {{ $t(lang_attr) || text }}
    </nuxt-link>
  </li>
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

<style>

</style>
