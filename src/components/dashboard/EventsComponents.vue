<template>
  <div class="events-component">
<p class="event-header">Upcoming schedule</p>
<div class="events-list" v-for="(event,i) in events" :key="i">
  <div class="event d-flex">
    <div class="event-date">
      <p class="day-word fs-10 fc-gray">{{event.day}}</p>
      <p class="day-number fs-15 fw-700">{{event.date}}</p>
    </div>
    <div class="event-details">
      <div>
        <p class="event-title fs-15 fw-700">{{event.name}}</p>
        <p class="event-content fs-11 fc-gray">{{event.time}} - Conference Room 2</p>
      </div>
    </div>
  </div>

  <!-- <div class="event d-flex">
    <div class="event-date">
      <p class="day-word fs-10 fc-gray">Mon</p>
      <p class="day-number fs-15 fw-700">18</p>
    </div>
    <div class="event-details">
      <div>
        <p class="event-title fs-15 fw-700">Event name</p>
        <p class="event-content fs-11 fc-gray">9:00 - 10:15am - Conference Room 2</p>
      </div>
    </div>
  </div>

  <div class="event d-flex">
    <div class="event-date">
      <p class="day-word fs-10 fc-gray">Mon</p>
      <p class="day-number fs-15 fw-700">18</p>
    </div>
    <div class="event-details">
      <div>
        <p class="event-title fs-15 fw-700">Event name</p>
        <p class="event-content fs-11 fc-gray">9:00 - 10:15am - Conference Room 2</p>
      </div>
    </div>
  </div> -->
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'EventsComponents',
  emits:["processed"],
  props:{
    selectedDate:Date,
  },
  created(){
    this.initLoad();
  },
  methods:{
    initLoad(){
      const params = [];
      params.min = new Date(new Date(this.selectedDate).toDateString() + " 00:00:00");
      params.max = new Date(new Date(this.selectedDate).toDateString() + " 23:59:59");
      console.log("Event Component Current Date:::",params)
      this.$store.dispatch("SET_EVENTS",params);
    },
    formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  },
  computed:{
    ...mapGetters({
      events:'GET_CALENDAREVENTS'
    })
  },
  watch:{
    selectedDate(){
      this.initLoad();
    },
    events(){
      this.events.map((event)=>{
        event.day = new Date(event.start).toLocaleString('en-us',{weekday:'short'});
        event.date = new Date(event.start).getDate();
        event.time = this.formatAMPM(event.start)+ " - " + this.formatAMPM(event.end);
        console.log("formated events::",event);
        return event;
      })
        console.log("watch events change::::");
        this.$emit("processed");

    }
  }
}
</script>

<style lang="scss" scoped>
.events-component{
  padding: 0 20px 20px 20px;
  width: 100%;
  p{ margin: 0;}
  .event-date{
    min-width: 50px;
    text-align: center;
    padding: 10px;
  }
  .event-header{ font-size: 16px; font-weight: 700; padding: 20px  0; }
  .events-list,.event{ width: 100%;  }
  .event{ margin-bottom: 10px; }
  .event-details{ background-color: $background-color; padding: 10px; display: flex; width: 100%;}
  .event-details div{ padding-left: 10px;}
  
  .event-details::before{ content: "";border-left: 3px solid $gray; margin: 5px 0; }

  .event:nth-child(1){
    .event-details::before{border-color: $lavender; }
  }
  .event:nth-child(2){
    .event-details::before{border-color: $yellow; }
  }
  .event:nth-child(3){
    .event-details::before{border-color: $red;}
  }
}
</style>