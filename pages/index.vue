<template>
  <div id="page-top">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <NavBar></NavBar>
        <NavMenu></NavMenu>
      </div>
    </nav>
    <section id="intro" class="intro-section">
        <div class="container one">
            <p class="item-1">พัฒนาคน เพื่อพัฒนาเทคโนโลยี</p>
            <p class="item-2">ผลิตบัณฑิตที่มีความรู้คู่คุณธรรม ส่งเสริมการบริการวิชาการและมุ่งมั่นการวิจัยให้เกิดประโยชน์สูงสุดต่อสังคม</p>
            <p class="item-3">เป็นผู้นำทางด้านเทคโนโลยีสารสนเทศในระดับภูมิภาค</p>
        </div>
    </section>
    <section id="news" class="news-section">
      <div class="container">
        <h1 style="margin-bottom:50px;">ข่าวสาร<small>News</small></h1>
        <NewFeed v-for='(data, index) in feedByTime'
          :topicImage="defaultImage(data.full_picture)"
          :content='data.description'
          :title='data.message'
          image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/14725626_1251460654917201_6644715707675291361_n.jpg?oh=43297e6c58cb261e5463cf57b6b35638&oe=5974B5C2"
          :topic="index===0"
          :key="index"
          :name='data.from.name'
          :timeStr="data.created_time"
          :index="index"
          :story="story"
          v-if="index <= 3">
        </NewFeed>
      </div>
      <!-- <nav class="col-lg-12" aria-label="...">
        <ul class="pager">
          <li class="previous"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
          <li class="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
        </ul>
      </nav> -->
    </section>
    <section id="port" class="port-section">
      <div class="container">
        <div class="row">
          <h1 class="pull-right" style="margin-bottom:50px;color:#fff;">Portfolio&Activity<small>ผลงานนักศึกษาและกิจกรรม</small></h1>
        </div>
        <div class="row nomargin">
          <div class="col-md-4 nopadding">
            <Activitys
              ID="#portfolioModal3"
              image="https://xn--12cas3c2av3m3a0g7c.com/wp-content/uploads/2017/02/xn--12cas3c2av3m3a0g7c_2017-02-13_14-33-01.png">
            </Activitys>
            <Activitys
              ID="#portfolioModal2"
              image="http://contestwar.com/sites/default/files/contest/innovation%20contest_73.jpg">
            </Activitys>
            <Activitys
              ID="#portfolioModal1"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-0/p480x480/17436306_1432595166803748_5682782594618803784_o.jpg?oh=a39dc06f24e1b7d9e08819a315c1174b&oe=5990FCD8">
            </Activitys>
          </div>
          <div class="col-md-4 nopadding">
            <Activitys
              ID="#portfolioModal4"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-0/p480x480/17492466_1428310710565527_8820791248229923027_o.jpg?oh=5d5406b29e9982406a10065ed7c101ac&oe=5982E6C4">
            </Activitys>
            <Activitys
              ID="#portfolioModal5"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/17458035_1427443497318915_7322434737195926899_n.jpg?oh=ba505c52faea382e923d23249187a439&oe=599044CC">
            </Activitys>    
            <Activitys
              ID="#portfolioModal6"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/17434840_1259236500798243_7193486195793677075_o.jpg?oh=bbbdaa9bb7fb8ec61a44907756b6a917&oe=5988595F">
            </Activitys>        
          </div>
          <div class="col-md-4 nopadding">
            <Activitys
              ID="#portfolioModal7"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/16508317_1084755514967360_5522237536272956027_n.jpg?oh=44e49fb6614163fd3de6f44b8f43363a&oe=598648FC">
            </Activitys>
            <Activitys
              ID="#portfolioModal8"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-0/p320x320/16387237_1536712919676875_7372148400378473987_n.png?oh=0343e89cb94a719c9d26c530cc424b6a&oe=598DA293">
            </Activitys>    
            <Activitys
              ID="#portfolioModal9"
              image="https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-0/p480x480/16300089_1842737922631507_4469585805655694853_o.jpg?oh=e7eef5623e6013037af67d970a9707fb&oe=597BF8DA">
            </Activitys>              
          </div>
        </div>
      </div>
     <!-- <nav class="col-lg-12" aria-label="...">
        <ul class="pager">
          <li class="previous"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
          <li class="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
        </ul>
      </nav> -->
    </section>
    
  <section id="people" class="people-section">
      <div class="container">
        <h1 style="margin-bottom:50px;">บุคลากร<small style="color:#eee;">Personnel</small></h1>
        <div class="row">
          <div class="col-lg-12">
            <Personnel></Personnel>
          </div>
        </div>
      </div>
    </section>
     
    <!-- contact & map -->
    <section id="contact" class="contact-section">
        <div class="col-lg-12">
            <Map></Map>
        </div>
    </section>
    <!-- footer -->
     <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 paddingtop-bottom">
            <h6 class="heading7">GENERAL LINKS</h6>
            <ul class="footer-ul">
              <li><a class="page-scroll" href="#page-top"> หน้าหลัก</a></li>
              <li><a class="page-scroll" href="#news"> ข่าวสาร</a></li>
              <li><a class="page-scroll" href="#port"> ผลงานและกิจกรรม</a></li>
              <li><a class="page-scroll" href="#people"> บุคลากร</a></li>
              <li><a class="page-scroll" href="#contact"> ติดต่อ</a></li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6 paddingtop-bottom">
            <h6 class="heading7">EXTERNAL LINK</h6>
            <ul class="footer-ul">
              <li><a href="https://grade.icit.kmutnb.ac.th"> ระบบประเมินการสอน</a></li>
              <li><a href="http://klogic.kmutnb.ac.th:8080/kris/tess/index.jsp"> การใช้งานข้อมูล ตารางสอน-ตารางสอบ</a></li>
              <li><a href="http://klogic.kmutnb.ac.th:8080/kris/tess/dataQuery.jsp"> ตารางสอน-ตารางเรียน-ตารางสอบ-การใช้ห้องเรียน-ตอนเรียนที่เปิด</a></li>
              <li><a href="http://klogic.kmutnb.ac.th:8080/kris/index.jsp"> ระบบงานทะเบียนนักศึกษา</a></li>
              <li><a href="http://regis.kmutnb.ac.th/data_doc/calendar/intro_calendar.html"> ปฏิทินการศึกษา</a></li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6 paddingtop-bottom" style="vertical-align:center">
            <a href="https://sites.google.com/a/fitm.kmutnb.ac.th/homefitm/"></a><img class="img-responsive" src="../assets/image/fitm.png" width="200px" style="margin: auto;"/></a>
          </div>
        </div>
      </div>
    </footer>
    <!-- end footer -->
    
    <div class="copyright">
      <div class="container">
        <div class="col-md-12">
          <p style="text-align:center;">© 2017 - By Method Team</p>
        </div>
      </div>
    </div>
    <!-- modal  -->
     <Modals></Modals>
     <ModalNew></ModalNew>

  </div>
</template>
<script>
/* globals $ */
import NavBar from '~components/navBar'
import NavMenu from '~components/navMenu'
import NewFeed from '~components/newFeed'
import Activitys from '~components/activitys'
import Map from '~components/map'
import Modals from '~components/modal'
import Personnel from '~components/personal'
import ModalNew from '~components/modalNew'
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
  components: {
    NavBar,
    NavMenu,
    NewFeed,
    Activitys,
    Map,
    Modals,
    Personnel,
    ModalNew
  },
  methods: {
    ...mapActions({
      incre: 'incre',
      setTodosRef: 'setTodosRef',
      getNews: 'getNews'
    }),
    defaultImage (img) {
      if (!img) {
        return 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/963764_568645353198738_2103906201_o.jpg?oh=d621419d016bcd5094731ecf6946a151&oe=599324B7'
      } else {
        return img
      }
    }
  },
  computed: {
    ...mapGetters([
      'dataRecieve'
    ]),
    feedByTime () {
      return this.dataRecieve.sort((a, b) => {
        return (moment(b.created_time).diff(moment(a.created_time)))
      })
    }
  },
  mounted () {
    this.setTodosRef(this.$db.ref('todos'))
    var owl = $('.owl-carousel')
    owl.owlCarousel({
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5,
          loop: false,
          margin: 20
        }
      }
    })
    $('a.page-scroll').bind('click', function (event) {
      console.log(event)
      var $anchor = $(this)
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 800, 'easeInOutExpo')
      event.preventDefault()
    })
    this.getNews(this.$db.ref('News'))
  }
}
</script>
<style scoped>

.item-1, 
.item-2, 
.item-3 {
	position: absolute;
  display: block;
	top: 2em;
  
  width: 60%;
  
  font-size: 2em;

	animation-duration: 20s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
}

.item-1{
	animation-name: anim-1;
}

.item-2{
	animation-name: anim-2;
}

.item-3{
	animation-name: anim-3;
}

@keyframes anim-1 {
	0%, 8.3% { left: -100%; opacity: 0; }
  8.3%,25% { left: 25%; opacity: 1; }
  33.33%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-2 {
	0%, 33.33% { left: -100%; opacity: 0; }
  41.63%, 58.29% { left: 25%; opacity: 1; }
  66.66%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-3 {
	0%, 66.66% { left: -100%; opacity: 0; }
  74.96%, 91.62% { left: 25%; opacity: 1; }
  100% { left: 110%; opacity: 0; }
}
#intro {
    padding: 200px 100px;
    height: 500px !important;
}
.item-1, .item-2, .item-3 {
  top: 8em;
}

footer { background-color:#222; min-height:350px; font-family: 'Open Sans', sans-serif; }
.footerleft { margin-top:50px; padding:0 36px; }
.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}

.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}
.footerleft p i { width:20px; color:#999;}


.paddingtop-bottom {  margin-top:50px;}
.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px; margin-bottom: 50px;}
.footer-ul li { line-height:29px; font-size:12px;}
.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }
.footer-ul i { margin-right:10px;}
.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#87CEFA; }

.social:hover {
     -webkit-transform: scale(1.1);
     -moz-transform: scale(1.1);
     -o-transform: scale(1.1);
 }
 .copyright { min-height:40px; background-color:#f0f0f0;}
 .copyright p { text-align:left; color:#222; padding:10px 0; margin-bottom:0px;}
 .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}
 .post p { font-size:12px; color:#FFF; line-height:20px;}
 .post p span { display:block; color:#8f8f8f;}
 .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}
 .bottom_ul li { float:left; line-height:40px;}
 .bottom_ul li:after { content:"/"; color:#222; margin-right:8px; margin-left:8px;}
 .bottom_ul li a { color:#222;  font-size:12px;}

 .owl-carousel {
 	position: relative;
 	height: 100%;
 }
 	div:not(.owl-controls) {
 		height: 100%;
 	}

</style>
