<template>
    <div class="portfolio-modal modal fade" id="newsmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h3 v-if="dataModalNew.message">{{dataModalNew.message}}</h3>
                            <hr class="star-primary">
                            <img :src="defaultImage(dataModalNew.full_picture)" class="" style="margin: auto;width:100%" alt="">

                            <p style="text-align:left;padding:20px 5px;" v-if="dataModalNew.description">
                            {{dataModalNew.description}}
                            </p>
                            <p style="text-align:left;padding:20px 5px;" v-if="dataModalNew.message">
                            {{dataModalNew.descripmessagetion}}
                            </p>
                            <ul class="list-inline item-details">
                                <li>Date:
                                    <strong><a href="#!">{{fullTime(dataModalNew.created_time)}}</a>
                                    </strong>
                                </li>
                                <li>By:
                                    <strong><a :href="dataModalNew.link">{{dataModalNew.from && dataModalNew.from.name}}</a>
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
moment.locale('th')
export default {
  computed: {
    ...mapGetters([
      'dataModalNew'
    ])
  },
  methods: {
    fullTime (data) {
      return moment(data).format('LLLL')
    },
    defaultImage (img) {
      if (!img) {
        return 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/963764_568645353198738_2103906201_o.jpg?oh=d621419d016bcd5094731ecf6946a151&oe=599324B7'
      } else {
        return img
      }
    }
  }
}
</script>
