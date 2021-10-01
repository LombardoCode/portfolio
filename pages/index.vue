<template>
  <div class="bg-gradient-to-t from-blue-1000 to-blue-1100">
    <Navbar :fixed_navbar="true"/>
    <ReusableContainer :top_spacing="false">
      <Tutorial />
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
