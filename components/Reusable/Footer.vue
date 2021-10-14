<template>
  <footer
    class="footer relative w-full bg-black text-white py-16"
  >
    <ReusableContainer>
      <div class="flex flex-col lg:flex-row justify-between items-center">
        <div class="mb-10 lg:mb-0">
          <ReusableLogo class="text-5xl" />
        </div>
        <ul class="w-full lg:w-auto px-10 lg:px-0 flex flex-col items-center">
          <ReusableFooterItem location="index" lang_attr="navbar.about"/>
          <ReusableFooterItem location="projects" lang_attr="navbar.proyects"/>
          <ReusableFooterItem location="cv" text="CV"/>
        </ul>
      </div>
    </ReusableContainer>
  </footer>
</template>

<script>
export default {
  props: {
    skewed: String
  }
}
</script>

<style lang="sass" scoped>


  .skewed_up
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 100%)

  .skewed_down
    clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%)
</style>
