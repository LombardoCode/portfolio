<template>
  <div class="bg-gradient-to-t from-purple-600 to-purple-900 text-white">
    <Navbar :fixed_navbar="true"/>
    <ReusableContainer :top_spacing="true">
      <h1 class="oswald text-center text-5xl font-medium uppercase mb-10">{{ $t('pages.projects.title') }}</h1>
      <div id="projects">
        <ReusableProject
          :flipped="false"
          title="DevsOverflow"
          body="pages.projects.projects_section.devsoverflow.body"
          cover="projects/devsoverflow/cover.jpg"
          :urls="{
            0: {
              type: 'website',
              site: 'http://devsoverflow.atwebpages.com/',
              text: 'Website'
            },
            1: {
              type: 'github',
              site: 'https://www.github.com/LombardoCode/devsoverflow',
              text: 'Github'
            }
          }"
          :technologies="['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Laravel', 'TailwindCSS']"
        >
        </ReusableProject>

        <ReusableProject
          :flipped="true"
          title="shortify"
          body="pages.projects.projects_section.shortify.body"
          cover="projects/shortify/cover.jpg"
          :urls="{
            0: {
              type: 'website',
              site: 'http://www.shortify.atwebpages.com/',
              text: 'Website'
            },
            1: {
              type: 'github',
              site: 'https://www.github.com/LombardoCode/shortify',
              text: 'Github'
            }
          }"
          :technologies="['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Laravel', 'TailwindCSS']"
        >
        </ReusableProject>

        <ReusableProject
          :flipped="false"
          title="OpenChat"
          body="pages.projects.projects_section.openchat.body"
          cover="projects/openchat/cover.jpg"
          :urls="{
            0: {
              type: 'website',
              site: 'http://www.openchat.epizy.com/',
              text: 'Website'
            },
            1: {
              type: 'github',
              site: 'https://www.github.com/LombardoCode/openchat',
              text: 'Github'
            }
          }"
          :technologies="['HTML', 'CSS', 'JavaScript', 'React.js', 'Laravel', 'BootstrapCSS', 'Pusher']"
        >
        </ReusableProject>

        <ReusableProject
          :flipped="true"
          title="DiLombardo"
          body="pages.projects.projects_section.dilombardo.body"
          cover="projects/dilombardo/cover.jpg"
          :urls="{
            0: {
              type: 'website',
              site: 'https://dilombardo.herokuapp.com/',
              text: 'Website'
            },
            1: {
              type: 'github',
              site: 'https://www.github.com/LombardoCode/dilombardo',
              text: 'Github'
            }
          }"
          :technologies="['HTML', 'CSS', 'JavaScript']"
        >
        </ReusableProject>

        <ReusableProject
          :flipped="false"
          title="Colorless"
          body="pages.projects.projects_section.colorless.body"
          cover="projects/colorless/cover.jpg"
          :urls="{
            0: {
              type: 'website',
              site: 'https://www.github.com/LombardoCode/Colorless',
              text: 'Descargar'
            },
            1: {
              type: 'github',
              site: 'https://www.github.com/LombardoCode/Colorless',
              text: 'Github'
            }
          }"
          :technologies="['GDScript']"
        >
        </ReusableProject>
      </div>
    </ReusableContainer>
  </div>
</template>

<script>
export default {
  name: 'projects',
  nuxtI18n: {
    paths: {
      es: '/proyectos',
      en: '/projects'
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
