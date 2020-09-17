<template>
  <div class="container m-auto pt-5">
    <h2 class="text-center mb-3">Services</h2>
    <p class="display-4 text-center">What are you looking for?</p>
    <div class="card-deck">
      <div class="card" v-for="type in typesRoom" :key="type.id">
        <img :src="type.image" class="card-img-top" :alt="type.name" />
        <div class="card-body">
          <h4 class="card-title">{{type.name}}</h4>
          <p
            class="card-text"
          >This room is perfect if your are looking for {{ type.bed_quantity }} beds.</p>
        </div>
        <div class="card-footer">
          <button @click="openModal(type.id)" class="btn btn-primary btn-warning">Booking</button>
          <small class="text-muted">Price $ 189,00</small>
        </div>
      </div>
    </div>
    <transition name="modal" v-if="showModal">
      <modal-message title="Booking" :showModal.sync="showModal">
        <template slot="content">
          <form-booking mode="create" :availability='availability' :reservation='reservation' :booking='booking' :errors='errors' @checkAvailability='checkAvailability' @clear='clear'></form-booking>
        </template>
        <template slot="actions">
          <button @click="closeModal" class="btn btn-secondary">Close</button>
          <button v-if="!reservation" @click="saveReservation" class="btn btn-warning">Done</button>
        </template>
      </modal-message>
    </transition>
  </div>
</template>
<script>
import ModalMessage from "../ui-elements/Modal";
import FormBooking from "./Reservation"
export default {
  data() {
    return {
      showModal: false,
      reservation: null,
      typesRoom: [],
      availability: null,
      booking: {
        type_id: null,
        client_name: "",
        checkin: null,
        checkout: null
      },
      errors: []
    };
  },
  components: {
    ModalMessage,
    FormBooking
  },
  methods: {
    clear() {
      (this.availability = null), (this.booking.client_name = "");
      this.booking.checkin = null;
      this.booking.checkout = null;
    },
    openModal(id) {
      this.showModal = true;
      this.booking.type_id = id;
    },
    closeModal(id) {
      this.clear();
      this.showModal = false;
      (this.availability = null), (this.booking.type_id = null);
    },
    checkAvailability() {
      fetch("api/room/availability?" + new URLSearchParams(this.booking))
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            this.availability = data.availability;
            this.errors = [];
          } else {
            this.errors = data.errors;
          }
        });
    },
    saveReservation() {
      fetch("api/room/reservation", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(this.booking), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            this.reservation = data.reservation;
            this.errors = [];
          } else {
            this.errors = data.errors;
          }
        });
    }
  },
  mounted() {
    fetch("api/typesRoom")
      .then(response => response.json())
      .then(
        data =>
          (this.typesRoom = data.typesRoom.map(type => ({
            ...type,
            image: `../../../images/room${type.id}.png`
          })))
      );
  }
};
</script>
<style lang="scss">
  .container{
    margin-bottom: 40px !important;
  }
</style>