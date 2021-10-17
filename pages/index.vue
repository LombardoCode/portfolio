<template>
  <div>
    <div id="div_video_background_hero">
      <video
        id="video-hero"
        src="~assets/videos/index/hero.webm"
        autoplay="true"
        type="video/webm"
        loop="true"
        muted
      >
      </video>
      <div class="absolute w-full" style="top: 0;">
        <Navbar :fixed_navbar="true"/>
        <div class="overlay-hero"></div>
        <ReusableContainer :top_spacing="false">
          <Introduction />
        </ReusableContainer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    slot_fixed_navbar: Boolean
  }
}
</script>

<style lang="sass">
  div#div_video_background_hero
    height: 100vh
    width: 100%
    overflow: hidden
    position: relative

  video#video-hero
    object-fit: cover
    min-width: 100%
    min-height: 100%
    width: auto
    height: auto
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    -webkit-transform: translateX(-50%) translateY(-50%)
    z-index: -1

  .overlay-hero
    position: absolute
    width: 100%
    min-height: 100%
    background: rgba(0, 0, 0, 0.6)
    z-index: -1

</style>
