<template>
  <Layout>
    <div class="listing">
      <h3 class="listing__title">Developer</h3>
      <Listing :posts="$page.posts.edges" />
    </div>
  </Layout>
</template>

<page-query>
  query Posts {
    posts: allPost (filter: { category: { eq: "dev" } }) {
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
import Listing from '../components/Listing';

export default {
  components: { Listing }
};
</script>

<style lang="postcss" scoped>
$breakpoint-sm: 750px;
$breakpoint-md: 1280px;
$breakpoint-lg: 1700px;

.listing {
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

  @media screen and (min-width: $breakpoint-md) {
    margin-top: 25vh;
  }
}

p {
  font-size: responsive;
}
</style>