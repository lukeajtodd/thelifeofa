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
.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
