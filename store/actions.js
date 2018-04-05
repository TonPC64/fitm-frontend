import { firebaseAction } from 'vuexfire'
import Firebase from 'firebase'

export const incre = ({ commit }) => {
  commit('INCREMENT')
}

export const getFilename = (files) => {
  var filename = files[0].name
  return filename
}

export const loadFileImg = (file, callbackData) => {
  var reader = new FileReader()
  reader.onload = (e) => {
    var data = e.target.result
    callbackData(data)
  }
  reader.readAsDataURL(file)
}

export const createImageWithIndex = ({commit}, {index, event}) => {
  event.preventDefault()
  var files = event.target.files || event.dataTransfer.files
  var filename = getFilename(files)
  loadFileImg(files[0], (data) => {
    var imgData = {
      fileName: filename,
      base64: data
    }
    commit('IMAGE_INDEX', {index, imgData})
  })
}

export const uploadMultipleFile = ({ commit }, { vm, images }) => {
  for (var round = 0; round < vm.images.length; round++) {
    var data = vm.images[round]
    Upload({commit}, {vm, data})
  }
}

export const Upload = ({ commit }, {vm, data}) => {
  var storageRef = vm.$firebase.storage().ref()
  var mountainImagesRef = storageRef.child('images/')
  var message = data.base64
  var imgBase64 = message.substring(message.indexOf(',') + 1)
  console.log(imgBase64)
  mountainImagesRef.putString(imgBase64, 'base64').then(function (snapshot) {
    commit('PATH', snapshot.downloadURL)
  })
}

export const addImgField = ({commit}) => {
  commit('ADD_IMG_FIELD')
}

export const saveDataToDB = ({commit}, {vm, data}) => {
  console.log(vm.$db)
  vm.$db.ref('/Activity').push(data).then((snap) => {
    console.log(snap)
  })
}

export const setUploadRef = firebaseAction(({bindFirebaseRef}, ref) => {
  console.log(ref)
  bindFirebaseRef('dataUpload', ref)
})

export const setTodosRef = firebaseAction(({bindFirebaseRef}, ref) => {
  console.log(ref)
  bindFirebaseRef('test', ref)
})

export const getNews = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('dataRecieve', ref)
})

export const ActivityRef = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('activity', ref)
})

export const NewsRef = firebaseAction(({bindFirebaseRef}, ref) => {
  bindFirebaseRef('news', ref)
})

export const moveData = ({commit}, {vm, data}) => {
  var newData = Object.assign(data)
  var key = data['.key']
  delete newData['.key']
  vm.$db.ref('Activity').push(newData).then(() => {
    vm.$db.ref('News').child(key).remove()
  })
}

export const faceBookAuth = ({commit}, vm) => {
  if (!vm.$firebase.auth().currentUser) {
    console.log(vm.$firebase.auth())
    var provider = new Firebase.auth.FacebookAuthProvider()
    vm.$firebase.auth().signInWithPopup(provider).then(function (result) {
      saveToken(vm, result.credential.accessToken)
      commit('AUTH', true)
      vm.$router.push({ path: '/admin/newFeed' })
    }).catch(function (error) {
      console.log(error)
    })
  } else {
    console.log(vm.$firebase.auth().currentUser)
    vm.$firebase.auth().signOut()
  }
}

//
export const saveToken = (vm, token) => {
  vm.$db.ref('token').set({ accessToken: token })
}

export const findDataNew = ({ commit }, index) => {
  commit('FINDEDATANEW', index)
}
