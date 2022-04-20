<template>
  <a
    v-if="link && link.styles"
    :href="link.url"
    class="text-base md:text-lg"
    :class="{
      'text-white': link.styles.textColor === 'white',
      'text-blue-600': link.styles.textColor === 'blue',
      underline: link.styles.underlineText,
    }"
    target="_blank"
  >
    {{ link.text }}
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: {
        text: {
          type: String,
          default: "",
        },
        url: {
          type: String,
          default: "",
        },
        styles: {
          underlineText: {
            type: Boolean,
            default: true,
          },
          textColor: {
            type: String,
            default: "blue",
          },
        },
      },
    },
  },
};
</script>
