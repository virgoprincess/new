<template>
  <div class="dashboard-calendar-component">
  <v-row class="fill-height dashboard-calendar">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <div>
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
          </div>
          <div :style="hide ? 'visibility: hidden;' : 'visibility: visible'" class="default-title">March 2022</div>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          </v-toolbar>
      </v-sheet>
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="focus"
          :event-color="getEventColor"
          color="black"
          @click:date="viewDay"
          :type="type"
          @change="updateRange"
        ></v-calendar>
        </v-sheet>
    </v-col>
  </v-row>
  <hr>
  <events-components :selected-date="currentDate" @processed="$emit('processed')"/>
  </div>
</template>

<script>
import EventsComponents from './EventsComponents.vue'
export default {
    name:'DashboardCalendarComponent',
    components:{ EventsComponents },
    data(){
      return{
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
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      hide:false,
      currentDate:new Date(),
        }
    },
    mounted(){
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'week'
        
        console.log("Date today:::",date)
        if( date ) this.currentDate = new Date(date);
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
        this.hide = true;
      },
      next () {
        this.$refs.calendar.next()
        this.hide = true;
      },
      /* showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
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
      }, */
      updateRange ({ start, end }) {
        this.hide = true;
        const events = [];
        this.currentDate = new Date(this.$refs.calendar.getNow().date);
        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            /* name: this.names[this.rnd(0, this.names.length - 1)], */
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }
        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
    
}
</script>

<style lang="scss" scoped >
.dashboard-calendar-component{
  margin-top: 20px;
  height: fit-content !important;
  width: 100% !important;
  background-color: #fff;
  
}
.dashboard-calendar-component::v-deep{
  .v-size--default{ height: 90px !important; width: 100% !important; }
  .v-btn--has-bg:focus:before,.v-btn--has-bg:hover:before{
    opacity: 0 !important;
  }
  
  .v-btn:hover,.v-btn--round:hover{ color: #fff !important; }
  .v-btn:before{ @extend .gradient-blue-bg; }
  .v-btn--round{ border-radius:  5px !important;}

  
  .v-toolbar__content{
    padding: 0;
    flex-direction: row-reverse !important;
    justify-content: space-between !important;
  }
  .v-toolbar__title{ display: block !important; visibility: visible !important; font-size: 18px; font-weight: 700; }
  .v-calendar-daily__body,.v-calendar-daily__intervals-head{ display: none; }
  .v-calendar,.v-calendar-daily_head-day{ border: 0 !important;}

  .dashboard-calendar{
    position: relative;
    width: 100%;
    margin: 0;
  }
  hr{
    width: 90%;
    margin: auto;
    color: $gray;
  }
  .v-calendar-daily_head-day{ 
    z-index: 1; 
    margin: 3px;
    padding: 3px 0;
    .v-btn{max-height: 40px;}
    .v-calendar-daily_head-day-label{ margin: 0; }
    }
  .v-past::before,.v-future::before,.v-present::before,.v-present:focus-within{ @extend .gradient-blue-bg; }
  /* .v-present::before{ @extend .gradient-blue-bg; } */
  .v-present{ border-radius: 5px; }
  .v-past::before,.v-future::before,.v-present::before{
    z-index: -1;
    border-radius: 5px;
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
  .v-past:hover,.v-past:focus-within,.v-future:hover,.v-future:focus-within,.v-present:hover,.v-present:focus-within{
    .v-calendar-daily_head-weekday,.v-btn > span{
      color: #fff !important;
    }
  }
  .v-calendar-daily_head-weekday{ color: $gray; }
  .v-calendar-daily_head-day:hover:before,.v-calendar-daily_head-day:focus-within:before{
    opacity: 1;
  }
  .v-calendar-daily_head-day{ font-weight: 600; span{ font-weight: 600 ;} }
  .black{
    background-color: transparent !important;
    color: $black !important;
  }
 /*  .v-present::before{
    opacity: 1;
  } */
  .v-ripple__animation--in{
    opacity: 0 !important;
  }
  .black--text{
    color: $gray !important;
  }
}
</style>