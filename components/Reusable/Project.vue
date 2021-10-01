<template>
  <div>
    <div class="flex justify-between" :class="{'flex-row-reverse': flipped}">
      <div class="image-wrapper w-96" :class="{'ml-10': flipped}">
        <img
          :src="require(`~/assets/images/${cover}`)"
          class="rounded-md"
        >
      </div>
      <div class="project-desc-wrapper flex-1" :class="{'ml-10': !flipped}">
        <h3 class="rubik text-5xl leading-tight mb-3">{{ title }}</h3>
        <p class="rubik text-lg">{{ $t(body) }}</p>
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
    url: String
  }
}
</script>

<style>

</style>
