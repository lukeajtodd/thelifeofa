<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.422 21.422">
    <path
      d="M19.042 16.661H2.38a2.38 2.38 0 0 0 0 4.76h16.662a2.38 2.38 0 0 0 0-4.76zm0-8.331H2.38a2.38 2.38 0 1 0 0 4.76h16.662a2.38 2.38 0 1 0 0-4.76zm0-8.331H2.38a2.38 2.38 0 0 0 0 4.76h16.662a2.38 2.38 0 1 0 0-4.76z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#030045'
    }
  }
};
</script>