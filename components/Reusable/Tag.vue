<template>
  <div>
    <div class="roboto-condensed font-normal mb-2" v-if="url">
      <a
        v-if="url.anchor_type == 'external_website'"
        :href="url.site"
        target="_blank"
        class="
          block
          md:inline-block
          cursor-pointer
          transition-all
          duration-200
          px-5
          py-3
          rounded-lg
          mb-2
          mr-2
          text-white text-base
          md:text-lg
        "
        :class="{
          'bg-blue-700 hover:bg-blue-800': ['website'].indexOf(url.theme) > -1,
          'bg-gray-800 hover:bg-black': ['github'].indexOf(url.theme) > -1,
        }"
      >
        <span v-if="['external_website'].indexOf(url.anchor_type) > -1">
          <i class="fas fa-globe"></i>
        </span>
        <span v-if="['github'].indexOf(url.anchor_type) > -1">
          <i class="fab fa-github"></i>
        </span>
        {{ $t(url.text) }}
      </a>
      <nuxt-link
        v-if="url.anchor_type == 'nuxt_link'"
        class="
          block
          md:inline-block
          cursor-pointer
          transition-all
          duration-200
          px-5
          py-3
          rounded-lg
          mb-2
          mr-2
          text-white text-base
          md:text-lg
        "
        :class="{
          'bg-blue-700 hover:bg-blue-800': ['website'].indexOf(url.theme) > -1,
        }"
        :to="localePath(url.site)"
      >
        <span v-if="['website'].indexOf(url.theme) > -1">
          <i class="fas fa-globe"></i>
        </span>
        {{ $t(url.text) }}
      </nuxt-link>
    </div>
    <div
      class="roboto-condensed font-normal mb-2 text-base md:text-lg"
      v-if="technology"
    >
      <span
        class="
          inline-block
          select-none
          transition-all
          duration-200
          px-3
          py-1
          rounded-md
          mr-2
          shadow-lg
        "
        :class="{
          'bg-html-100 hover:bg-html-200 text-white': technology == 'HTML',
          'bg-css-100 hover:bg-css-200 text-white': technology == 'CSS',
          'bg-javascript-100 hover:bg-javascript-200 text-white':
            technology == 'JavaScript',
          'bg-gdscript-100 hover:bg-gdscript-200 text-white':
            technology == 'GDScript',
          'bg-vuejs-100 hover:bg-vuejs-200 text-white':
            ['Vue.js', 'Vue.js (Nuxt.js)'].indexOf(technology) > -1,
          'bg-reactjs-100 hover:bg-reactjs-200 text-white':
            technology == 'React.js',
          'bg-laravel-100 hover:bg-laravel-200 text-white':
            technology == 'Laravel',
          'bg-tailwindcss-100 hover:bg-tailwindcss-200 text-white':
            technology == 'TailwindCSS',
          'bg-bootstrapcss-100 hover:bg-bootstrapcss-200 text-white':
            technology == 'BootstrapCSS',
          'bg-sass-100 hover:bg-sass-200 text-white': technology == 'SASS',
          'bg-pusher-100 hover:bg-pusher-200 text-white':
            technology == 'Pusher',
        }"
      >
        {{ technology }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: Object,
    technology: String,
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap')

.roboto-condensed
  font-family: 'Roboto Condensed', sans-serif
</style>
