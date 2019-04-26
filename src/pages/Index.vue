<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <p v-for="(post, i) of $page.posts" :key="i">
      {{ post.title }}
    </p>
  </Layout>
</template>

<page-query>
{
  posts {
    title
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

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
