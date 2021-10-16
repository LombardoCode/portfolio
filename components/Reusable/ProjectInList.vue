<template>
  <div class="project-content px-4 md:px-16 lg:px-16 xl:px-0 py-24 lg:py-28 transform -translate-y-10 -mb-22 lg:-mb-14" :class="{
    'bg-project-portfolio': project.project_name == 'portfolio',
    'bg-white': project.project_name == 'devsoverflow',
    'bg-project-shortify': project.project_name == 'shortify',
    'bg-gray-300': project.project_name == 'openchat',
    'bg-black': project.project_name == 'dilombardo',
    'bg-project-colorless': project.project_name == 'colorless',
    'bg-project-frontend_challenges': project.project_name == 'frontend_challenges',
    'bg-project-job_listings_with_filtering': project.project_name == 'job_listings_with_filtering'
  }">
    <h1 class="text-white">{{ project.project }}</h1>
    <ReusableContainer :top_spacing="false">
      <div class="flex flex-col justify-between items-center" :class="{'lg:flex-row-reverse': project.flipped, 'lg:flex-row': !project.flipped}">
        <div class="image-wrapper w-full sm:w-96 px-24 sm:px-0" :class="{'lg:ml-10': project.flipped, 'lg:mr-10': !project.flipped}">
          <img
            :src="require(`~/assets/images/${project.cover}`)"
            class="rounded-md shadow-2xl mb-6 lg:mb-0"
          >
        </div>
        <div class="project-desc-wrapper flex-1" :class="{'lg:ml-10': !project.flipped}">
          <div id="title-and-body-wrapper" :class="project.textColor">
            <h3 class="roboto-condensed font-bold text-5xl leading-tight mb-3">{{ $t(project.title) }}</h3>
            <p class="roboto-condensed font-normal text-2xl mb-5">{{ $t(project.body) }}</p>
          </div>
          <div class="urls flex flex-wrap mb-4">
            <ReusableTag
              v-for="(url, index) in project.urls" :key="index"
              :url="url"
            ></ReusableTag>
          </div>
          <div class="technologies" v-if="project.technologies">
            <p class="roboto-condensed font-bold text-xl mb-1" :class="project.textColor">{{ $t('pages.projects.developed_on') }}</p>
            <div class="flex flex-wrap">
              <ReusableTag v-for="(technology, index) in project.technologies" :key="index" :technology="technology" class="text-lg"></ReusableTag>
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap')

  .roboto-condensed
    font-family: 'Roboto Condensed', sans-serif

  .project-content:nth-child(2n - 1)
    clip-path: polygon(0 8%, 100% 0, 100% 100%, 0 92%)

  .project-content:nth-child(2n)
    clip-path: polygon(0 0, 100% 8%, 100% 92%, 0 100%)


</style>
