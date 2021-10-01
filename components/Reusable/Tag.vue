<template>
  <div>
    <a
      v-if="url"
      :href="url.site"
      class="inline-block cursor-pointer transition-all duration-200 px-5 py-3 rounded-lg mb-2 mr-2"
      :class="{
        'bg-blue-700 hover:bg-blue-800' : url.type == 'website',
        'bg-black' : url.type == 'github'
      }"
    >
      <span v-if="url.type == 'website'">
        <i class="fas fa-globe"></i>
      </span>
      <span v-if="url.type == 'github'">
        <i class="fab fa-github"></i>
      </span>
      {{ url.text }}
    </a>
    <span
      v-if="technology"
      class="inline-block cursor-pointer transition-all duration-200 px-3 py-1 rounded-full mr-2"
      :class="{
        'bg-green-600 hover:bg-green-700 text-white' : technology == 'Vue.js',
        'bg-blue-400 hover:bg-blue-500 text-white' : technology == 'React.js',
        'bg-red-600 hover:bg-red-700 text-white' : technology == 'Angular.js',
      }"
    >
      {{ technology }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    url: Object,
    technology: String
  }
}
</script>

<style>

</style>
