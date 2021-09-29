<template>
  <li>
    <nuxt-link
      :to="localePath(location)"
      class="inline-block px-7 py-3 transition-all duration-200 hover:bg-white hover:text-black rounded-full ml-3"
    >
      {{ text }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    location: String,
    text: String
  }
}
</script>

<style>

</style>
