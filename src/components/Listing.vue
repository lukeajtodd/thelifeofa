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
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
$breakpoint-md: 1280px;

.listing {
  &__link {
    display: block;
    position: relative;
    font-family: 'Old Standard TT';
    font-size: responsive 40px 56px;
    color: var(---black);

    &::before {
      position: absolute;
      left: -2vw;
      top: 50%;
      transform: translate(-100%, -50%);
      width: 54px;
    }

    &:visited {
      color: inherit;
    }

    &:hover,
    &:focus {
      text-decoration: underline;

      &::before {
        content: url('../assets/svg/shoot.svg');
      }
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    &__link::before {
      width: 64px;
    }
  }
}
</style>
