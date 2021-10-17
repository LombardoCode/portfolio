<template>
  <div class="select-none z-20" :class="classesNavbar">
    <ReusableContainer>
      <div class="flex flex-col lg:flex-row justify-between text-white py-3">
        <div class="flex justify-between items-center">
          <ReusableLogo class="text-2xl" />
          <div id="toggler" class="lg:hidden px-4 py-2 rounded-lg border-2 border-white transition-all duration-200 hover:bg-white hover:text-black cursor-pointer" @click="toggleNavbar()">
            <i class="fas fa-bars text-xl"></i>
          </div>
        </div>
        <nav class="lg:block mt-3 lg:mt-0" :class="{'hidden': !menu.mostrar}">
          <ul class="flex flex-col lg:flex-row items-center w-full">
            <NavbarItem location="about" lang_attr="navbar.about"/>
            <NavbarItem location="projects" lang_attr="navbar.proyects"/>
            <NavbarItem location="cv" text="CV"/>
            <NavbarLanguageSelector lang_attr="navbar.language"/>
          </ul>
        </nav>
      </div>
    </ReusableContainer>
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
  data() {
    return {
      menu: {
        mostrar: false
      }
    }
  },
  methods: {
    toggleNavbar() {
      this.menu.mostrar = !this.menu.mostrar;
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
