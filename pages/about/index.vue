<template>
  <div>
    <Navbar :fixed_navbar="false" class="bg-black text-white"/>
    <ReusableContainer :top_spacing="false">
      <div class="mt-12">
        <div class="md:grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-3 flex justify-center items-start overflow-hidden">
            <img
              src="~/assets/images/about/me.jpg"
              alt="Lombardo Moreno Rodríguez"
              class="rounded-full mb-6 w-2/4 md:w-56"
            >
          </div>
          <div class="col-span-12 lg:col-span-9">
            <H1 class="fnt_raleway font-bold">{{ $t('pages.about.about_me') }}</H1>
            <div class="text-xl">
              <section class="mt-4 mb-8">
                <H2 class="fnt_raleway">{{ $t('pages.about.sections[0].title') }}</H2>
                <P v-html="$t('pages.about.sections[0].body.text_1', [dynamic_data.actual_age])"></P>
              </section>
              <section class="mt-4 mb-8">
                <H2 class="fnt_raleway">{{ $t('pages.about.sections[1].title') }}</H2>
                <P>{{ $t('pages.about.sections[1].body.text_1') }}</P>
                <P>{{ $t('pages.about.sections[1].body.text_2') }}</P>
              </section>
              <section class="mt-4 mb-8">
                <H2 class="fnt_raleway">{{ $t('pages.about.sections[2].title') }}</H2>
                <P>{{ $t('pages.about.sections[2].body.text_1', [dynamic_data.years_ive_studied_webdev]) }}</P>
                <ul class="mt-2">
                  <LI>
                    ● {{ $t('pages.about.sections[2].list[0]') }}
                  </LI>
                  <LI>
                    ● {{ $t('pages.about.sections[2].list[1]') }}
                  </LI>
                  <LI>
                    ● {{ $t('pages.about.sections[2].list[2]') }}
                  </LI>
                  <LI>
                    ● {{ $t('pages.about.sections[2].list[3]') }}
                  </LI>
                  <LI>
                    ● {{ $t('pages.about.sections[2].list[4]') }}
                  </LI>
                  <LI>
                    ● {{ $t('pages.about.sections[2].list[5]') }}
                  </LI>
                </ul>
              </section>
              <section class="mt-4 mb-8">
                <H2 class="fnt_raleway">{{ $t('pages.about.sections[3].title') }}</H2>
                <P>
                  <i18n path="pages.about.sections[3].body.text_1">
                    <template v-slot:portfolio>
                      <nuxt-link :to="localePath('projects')" class="text-blue-600 font-bold underline">{{ $t('FUW.portfolio') }}</nuxt-link>
                    </template>
                  </i18n>
                </P>
                <P>
                  <i18n path="pages.about.sections[3].body.text_2">
                    <template v-slot:cv>
                      <nuxt-link :to="localePath('cv')" class="text-blue-600 font-bold underline">CV</nuxt-link>
                    </template>
                  </i18n>
                </P>
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
      about_data: about_data,
      dynamic_data: {
        actual_age: 23,
        years_ive_studied_webdev: 10
      }
    }
  },
  mounted() {
    // Calculation of my actual age and time i've studied web development
    this.dynamic_data.actual_age = this.calculateAge("06/10/1998", Date.now());
    this.dynamic_data.years_ive_studied_webdev = this.calculateAge("01/01/2018", Date.now());
  },
  methods: {
    calculateAge (startDate, endDate) {
      startDate = new Date(startDate);
      endDate = new Date(endDate);

      let years = endDate.getFullYear() - startDate.getFullYear();

      if (endDate.getMonth() <= startDate.getMonth() && endDate.getDate() < startDate.getDate()) {
          years--;
      }
      return years;
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
