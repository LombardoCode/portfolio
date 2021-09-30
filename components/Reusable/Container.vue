<template>
  <div
    :class="{'pt-24': top_spacing}"
    class="container mx-auto"
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
