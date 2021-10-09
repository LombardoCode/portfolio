<template>
  <div class="bg-black text-black">
    <Navbar :fixed_navbar="true" backgroundColor="bg-black"/>
    <h1 class="titular oswald text-center text-3xl sm:text-5xl font-medium uppercase pb-28 lg:pb-24 pt-28 bg-black text-white">{{ $t('pages.projects.title') }}</h1>
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
import projects_data from './frontend-challenges.json';
export default {
  data() {
    return {
      projects: projects_data
    }
  },
  nuxtI18n: {
    paths: {
      es: '/proyectos/retos_frontend',
      en: '/projects/frontend_challenges'
    }
  }
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Rubik:wght@400;500&display=swap')

  $poppins: 'Poppins', 'Arial', 'sans-serif'
  $nunito: 'Nunito Sans', 'Arial', 'sans-serif'
  $oswald: 'Oswald', 'Arial', 'sans-serif'
  $roboto_condensed: 'Roboto Condensed', 'Arial', 'sans-serif'
  $rubik: 'Rubik', 'Arial', 'sans-serif'

  .poppins
    font-family: $poppins
  .nunito
    font-family: $nunito
  .oswald
    font-family: $oswald
  .roboto-cond
    font-family: $roboto_condensed
  .rubik
    font-family: $rubik
</style>
