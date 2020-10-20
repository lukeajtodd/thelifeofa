<template>
  <nav @click="closeNav" class="nav" :class="{ 'nav--open': open }">
    <div class="nav__inner">
      <ul class="nav__upper">
        <li class="nav__item">
          <g-link to="/">Home</g-link>
        </li>
        <li class="nav__item">
          <g-link to="/developer">Developer</g-link>
        </li>
        <li class="nav__item">
          <g-link to="/human">Human</g-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<static-query>
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
</static-query>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    },
    closeNav: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary);
  z-index: 98;
  transform: translateX(100%);
  transition: transform 0.3s linear;
  will-change: transform;

  &--open {
    transform: translateX(0%);
  }

  &__header,
  &__item a {
    color: var(--white);
  }

  &__upper {
    .nav__item {
      font-family: 'Big John PRO';
      font-size: responsive 28px 32px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: right;
      margin-bottom: 44px;
    }
  }

  &__header {
    margin-top: 100px;
    font-size: 32px;
    font-family: 'Big John PRO';
    text-align: right;
  }

  &__lower {
    .nav__item {
      font-family: 'Old Standard TT';
      font-size: responsive 40px 56px;

      a:hover,
      a:focus {
        text-decoration: underline;
      }
    }
  }
}
</style>
