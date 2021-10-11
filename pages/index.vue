<template>
  <div class="bg-gradient-to-t from-black to-black">
    <Navbar :fixed_navbar="true"/>
    <ReusableContainer :top_spacing="false">
      <Introduction />
    </ReusableContainer>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    slot_fixed_navbar: Boolean
  }
}
</script>

<style lang="sass">
  .fondo
    background-color: #000
</style>
