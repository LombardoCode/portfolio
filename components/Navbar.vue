<template>
  <div class="select-none z-20" :class="classesNavbar">
    <div class="container mx-auto">
      <div class="flex justify-between items-center text-white py-3">
        <span>Logo</span>
        <nav>
          <ul class="flex items-center">
            <NavbarItem location="index" lang_attr="navbar.home"/>
            <NavbarItem location="projects" lang_attr="navbar.proyects"/>
            <NavbarItem location="cv" text="CV"/>
            <NavbarLanguageSelector lang_attr="navbar.language"/>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed_navbar: Boolean,
    backgroundColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    classesNavbar() {
      let classes = '';
      if (this.fixed_navbar) { classes += 'fixed w-full ' }
      if (this.backgroundColor) { classes += this.backgroundColor }
      return classes;
    }
  }
}
</script>

<style>

</style>
