<template>
  <div :class="{'col-lg-4 col-xs-12': !topic, 'col-lg-12 col-xs-12': topic}">
    <a href="#newsmodal" data-toggle="modal" style="text-decoration:null;" @click="findDataNew(index)">
      <div :class="{'image-container-small': !topic, 'image-container  col-xs-12 col-lg-8': topic}" >
      <img :class="{'media-object image-container-small': !topic, 'media-object image-container col-xs-12': topic}" :src="topicImage">
      </div>
      <div :class="{'col-lg-12 col-xs-12': !topic, 'col-lg-4 col-xs-12': topic}">
      <div class="media-body customdesign" :class="{'customdesignB': !topic, 'customdesignA': topic}">
          <h1 class="media-heading">{{message}}</h1><br>
          <p>{{ content }}</p><br>
          <div class="row">
          <div class="col-lg-2">
              <img :src="image" class="img-circle" width="40px">
          </div>
          <div class="col-lg-8">
              <small>{{name}}</small><br />
              <small>{{fullTime(timeStr)}}</small>
          </div>
          </div>
      </div>
      </div>
    </a>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import moment from 'moment'
moment.locale('th')
export default {
  props: ['padding', 'topic', 'topicImage', 'image', 'content', 'message', 'name', 'timeStr', 'index', 'story'],
  methods: {
    ...mapActions([
      'findDataNew'
    ]),
    fullTime (data) {
      return moment(data).format('LLLL')
    }
  }
}
</script>
<style scoped>
.customdesignA {
    padding: 5px 0px;
}
.customdesignB {
    padding: 10px 20px;    
}
</style>
