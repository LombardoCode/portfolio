<template>
  <div
    class="
      project-content
      px-4
      md:px-16
      lg:px-16
      xl:px-0
      py-24
      lg:py-28
      transform
      -translate-y-10
      -mb-22
      lg:-mb-14
    "
    :class="{
      'bg-project-portfolio': project.project_name == 'portfolio',
      'bg-white': project.project_name == 'devsoverflow',
      'bg-black': project.project_name == 'musicnow',
      'bg-project-pomodoro': project.project_name == 'pomodoro',
      'bg-project-shortify': project.project_name == 'shortify',
      'bg-gray-300': project.project_name == 'openchat',
      'bg-black': project.project_name == 'dilombardo',
      'bg-project-colorless': project.project_name == 'colorless',
      'bg-project-frontend_challenges':
        project.project_name == 'frontend_challenges',
      'bg-project-job_listings_with_filtering':
        project.project_name == 'job_listings_with_filtering',
    }"
  >
    <h1 class="text-white">{{ project.project }}</h1>
    <ReusableContainer :top_spacing="false">
      <div
        class="flex flex-col justify-between items-center"
        :class="{
          'lg:flex-row-reverse': project.flipped,
          'lg:flex-row': !project.flipped,
        }"
      >
        <div
          class="image-wrapper w-2/3 sm:w-2/4 md:w-80 sm:px-0"
          :class="{ 'lg:ml-10': project.flipped, 'lg:mr-10': !project.flipped }"
        >
          <img
            :src="require(`~/assets/images/${project.cover}`)"
            :alt="project.project_name"
            class="rounded-md shadow-2xl mb-6 lg:mb-0"
          />
        </div>
        <div
          class="project-desc-wrapper flex-1"
          :class="{ 'lg:ml-10': !project.flipped }"
        >
          <section id="title-and-body-wrapper" :class="project.textColor">
            <H3 class="roboto-condensed font-bold leading-tight">{{
              $t(project.title)
            }}</H3>
            <P class="roboto-condensed font-normal mb-5">{{
              $t(project.body)
            }}</P>
          </section>
          <div class="urls flex flex-wrap mb-4">
            <ReusableTag
              v-for="(url, index) in project.urls"
              :key="index"
              :url="url"
            ></ReusableTag>
          </div>
          <div class="technologies" v-if="project.technologies">
            <P class="roboto-condensed" :class="project.textColor">{{
              $t("pages.projects.developed_on")
            }}</P>
            <div class="flex flex-wrap">
              <ReusableTag
                v-for="(technology, index) in project.technologies"
                :key="index"
                :technology="technology"
                class="text-lg"
              ></ReusableTag>
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
    project: Object,
  },
};
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
