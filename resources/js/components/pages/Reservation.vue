<template>
  <div>
    <div v-if="reservation">
      <h1>{{ mode == 'edit' ? 'Reservation updated' :'Thanks for your reservation'}}</h1>
      <p>We have saved a reservation for {{ reservation.client_name }}. We'll wait for you on {{ reservation.checkin }}</p>
    </div>
    <div v-else>
      <div v-if="mode == 'edit'" class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Type</label>
        </div>
        <select v-model="booking.type_id" class="custom-select" id="inputGroupSelect01">
          <option>Choose...</option>
          <option v-for="type in types" :key="type.id"  :value="type.id">{{type.name}}</option>
        </select>
      </div>
      <p>Check availability in our family room service. Indicate the desired date for your reservation.</p>
      <div class="row">
        <div class="form-group col-6 pr-0">
          <label for="dateCheckin">From</label>
          <input
            type="date"
            class="form-control"
            id="dateCheckin"
            v-model="booking.checkin"
            aria-describedby="emailHelp"
          />
          <small
            id="emailHelp"
            class="form-text text-danger"
          >{{ errors['checkin']?errors['checkin'][0]:'' }}</small>
        </div>
        <div class="form-group col-6 pl-0">
          <label for="dateCheckout">To</label>
          <input
            type="date"
            class="form-control"
            id="dateCheckout"
            v-model="booking.checkout"
            aria-describedby="emailHelp"
          />
          <small
            id="emailHelp"
            class="form-text text-danger"
          >{{ errors['checkout']?errors['checkout'][0]:'' }}</small>
        </div>
      </div>
      <button
        v-if="availability == null"
        class="btn btn-success"
        @click="checkAvailability"
        type="button"
      >Check availability</button>
      <template v-if="availability > 0 || mode == 'edit'">
        <div class="form-group" v-if="availability > 0 || mode == 'edit'">
          <p v-if="availability > 0">
            YES! We have {{ availability }} rooms in this period. Complete this form for save your reservation, or
            <br />
            <button @click="clear" class="btn btn-success">Check other date</button>
          </p>
          <label for="clientName">Your name</label>
          <input
            type="text"
            class="form-control"
            id="clientName"
            v-model="booking.client_name"
            aria-describedby="emailHelp"
          />
          <small
            id="emailHelp"
            class="form-text text-danger"
          >{{ errors['client_name']?errors['client_name'][0]:'' }}</small>
        </div>
        <div v-else>
          <p>Sorry! There are not availability in this date range.</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      types:[]
    }
  },
  props: ['availability', 'reservation', 'booking', 'errors', 'mode'],
  methods:{
    checkAvailability(){
      this.$emit('checkAvailability')
    },
    clear(){
      this.$emit('clear')
    }
  },
  mounted(){
    fetch("api/typesRoom")
      .then(response => response.json())
      .then(
        data =>
          (this.types = data.typesRoom)
      );
  }
}
</script>