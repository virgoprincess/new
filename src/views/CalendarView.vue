<template>
  <div class="calendar-component d-flex">
    <v-row class="big-calendar fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar
            flat
          >
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="prev"
            >
              <v-icon small>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small
              color="grey darken-2"
              @click="next"
            >
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu
              bottom
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="type-label"
                  outlined
                  color="grey darken-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="black"
            first-time="T05:00:00"
            interval-count="16"
            :type="type"
            :events="events"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
            <div class="event-toolbar">
              <v-btn icon><v-icon class="icon-circle">mdi-checkbox-blank-circle-outline</v-icon></v-btn>
               <div>
                 <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
                  <v-btn icon><v-icon>mdi-delete-outline</v-icon></v-btn>
                  <v-btn icon @click="selectedOpen = false"><v-icon>mdi-close</v-icon></v-btn>
                  </div>
            </div>
            <div>
              <p class="event-name fs-14">{{selectedEvent.name ? selectedEvent.name : 'Meeting Name'}}</p>
              <p class="event-time fs-11">Friday, Jan 5 • 12:30 - 1:30pm <br>Location of Meeting</p>
              <p class="event-details fs-12">{{selectedEvent.details ? selectedEvent.details :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.'}}</p>
            </div>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>

    <div class="side-calendar">
      <!-- <div class="small-calendar">
        <b-calendar v-model="monthValue" :date-info-fn="dateClass" locale="en"></b-calendar>
      </div> -->
      <small-calendar/>

      <div class="event-categories">
        <div class="d-flex justify-content-between align-items-center"><h6 class="fw-700">Categories</h6> <b-icon-plus-circle></b-icon-plus-circle></div>
        <b-list-group class="category-lists">
          <b-list-group-item class="fs-12 fw-600 d-flex align-items-center" v-for="(category,i) in categories" :key="i">
            <b-icon-dash :style="{color:category.borderColor}"></b-icon-dash>
              <p>{{category.name}}</p>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
import SmallCalendar from '@/components/calendar/SmallCalendar.vue';
import { mapGetters } from 'vuex';
import { accountType } from '../utils/enum'
  export default {
  components: { SmallCalendar },
    data: () => ({
      monthValue:'',
      focus: '',
      type: 'week',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      colors: [],
      names: [],
      colorEvents:[
        {name:'Category 1', color:'#FDF3F0',id:1},
        {name:'Category 2', color:'#F5F7FD',id:2},
        {name:'Category 3', color:'#FFFCEF',id:3},
        {name:'Category 4', color:'#EAF8F6',id:4},
      ],
      categories:[
        {name:'Category 1', borderColor:'#C83935',bgColor:'#FDF3F0',id:1},
        {name:'Category 2', borderColor:'#4771CB',bgColor:'#F5F7FD',id:2},
        {name:'Category 3', borderColor:'#F3BB4E',bgColor:'#FFFCEF',id:3},
        {name:'Category 4', borderColor:'#37B188',bgColor:'#EAF8F6',id:4},
      ],
    }),
    mounted () {
      /* this.events = []; */
      this.$store.state.calendarEvents = [];
      console.log("In Mounted::Calendar Events::",this.events);
      this.$refs.calendar.checkChange();
    },
    methods: {
      dateClass(ymd, date) {
        const day = date.getDate()
        return day >= 10 && day <= 20 ? 'table-info' : ''
      },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'week'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          console.log("Selected Event:::", this.selectedEvent);
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }
        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        const events = [];
        const min = new Date(`${start.date}T06:00:00`)
        const max = new Date(`${end.date}T20:00:00`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)
        const params = { "min": min ,"max":max };
        if( this.$store.state.userProfile.accountType ==  accountType.GOOGLE) this.$store.dispatch("SET_EVENTS",params);
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
    computed:{
      ...mapGetters({
        events:'GET_CALENDAREVENTS',
      })
    },
    watch:{
      events(){
        if( this.events.length > 0 ){
            this.events.map((event)=>{
            event.color = this.categories[this.rnd(0, this.categories.length - 1)].bgColor
            return event;
            });
            console.log("colors changed:::")
        }
      this.$store.commit("SET_LOADER",false);
      }
    },
    updated(){
      var eventTimed = document.getElementsByClassName('v-event-timed')
      if(eventTimed.length > 0){
          for( let i=0;i<eventTimed.length;i++ ){
            eventTimed[i].classList.remove("white--text");
            eventTimed[i].classList.add('event-border');
            var color = eventTimed[i].style.backgroundColor;
            eventTimed[i].classList.add("border-color-"+i)
            var hex = '#'+ color.slice(4,-1).split(',').map(x=> (+x).toString(16).padStart(2,0)).join('');
            this.categories.forEach(category=>{
              if( hex.toUpperCase() == category.bgColor ){
                eventTimed[i].style.cssText += 'border-color:'+category.borderColor+' !important;';
              }
            })
          } 
      }
    }
  }
</script>

<style lang="scss" scoped >
.calendar-component{
  overflow-y: scroll;
  padding: 20px;
}
.big-calendar {
  padding-right: 20px;
  width: 80%;
}
.side-calendar{width: 20%; }
.event-categories{
  padding-top: 20px;

  .list-group-item{
    border: 0;
    background-color: transparent;
    p{margin: 0; padding-left: 5px;}
    svg{
    width: 20px;
    height: 20px;
    }
  }
}
.calendar-component::v-deep{
  .v-calendar-daily_head-day{
    padding: 13px 0;
    z-index: 1;
    width: 8%;
    .v-btn{ width:fit-content; height:fit-content}
  }

  .v-btn.type-label{ border: 0; }
  
  .big-calendar .v-btn--has-bg:focus:before,.big-calendar .v-btn--has-bg:hover:before{ opacity: 0.24 !important; }
  .v-past::before,.v-future::before{ background:$gray; }
  .v-present::before{ @extend .gradient-blue-bg;  }
  .v-past::before,.v-future::before,.v-present::before{
    width: 65px;
    margin: 5px auto;
    z-index: -1;
    border-radius: 50%;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .2s cubic-bezier(.4,0,.6,1);
  }
  .big-calendar .v-past:hover,.v-past:focus-within,.big-calendar .v-future:hover,.big-calendar .v-future:focus-within,.big-calendar .v-present{
    .v-calendar-daily_head-weekday,.v-btn > span{
      color: #fff !important;
    }
  }
  .v-calendar-daily_head-weekday{ color: $gray; }
  .v-calendar-daily_head-day:hover:before,.v-calendar-daily_head-day:focus-within:before{
    opacity: 1;
  }
  .v-past span{color: rgba(0,0,0,.38);}
  .v-calendar-daily_head-day{ font-weight: 600; span{ font-weight: 600 ;} }
  .black{
    background-color: transparent !important;
    color: $black !important;
  }
  .v-present::before{
    opacity: 1;
  }
  .v-ripple__animation--in{
    opacity: 0 !important;
  }
  .v-calendar-daily__scroll-area{
    @extend .scrollable;
  }
  .v-event-timed-container{
    width:90%;
    margin: auto;
    .v-event-timed{
      padding: 5px;
      border: 0;
      /* border-color: none; */
    }
  }
   .theme--light.v-calendar-events .v-event-timed{
    border-radius: 0;
   }
  .v-event-summary{
    color: $gray;
    strong{ color: black;}
  }
  .white--text{
    color: transparent !important;
  }
  .v-event-timed.event-border{
    border-style: solid;
    border-width: 0px 0px 0px 4px !important;
  }
  /* .row{
    flex: 0;
  } */
}
</style>