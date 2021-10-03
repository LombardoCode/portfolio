<template>
  <div>
    <h3 class="oswald uppercase text-4xl mb-2">{{ $t(item.title) }}</h3>
    <div class="text-xl">
      <div class="flex items-center py-1" v-for="(sub1_item, index) in item.items" :key="index">
        <i
          :class="sub1_item.font_awesome_icon"
          class="mr-3 text-xl align-middle transform"
        ></i>
        <p v-if="sub1_item.type === 'general'" class="word-breaker">{{ $t(sub1_item.text) }}</p>
        <a v-if="sub1_item.type === 'email'" :href="'mailto:' + $t(sub1_item.text)" class="word-breaker">{{ $t(sub1_item.text) }}</a>
        <a v-if="sub1_item.type === 'website'" :href="$t(sub1_item.text)" class="word-breaker">{{ $t(sub1_item.text) }}</a>
      </div>
      <div class="flex items-center py-1" v-for="(list_item, index) in item.list" :key="index">
        <p>⬤ {{ $t(list_item) }}</p>
      </div>
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

<style lang="sass">
  .word-breaker
    -ms-word-break: break-all
    word-break: break-all
    word-break: break-word
    -webkit-hyphens: auto
    -moz-hyphens: auto
    hyphens: auto
</style>
