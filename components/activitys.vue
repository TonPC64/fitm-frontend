<template>
  <div>
    <div class="portfolio-item" >
      <a :href="ID" class="portfolio-link" data-toggle="modal">
        <div class="caption">
          <div class="caption-content">
            <i class="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img :src="image" class="img-responsive" alt="">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['image', 'ID']
}
</script>
