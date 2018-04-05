<template>
  <div class="container flex card">
    <div>
      <img alt="" :src="data.full_picture" v-if="data.full_picture" class="img img-rounded" height="150">
    </div>
    <div class='flex-row'>
      <div class="title">{{data.message}}</div>
      <div class="description">{{data.description}}</div>
      <div class="story">{{data.story}}</div>
    </div>

    <!--{{data}}-->
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="css">
  .card {
    border: 1px solid #9B9B9B;
    border-radius: 3px ;
    margin: 5px;
    padding: 5px;
  }
  .flex {
    width: 100%;
    display: flex;
  }
  .title {
    font-weight: bold;
    font-size: '1.4 rem';
  }
  .story {
    color: #9B9B9B;
  }
</style>
