<template>
  <div id='activity'>
    Label : <input type="text" v-model='data.label'><br>
    <div v-for="(img, index) in images">
          img : <input type="file" @change='chooseImage(index, $event)'> <br>
    </div>
    <button @click="addImgField()">ADD</button>
    description : <input type="text" v-model='data.description'>
    <button type="button" name="button" @click='uploadmulti(data)'>Add data</button>
    <p>{{data.label}}</p>
    <div v-for='image in images'>
      <img :src='image.base64'>
    </div>
    <p>{{data.description}}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'activity',
  data () {
    return {
      todo: this.$db
    }
  },
  computed: {
    ...mapGetters([
      'data',
      'images'
    ])
  },
  methods: {
    ...mapActions([
      'createImageWithIndex',
      'Upload',
      'addImgField',
      'uploadMultipleFile',
      'saveDataToDB'
    ]),
    upload (data) {
      let vm = this
      this.Upload({vm, data})
    },
    chooseImage (index, event) {
      this.createImageWithIndex({index, event})
    },
    uploadmulti () {
      let vm = this
      var multiImages = vm.images
      var data = vm.data
      this.uploadMultipleFile({vm, multiImages})
      this.saveDataToDB({vm, data})
    }
  }
}
</script>
<style>
</style>
