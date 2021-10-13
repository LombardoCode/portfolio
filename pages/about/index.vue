<template>
  <div>
    <Navbar :fixed_navbar="false" class="bg-black text-white"/>
    <ReusableContainer :top_spacing="false">
      <div class="mt-12">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-3 flex justify-center items-start overflow-hidden">
            <img src="~/assets/images/about/me.jpg">
          </div>
          <div class="col-span-9">
            <h1 class="fnt_raleway text-5xl font-bold uppercase">{{ about_data.about_me }}</h1>
            <div class="text-xl">
              <section
                v-for="(section, index) in about_data.sections" :key="index"
                class="mt-4 mb-8"
              >
                <h2 class="fnt_raleway text-3xl mb-1">{{ section.title }}</h2>
                <p v-if="section.body.text_1">{{ section.body.text_1 }}</p>
                <p v-if="section.body.text_2">{{ section.body.text_2 }}</p>
                <ul v-if="section.list">
                  <li v-for="(item, index) in section.list" :key="index">
                    ● {{ item }}
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </ReusableContainer>
  </div>
</template>

<script>
import about_data from './about_data.json';
export default {
  name: 'about',
  data() {
    return {
      about_data: about_data
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800;900&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap')

  .fnt_nunito
    font-family: 'Nunito Sans', 'Arial', 'sans-serif'
  .fnt_oswald
    font-family: 'Oswald', 'Arial', 'sans-serif'
  .fnt_raleway
    font-family: 'Raleway', 'Arial', 'sans-serif'
  .fnt_roboto
    font-family: 'Roboto', 'Arial', 'sans-serif'
</style>
