<template>
  <div class="bg-black text-white">
    <Navbar :fixed_navbar="false"/>
    <ReusableContainer :top_spacing="false">
      <div class="relative">
        <div class="bg-gray-1000 relative">
          <button id="download-pdf" class="fixed z-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xl uppercase roboto font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 w-full md:w-auto mb-4 py-6 md:py-6 px-0 md:px-24 m-0 md:m-4" style="bottom: 0%; right: 0%;">Descargar PDF</button>
          <div class="container mx-auto">
            <div id="cv">
              <div id="header-cv" class="py-10 px-10 bg-blue-800 oswald uppercase bg-blue-1000 text-white text-center">
                <p class="text-5xl mb-2">Lombardo Moreno Rodríguez</p>
                <p class="text-3xl">{{ $t('pages.cv.heading.occupation[0].title') }}</p>
              </div>
              <div id="body-cv" class="flex flex-col lg:flex-row bg-blue-900">
                <div id="left-side-cv" class="w-full lg:w-80 bg-gray-1100 text-white px-5 py-8">
                  <div class="mb-11" v-for="(item, index) in cv.left_side" :key="index">
                    <ReusableCVLeftSection :item="item"></ReusableCVLeftSection>
                  </div>
                </div>
                <div id="right-side-cv" class="flex-1 px-5 py-8 leading-tight bg-white text-black">
                  <div class="mb-12" v-for="(item, index) in cv.right_side" :key="index">
                    <ReusableCVRightSection :item="item"></ReusableCVRightSection>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReusableContainer>
  </div>
</template>

<script>
export default {
  name: 'cv',
  data() {
    return {
      cv: {
        left_side: [
          {
            title: 'pages.cv.left_side[0].title',
            items: [
              {
                type: 'general',
                font_awesome_icon: 'fas fa-phone-alt rotate-90',
                text: 'pages.cv.left_side[0].items[0].text',
              },
              {
                type: 'email',
                font_awesome_icon: 'fas fa-envelope',
                text: 'pages.cv.left_side[0].items[1].text'
              }
            ]
          },

          {
            title: 'pages.cv.left_side[1].title',
            items: [
              {
                type: 'website',
                font_awesome_icon: 'fas fa-globe',
                text: 'pages.cv.left_side[1].items[0].text'
              },
            ]
          },

          {
            title: 'pages.cv.left_side[2].title',
            items: [
              {
                type: 'website',
                font_awesome_icon: 'fas fa-globe',
                text: 'pages.cv.left_side[2].items[0].text'
              },

              {
                type: 'website',
                font_awesome_icon: 'fab fa-github',
                text: 'pages.cv.left_side[2].items[1].text'
              },
            ]
          },

          {
            title: 'pages.cv.left_side[3].title',
            list: [
              "pages.cv.left_side[3].list[0]",
              "pages.cv.left_side[3].list[1]",
              "pages.cv.left_side[3].list[2]",
              "pages.cv.left_side[3].list[3]",
              "pages.cv.left_side[3].list[4]"
            ]
          }
        ],
        right_side: [
          {
            title: 'pages.cv.right_side[0].title',
            font_awesome_icon: 'fas fa-suitcase',
            sub_items: [
              {
                heading_1: 'pages.cv.right_side[0].sub_items[0].heading1',
                heading_2: 'pages.cv.right_side[0].sub_items[0].heading2',
                heading_3: [
                  "pages.cv.right_side[0].sub_items[0].heading3[0]",
                  "pages.cv.right_side[0].sub_items[0].heading3[1]"
                ]
              },
              {
                heading_1: 'pages.cv.right_side[0].sub_items[1].heading1',
                heading_2: 'pages.cv.right_side[0].sub_items[1].heading2',
                heading_3: [
                  "pages.cv.right_side[0].sub_items[1].heading3[0]",
                  "pages.cv.right_side[0].sub_items[1].heading3[1]"
                ]
              }
            ]
          },

          {
            title: 'Educación',
            font_awesome_icon: 'fas fa-graduation-cap',
            sub_items: [
              {
                heading_1: 'Universidad TecMilenio | AGO 2017 - JUN 2021.',
                heading_2: 'Estudiante de Ingeniería en Computación Administrativa',
              },
              {
                heading_1: 'Quick Learning | AGO 2010 - AGO 2012',
                heading_2: 'Escuela de Inglés',
              }
            ]
          },

          {
            title: 'Conocimientos técnicos',
            font_awesome_icon: 'fas fa-cog',
            list: [
              "Inglés avanzado",
              "Vue.js, Laravel",
              "HTML, CSS, JavaScript, PHP, GDScript, SQL",
              "Bootstrap, Tailwind",
              "GIMP, Photoshop",
              "Linux, Windows"
            ]
          },

          {
            title: 'Idiomas',
            font_awesome_icon: 'fas fa-globe-americas',
            list: [
              "Español (Nativo)",
              "Inglés (Avanzado)",
            ]
          },

          {
            title: 'Reconocimientos',
            font_awesome_icon: 'fas fa-award',
            sub_items: [
              {
                heading_1: 'Certificado de excelencia',
                heading_2: 'Quick Learning (Inglés)',
              },
            ]
          },
        ]
      }
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap')

  $nunito: 'Nunito Sans', 'Arial', 'sans-serif'
  $oswald: 'Oswald', 'Arial', 'sans-serif'
  $raleway: 'Raleway', 'Arial', 'sans-serif'
  $roboto: 'Roboto', 'Arial', 'sans-serif'

  .nunito
    font-family: $nunito
  .oswald
    font-family: $oswald
  .raleway
    font-family: $raleway
  .roboto
    font-family: $roboto
</style>
