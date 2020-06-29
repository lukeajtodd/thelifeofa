<template>
  <Layout>
    <div class="inner">
      <div class="bio">
        <p>
          Telling stories about life, both personal and professional.
        </p>
        <p>Stick around for a while. <span class="coffee-emoji">☕</span></p>
      </div>
      <div class="recents">
        <h3 class="recents__title">Recent Posts</h3>
        <Listing :posts="$page.posts.edges" :alt="true" />
      </div>
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
import Listing from '../components/Listing';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: { Listing }
};
</script>

<style lang="postcss" scoped>
$breakpoint-sm: 750px;
$breakpoint-md: 1280px;
$breakpoint-lg: 1700px;

.inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tagline,
.bio,
.recents {
  padding: 0 30px;
  margin-bottom: 30px;

  @media screen and (min-width: $breakpoint-md) {
    padding: 0 30px 0 72px;
    margin-bottom: 45px;
  }
}

.bio {
  font-family: 'Lora';
  padding-right: 30vw;
  margin-bottom: 0;
  margin-top: auto;
  font-size: responsive 20px 24px;

  .coffee-emoji {
    font-size: responsive 24px 30px;
  }

  p:last-child {
    margin-bottom: 0;
  }
}

.recents {
  margin-top: 45px;
  margin-bottom: 0;

  &__title {
    font-family: 'Big John PRO';
    text-transform: uppercase;
    font-size: responsive 22px 24px;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: $breakpoint-md) {
    margin-top: auto;
    text-align: right;
    padding-right: 72px;

    ul {
      align-items: flex-end;
    }
  }
}

p {
  font-size: responsive 16px 19px;
  margin-top: 0;
  line-height: 1.8;
}
</style>
