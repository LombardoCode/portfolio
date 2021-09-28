<template>
  <div class="h-screen">
    <div id="lang-options" class="absolute">
      <nuxt-link :to="localePath('index', 'es')">Spanish</nuxt-link>
      <nuxt-link :to="localePath('index', 'en')">English</nuxt-link>
    </div>
    <div class="flex flex-col justify-center items-center h-full">
      <h1 class="text-7xl">{{ $t('welcome') }}</h1>
      <p class="text-2xl">{{ $t('message') }}</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
