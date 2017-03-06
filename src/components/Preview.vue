<template>
  <h1>Preview Section</h1>
</template>

<script>
  export default {
    computed: {
      values () {
        return this.$store.state.movies
      }
    }
  }
</script>
