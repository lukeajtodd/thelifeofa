<template>
  <Layout>
    <div class="inner">
      <h2 class="tagline">
        <span>Developer. </span><span>Designer. </span><span>おたく。</span>
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
  padding: 0 30px;
  margin-bottom: 30px;

  @media screen and (min-width: $breakpoint-md) {
    padding: 0 30px 0 72px;
    margin-bottom: 45px;
  }
}

.tagline {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Inconsolata';
  font-size: responsive 26px 32px;
  margin-top: auto;

  span {
    display: inline-block;
    margin-bottom: 10px;
    flex: 0 1 100%;

    &:last-child {
      font-size: responsive 23px 29px;
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: $breakpoint-md) {
    align-items: center;

    span {
      flex: 0 1 auto;
      margin-bottom: 0;
      padding-right: 10px;

      &:last-child {
        margin-bottom: -5px;
      }
    }
  }
}

.bio {
  font-family: 'Lora';
  padding-right: 30vw;
  margin-bottom: 0;

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
