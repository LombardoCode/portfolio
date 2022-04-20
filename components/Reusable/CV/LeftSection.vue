<template>
  <div>
    <H3 class="oswald uppercase">{{ $t(item.title) }}</H3>
    <div class="text-xl">
      <div
        class="flex items-center py-1"
        v-for="(sub1_item, index) in item.items"
        :key="index"
      >
        <i
          :class="sub1_item.font_awesome_icon"
          class="mr-3 text-xl align-middle transform"
        ></i>
        <P v-if="sub1_item.type === 'general'" class="word-breaker">
          {{ $t(sub1_item.text) }}
        </P>
        <A
          v-if="sub1_item.type === 'email'"
          :href="'mailto:' + $t(sub1_item.text)"
          class="word-breaker"
        >
          {{ $t(sub1_item.text) }}
        </A>
        <ANewTab
          v-if="sub1_item.type === 'website'"
          :link="{
            text: $t(sub1_item.text),
            url: sub1_item.website,
            styles: {
              textColor: 'white',
              underlineText: true,
            },
          }"
          class="word-breaker"
        >
          {{ $t(sub1_item.text) }}
        </ANewTab>
      </div>
      <div
        class="flex items-center py-1"
        v-for="(list_item, index) in item.list"
        :key="index"
      >
        <P>⬤ {{ $t(list_item) }}</P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="sass">
.word-breaker
  -ms-word-break: break-all
  word-break: break-all
  word-break: break-word
  -webkit-hyphens: auto
  -moz-hyphens: auto
  hyphens: auto
</style>
