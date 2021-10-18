<template>
  <span class="inconsolata font-medium select-none">
    <nuxt-link :to="localePath('index')">
      {{ logo_text }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  data() {
    return {
      logo_text: '<lombardomr />'
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap')

  .inconsolata
    font-family: 'Inconsolata', 'Arial', 'sans-serif', 'monospace'
</style>
