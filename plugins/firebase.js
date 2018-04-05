import Vue from 'vue'
import Firebase from 'firebase'
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
Vue.prototype.$firebase = Firebase.initializeApp(config)
Vue.prototype.$db = Vue.prototype.$firebase.database()
Vue.prototype.$storageRef = Vue.prototype.$firebase.storage().ref()
