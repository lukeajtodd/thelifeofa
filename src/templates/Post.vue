<template>
  <Layout>
    <div class="post">
      <h2 class="post__title" :data-category="$page.post.category">
        {{ $page.post.title }}
      </h2>
      <p class="post__date">
        {{ $page.post.date }}
      </p>
      <div class="post__content" v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "D MMMM, YYYY")
    category
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="postcss" scoped>
$breakpoint-sm: 750px;
$breakpoint-md: 1280px;
$breakpoint-lg: 1700px;

.post {
  max-width: 500px;
  font-family: 'PT Sans', sans-serif;
  margin-top: 60px;
  padding: 0 30px 0 72px;

  &__title {
    position: relative;
    margin: 0;
    margin-bottom: 12px;
    font-family: 'Old Standard TT';
    font-size: responsive 38px 56px;

    &:before {
      content: attr(data-category);
      font-family: 'Big John PRO';
      font-size: responsive 13px 20px;
      font-weight: normal;
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translate(-100%, -50%);
      text-transform: uppercase;
    }
  }

  &__date {
    margin: 0;
    margin-bottom: 20px;
    font-style: italic;
    font-size: responsive 15px 22px;
  }

  &__content {
    font-size: responsive 18px 20px;
    line-height: 1.4;
  }

  @media screen and (min-width: $breakpoint-md) {
    margin-top: 25vh;

    &__title {
      margin-bottom: 18px;
    }

    &__date {
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: $breakpoint-lg) {
    padding: 0 5vw 0 10vw;
    max-width: 1200px;

    &__content {
      line-height: 1.6;
    }
  }
}
</style>
