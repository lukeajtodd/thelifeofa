<template>
  <ul>
    <li v-for="(post, i) in posts" :key="i">
      <a
        :class="`listing__link${alt ? ' listing__link--alt' : ''}`"
        :href="`/blog/${post.node.slug}`"
      >
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
    alt: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
$breakpoint-md: 1280px;

li {
  display: block;
}

.listing {
  &__link {
    display: inline-block;
    position: relative;
    font-family: 'Lora';
    font-size: responsive 16px 20px;
    color: var(---black);
    padding: 0.25rem 0;

    &::before {
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

      &::before {
        content: url('../assets/svg/shoot.svg');
      }
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    &__link {
      &::before {
        width: 40px;
        transform: translate(-100%, -50%), scaleX(-1);
      }

      &--alt {
        &::before {
          transform: translate(-100%, -50%);
          right: auto;
          left: -30px;
        }
      }
    }
  }
}
</style>
