<template>
  <div class="wrapper">
    <div class="left">
      <h1>the life of a</h1>
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
  background-color: var(--primary);
  color: var(--header);
  font-family: 'Big John PRO';

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: responsive 80px 100px;
    padding: 2rem;
  }
}

.left,
.right {
  flex: 0 0 50%;
}
</style>
