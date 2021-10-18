<template>
  <div class="bg-black text-white">
    <Navbar :fixed_navbar="false"/>
    <ReusableContainer :top_spacing="false">
      <div class="relative">
        <div class="bg-gray-1000 relative">
          <a
            :href="`/archives/cv/${current_locale}/Lombardo_Moreno_Rodríguez_CV.pdf`"
            :download="`Lombardo_Moreno_Rodríguez_CV_${current_locale}`"
            id="download-pdf"
            class="fixed z-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xl uppercase roboto font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 w-full md:w-auto mb-4 py-6 md:py-6 px-0 md:px-24 m-0 md:m-4"
            style="bottom: 0%; right: 0%;"
          >
            {{ $t('pages.cv.download_button') }}
          </a>
          <div class="container mx-auto">
            <div id="cv">
              <div id="header-cv" class="py-10 px-10 bg-blue-800 uppercase bg-blue-1000 text-white text-center">
                <H1 class="oswald mb-3 md:mb-2 leading-tight lg:leading-none">Lombardo Moreno Rodríguez</H1>
                <H2 class="oswald">{{ $t('pages.cv.heading.occupation[0].title') }}</H2>
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
import cv_data from './cv_data.json';
export default {
  name: 'cv',
  data() {
    return {
      cv: cv_data,
      current_locale: this.$i18n.locale
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap')

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
