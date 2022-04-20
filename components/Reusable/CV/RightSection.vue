<template>
  <div>
    <div class="flex items-center mb-2">
      <i :class="item.font_awesome_icon" class="mr-3 text-3xl align-middle"></i>
      <H1 class="raleway font-black">{{ $t(item.title) }}</H1>
    </div>
    <div>
      <div
        v-for="(sub1_item, index) in item.sub_items"
        :key="index"
        class="flex"
      >
        <img v-if="sub1_item.img" :src="sub1_item.img" class="w-11 h-11 mr-2" />
        <ul>
          <li class="mb-4">
            <div class="flex items-center relative">
              <i
                class="mr-3 align-middle transform rotate-45 text-md absolute"
              ></i>
              <H4 v-if="sub1_item.heading_1" class="font-medium roboto">
                <i class="fas fa-caret-right"></i>
                {{ $t(sub1_item.heading_1) }}
              </H4>
            </div>
            <H5 v-if="sub1_item.heading_2" class="pl-6 font-medium roboto">{{
              $t(sub1_item.heading_2)
            }}</H5>
            <H6 v-if="sub1_item.location" class="pl-6 font-normal roboto mb-1">
              {{ $t(sub1_item.location) }}
            </H6>
            <ANewTab
              v-if="sub1_item.website"
              :link="{
                text: $t(sub1_item.website.text),
                url: sub1_item.website.url,
                styles: {
                  textColor: 'blue',
                  underlineText: true,
                  bold: true,
                },
              }"
              class="pl-6 font-normal roboto mb-1"
            >
              {{ sub1_item.website.text }}
            </ANewTab>
            <div v-if="sub1_item.heading_3">
              <ul
                class="pl-6 roboto"
                v-for="(sub2_item, index) in sub1_item.heading_3"
                :key="index"
              >
                <LI class="pl-4">{{ $t(sub2_item) }}</LI>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="mb-3 flex flex-wrap">
            <div
              v-for="(list_item, index) in item.list"
              :key="index"
              class="flex items-center relative w-full lg:w-1/2 pr-2 mb-2"
            >
              <i
                class="
                  fas
                  fa-square
                  mr-3
                  align-middle
                  transform
                  rotate-45
                  absolute
                "
              ></i>
              <H5 class="pl-6 font-medium roboto">{{ $t(list_item) }}</H5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ANewTab from "../HTML/ANewTab.vue";
export default {
  props: {
    item: Object,
  },
  components: {
    ANewTab,
  },
};
</script>

<style></style>
