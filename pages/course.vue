<template>
  <div id='course'>
    หลักสูตร : <input type="file" @change='getFilename($event)'><br>
    <p></p>
    <button type="button" name="button" @click='upload()'>Add data</button>
  </div>
</template>
<script>
export default {
  name: 'course',
  data: function data () {
    return {
      data: {
        data: ['']
      }
    }
  },
  methods: {
    getFilename (e) {
      e.preventDefault()
      var files = e.target.files || e.dataTransfer.files
      console.log(files[0].name)
      if (!files.length) {
        return
      }
      this.createFile(files[0])
    },
    createFile (file) {
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.data = e.target.result
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
