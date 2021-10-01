<template>
  <div class="mb-20">
    <div class="flex justify-between" :class="{'flex-row-reverse': flipped}">
      <div class="image-wrapper w-96" :class="{'ml-10': flipped}">
        <img
          :src="require(`~/assets/images/${cover}`)"
          class="rounded-md"
        >
      </div>
      <div class="project-desc-wrapper flex-1" :class="{'ml-10': !flipped}">
        <h3 class="rubik text-5xl leading-tight mb-3">{{ title }}</h3>
        <p class="rubik text-lg mb-3">{{ $t(body) }}</p>
        <div class="urls flex mb-2">
          <div
            v-for="(url, index) in urls" :key="index"
          >
            <ReusableTag :url="url"></ReusableTag>
          </div>
        </div>
        <div class="technologies flex">
          <div
            v-for="(technology, index) in technologies" :key="index"
          >
            <ReusableTag :technology="technology"></ReusableTag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flipped: Boolean,
    title: String,
    body: String,
    cover: String,
    urls: Object,
    technologies: Array
  }
}
</script>

<style>

</style>
