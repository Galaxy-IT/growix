import Vuex from 'vuex'
import Posts from '~/store/Posts'

export function createStore() {
  return new Vuex.Store({
    modules: {
      Posts,
    }
  })
}
