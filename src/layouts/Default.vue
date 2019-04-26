<template>
  <div class="layout">
    <Wrapper>
      <slot />
    </Wrapper>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Wrapper from '../components/Wrapper';

export default {
  components: { Wrapper }
};
</script>


<style lang="postcss">
@font-face {
  font-family: 'Big John PRO';
  src: url('../assets/bigjohnpro/BigJohnPRO-Bold.eot');
  src: local('Big John PRO Bold'), local('BigJohnPRO-Bold'),
    url('../assets/bigjohnpro/BigJohnPRO-Bold.eot?#iefix')
      format('embedded-opentype'),
    url('../assets/bigjohnpro/BigJohnPRO-Bold.woff2') format('woff2'),
    url('../assets/bigjohnpro/BigJohnPRO-Bold.woff') format('woff'),
    url('../assets/bigjohnpro/BigJohnPRO-Bold.ttf') format('truetype'),
    url('../assets/bigjohnpro/BigJohnPRO-Bold.svg#BigJohnPRO-Bold')
      format('svg');
  font-weight: bold;
  font-style: normal;
}

.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
