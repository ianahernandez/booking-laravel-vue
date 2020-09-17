(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_elements_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-elements/Modal */ "./resources/js/components/ui-elements/Modal.vue");
/* harmony import */ var _Reservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation */ "./resources/js/components/pages/Reservation.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    ModalMessage: _ui_elements_Modal__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormBooking: _Reservation__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    clear: function clear() {
      this.availability = null, this.booking.client_name = "";
      this.booking.checkin = null;
      this.booking.checkout = null;
    },
    openModal: function openModal(id) {
      this.showModal = true;
      this.booking.type_id = id;
    },
    closeModal: function closeModal(id) {
      this.clear();
      this.showModal = false;
      this.availability = null, this.booking.type_id = null;
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
    saveReservation: function saveReservation() {
      var _this2 = this;

      fetch("api/room/reservation", {
        method: "POST",
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
          _this2.reservation = data.reservation;
          _this2.errors = [];
        } else {
          _this2.errors = data.errors;
        }
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    fetch("api/typesRoom").then(function (response) {
      return response.json();
    }).then(function (data) {
      return _this3.typesRoom = data.typesRoom.map(function (type) {
        return _objectSpread(_objectSpread({}, type), {}, {
          image: "../../../images/room".concat(type.id, ".png")
        });
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("h2", { staticClass: "text-center mb-3" }, [_vm._v("Services")]),
      _vm._v(" "),
      _c("p", { staticClass: "display-4 text-center" }, [
        _vm._v("What are you looking for?")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-deck" },
        _vm._l(_vm.typesRoom, function(type) {
          return _c("div", { key: type.id, staticClass: "card" }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: { src: type.image, alt: type.name }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v(_vm._s(type.name))
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-text" }, [
                _vm._v(
                  "This room is perfect if your are looking for " +
                    _vm._s(type.bed_quantity) +
                    " beds."
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-warning",
                  on: {
                    click: function($event) {
                      return _vm.openModal(type.id)
                    }
                  }
                },
                [_vm._v("Booking")]
              ),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v("Price $ 189,00")
              ])
            ])
          ])
        }),
        0
      ),
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
                          mode: "create",
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
                            on: { click: _vm.saveReservation }
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Home.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a9aac016& */ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=a9aac016& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);