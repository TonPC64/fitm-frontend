<template>
    <div>
        <div id="map-canvas" style="opacity: 0.7;"></div>
        <div class="contact-box bg-secondary dark animated flipInY visible col-lg-3 col-xs-10" data-animation="flipInY">
            <h1 style="font-size:60px;color:#fff;display:inline-block;padding-left:20px;margin-right:11px;"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></h1>
            <h1 style="padding-bottom:50px;display:inline-block;"><strong> Contact </strong></h1>
            <ul class="list-unstyled list-unstyled-icons">
                <li><i class="inline-icon icon-before-and-after text-primary fa fa-map-marker"></i>คณะเทคโนโลยีและการจัดการอุตสาหกรรม<br>มหาวิทยาลัยเทคโนโลยีและการจัดการอุตสาหกรรม<br><br>129 หมู่ 21<br>ตำบล เนินหอม อำเภอเมือง<br>ปราจีนบุรี 25230</li>
                <li><i class="inline-icon icon-before-and-after text-primary fa fa-phone"></i>0-3721-7300 ต่อ 7073 และ 7079</li>
                <li><i class="inline-icon icon-before-and-after text-primary fa fa-fax"></i>0-3721-7329</li>
            </ul>
            <h4 style="padding-top:50px">Social Network!</h4>
            <div class="col-lg-1 col-md-1 col-sm-2 col-xs-3 text-center">
                <div class="icon-circle">
                <a href="https://www.facebook.com/FITM.KMUTNB/" target="_blank" class="ifacebook" title="Facebook"><i class="fa fa-facebook"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* globals google */
export default {
  methods: {
    initialize () {
      var myLatlng = new google.maps.LatLng(14.1605112, 101.3490888)
      var mapOptions = {
        zoom: 15,
        center: myLatlng
      }
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Share Olanlab Com'
      })
      console.log(marker)
    }
  },
  mounted () {
    google.maps.event.addDomListener(window, 'load', this.initialize)
  }
}
</script>
<style scoped>
.contact-box {
  margin-left: 0px;
    left: 0px;
    top: 0px;
    height: 850px;
    width: 350px !important;
}
</style>
