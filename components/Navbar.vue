<template>
  <div class="bg-black" :class="{'fixed w-full': fixed}">
    <div class="container mx-auto">
      <div class="flex justify-between items-center text-white py-3">
        <span>Logo</span>
        <nav>
          <ul class="flex items-center">
            <NavbarItem location="index" text="Inicio"/>
            <NavbarItem location="proyectos" text="Proyectos"/>
            <NavbarItem location="cv" text="CV"/>
            <NavbarLanguageSelector/>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: Boolean
  }
}
</script>

<style>

</style>
