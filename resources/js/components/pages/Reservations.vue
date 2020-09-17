<template>
  <div class="container m-auto py-5">
    <h2 class="text-center mb-3">Reservations</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Customer</th>
          <th scope="col">Type</th>
          <th scope="col">Checkin</th>
          <th scope="col">Checkout</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="res in reservations" :key="res.id">
          <th scope="row">{{ res.created_at }}</th>
          <td> {{ res.client_name }}</td>
          <td> {{ res.type.name }}</td>
          <td> {{ res.checkin }}</td>
          <td> {{ res.checkout }}</td>
          <td>
            <button @click="edit(res)" class="btn btn-rounded btn-outline-info btn-sm">Edit</button>
            <button @click="remove(res.id)" class="btn btn-rounded btn-outline-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="text-center p-3 w-100" v-if="!reservations.length">No data available</p>
    <transition name="modal" v-if="showModal">
      <modal-message title="Booking" :showModal.sync="showModal">
        <template slot="content">
          <form-booking mode="edit" :availability='availability' :reservation='reservation' :booking='booking' :errors='errors' @checkAvailability='checkAvailability' @clear='clear'></form-booking>
        </template>
        <template slot="actions">
          <button @click="closeModal" class="btn btn-secondary">Close</button>
          <button v-if="!reservation" @click="updateReservation" class="btn btn-warning">Done</button>
        </template>
      </modal-message>
    </transition>
  </div>
</template>
<script>
import ModalMessage from "../ui-elements/Modal";
import FormBooking from "./Reservation"
export default {
  data(){
    return{
      reservations : [],
      showModal: false,
      booking: {},
      reservation: null,
      errors: [],
      availability: null,
    }
  },
  components: {
    ModalMessage,
    FormBooking
  },
  methods:{
    edit(res){
      Object.assign(this.booking,res);
      this.showModal = true;
    },
    clear() {
      (this.availability = null), (this.booking.client_name = "");
      this.booking.checkin = null;
      this.booking.checkout = null;
      this.reservation = null;
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
    closeModal(id) {
      this.clear();
      this.showModal = false;
      (this.availability = null), (this.booking.type_id = null);
    },
    updateReservation() {
      fetch(`api/room/reservation/${this.booking.id}`, {
        method: "PUT", // or 'PUT'
        body: JSON.stringify(this.booking), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            let index = this.reservations.findIndex(reser => reser.id == data.reservation.id);
            Object.assign(this.reservations[index],data.reservation);
            this.reservation = data.reservation;
            this.errors = [];
          } else {
            this.errors = data.errors;
          }
        });
    },
    remove(id){
      fetch(`api/room/reservation/${id}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            let index = this.reservations.findIndex(reser => reser.id == data.reservation.id);
            this.reservations.splice(index,1);
            this.errors = [];
          } else {
            this.errors = data.errors;
          }
        });
    }
  },
  mounted(){
    fetch("api/room/reservation")
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            this.reservations = data.reservations.slice().reverse();
          } else {
            console.log('error', data.error)
          }
        });
  }
}
</script>