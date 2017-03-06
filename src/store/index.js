import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: {
      favourite: 'Avtar',
      hero: 'brad pit',
      movie: [{name: 'Inception', genre: 'Thrill'}]
    }
  },
  mutations: {
    ADD_MOVIE (state, movie) {
      state.movies.movie.push(movie)
    },
    UPDATE_FAVORITE (state, favourite) {
      state.movies.favourite = favourite
    },
    UPDATE_HERO (state, hero) {
      state.movies.hero = hero
    },
    UPDATE_MOVIE_NAME (state, {index, name}) {
      state.movies.movie[index].name = name
    },
    UPDATE_MOVIE_GENRE (state, {index, genre}) {
      state.movies.movie[index].genre = genre
    }
  },
  actions: {
    addMovie (context, movie) {
      context.commit('ADD_MOVIE', movie)
    },
    updateFavourite (context, favourite) {
      context.commit('UPDATE_FAVORITE', favourite)
    },
    updateHero (context, hero) {
      context.commit('UPDATE_HERO', hero)
    },
    updateMovieName (context, value) {
      console.log('update Movie name', value)
      context.commit('UPDATE_MOVIE_NAME', value)
    },
    updateMovieGenre (context, value) {
      console.log('update Movie Genre', value)
      context.commit('UPDATE_MOVIE_GENRE', value)
    }
  }
})

export default store
