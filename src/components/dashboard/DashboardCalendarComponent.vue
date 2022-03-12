<template>
  <div class="dashboard-calendar-component">
  <v-row class="fill-height">
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
         <!--  <v-spacer></v-spacer> -->
          <!-- <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
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
          </v-menu> -->
        </v-toolbar>
      </v-sheet>
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :event-color="getEventColor"
          :type="type"
          @change="updateRange"
        ></v-calendar>
        </v-sheet>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
    name:'DashboardCalendarComponent',
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
        }
    },
    mounted(){
      this.$refs.calendar.checkChange()
    },
    methods: {
      /* viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      }, */
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
        const events = []

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
  padding-top: 20px;
  height: fit-content !important;
  width: 100% !important;
  
}
.dashboard-calendar-component::v-deep{
  .v-size--default{ height: 70px !important; width: 100% !important; }
  .v-btn--has-bg:focus:before,.v-btn--has-bg:hover:before{
    opacity: 1 !important;
    @extend .gradient-blue-bg; 
    border-radius: 5px !important;
  }
  .v-btn:focus,.v-btn:hover{ color: #fff !important; }
  .v-btn:before{ @extend .gradient-blue-bg; }
  .v-btn--round{ border-radius:  5px !important;}
  .v-btn--round:focus,.v-btn--round:hover{color: #fff !important;}

  
  .v-toolbar__content{
    flex-direction: row-reverse !important;
    justify-content: space-between !important;
  }
  .v-toolbar__title{ display: block !important; visibility: visible !important; }
  .v-calendar-daily__body,.v-calendar-daily__intervals-head{ display: none; }
  .v-calendar,.v-calendar-daily_head-day{ border: 0 !important; padding: 3px !important;}
  .primary{
    /* @extend .gradient-blue-bg;  */
  }
}
</style>