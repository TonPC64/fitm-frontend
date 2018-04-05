<template>
  <div id='activity'>
    Label : <input type="text" v-model='data.label'><br>
    img : <input type="file" @change='getFilename($event)'><br>
    description : <input type="text" v-model='data.description'>
    <p>{{data.label}}</p>
    <img :src='data.img'>
    <p>{{data.description}}</p>
    <button type="button" name="button" @click='upload()'>Add data</button>
  </div>
</template>
<script>
export default {
  name: 'activity',
  data: function data () {
    return {
      data: {
        label: '',
        img: [''],
        description: ''
      }
    }
  },
  methods: {
    getFilename (e) {
      e.preventDefault()
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.data.img = e.target.result
      }
      reader.readAsDataURL(file)
    },
    upload () {
      var vm = this
      console.log(vm.data)
    }
  }
}
</script>
<style>
</style>
