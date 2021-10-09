<template>
  <span class="inconsolata font-medium select-none">{{ logo_text }}</span>
</template>

<script>
export default {
  data() {
    return {
      logo_text: '<lombardo.mr />'
    }
  }
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap')

  $inconsolata: 'Inconsolata', 'Arial', 'sans-serif', 'monospace'

  .inconsolata
    font-family: $inconsolata
</style>
