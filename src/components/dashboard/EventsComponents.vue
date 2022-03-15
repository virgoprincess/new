<template>
  <div class="events-component">
<p class="event-header">Upcoming schedule</p>
<div class="events-list">
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
  </div>
</div>
  </div>
</template>

<script>
export default {

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