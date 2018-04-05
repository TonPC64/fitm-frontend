<template>
  <div id='news'>
    <section id='news' class='news-section'>
      <div class='container'>
        <h1 style='margin-bottom:50px;'>ข่าวสาร<small>News</small></h1>
        <div class='col-lg-4 col-xs-12' v-for='data in dataRecieve'>
          <div class='well media'>
            <div class='media-left'>
              <a href='#'>
                <img class='media-object img-circle' :src='data.img' width='150px' height='150px'>
              </a>
            </div>
            <div class='media-body'>
              <h4 class='media-heading'>{{data.title}}</h4>
              {{data.detail}}
              <button class='btn btn-default'>อ่านต่อ <i class='fa fa-arrow-right' aria-hidden='true'></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'news',
  data: function data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'dataRecieve'
    ])
  },
  mounted () {
    this.getNews(this.$db.ref('News'))
  },
  methods: {
    ...mapActions({
      getNews: 'getNews'
    })
  }
}
</script>
<style>
</style>
