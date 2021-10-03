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
                <p class="text-3xl">Desarrollador Web</p>
              </div>
              <div id="body-cv" class="flex flex-col lg:flex-row bg-blue-900">
                <div id="left-side-cv" class="bg-gray-1100 text-white px-5 py-8">
                  <div id="contact" class="mb-10">
                    <h3 class="oswald uppercase text-4xl">Contacto</h3>
                    <div id="contact-wrapper" class="text-xl">
                      <div id="phone" class="flex items-center py-1">
                        <i class="fas fa-phone-alt mr-3 text-xl align-middle transform rotate-90"></i>
                        <p>811-906-1750</p>
                      </div>
                      <div id="email" class="flex items-center py-1">
                        <i class="fas fa-envelope mr-3 text-xl align-middle"></i>
                        <p>LombardoBusiness@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div id="website" class="mb-10">
                    <h3 class="oswald uppercase text-4xl">Sitio web</h3>
                    <div class="flex items-center py-1 text-xl">
                      <i class="fas fa-globe mr-3 text-xl align-middle"></i>
                      <a href="https://www.lombardo.dev/" target="_blank" rel="noopener noreferrer">lombardo.dev</a>
                    </div>
                  </div>

                  <div id="projects" class="w-full lg:w-56">
                    <h3 class="oswald uppercase text-4xl">Portfolio de proyectos</h3>
                    <div id="portfolio" class="text-xl">
                      <div class="flex items-center py-1">
                        <i class="fas fa-globe mr-3 text-xl align-middle"></i>
                        <a href="https://www.lombardo.dev/proyectos" target="_blank" rel="noopener noreferrer">lombardo.dev/proyectos</a>
                      </div>
                      <div id="email" class="flex items-center py-1">
                        <i class="fab fa-github mr-3 text-xl align-middle"></i>
                        <a href="https://www.github.com/LombardoCode/" target="_blank" rel="noopener noreferrer">github.com/LombardoCode</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="right-side-cv" class="flex-1 px-5 py-8 leading-tight bg-white text-black">
                  <div class="mb-12" v-for="(item, index) in cv.right_side" :key="index">
                    <ReusableCVSection :item="item"></ReusableCVSection>
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
        right_side: [
          {
            title: 'Experiencia laboral',
            font_awesome_icon: '',
            sub_items: [
              {
                heading_1: 'Ayudante general',
                heading_2: 'Servicio Moreno Car Wash | FEB 2014 - JUL 2018',
                heading_3: [
                  "- Recibir material de proveedores",
                  "- Lavado, engrasado y aspirado de los vehículos"
                ]
              },
              {
                heading_1: 'Colaborador',
                heading_2: 'Zihuame Mochilla | SEP 2018 - MAR 2019',
                heading_3: [
                  "- Recaudación de material para proyectos sociales",
                  "- Difusión en redes sociales"
                ]
              }
            ]
          },

          {
            title: 'Educación',
            font_awesome_icon: '',
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
            font_awesome_icon: '',
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
            title: 'Reconocimientos',
            font_awesome_icon: '',
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
