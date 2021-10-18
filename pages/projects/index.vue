<template>
  <div class="bg-black text-black">
    <Navbar :fixed_navbar="true" backgroundColor="bg-black"/>
    <H1 class="titular oswald text-center font-medium pb-28 lg:pb-24 pt-28 bg-black text-white">{{ $t('pages.projects.title') }}</H1>
    <div id="projects-container" class="relative transform -translate-y-10 z-10">
      <div id="projects">
        <ReusableProjectInList
          v-for="(project, index) in projects" :key="index"
          :project="project"
        >
        </ReusableProjectInList>
      </div>
    </div>
    <ReusableFooter />
  </div>
</template>

<script>
import projects_data from './projects_data.json';
export default {
  name: 'projects',
  nuxtI18n: {
    paths: {
      es: '/proyectos',
      en: '/projects'
    }
  },
  data() {
    return {
      projects: projects_data
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Rubik:wght@400;500&display=swap')

  .poppins
    font-family: 'Poppins', 'Arial', 'sans-serif'
  .nunito
    font-family: 'Nunito Sans', 'Arial', 'sans-serif'
  .oswald
    font-family: 'Oswald', 'Arial', 'sans-serif'
  .roboto-cond
    font-family: 'Roboto Condensed', 'Arial', 'sans-serif'
  .rubik
    font-family: 'Rubik', 'Arial', 'sans-serif'
</style>
