<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
    <path
      d="M10.5 0A10.5 10.5 0 1 0 21 10.5 10.5 10.5 0 0 0 10.5 0zm4.865 13.51a1.31239019 1.31239019 0 1 1-1.856 1.856l-3.01-3.01-3.01 3.01a1.312 1.312 0 0 1-1.854-1.856l3.01-3.01-3.01-3.01A1.312 1.312 0 0 1 7.49 5.635l3.01 3.01 3.01-3.01a1.31239019 1.31239019 0 1 1 1.856 1.856l-3.01 3.01 3.01 3.01z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#FFFFFF'
    }
  }
};
</script>
