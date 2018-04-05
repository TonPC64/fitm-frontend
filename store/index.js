import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import { firebaseMutations } from 'vuexfire'
const store = new Vuex.Store({
  state: {
    counter: 0,
    dataUpload: {
      label: '',
      img: [],
      description: ''
    },
    test: 0,
    auth: null,
    images: [''],
    dataRecieve: [],
    filename: '',
    news: [],
    activity: [],
    dataNew: []
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})

export default store
