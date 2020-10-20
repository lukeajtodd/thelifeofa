<template>
  <div class="wrapper">
    <a class="menu-button__wrapper" @click="toggleNav" v-if="!open">
      <Menu class="menu-button" />
    </a>
    <a class="close-button__wrapper" @click="toggleNav" v-else>
      <Close class="close-button" />
    </a>
    <Navigation :open="open" :closeNav="closeNav" />
    <div class="left">
      <Stars class="stars-bg" />
      <g-link class="home-link" to="/">
        <h1>
          <span>Life of</span>
          <span>a dev</span>
        </h1>
      </g-link>
      <City class="city-bg" />
      <Earth class="earth-bg" />
    </div>
    <div class="right">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
$breakpoint-sm: 750px;
$breakpoint-md: 1280px;
$breakpoint-lg: 1700px;

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: $breakpoint-md) {
    flex-direction: row;
  }
}

.home-link {
  color: var(--header);
  z-index: 99;

  h1 {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }
}

.menu-button,
.close-button {
  width: 21px;
  height: 21px;
  pointer-events: none;

  &__wrapper {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 99;
    cursor: pointer;
  }

  @media screen and (min-width: $breakpoint-md) {
    &__wrapper {
      bottom: auto;
      top: 30px;
    }
  }
}

.close-button {
  width: 23px;
  height: 23px;
}

.left {
  flex: 0 0 80%;
  position: relative;
  background-color: var(--primary);
  color: var(--header);
  font-family: 'Big John PRO';
  overflow: hidden;
  min-height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    padding: 2rem;
    margin: 0;
    margin-bottom: 2rem;

    span:first-child {
      font-size: responsive 60px 100px;
    }

    span:last-child {
      font-size: responsive 70px 118px;
    }
  }

  @media screen and (min-width: $breakpoint-sm) {
    min-height: 760px;
  }

  @media screen and (min-width: $breakpoint-md) {
    max-width: 1050px;
    flex: 0 0 40%;
  }
}

.right {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 75px;

  @media screen and (min-width: $breakpoint-md) {
    padding-top: 50px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex: 1;
    padding-top: 100px;
    padding-bottom: 100px;

    > * {
      width: 100%;
    }
  }
}

.earth-bg {
  width: calc(100vw + 400px);
  position: absolute;
  bottom: 0;
  transform: translateY(55%);

  @media screen and (min-width: $breakpoint-md) {
    width: 160%;
    max-width: 1680px;
  }
}

.city-bg {
  width: 100%;
  max-width: 35vw;
  position: absolute;
  left: 10vw;
  bottom: 5vw;
  z-index: 2;

  @media screen and (min-width: $breakpoint-sm) {
    max-width: 180px;
    left: auto;
    bottom: 10vw;
  }

  @media screen and (min-width: $breakpoint-md) {
    max-width: 210px;
    bottom: 6%;
  }

  @media screen and (min-width: $breakpoint-lg) {
    bottom: 10%;
  }
}

.stars-bg {
  width: 160%;
  max-width: 900px;
  position: absolute;
  transform: translateX(5%);
  top: 10%;

  @media screen and (min-width: $breakpoint-sm) {
    width: 60vw;
    max-width: auto;
  }

  @media screen and (min-width: $breakpoint-md) {
    width: 30vw;
    max-width: 630px;
  }
}
</style>

<script>
import Earth from './svgs/earth';
import City from './svgs/city';
import Stars from './svgs/stars';
import Menu from './svgs/menu';
import Close from './svgs/close';
import Navigation from './Navigation';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  name: 'Wrapper',
  data() {
    return {
      open: false,
      ps: null
    };
  },
  mounted() {
    this.resizeHandler();
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    this.destroyScroll();
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    toggleNav() {
      this.open = !this.open;
    },
    closeNav(e) {
      if (e.target && e.target.tagName === 'A') {
        this.open = false;
      }
    },
    resizeHandler() {
      if (window.innerWidth < 1280) {
        this.destroyScroll();
        this.bodyScroll();
      } else {
        this.destroyScroll();
        this.rightScroll();
      }
    },
    destroyScroll() {
      if (this.ps) {
        this.ps.destroy();
        this.ps = null;
      }
    },
    rightScroll() {
      this.ps = new PerfectScrollbar('.right', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true
      });
    },
    bodyScroll() {
      this.ps = new PerfectScrollbar('#app', {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true
      });
    }
  },
  components: { Earth, City, Stars, Navigation, Menu, Close }
};
</script>
