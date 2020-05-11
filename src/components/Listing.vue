<template>
  <ul>
    <li v-for="(post, i) in posts" :key="i">
      <a class="listing__link" :href="`/blog/${post.node.slug}`">
        {{ post.node.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
$breakpoint-md: 1280px;

li {
  display: inline-block;
}

.listing {
  &__link {
    display: block;
    position: relative;
    font-family: 'Old Standard TT';
    font-size: responsive 18px 20px;
    color: var(---black);
    padding: 0.25rem 0;

    &::after {
      position: absolute;
      right: -30px;
      top: 50%;
      transform: translate(100%, -50%) scaleX(-1);
      width: 30px;
    }

    &:visited {
      color: inherit;
    }

    &:hover,
    &:focus {
      text-decoration: underline;

      &::after {
        content: url('../assets/svg/shoot.svg');
      }
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    &__link::after {
      width: 40px;
    }
  }
}
</style>
