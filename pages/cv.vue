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
                  <div id="work-experience" class="mb-12">
                    <div class="flex items-center">
                      <i class="fas fa-suitcase mr-3 text-3xl align-middle"></i>
                      <h2 class="raleway text-4xl font-bold uppercase" style="font-weight: 900">Experiencia laboral</h2>
                    </div>
                    <div id="jobs">
                      <ul>
                        <li class="job mb-3">
                          <div class="flex items-center relative">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-3xl font-medium roboto">Ayudante general</h3>
                          </div>
                          <h4 class="pl-6 text-2xl font-medium roboto">Servicio Moreno Car Wash | FEB 2014 - JUL 2018</h4>
                          <ul class="pl-6 text-xl roboto">
                            <li class="pl-4">- Recibir material de proveedores</li>
                            <li class="pl-4">- Lavado, engrasado y aspirado de los vehículos</li>
                          </ul>
                        </li>

                        <li class="job">
                          <div class="flex items-center relative">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-3xl font-medium roboto">Colaborador</h3>
                          </div>
                          <h4 class="pl-6 text-2xl font-medium roboto">Zihuame Mochilla | SEP 2018 - MAR 2019</h4>
                          <ul class="pl-6 text-xl roboto">
                            <li class="pl-4">- Recaudación de material para proyectos sociales</li>
                            <li class="pl-4">- Difusión en redes sociales</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="education" class="mb-12">
                    <div class="flex items-center">
                      <i class="fas fa-graduation-cap mr-3 text-3xl align-middle"></i>
                      <h2 class="raleway text-4xl font-bold uppercase" style="font-weight: 900">Educación</h2>
                    </div>
                    <div id="studies">
                      <ul>
                        <li class="study-institute mb-3">
                          <div class="flex items-center relative">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-3xl font-medium roboto">Universidad TecMilenio | AGO 2017 - JUN 2021.</h3>
                          </div>
                          <h4 class="pl-6 text-2xl font-medium roboto">Estudiante de Ingeniería en Computación Administrativa</h4>
                          <p class="pl-6 text-xl roboto">Actualmente cursando 6to semestre</p>
                        </li>

                        <li class="study-institute">
                          <div class="flex items-center relative">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-3xl font-medium roboto">Quick Learning | AGO 2010 - AGO 2012</h3>
                          </div>
                          <h4 class="pl-6 text-2xl font-medium roboto">Escuela de Inglés</h4>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="technical-skills-wrapper" class="mb-12">
                    <div class="flex items-center">
                      <i class="fas fa-graduation-cap mr-3 text-3xl align-middle"></i>
                      <h2 class="raleway text-4xl font-bold uppercase" style="font-weight: 900">Conocimientos técnicos</h2>
                    </div>
                    <div id="technical-skills">
                      <ul>
                        <li class="mb-3 flex flex-wrap">
                          <div class="flex items-center relative w-full lg:w-1/2 pr-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Inglés avanzado</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 lg:pl-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Vue.js, Laravel</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 pr-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">HTML, CSS, JavaScript, PHP, GDScript, SQL</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 lg:pl-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Bootstrap, Tailwind</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 pr-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">GIMP, Photoshop</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 lg:pl-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Linux, Windows</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="soft-skills-wrapper" class="mb-12">
                    <div class="flex items-center">
                      <i class="fas fa-graduation-cap mr-3 text-3xl align-middle"></i>
                      <h2 class="raleway text-4xl font-bold uppercase" style="font-weight: 900">Habilidades</h2>
                    </div>
                    <div>
                      <ul>
                        <li class="mb-3 flex flex-wrap">
                          <div class="flex items-center relative w-full lg:w-1/2 pr-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Trabajo en equipo</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 lg:pl-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Ganas de aprender</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 pr-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Proactivo</h3>
                          </div>
                          <div class="flex items-center relative w-full lg:w-1/2 lg:pl-2">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-2xl font-medium roboto">Fácil para trabajar</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="diplomas" class="mb-12">
                    <div class="flex items-center">
                      <i class="fas fa-graduation-cap mr-3 text-3xl align-middle"></i>
                      <h2 class="raleway text-4xl font-bold uppercase" style="font-weight: 900">Reconocimientos</h2>
                    </div>
                    <div>
                      <ul>
                        <li class="mb-3">
                          <div class="flex items-center relative">
                            <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                            <h3 class="pl-6 text-3xl font-medium roboto">Certificado de excelencia</h3>
                          </div>
                          <p class="pl-6 text-2xl roboto">Quick Learning (Inglés)</p>
                        </li>
                      </ul>
                    </div>
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
  name: 'cv'
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
