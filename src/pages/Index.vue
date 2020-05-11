<template>
  <Layout>
    <div class="inner">
      <h2 class="tagline">
        Developer. Designer. おたく。
      </h2>
      <div class="bio">
        <p>
          Building user interfaces with JavaScript, HTML & CSS along with rock
          solid APIs, always with a focus on the end-user experience.
        </p>

        <p>Hit me up 🤙</p>
      </div>
      <div class="recents">
        <h3 class="recents__title">Recent Posts</h3>
        <Listing :posts="$page.posts.edges" />
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
  padding: 0 30px 0 72px;
  margin-bottom: 45px;
}

.tagline {
  font-family: 'Inconsolata';
  font-size: responsive 26px 32px;
  margin-top: auto;
}

.bio {
  font-family: 'Lora';
  padding-right: 20vw;
  margin-bottom: 0;

  p:last-child {
    margin-bottom: 0;
  }
}

.recents {
  margin-top: auto;
  text-align: right;
  margin-bottom: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__title {
    font-family: 'Big John PRO';
    text-transform: uppercase;
    font-size: responsive 22px 24px;
    margin-top: 0;
    margin-bottom: 1rem;
  }
}

p {
  font-size: responsive 16px 19px;
  margin-top: 0;
  line-height: 1.8;
}
</style>
