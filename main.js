/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/modules/comments/commentData.js":
/*!*********************************************!*\
  !*** ./src/modules/comments/commentData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var CommentData = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CommentData(username, comment, id) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CommentData);

  this.username = username;
  this.comment = comment;
  this.item_id = id;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentData);

/***/ }),

/***/ "./src/modules/comments/comments-app.js":
/*!**********************************************!*\
  !*** ./src/modules/comments/comments-app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "showCommentModal": () => (/* binding */ showCommentModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_cars_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/cars-api */ "./src/modules/home/cars-api.js");
/* harmony import */ var _commentData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentData */ "./src/modules/comments/commentData.js");
/* harmony import */ var _createComments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createComments */ "./src/modules/comments/createComments.js");





var carApi = new _home_cars_api__WEBPACK_IMPORTED_MODULE_2__["default"]();
var modalContainer = document.querySelector('#modal-container');
var createComment = function createComment(event) {
  event.preventDefault();
  var api = new _createComments__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var comBtn = document.querySelector('.form button');
  var id = Number(comBtn.id.split('-')[2]);
  var usernameInput = document.querySelector('.form .input');
  var commentInput = document.querySelector('#modal-container .modal-items form textarea');
  var username = usernameInput.value;
  var comment = commentInput.value;
  var commentObj = new _commentData__WEBPACK_IMPORTED_MODULE_3__["default"](username, comment, id);
  api.addComment(commentObj);
};
function showCommentModal(_x) {
  return _showCommentModal.apply(this, arguments);
}

function _showCommentModal() {
  _showCommentModal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
    var form1, close;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return carApi.getDataPromise().then(function (data) {
              var id = Number(e.target.parentNode.parentNode.id);

              if (modalContainer.classList.contains('hidden')) {
                modalContainer.classList.add('show');
                modalContainer.classList.remove('hidden');
              }

              modalContainer.innerHTML = "\n    <div\n    class=\"relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\"\n    id=\"modal\"\n  >\n    <div class=\"h-96 img-container\">\n      <img\n        class=\"w-full h-full object-cover\"\n        src=\"".concat(data[id].imgUrl, "\"\n        alt=\"\"\n      />\n      <span id=\"close-modal-btn\" class=\"close\">\n        <i\n          class=\"fas fa-times absolute top-0 right-0 mt-3 mr-3 text-3xl text-white cursor-pointer\"\n        ></i>\n      </span>\n    </div>\n    <h2 class=\"text-center text-xl text-slate-600 py-5 font-bold\">").concat(data[id].make, "</h2>\n    <div class=\"flex justify-between flex-col w-1/2 mx-auto gap-y-5\">\n      <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Model</h3>\n          <span class=\"text-slate-600\">").concat(data[id].model, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Year</h3>\n          <span class=\"text-slate-600\">").concat(data[id].year, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>horsepower</h3>\n          <span class=\"text-slate-600\">").concat(data[id].horsepower, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Price</h3>\n          <span class=\"text-slate-600\">").concat(data[id].price, "</span>\n        </div>\n      </div>\n    </div>\n    <h2 class=\"text-center text-xl py-4 font-bold text-slate-600\">\n      Comments (2)\n    </h2>\n    <ul class=\"flex justify-center flex-col mx-auto items-center py-2\">\n      <li class=\"text-lg\">\n        <span>21/06/2020 </span> -\n        <span class=\"text-slate-600 mx-2\">John Doe : </span>\n        <span> Lorem ipsum dolor sit amet consectetur </span>\n      </li>\n      <li class=\"text-lg\">\n        <span>21/06/2020 </span> -\n        <span class=\"text-slate-600 mx-2\">John Doe : </span>\n        <span> Lorem ipsum dolor sit amet consectetur </span>\n      </li>\n    </ul>\n    <h2 class=\"text-center py-4 text-xl font-bold text-slate-600\">\n      Add Comment\n    </h2>\n    <form class=\"flex justify-center flex-col mx-auto items-center form\" id='comment-form'>\n\n    <input class=\"px-2 w-1/2 py-2 border-gray-400 rounded-lg h-10 focus:outline-none\n      focus:border-violet-600 input\" placeholder=\"Enter your username\" />\n     <textarea\n        class=\"w-1/2 h-32 px-2 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-violet-600 comment\"\n        placeholder=\"Write your comment here\" type=\"text\" \n      ></textarea>\n      \n      <button\n        id=\"comment-button-").concat(id, "\"\n        class=\"comment-button text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg\"\n        type=\"submit\"\n      >\n        Comment\n      </button>\n    </form>\n    \n  </div>\n    ");
            });

          case 2:
            form1 = document.querySelector('.form');
            form1.addEventListener('submit', createComment); // close button

            close = document.querySelector('#modal-container .modal-items .img-container .close');
            close.addEventListener('click', function () {
              modalContainer.classList.add('hidden');
              modalContainer.classList.remove('show');
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _showCommentModal.apply(this, arguments);
}

/***/ }),

/***/ "./src/modules/comments/createComments.js":
/*!************************************************!*\
  !*** ./src/modules/comments/createComments.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _getComment = /*#__PURE__*/new WeakMap();

var _addComment = /*#__PURE__*/new WeakMap();

var Api = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function Api() {
  var _this = this;

  var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Api);

  _classPrivateFieldInitSpec(this, _getComment, {
    writable: true,
    value: function () {
      var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        var url,
            bodyData,
            response,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.commentsEndpoint;
                bodyData = _args.length > 1 ? _args[1] : undefined;
                _context.next = 4;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bodyData)
                });

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _addComment, {
    writable: true,
    value: function () {
      var _value2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var url,
            bodyData,
            response,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _this.commentsEndpoint;
                bodyData = _args2.length > 1 ? _args2[1] : undefined;
                _context2.next = 4;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bodyData)
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function value() {
        return _value2.apply(this, arguments);
      }

      return value;
    }()
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "addComment", function (bodyData) {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addComment).call(_this, _this.commentsEndpoint, bodyData);
  });

  this.projectId = '0fIC503i0qOW3Z58w8Vo';
  this.rootEndpoint = _url;
  this.commentsEndpoint = "".concat(_url).concat(this.projectId, "/comments/");
});



/***/ }),

/***/ "./src/modules/home/car.js":
/*!*********************************!*\
  !*** ./src/modules/home/car.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Car)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var Car = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Car(year, id, horsepower, make, model, price, imgUrl) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Car);

  this.year = year;
  this.id = id;
  this.horsepower = horsepower;
  this.make = make;
  this.model = model;
  this.price = price;
  this.imgUrl = imgUrl;
  this.like = false;
});



/***/ }),

/***/ "./src/modules/home/cars-api.js":
/*!**************************************!*\
  !*** ./src/modules/home/cars-api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarsApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car */ "./src/modules/home/car.js");
/* harmony import */ var _home_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-utils */ "./src/modules/home/home-utils.js");







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }




var _formatCars = /*#__PURE__*/new WeakMap();

var _formatData = /*#__PURE__*/new WeakMap();

var CarsApi = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function CarsApi() {
  var _this = this;

  var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://private-anon-66fbb79774-carsapi1.apiary-mock.com/';

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CarsApi);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getDataPromise", function () {
    return _this.dataPromise;
  });

  _classPrivateFieldInitSpec(this, _formatCars, {
    writable: true,
    value: function value(data) {
      var dataObj = {};
      data.forEach(function (car) {
        var id = "".concat(car.id);
        dataObj[id] = car;
      });
      return dataObj;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getCarEndpointFromId", function (id) {
    return "".concat(_this.allCarsEndpoint, "/").concat(id);
  });

  _classPrivateFieldInitSpec(this, _formatData, {
    writable: true,
    value: function value(data) {
      return data.map(function (obj) {
        var car = new _car__WEBPACK_IMPORTED_MODULE_6__["default"]();
        car.year = obj.year;
        car.id = obj.id;
        car.horsepower = obj.horsepower;
        car.make = obj.make;
        car.model = obj.model;
        car.price = obj.price;
        car.imgUrl = obj.img_url;
        return car;
      });
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getAllCars", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
    var url,
        response,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.allCarsEndpoint;
            _context.next = 3;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            data = data.filter(function (obj) {
              return _this.goodCarsId.includes(obj.id);
            });
            _context.next = 10;
            return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _formatData).call(_this, data);

          case 10:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  this.rootEndpoint = _url;
  this.allCarsEndpoint = "".concat(_url, "cars");
  this.goodCarsId = _home_utils__WEBPACK_IMPORTED_MODULE_7__.goodCarsId;
  this.dataPromise = this.getAllCars().then(function (data) {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _formatCars).call(_this, data);
  });
});



/***/ }),

/***/ "./src/modules/home/home-app.js":
/*!**************************************!*\
  !*** ./src/modules/home/home-app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeApplication": () => (/* binding */ HomeApplication),
/* harmony export */   "getAllCarsCount": () => (/* binding */ getAllCarsCount)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _cars_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cars-api */ "./src/modules/home/cars-api.js");
/* harmony import */ var _home_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-utils */ "./src/modules/home/home-utils.js");
/* harmony import */ var _involvement_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./involvement-api */ "./src/modules/home/involvement-api.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }






var _clearMain = /*#__PURE__*/new WeakMap();

var _createCarElement = /*#__PURE__*/new WeakMap();

var _displayCars = /*#__PURE__*/new WeakMap();

var _updateLikes = /*#__PURE__*/new WeakMap();

var HomeApplication = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeApplication() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeApplication);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "initialize", function () {
    return _this.getANumberOfCars(24).then(function () {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _updateLikes).call(_this);
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getAllCars", function () {
    return _this.carsApi.getAllCars().then(function (data) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _displayCars).call(_this, data);

      return data;
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getANumberOfCars", function (number) {
    return _this.carsApi.getAllCars().then(function (data) {
      var toBeDisplayed = data.slice(0, number);

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _displayCars).call(_this, toBeDisplayed);

      return data;
    });
  });

  _classPrivateFieldInitSpec(this, _clearMain, {
    writable: true,
    value: function value() {
      _this.main.innerHTML = '';
    }
  });

  _classPrivateFieldInitSpec(this, _createCarElement, {
    writable: true,
    value: function value(car) {
      return (0,_home_utils__WEBPACK_IMPORTED_MODULE_5__.carRender)(car.id, car.imgUrl, car.make, car.model);
    }
  });

  _classPrivateFieldInitSpec(this, _displayCars, {
    writable: true,
    value: function value(toBeDisplayed) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _clearMain).call(_this);

      var mainContent = toBeDisplayed.reduce(function (content, car) {
        var carElement = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _createCarElement).call(_this, car);

        return "".concat(content, "\n").concat(carElement);
      }, '');
      _this.main.innerHTML = mainContent;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleHeart", function (e) {
    if (e.currentTarget.classList.contains('heart')) {
      var heartButton = e.currentTarget;
      var heartCount = heartButton.nextSibling.nextSibling.firstChild;
      var id = heartButton.parentNode.parentNode.parentNode.id;
      var data = {};
      data.item_id = Number(id);

      if (heartButton.className === _home_utils__WEBPACK_IMPORTED_MODULE_5__.likeClass) {
        heartButton.className = _home_utils__WEBPACK_IMPORTED_MODULE_5__.unlikeClass;
        heartCount.textContent = +heartCount.textContent - 1;
      } else {
        heartButton.className = _home_utils__WEBPACK_IMPORTED_MODULE_5__.likeClass;
        heartCount.textContent = +heartCount.textContent + 1;

        _this.involvementApi.setLikesData(data);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _updateLikes, {
    writable: true,
    value: function value() {
      _this.involvementApi.getLikesData().then(function (data) {
        var likesElements = document.querySelectorAll('.likes');
        likesElements.forEach(function (like) {
          var id = like.parentNode.parentNode.parentNode.parentNode.id;
          var numberOfLikes = data.find(function (e) {
            return Number(e.item_id) === Number(id);
          });

          if (numberOfLikes === undefined) {
            numberOfLikes = 0;
          } else {
            numberOfLikes = numberOfLikes.likes;
          }

          like.textContent = numberOfLikes;
        });
      });
    }
  });

  this.logoImg = document.querySelector('.logo');
  this.logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_7__;
  this.carsApi = new _cars_api__WEBPACK_IMPORTED_MODULE_4__["default"](); // DOM elements

  this.main = document.querySelector('main');
  this.involvementApi = new _involvement_api__WEBPACK_IMPORTED_MODULE_6__["default"]();
});
function getAllCarsCount() {
  var main = document.querySelector('main');
  return main.childElementCount;
}

/***/ }),

/***/ "./src/modules/home/home-utils.js":
/*!****************************************!*\
  !*** ./src/modules/home/home-utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likeClass": () => (/* binding */ likeClass),
/* harmony export */   "unlikeClass": () => (/* binding */ unlikeClass),
/* harmony export */   "carRender": () => (/* binding */ carRender),
/* harmony export */   "fileExists": () => (/* binding */ fileExists),
/* harmony export */   "goodCarsId": () => (/* binding */ goodCarsId)
/* harmony export */ });
var likeClass = 'heart fas fa-heart';
var unlikeClass = 'heart far fa-heart';
var carRender = function carRender(id, imgUrl, make, model) {
  var likes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return "<div\n      class=\"car-card flex flex-col gap-2 border-4 rounded-md border-violet-600\" id=\"".concat(id, "\">\n      <div class=\"car-img h-50 object-cover\">\n        <img class=\"w-full\"\n          src=\"").concat(imgUrl, "\"\n          alt=\"").concat(make.toUpperCase(), " ").concat(model.toUpperCase(), "\">\n      </div>\n      <div class=\"car-info flex justify-between p-2 mt-auto\">\n        <h2>").concat(make.toUpperCase(), " ").concat(model.toUpperCase(), "</h2>\n        <div class=\"flex flex-col items-center text-red-600\">\n          <i class=\"").concat(unlikeClass, "\"></i>\n          <span class=\"text-black\"><span class=\"likes\">").concat(likes, "</span> <span>likes</span></span>\n        </div>\n      </div>\n      <div class=\"car-buttons flex flex-col gap-3 p-2 \">\n        <button id=\"model\" class=\"comment-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500\"\n          type=\"button\">Comment</button>\n        <button\n          class=\"reservation-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500\"\n          type=\"button\">Reservation</button>\n      </div>\n    </div>");
};
function fileExists(imageUrl) {
  var http = new XMLHttpRequest();
  http.open('HEAD', imageUrl, false);
  http.send();
  return Number(http.status) !== 404;
}
var goodCarsId = [1, 5, 7, 8, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 29, 31, 32, 34, 35, 39, 41, 43, 48, 49, 50, 51, 53, 55, 56, 57, 58, 60, 62, 63, 64, 65, 68, 69, 73, 75, 76, 79, 83, 84, 85, 86, 87, 88, 90, 95, 98, 100, 101, 102, 104, 105, 106, 107, 108, 109, 110, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 126, 128, 129, 130, 133, 134, 139, 141, 143, 144, 145, 146, 147, 148, 149, 150, 151, 154, 155, 157, 158, 161, 162, 163, 164, 165, 166, 168, 169, 171, 172, 178, 179, 180, 181, 183, 184, 185, 188, 189, 192, 194, 196, 197, 198, 199, 200, 203, 205, 207, 214, 215, 216, 217, 219, 230, 240, 244, 245, 246, 247, 250, 251, 252, 254, 255, 259, 260, 261, 262, 263, 271, 273, 274, 277, 278, 281, 282, 283, 284, 285, 286, 288, 290, 292, 294, 295, 296, 298, 300, 301, 302, 303, 304, 305, 306, 307, 313, 315, 318, 319, 322, 323, 324, 325, 326, 327, 329, 330, 332, 333, 335, 336, 337, 338, 345, 346, 347, 348, 350, 351, 353, 354, 355, 357, 359, 361, 362, 366, 369, 371];

/***/ }),

/***/ "./src/modules/home/involvement-api.js":
/*!*********************************************!*\
  !*** ./src/modules/home/involvement-api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _getLikes = /*#__PURE__*/new WeakMap();

var _addLike = /*#__PURE__*/new WeakMap();

var InvolvementApi = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function InvolvementApi() {
  var _this = this;

  var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InvolvementApi);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getLikesData", function () {
    return _this.likesData;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setLikesData", function (bodyData) {
    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addLike).call(_this, _this.likesEndpoint, bodyData);

    _this.likesData = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _getLikes).call(_this);
    return _this.likesData;
  });

  _classPrivateFieldInitSpec(this, _getLikes, {
    writable: true,
    value: function () {
      var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        var url,
            response,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.likesEndpoint;
                _context.next = 3;
                return fetch(url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _addLike, {
    writable: true,
    value: function () {
      var _value2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var url,
            bodyData,
            response,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _this.likesEndpoint;
                bodyData = _args2.length > 1 ? _args2[1] : undefined;
                _context2.next = 4;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bodyData)
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function value() {
        return _value2.apply(this, arguments);
      }

      return value;
    }()
  });

  this.projectId = '0fIC503i0qOW3Z58w8Vo';
  this.rootEndpoint = _url;
  this.likesEndpoint = "".concat(_url).concat(this.projectId, "/likes/");
  this.likesData = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _getLikes).call(this);
});



/***/ }),

/***/ "./src/modules/reservations/involvementAPI.js":
/*!****************************************************!*\
  !*** ./src/modules/reservations/involvementAPI.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setReservedToAPI": () => (/* binding */ setReservedToAPI),
/* harmony export */   "getDataFromInvolvementAPI": () => (/* binding */ getDataFromInvolvementAPI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reservation_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-counter */ "./src/modules/reservations/reservation-counter.js");




var setReservedToAPI = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dataBody) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataBody)
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setReservedToAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getDataFromInvolvementAPI = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
    var url, displayReserves, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2C4jJFKraIvaxjrsdqH5/reservations?item_id=".concat(id);
            displayReserves = document.querySelector('.reserved-cars');
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(url);

          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json().then(function (data) {
              var counter = (0,_reservation_counter__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
              var counterContainer = document.querySelector('#counter-span');
              counterContainer.innerHTML = "(".concat(counter, ")");
              displayReserves.innerHTML = data.reduce(function (content, comment) {
                var commentElement = "<li>".concat(comment.date_start, " - ").concat(comment.date_end, " by ").concat(comment.username, "</li>");
                content += commentElement;
                return content;
              }, '');
            });

          case 8:
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            throw new Error('Fetch Data Failed');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function getDataFromInvolvementAPI(_x2) {
    return _ref2.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/modules/reservations/reservation-app.js":
/*!*****************************************************!*\
  !*** ./src/modules/reservations/reservation-app.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showReservationModal)
/* harmony export */ });
/* harmony import */ var _home_cars_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/cars-api */ "./src/modules/home/cars-api.js");
/* harmony import */ var _involvementAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI */ "./src/modules/reservations/involvementAPI.js");


var carApi = new _home_cars_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
var reservationsPopUp = document.createElement('div');
var body = document.querySelector('body');

var clearInputs = function clearInputs() {
  var userNameInput = document.querySelector('#userNameInput');
  var startDateInput = document.querySelector('#startDateInput');
  var endDateInput = document.querySelector('#endDateInput');
  userNameInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
};

var saveReservationToApi = function saveReservationToApi(e) {
  var id = e.target.id.split('-').at(-1);
  var userNameInput = document.querySelector('#userNameInput');
  var startDateInput = document.querySelector('#startDateInput');
  var endDateInput = document.querySelector('#endDateInput');
  var dataBody = {
    item_id: id,
    username: userNameInput.value,
    date_start: startDateInput.value,
    date_end: endDateInput.value
  };
  (0,_involvementAPI__WEBPACK_IMPORTED_MODULE_1__.setReservedToAPI)(dataBody).then(function () {
    clearInputs();
    (0,_involvementAPI__WEBPACK_IMPORTED_MODULE_1__.getDataFromInvolvementAPI)(id);
  });
};

function showReservationModal(e) {
  var id = Number(e.target.parentNode.parentNode.id);
  carApi.getDataPromise().then(function (data) {
    reservationsPopUp.classList.add('reservation-container');
    reservationsPopUp.id = 'pop-up';
    reservationsPopUp.hidden = true;
    reservationsPopUp.style.display = 'block';
    var car = data[id];
    reservationsPopUp.innerHTML = "\n    <div class=\"reservation-content relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\" id=\"".concat(id, "\">\n\n    <div class='flex relative justify-between'>\n     <img class=\"flex-1 bg-contain w-78\" src=").concat(car.imgUrl, ">\n     <button class='close absolute top-2 right-2 text-2xl rounded-full px-2 border-violet-700 hover:border-red-500 hover:text-red-500 border-4 bg-white'> X </button>\n    </div>\n    \n    <h2 class='text-center text-xl text-slate-600 py-5 font-bold'>").concat(car.make.toUpperCase(), "</h2>\n\n    <div class=\"flex justify-between items-center flex-col w-1/2 mx-auto gap-y-5\">\n    <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='model'>Model: </h3>\n         <span class=\"text-slate-600\">").concat(car.model.toUpperCase(), "</span>\n      </div>\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='year'>Year:</h3>\n         <span class=\"text-slate-600\"> ").concat(car.year, "</span>\n      </div>\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='horsepower'>Horsepower:</h3>\n         <span class=\"text-slate-600\"> ").concat(car.horsepower, "</span>\n     </div>\n     <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='price'>Price: </h3>\n         <span class=\"text-slate-600\"> ").concat(car.price, "</span>\n     </div>\n     </div>\n    <div class=\"reserved-cars-container ml-3\">\n     <h2 class= \"reserved-cars-title text-center text-xl py-4 font-bold text-slate-600\"> Reservations <span id=\"counter-span\"></span></h2>\n     <ul class=\"reserved-cars flex justify-center flex-col mx-auto items-center py-2\">\n     </ul>\n    </div>\n    <div class='book-cars w-full max-w-xs ml-3'>\n    <h2 class='book-cars-title text-center py-4 text-xl font-bold text-slate-600'> Add a reservation </h2>\n\n    <form class='form flex justify-center flex-col mx-auto items-center'> \n\n          <input class=\"appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6\" id=\"userNameInput\" type=\"text\" placeholder=\"name\">\n\n          <input class='start-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id=\"startDateInput\" type=\"date\" placeholder='start-date'>\n\n          <input class='end-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id=\"endDateInput\" type=\"date\" placeholder='end-date'>\n\n          <button class='reserve-car-btn center text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg' type='button' id='reserve-button-").concat(id, "'> Reserve </button>\n        </form>\n    </div>\n    </div>   \n    ");
    body.appendChild(reservationsPopUp);
    var displayReserves = document.querySelector('.reserved-cars');
    (0,_involvementAPI__WEBPACK_IMPORTED_MODULE_1__.getDataFromInvolvementAPI)(id)["catch"](function () {
      displayReserves.textContent = '';
    });
    var reserveCarBtn = document.querySelector('form.form .reserve-car-btn');
    reserveCarBtn.addEventListener('click', saveReservationToApi);
    var closeBtn = document.querySelector('#pop-up .close');
    closeBtn.addEventListener('click', function () {
      body.removeChild(reservationsPopUp);
      reservationsPopUp.style.display = 'none';
    });
  });
}

/***/ }),

/***/ "./src/modules/reservations/reservation-counter.js":
/*!*********************************************************!*\
  !*** ./src/modules/reservations/reservation-counter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reservationCounter = function reservationCounter(reservation) {
  if (reservation.length) {
    return reservation.length;
  }

  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCounter);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb8ab73d7cdbb5743aef.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home/home-app */ "./src/modules/home/home-app.js");
/* harmony import */ var _modules_comments_comments_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments/comments-app */ "./src/modules/comments/comments-app.js");
/* harmony import */ var _modules_reservations_reservation_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservations/reservation-app */ "./src/modules/reservations/reservation-app.js");




var homeApp = new _modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__.HomeApplication();

function registerHomeEvents() {
  var likesButtons = document.querySelectorAll('.heart');
  var allCarsCount = document.querySelector('.cars-nav-element');
  allCarsCount.textContent = (0,_modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__.getAllCarsCount)();
  likesButtons.forEach(function (likeButton) {
    return likeButton.addEventListener('click', homeApp.toggleHeart);
  });
  var commentButtons = document.querySelectorAll('.car-buttons > .comment-button');
  commentButtons.forEach(function (btn) {
    return btn.addEventListener('click', _modules_comments_comments_app__WEBPACK_IMPORTED_MODULE_2__.showCommentModal);
  });
  var reservationButtons = document.querySelectorAll('.reservation-button');
  reservationButtons.forEach(function (btn) {
    return btn.addEventListener('click', _modules_reservations_reservation_app__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
}

homeApp.initialize().then(function () {
  registerHomeEvents();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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WSxHQUFHNUksUUFBUSxDQUFDQyxhQUFULENBQ25CLG1CQURtQixDQUFyQjtBQUlBMkksRUFBQUEsWUFBWSxDQUFDeEQsV0FBYixHQUEyQlksdUVBQWUsRUFBMUM7QUFFQTJDLEVBQUFBLFlBQVksQ0FBQ3RGLE9BQWIsQ0FBcUIsVUFBQ3dGLFVBQUQ7QUFBQSxXQUFnQkEsVUFBVSxDQUFDNUcsZ0JBQVgsQ0FDbkMsT0FEbUMsRUFFbkN3RyxPQUFPLENBQUNLLFdBRjJCLENBQWhCO0FBQUEsR0FBckI7QUFLQSxNQUFNQyxjQUFjLEdBQUcvSSxRQUFRLENBQUN5RixnQkFBVCxDQUNyQixnQ0FEcUIsQ0FBdkI7QUFJQXNELEVBQUFBLGNBQWMsQ0FBQzFGLE9BQWYsQ0FBdUIsVUFBQzJGLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUMvRyxnQkFBSixDQUFxQixPQUFyQixFQUE4Qm5CLDRFQUE5QixDQUFUO0FBQUEsR0FBdkI7QUFFQSxNQUFNbUksa0JBQWtCLEdBQUdqSixRQUFRLENBQUN5RixnQkFBVCxDQUN6QixxQkFEeUIsQ0FBM0I7QUFJQXdELEVBQUFBLGtCQUFrQixDQUFDNUYsT0FBbkIsQ0FBMkIsVUFBQzJGLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUMvRyxnQkFBSixDQUFxQixPQUFyQixFQUE4QjhGLDZFQUE5QixDQUFUO0FBQUEsR0FBM0I7QUFDRDs7QUFFRFUsT0FBTyxDQUFDUyxVQUFSLEdBQXFCakksSUFBckIsQ0FBMEIsWUFBTTtBQUM5QnlILEVBQUFBLGtCQUFrQjtBQUNuQixDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnREYXRhLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY29tbWVudHMtYXBwLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY3JlYXRlQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2Nhci5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWUvY2Fycy1hcGkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2hvbWUtYXBwLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZS9ob21lLXV0aWxzLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZS9pbnZvbHZlbWVudC1hcGkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb24tYXBwLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9uLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzP2ZlOWUiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiY2xhc3MgQ29tbWVudERhdGEge1xuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgY29tbWVudCwgaWQpIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcbiAgICB0aGlzLml0ZW1faWQgPSBpZDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudERhdGE7XG4iLCJpbXBvcnQgQ2Fyc0FwaSBmcm9tICcuLi9ob21lL2NhcnMtYXBpJztcbmltcG9ydCBDb21tZW50RGF0YSBmcm9tICcuL2NvbW1lbnREYXRhJztcbmltcG9ydCBBcGkgZnJvbSAnLi9jcmVhdGVDb21tZW50cyc7XG5cbmNvbnN0IGNhckFwaSA9IG5ldyBDYXJzQXBpKCk7XG5cbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNtb2RhbC1jb250YWluZXInLFxuKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbW1lbnQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuICBjb25zdCBjb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybSBidXR0b24nKTtcbiAgY29uc3QgaWQgPSBOdW1iZXIoY29tQnRuLmlkLnNwbGl0KCctJylbMl0pO1xuICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0gLmlucHV0Jyk7XG4gIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNtb2RhbC1jb250YWluZXIgLm1vZGFsLWl0ZW1zIGZvcm0gdGV4dGFyZWEnLFxuICApO1xuXG4gIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRJbnB1dC52YWx1ZTtcbiAgY29uc3QgY29tbWVudE9iaiA9IG5ldyBDb21tZW50RGF0YSh1c2VybmFtZSwgY29tbWVudCwgaWQpO1xuXG4gIGFwaS5hZGRDb21tZW50KGNvbW1lbnRPYmopO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dDb21tZW50TW9kYWwoZSkge1xuICBhd2FpdCBjYXJBcGkuZ2V0RGF0YVByb21pc2UoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICBpZiAobW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIGgtYXV0byBtb2RhbC1pdGVtcyBtLWF1dG8gYmctd2hpdGUgYm9yZGVyLXZpb2xldC02MDAgYm9yZGVyLXNvbGlkIGJvcmRlci00XCJcbiAgICBpZD1cIm1vZGFsXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJoLTk2IGltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz1cIiR7ZGF0YVtpZF0uaW1nVXJsfVwiXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gaWQ9XCJjbG9zZS1tb2RhbC1idG5cIiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3M9XCJmYXMgZmEtdGltZXMgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtdC0zIG1yLTMgdGV4dC0zeGwgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC14bCB0ZXh0LXNsYXRlLTYwMCBweS01IGZvbnQtYm9sZFwiPiR7ZGF0YVtpZF0ubWFrZX08L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LWNvbCB3LTEvMiBteC1hdXRvIGdhcC15LTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXgtYXV0byBmbGV4LXdyYXAgZ2FwLXktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICA8aDM+TW9kZWw8L2gzPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4ke2RhdGFbaWRdLm1vZGVsfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgIDxoMz5ZZWFyPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtkYXRhW2lkXS55ZWFyfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgIDxoMz5ob3JzZXBvd2VyPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtkYXRhW2lkXS5ob3JzZXBvd2VyfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgIDxoMz5QcmljZTwvaDM+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiR7ZGF0YVtpZF0ucHJpY2V9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQteGwgcHktNCBmb250LWJvbGQgdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgIENvbW1lbnRzICgyKVxuICAgIDwvaDI+XG4gICAgPHVsIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteC1hdXRvIGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgICA8bGkgY2xhc3M9XCJ0ZXh0LWxnXCI+XG4gICAgICAgIDxzcGFuPjIxLzA2LzIwMjAgPC9zcGFuPiAtXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDAgbXgtMlwiPkpvaG4gRG9lIDogPC9zcGFuPlxuICAgICAgICA8c3Bhbj4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgPC9zcGFuPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzcz1cInRleHQtbGdcIj5cbiAgICAgICAgPHNwYW4+MjEvMDYvMjAyMCA8L3NwYW4+IC1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMCBteC0yXCI+Sm9obiBEb2UgOiA8L3NwYW4+XG4gICAgICAgIDxzcGFuPiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciA8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktNCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTYwMFwiPlxuICAgICAgQWRkIENvbW1lbnRcbiAgICA8L2gyPlxuICAgIDxmb3JtIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteC1hdXRvIGl0ZW1zLWNlbnRlciBmb3JtXCIgaWQ9J2NvbW1lbnQtZm9ybSc+XG5cbiAgICA8aW5wdXQgY2xhc3M9XCJweC0yIHctMS8yIHB5LTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgaC0xMCBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgIGZvY3VzOmJvcmRlci12aW9sZXQtNjAwIGlucHV0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCIgLz5cbiAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzPVwidy0xLzIgaC0zMiBweC0yIHB5LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci12aW9sZXQtNjAwIGNvbW1lbnRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgY29tbWVudCBoZXJlXCIgdHlwZT1cInRleHRcIiBcbiAgICAgID48L3RleHRhcmVhPlxuICAgICAgXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiY29tbWVudC1idXR0b24tJHtpZH1cIlxuICAgICAgICBjbGFzcz1cImNvbW1lbnQtYnV0dG9uIHRleHQtbGcgcHgtMiB3LTQwIG15LTUgaCBweS0xIG14LWF1dG8gYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTUwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICA+XG4gICAgICAgIENvbW1lbnRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBcbiAgPC9kaXY+XG4gICAgYDtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICBmb3JtMS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjcmVhdGVDb21tZW50KTtcblxuICAvLyBjbG9zZSBidXR0b25cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjbW9kYWwtY29udGFpbmVyIC5tb2RhbC1pdGVtcyAuaW1nLWNvbnRhaW5lciAuY2xvc2UnLFxuICApO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLycsXG4gICkge1xuICAgIHRoaXMucHJvamVjdElkID0gJzBmSUM1MDNpMHFPVzNaNTh3OFZvJztcbiAgICB0aGlzLnJvb3RFbmRwb2ludCA9IHVybDtcbiAgICB0aGlzLmNvbW1lbnRzRW5kcG9pbnQgPSBgJHt1cmx9JHt0aGlzLnByb2plY3RJZH0vY29tbWVudHMvYDtcbiAgfVxuXG4gICNnZXRDb21tZW50ID0gYXN5bmMgKFxuICAgIHVybCA9IHRoaXMuY29tbWVudHNFbmRwb2ludCxcbiAgICBib2R5RGF0YSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlEYXRhKSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH07XG5cbiAgI2FkZENvbW1lbnQgPSBhc3luYyAoXG4gICAgdXJsID0gdGhpcy5jb21tZW50c0VuZHBvaW50LFxuICAgIGJvZHlEYXRhLFxuICApID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfTtcblxuICBhZGRDb21tZW50ID0gKGJvZHlEYXRhKSA9PiB0aGlzLiNhZGRDb21tZW50KHRoaXMuY29tbWVudHNFbmRwb2ludCwgYm9keURhdGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgeWVhcixcbiAgICBpZCxcbiAgICBob3JzZXBvd2VyLFxuICAgIG1ha2UsXG4gICAgbW9kZWwsXG4gICAgcHJpY2UsXG4gICAgaW1nVXJsLFxuICApIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmhvcnNlcG93ZXIgPSBob3JzZXBvd2VyO1xuICAgIHRoaXMubWFrZSA9IG1ha2U7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmltZ1VybCA9IGltZ1VybDtcbiAgICB0aGlzLmxpa2UgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IENhciBmcm9tICcuL2Nhcic7XG5pbXBvcnQgeyBnb29kQ2Fyc0lkIH0gZnJvbSAnLi9ob21lLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyc0FwaSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybCA9ICdodHRwczovL3ByaXZhdGUtYW5vbi02NmZiYjc5Nzc0LWNhcnNhcGkxLmFwaWFyeS1tb2NrLmNvbS8nLFxuICApIHtcbiAgICB0aGlzLnJvb3RFbmRwb2ludCA9IHVybDtcbiAgICB0aGlzLmFsbENhcnNFbmRwb2ludCA9IGAke3VybH1jYXJzYDtcbiAgICB0aGlzLmdvb2RDYXJzSWQgPSBnb29kQ2Fyc0lkO1xuICAgIHRoaXMuZGF0YVByb21pc2UgPSB0aGlzLmdldEFsbENhcnMoKS50aGVuKChkYXRhKSA9PiB0aGlzLiNmb3JtYXRDYXJzKGRhdGEpKTtcbiAgfVxuXG4gIGdldERhdGFQcm9taXNlID0gKCkgPT4gdGhpcy5kYXRhUHJvbWlzZTtcblxuICAjZm9ybWF0Q2FycyA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZGF0YU9iaiA9IHt9O1xuICAgIGRhdGEuZm9yRWFjaCgoY2FyKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGAke2Nhci5pZH1gO1xuICAgICAgZGF0YU9ialtpZF0gPSBjYXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YU9iajtcbiAgfTtcblxuICBnZXRDYXJFbmRwb2ludEZyb21JZCA9IChpZCkgPT4gYCR7dGhpcy5hbGxDYXJzRW5kcG9pbnR9LyR7aWR9YDtcblxuICAjZm9ybWF0RGF0YSA9IChkYXRhKSA9PiBkYXRhLm1hcCgob2JqKSA9PiB7XG4gICAgY29uc3QgY2FyID0gbmV3IENhcigpO1xuICAgIGNhci55ZWFyID0gb2JqLnllYXI7XG4gICAgY2FyLmlkID0gb2JqLmlkO1xuICAgIGNhci5ob3JzZXBvd2VyID0gb2JqLmhvcnNlcG93ZXI7XG4gICAgY2FyLm1ha2UgPSBvYmoubWFrZTtcbiAgICBjYXIubW9kZWwgPSBvYmoubW9kZWw7XG4gICAgY2FyLnByaWNlID0gb2JqLnByaWNlO1xuICAgIGNhci5pbWdVcmwgPSBvYmouaW1nX3VybDtcbiAgICByZXR1cm4gY2FyO1xuICB9KTtcblxuICBnZXRBbGxDYXJzID0gYXN5bmMgKHVybCA9IHRoaXMuYWxsQ2Fyc0VuZHBvaW50KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBkYXRhID0gZGF0YS5maWx0ZXIoKG9iaikgPT4gdGhpcy5nb29kQ2Fyc0lkLmluY2x1ZGVzKG9iai5pZCkpO1xuXG4gICAgZGF0YSA9IGF3YWl0IHRoaXMuI2Zvcm1hdERhdGEoZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcbn1cbiIsImltcG9ydCBDYXJzQXBpIGZyb20gJy4vY2Fycy1hcGknO1xuaW1wb3J0IHtcbiAgY2FyUmVuZGVyLFxuICBsaWtlQ2xhc3MsXG4gIHVubGlrZUNsYXNzLFxufSBmcm9tICcuL2hvbWUtdXRpbHMnO1xuaW1wb3J0IEludm9sdmVtZW50QXBpIGZyb20gJy4vaW52b2x2ZW1lbnQtYXBpJztcbmltcG9ydCBMb2dvIGZyb20gJy4uLy4uL2ltYWdlcy9sb2dvLnBuZyc7XG5cbmV4cG9ydCBjbGFzcyBIb21lQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvZ29JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuICAgIHRoaXMubG9nb0ltZy5zcmMgPSBMb2dvO1xuICAgIHRoaXMuY2Fyc0FwaSA9IG5ldyBDYXJzQXBpKCk7XG5cbiAgICAvLyBET00gZWxlbWVudHNcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICB0aGlzLmludm9sdmVtZW50QXBpID0gbmV3IEludm9sdmVtZW50QXBpKCk7XG4gIH1cblxuICBpbml0aWFsaXplID0gKCkgPT5cbiAgICB0aGlzLmdldEFOdW1iZXJPZkNhcnMoMjQpLnRoZW4oKCkgPT5cbiAgICAgIHRoaXMuI3VwZGF0ZUxpa2VzKCksXG4gICAgKTtcblxuICBnZXRBbGxDYXJzID0gKCkgPT5cbiAgICB0aGlzLmNhcnNBcGkuZ2V0QWxsQ2FycygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuI2Rpc3BsYXlDYXJzKGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG5cbiAgZ2V0QU51bWJlck9mQ2FycyA9IChudW1iZXIpID0+XG4gICAgdGhpcy5jYXJzQXBpLmdldEFsbENhcnMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCB0b0JlRGlzcGxheWVkID0gZGF0YS5zbGljZSgwLCBudW1iZXIpO1xuXG4gICAgICB0aGlzLiNkaXNwbGF5Q2Fycyh0b0JlRGlzcGxheWVkKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG5cbiAgI2NsZWFyTWFpbiA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgI2NyZWF0ZUNhckVsZW1lbnQgPSAoY2FyKSA9PlxuICAgIGNhclJlbmRlcihjYXIuaWQsIGNhci5pbWdVcmwsIGNhci5tYWtlLCBjYXIubW9kZWwpO1xuXG4gICNkaXNwbGF5Q2FycyA9ICh0b0JlRGlzcGxheWVkKSA9PiB7XG4gICAgdGhpcy4jY2xlYXJNYWluKCk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSB0b0JlRGlzcGxheWVkLnJlZHVjZShcbiAgICAgIChjb250ZW50LCBjYXIpID0+IHtcbiAgICAgICAgY29uc3QgY2FyRWxlbWVudCA9IHRoaXMuI2NyZWF0ZUNhckVsZW1lbnQoY2FyKTtcbiAgICAgICAgcmV0dXJuIGAke2NvbnRlbnR9XFxuJHtjYXJFbGVtZW50fWA7XG4gICAgICB9LFxuICAgICAgJycsXG4gICAgKTtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gbWFpbkNvbnRlbnQ7XG4gIH07XG5cbiAgdG9nZ2xlSGVhcnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFydCcpKSB7XG4gICAgICBjb25zdCBoZWFydEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGhlYXJ0Q291bnQgPVxuICAgICAgICBoZWFydEJ1dHRvbi5uZXh0U2libGluZy5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgICAgY29uc3QgeyBpZCB9ID1cbiAgICAgICAgaGVhcnRCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICBkYXRhLml0ZW1faWQgPSBOdW1iZXIoaWQpO1xuXG4gICAgICBpZiAoaGVhcnRCdXR0b24uY2xhc3NOYW1lID09PSBsaWtlQ2xhc3MpIHtcbiAgICAgICAgaGVhcnRCdXR0b24uY2xhc3NOYW1lID0gdW5saWtlQ2xhc3M7XG4gICAgICAgIGhlYXJ0Q291bnQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICtoZWFydENvdW50LnRleHRDb250ZW50IC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYXJ0QnV0dG9uLmNsYXNzTmFtZSA9IGxpa2VDbGFzcztcbiAgICAgICAgaGVhcnRDb3VudC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgK2hlYXJ0Q291bnQudGV4dENvbnRlbnQgKyAxO1xuICAgICAgICB0aGlzLmludm9sdmVtZW50QXBpLnNldExpa2VzRGF0YShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgI3VwZGF0ZUxpa2VzID0gKCkgPT4ge1xuICAgIHRoaXMuaW52b2x2ZW1lbnRBcGkuZ2V0TGlrZXNEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGlrZXNFbGVtZW50cyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuICAgICAgbGlrZXNFbGVtZW50cy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9XG4gICAgICAgICAgbGlrZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgbnVtYmVyT2ZMaWtlcyA9IGRhdGEuZmluZChcbiAgICAgICAgICAoZSkgPT4gTnVtYmVyKGUuaXRlbV9pZCkgPT09IE51bWJlcihpZCksXG4gICAgICAgICk7XG4gICAgICAgIGlmIChudW1iZXJPZkxpa2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBudW1iZXJPZkxpa2VzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1iZXJPZkxpa2VzID0gbnVtYmVyT2ZMaWtlcy5saWtlcztcbiAgICAgICAgfVxuICAgICAgICBsaWtlLnRleHRDb250ZW50ID0gbnVtYmVyT2ZMaWtlcztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2Fyc0NvdW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICByZXR1cm4gbWFpbi5jaGlsZEVsZW1lbnRDb3VudDtcbn1cbiIsImV4cG9ydCBjb25zdCBsaWtlQ2xhc3MgPSAnaGVhcnQgZmFzIGZhLWhlYXJ0JztcbmV4cG9ydCBjb25zdCB1bmxpa2VDbGFzcyA9ICdoZWFydCBmYXIgZmEtaGVhcnQnO1xuZXhwb3J0IGNvbnN0IGNhclJlbmRlciA9IChcbiAgaWQsXG4gIGltZ1VybCxcbiAgbWFrZSxcbiAgbW9kZWwsXG4gIGxpa2VzID0gMCxcbikgPT4gYDxkaXZcbiAgICAgIGNsYXNzPVwiY2FyLWNhcmQgZmxleCBmbGV4LWNvbCBnYXAtMiBib3JkZXItNCByb3VuZGVkLW1kIGJvcmRlci12aW9sZXQtNjAwXCIgaWQ9XCIke2lkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhci1pbWcgaC01MCBvYmplY3QtY292ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInctZnVsbFwiXG4gICAgICAgICAgc3JjPVwiJHtpbWdVcmx9XCJcbiAgICAgICAgICBhbHQ9XCIke21ha2UudG9VcHBlckNhc2UoKX0gJHttb2RlbC50b1VwcGVyQ2FzZSgpfVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyLWluZm8gZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIG10LWF1dG9cIj5cbiAgICAgICAgPGgyPiR7bWFrZS50b1VwcGVyQ2FzZSgpfSAke21vZGVsLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcmVkLTYwMFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiJHt1bmxpa2VDbGFzc31cIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrXCI+PHNwYW4gY2xhc3M9XCJsaWtlc1wiPiR7bGlrZXN9PC9zcGFuPiA8c3Bhbj5saWtlczwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyLWJ1dHRvbnMgZmxleCBmbGV4LWNvbCBnYXAtMyBwLTIgXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJtb2RlbFwiIGNsYXNzPVwiY29tbWVudC1idXR0b24gcHgtMiBweS0xIGJvcmRlci0yIGhvdmVyOmJvcmRlci0yIGhvdmVyOnNoYWRvdy1zbSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS01MDBcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInJlc2VydmF0aW9uLWJ1dHRvbiBweC0yIHB5LTEgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTUwMFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUV4aXN0cyhpbWFnZVVybCkge1xuICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaHR0cC5vcGVuKCdIRUFEJywgaW1hZ2VVcmwsIGZhbHNlKTtcbiAgaHR0cC5zZW5kKCk7XG5cbiAgcmV0dXJuIE51bWJlcihodHRwLnN0YXR1cykgIT09IDQwNDtcbn1cblxuZXhwb3J0IGNvbnN0IGdvb2RDYXJzSWQgPSBbXG4gIDEsIDUsIDcsIDgsIDExLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyNSxcbiAgMjYsIDI5LCAzMSwgMzIsIDM0LCAzNSwgMzksIDQxLCA0MywgNDgsIDQ5LCA1MCwgNTEsIDUzLFxuICA1NSwgNTYsIDU3LCA1OCwgNjAsIDYyLCA2MywgNjQsIDY1LCA2OCwgNjksIDczLCA3NSwgNzYsXG4gIDc5LCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA5MCwgOTUsIDk4LCAxMDAsIDEwMSwgMTAyLFxuICAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMiwgMTEzLCAxMTQsIDExNSxcbiAgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjIsIDEyMywgMTI0LCAxMjYsIDEyOCwgMTI5LCAxMzAsXG4gIDEzMywgMTM0LCAxMzksIDE0MSwgMTQzLCAxNDQsIDE0NSwgMTQ2LCAxNDcsIDE0OCwgMTQ5LFxuICAxNTAsIDE1MSwgMTU0LCAxNTUsIDE1NywgMTU4LCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSxcbiAgMTY2LCAxNjgsIDE2OSwgMTcxLCAxNzIsIDE3OCwgMTc5LCAxODAsIDE4MSwgMTgzLCAxODQsXG4gIDE4NSwgMTg4LCAxODksIDE5MiwgMTk0LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAzLFxuICAyMDUsIDIwNywgMjE0LCAyMTUsIDIxNiwgMjE3LCAyMTksIDIzMCwgMjQwLCAyNDQsIDI0NSxcbiAgMjQ2LCAyNDcsIDI1MCwgMjUxLCAyNTIsIDI1NCwgMjU1LCAyNTksIDI2MCwgMjYxLCAyNjIsXG4gIDI2MywgMjcxLCAyNzMsIDI3NCwgMjc3LCAyNzgsIDI4MSwgMjgyLCAyODMsIDI4NCwgMjg1LFxuICAyODYsIDI4OCwgMjkwLCAyOTIsIDI5NCwgMjk1LCAyOTYsIDI5OCwgMzAwLCAzMDEsIDMwMixcbiAgMzAzLCAzMDQsIDMwNSwgMzA2LCAzMDcsIDMxMywgMzE1LCAzMTgsIDMxOSwgMzIyLCAzMjMsXG4gIDMyNCwgMzI1LCAzMjYsIDMyNywgMzI5LCAzMzAsIDMzMiwgMzMzLCAzMzUsIDMzNiwgMzM3LFxuICAzMzgsIDM0NSwgMzQ2LCAzNDcsIDM0OCwgMzUwLCAzNTEsIDM1MywgMzU0LCAzNTUsIDM1NyxcbiAgMzU5LCAzNjEsIDM2MiwgMzY2LCAzNjksIDM3MSxcbl07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFwaSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICApIHtcbiAgICB0aGlzLnByb2plY3RJZCA9ICcwZklDNTAzaTBxT1czWjU4dzhWbyc7XG4gICAgdGhpcy5yb290RW5kcG9pbnQgPSB1cmw7XG4gICAgdGhpcy5saWtlc0VuZHBvaW50ID0gYCR7dXJsfSR7dGhpcy5wcm9qZWN0SWR9L2xpa2VzL2A7XG4gICAgdGhpcy5saWtlc0RhdGEgPSB0aGlzLiNnZXRMaWtlcygpO1xuICB9XG5cbiAgZ2V0TGlrZXNEYXRhID0gKCkgPT4gdGhpcy5saWtlc0RhdGE7XG5cbiAgc2V0TGlrZXNEYXRhID0gKGJvZHlEYXRhKSA9PiB7XG4gICAgdGhpcy4jYWRkTGlrZSh0aGlzLmxpa2VzRW5kcG9pbnQsIGJvZHlEYXRhKTtcbiAgICB0aGlzLmxpa2VzRGF0YSA9IHRoaXMuI2dldExpa2VzKCk7XG4gICAgcmV0dXJuIHRoaXMubGlrZXNEYXRhO1xuICB9O1xuXG4gICNnZXRMaWtlcyA9IGFzeW5jICh1cmwgPSB0aGlzLmxpa2VzRW5kcG9pbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gICNhZGRMaWtlID0gYXN5bmMgKHVybCA9IHRoaXMubGlrZXNFbmRwb2ludCwgYm9keURhdGEpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfTtcbn1cbiIsImltcG9ydCByZXNlcnZhdGlvbkNvdW50ZXIgZnJvbSAnLi9yZXNlcnZhdGlvbi1jb3VudGVyJztcblxuY29uc3Qgc2V0UmVzZXJ2ZWRUb0FQSSA9IGFzeW5jIChkYXRhQm9keSkgPT4ge1xuICBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMkM0akpGS3JhSXZheGpyc2RxSDUvcmVzZXJ2YXRpb25zJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhQm9keSksXG4gICAgfSxcbiAgKTtcbn07XG5cbmNvbnN0IGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzJDNGpKRktyYUl2YXhqcnNkcUg1L3Jlc2VydmF0aW9ucz9pdGVtX2lkPSR7aWR9YDtcbiAgY29uc3QgZGlzcGxheVJlc2VydmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnJlc2VydmVkLWNhcnMnLFxuICApO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gICAgYXdhaXQgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSByZXNlcnZhdGlvbkNvdW50ZXIoZGF0YSk7XG5cbiAgICAgIGNvbnN0IGNvdW50ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRlci1zcGFuJyk7XG4gICAgICBjb3VudGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGAoJHtjb3VudGVyfSlgO1xuXG4gICAgICBkaXNwbGF5UmVzZXJ2ZXMuaW5uZXJIVE1MID0gZGF0YS5yZWR1Y2UoXG4gICAgICAgIChjb250ZW50LCBjb21tZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tbWVudEVsZW1lbnQgPSBgPGxpPiR7Y29tbWVudC5kYXRlX3N0YXJ0fSAtICR7Y29tbWVudC5kYXRlX2VuZH0gYnkgJHtjb21tZW50LnVzZXJuYW1lfTwvbGk+YDtcbiAgICAgICAgICBjb250ZW50ICs9IGNvbW1lbnRFbGVtZW50O1xuICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICB9LFxuICAgICAgICAnJyxcbiAgICAgICk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGZXRjaCBEYXRhIEZhaWxlZCcpO1xuICB9XG59O1xuXG5leHBvcnQgeyBzZXRSZXNlcnZlZFRvQVBJLCBnZXREYXRhRnJvbUludm9sdmVtZW50QVBJIH07XG4iLCJpbXBvcnQgQ2Fyc0FwaSBmcm9tICcuLi9ob21lL2NhcnMtYXBpJztcbmltcG9ydCB7XG4gIHNldFJlc2VydmVkVG9BUEksXG4gIGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEksXG59IGZyb20gJy4vaW52b2x2ZW1lbnRBUEknO1xuXG5jb25zdCBjYXJBcGkgPSBuZXcgQ2Fyc0FwaSgpO1xuXG5jb25zdCByZXNlcnZhdGlvbnNQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjdXNlck5hbWVJbnB1dCcsXG4gICk7XG5cbiAgY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjc3RhcnREYXRlSW5wdXQnLFxuICApO1xuXG4gIGNvbnN0IGVuZERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmREYXRlSW5wdXQnKTtcblxuICB1c2VyTmFtZUlucHV0LnZhbHVlID0gJyc7XG4gIHN0YXJ0RGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gIGVuZERhdGVJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuY29uc3Qgc2F2ZVJlc2VydmF0aW9uVG9BcGkgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmlkLnNwbGl0KCctJykuYXQoLTEpO1xuICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI3VzZXJOYW1lSW5wdXQnLFxuICApO1xuXG4gIGNvbnN0IHN0YXJ0RGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI3N0YXJ0RGF0ZUlucHV0JyxcbiAgKTtcblxuICBjb25zdCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kRGF0ZUlucHV0Jyk7XG5cbiAgY29uc3QgZGF0YUJvZHkgPSB7XG4gICAgaXRlbV9pZDogaWQsXG4gICAgdXNlcm5hbWU6IHVzZXJOYW1lSW5wdXQudmFsdWUsXG4gICAgZGF0ZV9zdGFydDogc3RhcnREYXRlSW5wdXQudmFsdWUsXG4gICAgZGF0ZV9lbmQ6IGVuZERhdGVJbnB1dC52YWx1ZSxcbiAgfTtcblxuICBzZXRSZXNlcnZlZFRvQVBJKGRhdGFCb2R5KS50aGVuKCgpID0+IHtcbiAgICBjbGVhcklucHV0cygpO1xuICAgIGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkoaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dSZXNlcnZhdGlvbk1vZGFsKGUpIHtcbiAgY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcblxuICBjYXJBcGkuZ2V0RGF0YVByb21pc2UoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgcmVzZXJ2YXRpb25zUG9wVXAuY2xhc3NMaXN0LmFkZChcbiAgICAgICdyZXNlcnZhdGlvbi1jb250YWluZXInLFxuICAgICk7XG4gICAgcmVzZXJ2YXRpb25zUG9wVXAuaWQgPSAncG9wLXVwJztcbiAgICByZXNlcnZhdGlvbnNQb3BVcC5oaWRkZW4gPSB0cnVlO1xuICAgIHJlc2VydmF0aW9uc1BvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgY29uc3QgY2FyID0gZGF0YVtpZF07XG5cbiAgICByZXNlcnZhdGlvbnNQb3BVcC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInJlc2VydmF0aW9uLWNvbnRlbnQgcmVsYXRpdmUgaC1hdXRvIG1vZGFsLWl0ZW1zIG0tYXV0byBiZy13aGl0ZSBib3JkZXItdmlvbGV0LTYwMCBib3JkZXItc29saWQgYm9yZGVyLTRcIiBpZD1cIiR7aWR9XCI+XG5cbiAgICA8ZGl2IGNsYXNzPSdmbGV4IHJlbGF0aXZlIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgIDxpbWcgY2xhc3M9XCJmbGV4LTEgYmctY29udGFpbiB3LTc4XCIgc3JjPSR7Y2FyLmltZ1VybH0+XG4gICAgIDxidXR0b24gY2xhc3M9J2Nsb3NlIGFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC0yeGwgcm91bmRlZC1mdWxsIHB4LTIgYm9yZGVyLXZpb2xldC03MDAgaG92ZXI6Ym9yZGVyLXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNTAwIGJvcmRlci00IGJnLXdoaXRlJz4gWCA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8aDIgY2xhc3M9J3RleHQtY2VudGVyIHRleHQteGwgdGV4dC1zbGF0ZS02MDAgcHktNSBmb250LWJvbGQnPiR7Y2FyLm1ha2UudG9VcHBlckNhc2UoKX08L2gyPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCB3LTEvMiBteC1hdXRvIGdhcC15LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG14LWF1dG8gZmxleC13cmFwIGdhcC15LTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9J3ctMi81IGZsZXggdGV4dC1sZyBqdXN0aWZ5LWNlbnRlciBnYXAteC00Jz5cbiAgICAgICAgIDxoMyBjbGFzcz0nbW9kZWwnPk1vZGVsOiA8L2gzPlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiR7Y2FyLm1vZGVsLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNCc+XG4gICAgICAgICA8aDMgY2xhc3M9J3llYXInPlllYXI6PC9oMz5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4gJHtjYXIueWVhcn08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3ctMi81IGZsZXggdGV4dC1sZyBqdXN0aWZ5LWNlbnRlciBnYXAteC00Jz5cbiAgICAgICAgIDxoMyBjbGFzcz0naG9yc2Vwb3dlcic+SG9yc2Vwb3dlcjo8L2gzPlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiAke1xuICBjYXIuaG9yc2Vwb3dlclxufTwvc3Bhbj5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXYgY2xhc3M9J3ctMi81IGZsZXggdGV4dC1sZyBqdXN0aWZ5LWNlbnRlciBnYXAteC00Jz5cbiAgICAgICAgIDxoMyBjbGFzcz0ncHJpY2UnPlByaWNlOiA8L2gzPlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiAke2Nhci5wcmljZX08L3NwYW4+XG4gICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2ZWQtY2Fycy1jb250YWluZXIgbWwtM1wiPlxuICAgICA8aDIgY2xhc3M9IFwicmVzZXJ2ZWQtY2Fycy10aXRsZSB0ZXh0LWNlbnRlciB0ZXh0LXhsIHB5LTQgZm9udC1ib2xkIHRleHQtc2xhdGUtNjAwXCI+IFJlc2VydmF0aW9ucyA8c3BhbiBpZD1cImNvdW50ZXItc3BhblwiPjwvc3Bhbj48L2gyPlxuICAgICA8dWwgY2xhc3M9XCJyZXNlcnZlZC1jYXJzIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbXgtYXV0byBpdGVtcy1jZW50ZXIgcHktMlwiPlxuICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Jvb2stY2FycyB3LWZ1bGwgbWF4LXcteHMgbWwtMyc+XG4gICAgPGgyIGNsYXNzPSdib29rLWNhcnMtdGl0bGUgdGV4dC1jZW50ZXIgcHktNCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTYwMCc+IEFkZCBhIHJlc2VydmF0aW9uIDwvaDI+XG5cbiAgICA8Zm9ybSBjbGFzcz0nZm9ybSBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sIG14LWF1dG8gaXRlbXMtY2VudGVyJz4gXG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIG1iLTZcIiBpZD1cInVzZXJOYW1lSW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibmFtZVwiPlxuXG4gICAgICAgICAgPGlucHV0IGNsYXNzPSdzdGFydC1kYXRlIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgbWItNicgaWQ9XCJzdGFydERhdGVJbnB1dFwiIHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9J3N0YXJ0LWRhdGUnPlxuXG4gICAgICAgICAgPGlucHV0IGNsYXNzPSdlbmQtZGF0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIG1iLTYnIGlkPVwiZW5kRGF0ZUlucHV0XCIgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj0nZW5kLWRhdGUnPlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0ncmVzZXJ2ZS1jYXItYnRuIGNlbnRlciB0ZXh0LWxnIHB4LTIgdy00MCBteS01IGggcHktMSBteC1hdXRvIGJvcmRlci0yIGhvdmVyOmJvcmRlci0yIGhvdmVyOnNoYWRvdy1zbSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS01MDAgcm91bmRlZC1sZycgdHlwZT0nYnV0dG9uJyBpZD0ncmVzZXJ2ZS1idXR0b24tJHtpZH0nPiBSZXNlcnZlIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+ICAgXG4gICAgYDtcbiAgICBib2R5LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uc1BvcFVwKTtcblxuICAgIGNvbnN0IGRpc3BsYXlSZXNlcnZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLnJlc2VydmVkLWNhcnMnLFxuICAgICk7XG5cbiAgICBnZXREYXRhRnJvbUludm9sdmVtZW50QVBJKGlkKS5jYXRjaCgoKSA9PiB7XG4gICAgICBkaXNwbGF5UmVzZXJ2ZXMudGV4dENvbnRlbnQgPSAnJztcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc2VydmVDYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2Zvcm0uZm9ybSAucmVzZXJ2ZS1jYXItYnRuJyxcbiAgICApO1xuXG4gICAgcmVzZXJ2ZUNhckJ0bi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHNhdmVSZXNlcnZhdGlvblRvQXBpLFxuICAgICk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI3BvcC11cCAuY2xvc2UnLFxuICAgICk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKHJlc2VydmF0aW9uc1BvcFVwKTtcbiAgICAgIHJlc2VydmF0aW9uc1BvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiY29uc3QgcmVzZXJ2YXRpb25Db3VudGVyID0gKHJlc2VydmF0aW9uKSA9PiB7XG4gIGlmIChyZXNlcnZhdGlvbi5sZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzZXJ2YXRpb24ubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25Db3VudGVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBcImdldFwiKTtcbiAgcmV0dXJuIGNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKTtcbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgSG9tZUFwcGxpY2F0aW9uLFxuICBnZXRBbGxDYXJzQ291bnQsXG59IGZyb20gJy4vbW9kdWxlcy9ob21lL2hvbWUtYXBwJztcbmltcG9ydCB7IHNob3dDb21tZW50TW9kYWwgfSBmcm9tICcuL21vZHVsZXMvY29tbWVudHMvY29tbWVudHMtYXBwJztcbmltcG9ydCBzaG93UmVzZXJ2YXRpb25Nb2RhbCBmcm9tICcuL21vZHVsZXMvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9uLWFwcCc7XG5cbmNvbnN0IGhvbWVBcHAgPSBuZXcgSG9tZUFwcGxpY2F0aW9uKCk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySG9tZUV2ZW50cygpIHtcbiAgY29uc3QgbGlrZXNCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0Jyk7XG4gIGNvbnN0IGFsbENhcnNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5jYXJzLW5hdi1lbGVtZW50JyxcbiAgKTtcblxuICBhbGxDYXJzQ291bnQudGV4dENvbnRlbnQgPSBnZXRBbGxDYXJzQ291bnQoKTtcblxuICBsaWtlc0J1dHRvbnMuZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4gbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICdjbGljaycsXG4gICAgaG9tZUFwcC50b2dnbGVIZWFydCxcbiAgKSk7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcuY2FyLWJ1dHRvbnMgPiAuY29tbWVudC1idXR0b24nLFxuICApO1xuXG4gIGNvbW1lbnRCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NvbW1lbnRNb2RhbCkpO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5yZXNlcnZhdGlvbi1idXR0b24nLFxuICApO1xuXG4gIHJlc2VydmF0aW9uQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dSZXNlcnZhdGlvbk1vZGFsKSk7XG59XG5cbmhvbWVBcHAuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuICByZWdpc3RlckhvbWVFdmVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkNvbW1lbnREYXRhIiwidXNlcm5hbWUiLCJjb21tZW50IiwiaWQiLCJpdGVtX2lkIiwiQ2Fyc0FwaSIsIkFwaSIsImNhckFwaSIsIm1vZGFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ29tbWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcGkiLCJjb21CdG4iLCJOdW1iZXIiLCJzcGxpdCIsInVzZXJuYW1lSW5wdXQiLCJjb21tZW50SW5wdXQiLCJ2YWx1ZSIsImNvbW1lbnRPYmoiLCJhZGRDb21tZW50Iiwic2hvd0NvbW1lbnRNb2RhbCIsImUiLCJnZXREYXRhUHJvbWlzZSIsInRoZW4iLCJkYXRhIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiaW1nVXJsIiwibWFrZSIsIm1vZGVsIiwieWVhciIsImhvcnNlcG93ZXIiLCJwcmljZSIsImZvcm0xIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwidXJsIiwiY29tbWVudHNFbmRwb2ludCIsImJvZHlEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJwcm9qZWN0SWQiLCJyb290RW5kcG9pbnQiLCJDYXIiLCJsaWtlIiwiZ29vZENhcnNJZCIsImRhdGFQcm9taXNlIiwiZGF0YU9iaiIsImZvckVhY2giLCJjYXIiLCJhbGxDYXJzRW5kcG9pbnQiLCJtYXAiLCJvYmoiLCJpbWdfdXJsIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZXRBbGxDYXJzIiwiY2FyUmVuZGVyIiwibGlrZUNsYXNzIiwidW5saWtlQ2xhc3MiLCJJbnZvbHZlbWVudEFwaSIsIkxvZ28iLCJIb21lQXBwbGljYXRpb24iLCJnZXRBTnVtYmVyT2ZDYXJzIiwiY2Fyc0FwaSIsIm51bWJlciIsInRvQmVEaXNwbGF5ZWQiLCJzbGljZSIsIm1haW4iLCJtYWluQ29udGVudCIsInJlZHVjZSIsImNvbnRlbnQiLCJjYXJFbGVtZW50IiwiY3VycmVudFRhcmdldCIsImhlYXJ0QnV0dG9uIiwiaGVhcnRDb3VudCIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiaW52b2x2ZW1lbnRBcGkiLCJzZXRMaWtlc0RhdGEiLCJnZXRMaWtlc0RhdGEiLCJsaWtlc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm51bWJlck9mTGlrZXMiLCJmaW5kIiwidW5kZWZpbmVkIiwibGlrZXMiLCJsb2dvSW1nIiwic3JjIiwiZ2V0QWxsQ2Fyc0NvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJ0b1VwcGVyQ2FzZSIsImZpbGVFeGlzdHMiLCJpbWFnZVVybCIsImh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwibGlrZXNEYXRhIiwibGlrZXNFbmRwb2ludCIsInJlc2VydmF0aW9uQ291bnRlciIsInNldFJlc2VydmVkVG9BUEkiLCJkYXRhQm9keSIsImdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkiLCJkaXNwbGF5UmVzZXJ2ZXMiLCJjb3VudGVyIiwiY291bnRlckNvbnRhaW5lciIsImNvbW1lbnRFbGVtZW50IiwiZGF0ZV9zdGFydCIsImRhdGVfZW5kIiwiRXJyb3IiLCJyZXNlcnZhdGlvbnNQb3BVcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGVhcklucHV0cyIsInVzZXJOYW1lSW5wdXQiLCJzdGFydERhdGVJbnB1dCIsImVuZERhdGVJbnB1dCIsInNhdmVSZXNlcnZhdGlvblRvQXBpIiwiYXQiLCJzaG93UmVzZXJ2YXRpb25Nb2RhbCIsImhpZGRlbiIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwicmVzZXJ2ZUNhckJ0biIsImNsb3NlQnRuIiwicmVtb3ZlQ2hpbGQiLCJyZXNlcnZhdGlvbiIsImxlbmd0aCIsImhvbWVBcHAiLCJyZWdpc3RlckhvbWVFdmVudHMiLCJsaWtlc0J1dHRvbnMiLCJhbGxDYXJzQ291bnQiLCJsaWtlQnV0dG9uIiwidG9nZ2xlSGVhcnQiLCJjb21tZW50QnV0dG9ucyIsImJ0biIsInJlc2VydmF0aW9uQnV0dG9ucyIsImluaXRpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9