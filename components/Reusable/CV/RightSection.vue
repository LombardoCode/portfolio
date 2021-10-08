<template>
  <div>
    <div class="flex items-center mb-2">
      <i
        :class="item.font_awesome_icon"
        class="mr-3 text-3xl align-middle"
      ></i>
      <h2 class="raleway text-4xl font-bold uppercase" style="font-weight: 900">{{ $t(item.title) }}</h2>
    </div>
    <div>
      <ul>
        <li class="mb-4" v-for="(sub1_item, index) in item.sub_items" :key="index">
          <div class="flex items-center relative">
            <i class="mr-3 align-middle transform rotate-45 text-md absolute"></i>
            <h3 class="text-3xl font-medium roboto">
              <i class="fas fa-caret-right"></i>
              {{ $t(sub1_item.heading_1) }}
            </h3>
          </div>
          <h4 class="pl-6 text-2xl font-medium roboto">{{ $t(sub1_item.heading_2) }}</h4>
          <h4
            v-if="sub1_item.location"
            class="pl-6 text-xl font-normal roboto mb-1"
          >
            {{ $t(sub1_item.location) }}
          </h4>
          <ul class="pl-6 text-xl roboto" v-for="(sub2_item, index) in sub1_item.heading_3" :key="index">
            <li class="pl-4">{{ $t(sub2_item) }}</li>
          </ul>
        </li>

        <div>
          <ul>
            <li class="mb-3 flex flex-wrap">
              <div
                v-for="(list_item, index) in item.list" :key="index"
                class="flex items-center relative w-full lg:w-1/2 pr-2 mb-2"
              >
                <i class="fas fa-square mr-3 align-middle transform rotate-45 text-md absolute"></i>
                <h3 class="pl-6 text-2xl font-medium roboto">{{ $t(list_item) }}</h3>
              </div>
            </li>
          </ul>
        </div>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style>

</style>
