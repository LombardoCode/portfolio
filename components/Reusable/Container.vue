<template>
  <div
    :class="{'pt-28': top_spacing}"
    class="container mx-auto px-6"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    top_spacing: Boolean
  }
}
</script>

<style>

</style>
