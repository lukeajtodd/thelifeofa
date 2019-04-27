<template>
  <div class="wrapper">
    <div class="left">
      <Stars class="stars-bg" />
      <h1>the life of a</h1>
      <City class="city-bg" />
      <Earth class="earth-bg" />
    </div>
    <div class="right">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.wrapper {
  display: flex;
  height: 100%;
}

.left {
  position: relative;
  background-color: var(--primary);
  color: var(--header);
  font-family: 'Big John PRO';
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: responsive 80px 100px;
    padding: 2rem;
    margin: 0;
    margin-bottom: 2rem;
  }
}

.left,
.right {
  flex: 0 0 50%;
}

.earth-bg {
  width: 130%;
  position: absolute;
  bottom: 0;
  transform: translateY(55%);
}

.city-bg {
  width: 100%;
  max-width: 260px;
  position: absolute;
  bottom: 5%;
  z-index: 2;
}

.stars-bg {
  width: 100%;
  max-width: 30vw;
  position: absolute;
  top: 10%;
}
</style>

<script>
import Earth from './svgs/earth';
import City from './svgs/city';
import Stars from './svgs/stars';

export default {
  name: 'Wrapper',
  components: { Earth, City, Stars }
};
</script>

