(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Reservations.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Reservations.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_elements_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-elements/Modal */ "./resources/js/components/ui-elements/Modal.vue");
/* harmony import */ var _Reservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation */ "./resources/js/components/pages/Reservation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reservations: [],
      showModal: false,
      booking: {},
      reservation: null,
      errors: [],
      availability: null
    };
  },
  components: {
    ModalMessage: _ui_elements_Modal__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormBooking: _Reservation__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    edit: function edit(res) {
      Object.assign(this.booking, res);
      this.showModal = true;
    },
    clear: function clear() {
      this.availability = null, this.booking.client_name = "";
      this.booking.checkin = null;
      this.booking.checkout = null;
      this.reservation = null;
    },
    checkAvailability: function checkAvailability() {
      var _this = this;

      fetch("api/room/availability?" + new URLSearchParams(this.booking)).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.ok) {
          _this.availability = data.availability;
          _this.errors = [];
        } else {
          _this.errors = data.errors;
        }
      });
    },
    closeModal: function closeModal(id) {
      this.clear();
      this.showModal = false;
      this.availability = null, this.booking.type_id = null;
    },
    updateReservation: function updateReservation() {
      var _this2 = this;

      fetch("api/room/reservation/".concat(this.booking.id), {
        method: "PUT",
        // or 'PUT'
        body: JSON.stringify(this.booking),
        // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.ok) {
          var index = _this2.reservations.findIndex(function (reser) {
            return reser.id == data.reservation.id;
          });

          Object.assign(_this2.reservations[index], data.reservation);
          _this2.reservation = data.reservation;
          _this2.errors = [];
        } else {
          _this2.errors = data.errors;
        }
      });
    },
    remove: function remove(id) {
      var _this3 = this;

      fetch("api/room/reservation/".concat(id), {
        method: "DELETE"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.ok) {
          var index = _this3.reservations.findIndex(function (reser) {
            return reser.id == data.reservation.id;
          });

          _this3.reservations.splice(index, 1);

          _this3.errors = [];
        } else {
          _this3.errors = data.errors;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    fetch("api/room/reservation").then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.ok) {
        _this4.reservations = data.reservations.slice().reverse();
      } else {
        console.log('error', data.error);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Reservations.vue?vue&type=template&id=5a9bc186&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Reservations.vue?vue&type=template&id=5a9bc186& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container m-auto pt-5" },
    [
      _c("h2", { staticClass: "text-center mb-3" }, [_vm._v("Reservations")]),
      _vm._v(" "),
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.reservations, function(res) {
            return _c("tr", { key: res.id }, [
              _c("th", { attrs: { scope: "row" } }, [
                _vm._v(_vm._s(res.created_at))
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(res.client_name))]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(res.type.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(res.checkin))]),
              _vm._v(" "),
              _c("td", [_vm._v(" " + _vm._s(res.checkout))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-rounded btn-outline-info btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.edit(res)
                      }
                    }
                  },
                  [_vm._v("Edit")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-rounded btn-outline-danger btn-sm",
                    on: {
                      click: function($event) {
                        return _vm.remove(res.id)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "transition",
            { attrs: { name: "modal" } },
            [
              _c(
                "modal-message",
                {
                  attrs: { title: "Booking", showModal: _vm.showModal },
                  on: {
                    "update:showModal": function($event) {
                      _vm.showModal = $event
                    },
                    "update:show-modal": function($event) {
                      _vm.showModal = $event
                    }
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "content" },
                    [
                      _c("form-booking", {
                        attrs: {
                          mode: "edit",
                          availability: _vm.availability,
                          reservation: _vm.reservation,
                          booking: _vm.booking,
                          errors: _vm.errors
                        },
                        on: {
                          checkAvailability: _vm.checkAvailability,
                          clear: _vm.clear
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "actions" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        on: { click: _vm.closeModal }
                      },
                      [_vm._v("Close")]
                    ),
                    _vm._v(" "),
                    !_vm.reservation
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-warning",
                            on: { click: _vm.updateReservation }
                          },
                          [_vm._v("Done")]
                        )
                      : _vm._e()
                  ])
                ],
                2
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Customer")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Type")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Checkin")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Checkout")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Reservations.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pages/Reservations.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservations_vue_vue_type_template_id_5a9bc186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservations.vue?vue&type=template&id=5a9bc186& */ "./resources/js/components/pages/Reservations.vue?vue&type=template&id=5a9bc186&");
/* harmony import */ var _Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservations.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Reservations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservations_vue_vue_type_template_id_5a9bc186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservations_vue_vue_type_template_id_5a9bc186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Reservations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Reservations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/Reservations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Reservations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Reservations.vue?vue&type=template&id=5a9bc186&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/Reservations.vue?vue&type=template&id=5a9bc186& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_template_id_5a9bc186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservations.vue?vue&type=template&id=5a9bc186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Reservations.vue?vue&type=template&id=5a9bc186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_template_id_5a9bc186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservations_vue_vue_type_template_id_5a9bc186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);