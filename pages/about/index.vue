<template>
  <div>
    <Navbar :fixed_navbar="false" class="bg-black text-white"/>
    <ReusableContainer :top_spacing="false">
      <div class="mt-12">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-3 flex justify-center items-start overflow-hidden">
            <img src="~/assets/images/about/me.jpg" class="rounded-full">
          </div>
          <div class="col-span-12 lg:col-span-9">
            <h1 class="fnt_raleway text-4xl font-bold uppercase">{{ $t('pages.about.about_me') }}</h1>
            <div class="text-xl">
              <section class="mt-4 mb-8">
                <h2 class="fnt_raleway text-2xl mb-1">{{ $t('pages.about.sections[0].title') }}</h2>
                <p class="text-lg" v-html="$t('pages.about.sections[0].body.text_1')"></p>
              </section>
              <section class="mt-4 mb-8">
                <h2 class="fnt_raleway text-2xl mb-1">{{ $t('pages.about.sections[1].title') }}</h2>
                <p class="text-lg">{{ $t('pages.about.sections[1].body.text_1') }}</p>
                <p class="text-lg">{{ $t('pages.about.sections[1].body.text_2') }}</p>
              </section>
              <section class="mt-4 mb-8">
                <h2 class="fnt_raleway text-2xl mb-1">{{ $t('pages.about.sections[2].title') }}</h2>
                <p class="text-lg">{{ $t('pages.about.sections[2].body.text_1') }}</p>
                <ul class="text-lg mt-2">
                  <li>
                    ● {{ $t('pages.about.sections[2].list[0]') }}
                  </li>
                  <li>
                    ● {{ $t('pages.about.sections[2].list[1]') }}
                  </li>
                  <li>
                    ● {{ $t('pages.about.sections[2].list[2]') }}
                  </li>
                  <li>
                    ● {{ $t('pages.about.sections[2].list[3]') }}
                  </li>
                  <li>
                    ● {{ $t('pages.about.sections[2].list[4]') }}
                  </li>
                  <li>
                    ● {{ $t('pages.about.sections[2].list[5]') }}
                  </li>
                </ul>
              </section>
              <section class="mt-4 mb-8">
                <h2 class="fnt_raleway text-2xl mb-1">{{ $t('pages.about.sections[3].title') }}</h2>
                <i18n path="pages.about.sections[3].body.text_1" tag="p" class="text-lg">
                  <template v-slot:portfolio>
                    <nuxt-link :to="localePath('projects')" class="text-blue-600 font-bold underline">portfolio</nuxt-link>
                  </template>
                </i18n>
                <i18n path="pages.about.sections[3].body.text_2" tag="p" class="text-lg">
                  <template v-slot:cv>
                    <nuxt-link :to="localePath('cv')" class="text-blue-600 font-bold underline">CV</nuxt-link>
                  </template>
                </i18n>
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
  nuxtI18n: {
    paths: {
      es: '/acerca',
      en: '/about'
    }
  },
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
