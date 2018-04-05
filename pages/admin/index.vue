<template>
<div class="container">
  <div>
    <h3>News</h3>
    <div v-for="data in newsAsc">
      <div class="flex">
        <cardFeed :data="data"></cardFeed>
        <div class="flex-center">
          <button @click="move(data)">MoveData</button>
        </div>
      </div>
    </div> 
  </div>
  <div>
    <h3>Activity</h3>
    <div v-for="data in activityAsc">
      <div class="flex">
        <cardFeed :data="data"></cardFeed>
        <div class="flex-center">
          <!--<button @click="move(data)">MoveData</button>-->
        </div>
      </div>
    </div> 
  </div>
  <button type="submit" class="btn btn-default" @click="login()">Sign in</button>
</div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import moment from 'moment'
  import cardFeed from '~components/cardFeed'
  export default {
    components: {
      cardFeed
    },
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'news',
        'activity'
      ]),
      newsAsc () {
        return this.news.sort((a, b) => {
          return (moment(b.created_time).diff(moment(a.created_time)))
        })
      },
      activityAsc () {
        return this.activity.sort((a, b) => {
          return (moment(b.created_time).diff(moment(a.created_time)))
        })
      }
    },
    methods: {
      ...mapActions([
        'faceBookAuth',
        'NewsRef',
        'ActivityRef',
        'moveData'
      ]),
      login () {
        let vm = this
        this.faceBookAuth(vm)
      },
      move (data) {
        var vm = this
        this.moveData({vm, data})
      }
    },
    mounted () {
      this.NewsRef(this.$db.ref('News'))
      this.ActivityRef(this.$db.ref('Activity'))
    }
  }
</script>


<style lang="css">
  .flex-center {
    display: flex;
    align-items: center;
  }
</style>
