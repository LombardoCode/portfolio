<template>
  <div class="project-content py-24 lg:py-28 transform -translate-y-10 -mb-10">
    <ReusableContainer :top_spacing="false">
      <div class="flex justify-between" :class="{'flex-row-reverse': project.flipped}">
        <div class="image-wrapper w-96" :class="{'ml-10': project.flipped}">
          <img
            :src="require(`~/assets/images/${project.cover}`)"
            class="rounded-md"
          >
        </div>
        <div class="project-desc-wrapper flex-1" :class="{'ml-10': !project.flipped}">
          <h3 class="rubik text-5xl leading-tight mb-3">{{ project.title }}</h3>
          <p class="rubik text-lg mb-3">{{ $t(project.body) }}</p>
          <div class="urls flex mb-2">
            <div
              v-for="(url, index) in project.urls" :key="index"
            >
              <ReusableTag :url="url"></ReusableTag>
            </div>
          </div>
          <div class="technologies flex">
            <div
              v-for="(technology, index) in project.technologies" :key="index"
            >
              <ReusableTag :technology="technology"></ReusableTag>
            </div>
          </div>
        </div>
      </div>
    </ReusableContainer>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style lang="sass">
  .project-content:nth-child(2n - 1)
    background-color: red !important
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 92%)

  .project-content:nth-child(2n)
    background-color: blue !important
    clip-path: polygon(0 0, 100% 8%, 100% 92%, 0 100%)


</style>
