<template>
  <div>
    <label for="favourite">Favourite Movie</label>
    <input  :value="favourite" @input="updateFavourite">
    <label for="here">Hero</label>
    <input :value="hero" @input="updateHero">

    <div v-for="(movie,index) in movies" :key="movie">
      <Movie  :index="index"></Movie>
    </div>
    <button @click="addMovie()" class="btn btn-danger btn-md pull-right">Add Movie</button>

    <button @click="formSubmit" > Submit</button>

  </div>

</template>

<script>
  import Movie from './Movie'

  export default {
    data () {
      return {
        singleMovie: {
          name: '',
          genre: ''
        }
      }
    },
    components: {Movie},
    computed: {
      favourite () {
        return this.$store.state.movies.favourite
      },
      hero () {
        return this.$store.state.movies.hero
      },
      movies () {
        return this.$store.state.movies.movie
      }
    },

    methods: {
      addMovie () {
        this.$store.dispatch('addMovie', this.singleMovie)
      },
      formSubmit () {
        this.$router.push({name: 'Preview'})
      },
      updateFavourite (e) {
        this.$store.dispatch('updateFavourite', e.target.value)
      },
      updateHero (e) {
        this.$store.dispatch('updateHere', e.target.value)
      }
    }
  }
</script>
