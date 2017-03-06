<template>
  <div>
    <label for="name">Movie Name</label>
    <input type="text" name="name" :value="name" @input="updateName">
    <label for="genre">Movie Genre</label>
    <input type="text" name="genre"  :value="genre" @input="updateGenre">
  </div>
</template>

<script>
  export default {
    props: ['index'],

    computed: {
      name () {
        console.log(this.$store.state.movies.movie[this.index])
        return this.$store.state.movies.movie[this.index].name
      },
      genre () {
        return this.$store.state.movies.movie[this.index].genre
      }
    },
    methods: {
      updateName (e) {
        console.log(e.target.value)
        this.$store.dispatch('updateMovieName', {index: this.index, name: e.target.value})
      },
      updateGenre (e) {
        this.$store.dispatch('updateMovieGenre', {index: this.index, genre: e.target.value})
      }
    }
  }
</script>
