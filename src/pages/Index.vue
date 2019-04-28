<template>
  <Layout>
    <div class="recents">
      <h3 class="recents__title">Recents</h3>
      <ul>
        <li v-for="(post, i) in $page.posts.edges" :key="i">
          <a class="recents__link" :href="`/blog/${post.node.slug}`">
            {{ post.node.title }}
          </a>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Posts {
    posts: allPost (sortBy: "date", order: DESC, perPage: 3) {
      edges {
        node {
          title
          date (format: "D MMMM, YYYY")
          category
          content
          slug
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
};
</script>

<style lang="postcss" scoped>
$breakpoint-sm: 750px;
$breakpoint-md: 1280px;
$breakpoint-lg: 1700px;

.recents {
  margin-top: 60px;
  padding: 0 30px 0 72px;

  &__title,
  &__link {
    text-align: right;
  }

  &__title {
    font-family: 'Big John PRO';
    text-transform: uppercase;
    font-size: responsive 28px 32px;
  }

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
    margin-top: 25vh;

    &__link::before {
      width: 64px;
    }
  }
}

p {
  font-size: responsive;
}
</style>
