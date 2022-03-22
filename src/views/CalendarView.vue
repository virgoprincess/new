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
          :type="type"
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
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>

  <div class="small-calendar">
    <b-calendar v-model="monthValue" :date-info-fn="dateClass" locale="en"></b-calendar>
  </div>
  </div>
</template>

<script>
  export default {
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
      events: [],
      colors: [],
      names: [],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
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
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)
        console.log("Min:::", min, "\nMax:::", max)
        const params = { "min": min ,"max":max };
        this.$store.dispatch("SET_EVENTS",params);
        /* console.log("Min Month :::",min.getMonth()+1, "\nMax Month::: ",max.getMonth()+1);
        console.log("Min :::",min.getDate(), "\nMax::: ",max.getDate()); */

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }
        console.log("Events:::", events);
        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>

<style lang="scss" scoped >
.calendar-component{
  overflow-y: scroll;
  padding: 20px;
  
}
.big-calendar {
  padding-right: 20px;
}
.calendar-component::v-deep{
  .v-calendar-daily_head-day{
    padding: 10px 0;
    z-index: 1;
    width: 8%;
    .v-btn{ width:fit-content; height:fit-content}
  }

  .v-btn.type-label{ border: 0; }
  
  .v-btn--has-bg:focus:before,.v-btn--has-bg:hover:before{ opacity: 0 !important; }
  .v-past::before,.v-future::before{ background:$gray; }
  .v-present::before{ @extend .gradient-blue-bg;  }
  .v-past::before,.v-future::before,.v-present::before{
    width: 65px;
    margin: auto;
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
  .v-past:hover,.v-past:focus-within,.v-future:hover,.v-future:focus-within,.v-present{
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
}
</style>