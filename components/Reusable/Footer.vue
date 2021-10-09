<template>
  <footer class="bg-black text-white py-16">
    <ReusableContainer>
      <div class="flex flex-col lg:flex-row justify-between items-center">
        <div class="mb-10 lg:mb-0 bg-red-300">
          Logo
        </div>
        <ul class="w-full lg:w-auto px-10 lg:px-0 flex flex-col items-center bg-blue-300">
          <ReusableFooterItem location="index" lang_attr="navbar.home"/>
          <ReusableFooterItem location="projects" lang_attr="navbar.proyects"/>
          <ReusableFooterItem location="cv" text="CV"/>
        </ul>
      </div>
    </ReusableContainer>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
