/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/modules/comments/comments-app.js":
/*!**********************************************!*\
  !*** ./src/modules/comments/comments-app.js ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/src/modules/comments/comments-app.js: Unexpected token, expected \"{\" (64:7)\n\n\u001b[0m \u001b[90m 62 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 63 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 64 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36masync\u001b[39m showCommentModal(e) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 65 |\u001b[39m   \u001b[36mconst\u001b[39m id \u001b[33m=\u001b[39m \u001b[33mNumber\u001b[39m(e\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mparentNode\u001b[33m.\u001b[39mparentNode\u001b[33m.\u001b[39mid)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 66 |\u001b[39m   \u001b[36mawait\u001b[39m carApi\u001b[33m.\u001b[39mgetDataPromise()\u001b[33m.\u001b[39mthen((data) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 67 |\u001b[39m     \u001b[36mif\u001b[39m (modalContainer\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39mcontains(\u001b[32m'hidden'\u001b[39m)) {\u001b[0m\n    at Parser._raise (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:476:17)\n    at Parser.raiseWithData (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:469:17)\n    at Parser.raise (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:430:17)\n    at Parser.unexpected (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:3789:16)\n    at Parser.parseExport (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:15358:16)\n    at Parser.parseStatementContent (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:14229:27)\n    at Parser.parseStatement (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:14113:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:14739:25)\n    at Parser.parseBlockBody (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:14730:10)\n    at Parser.parseProgram (/home/sboursen/Projects/Microverse/Modules/module02/MV-Module2-capstone/node_modules/@babel/parser/lib/index.js:14032:10)");

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

  this.carsApi = new _cars_api__WEBPACK_IMPORTED_MODULE_4__["default"](); // DOM elements

  this.main = document.querySelector('main');
  this.involvementApi = new _involvement_api__WEBPACK_IMPORTED_MODULE_6__["default"]();
});
var getAllCarsCount = function getAllCarsCount() {
  var main = document.querySelector('main');
  return main.childElementCount;
};

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
var fileExists = function fileExists(imageUrl) {
  var http = new XMLHttpRequest();
  http.open('HEAD', imageUrl, false);
  http.send();
  return Number(http.status) !== 404;
};
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

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setLikesData", /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(bodyData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addLike).call(_this, _this.likesEndpoint, bodyData);

            case 2:
              _context.next = 4;
              return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _getLikes).call(_this);

            case 4:
              _this.likesData = _context.sent;
              return _context.abrupt("return", _this.likesData);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  _classPrivateFieldInitSpec(this, _getLikes, {
    writable: true,
    value: function () {
      var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var url,
            response,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _this.likesEndpoint;
                _context2.next = 3;
                return fetch(url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
      var _value2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3() {
        var url,
            bodyData,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : _this.likesEndpoint;
                bodyData = _args3.length > 1 ? _args3[1] : undefined;
                _context3.next = 4;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bodyData)
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function value() {
        return _value2.apply(this, arguments);
      }

      return value;
    }()
  });

  this.projectId = 'K2k68wPBsTKAT68ziNEu';
  this.rootEndpoint = _url;
  this.likesEndpoint = "".concat(_url).concat(this.projectId, "/likes");
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



var appId = 'K2k68wPBsTKAT68ziNEu';

var setReservedToAPI = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dataBody) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/reservations"), {
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
            url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/reservations?item_id=").concat(id);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

var showReservationModal = function showReservationModal(e) {
  var id = Number(e.target.parentNode.parentNode.id);
  carApi.getDataPromise().then(function (data) {
    reservationsPopUp.classList.add('reservation-container');
    reservationsPopUp.id = 'pop-up';
    reservationsPopUp.hidden = true;
    reservationsPopUp.style.display = 'block';
    var car = data[id];
    reservationsPopUp.innerHTML = "\n    <div class=\"reservation-content relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\" id=\"".concat(id, "\">\n\n    <div class='flex relative justify-between'>\n     <img class=\"flex-1 bg-contain w-78\" src=").concat(car.imgUrl, ">\n     <button class='close absolute top-2 right-2 text-2xl rounded-full px-2 border-violet-700 hover:border-red-500 hover:text-red-500 border-4 bg-white'> X </button>\n    </div>\n    \n    <h2 class='text-center text-xl text-slate-600 py-5 font-bold'>").concat(car.make.toUpperCase(), "</h2>\n\n    <div class=\"flex justify-between items-center flex-col w-1/2 mx-auto gap-y-5\">\n    <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='model'>Model: </h3>\n         <span class=\"text-slate-600\">").concat(car.model.toUpperCase(), "</span>\n      </div>\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='year'>Year:</h3>\n         <span class=\"text-slate-600\"> ").concat(car.year, "</span>\n      </div>\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='horsepower'>Horsepower:</h3>\n         <span class=\"text-slate-600\"> ").concat(car.horsepower, "</span>\n     </div>\n     <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='price'>Price: </h3>\n         <span class=\"text-slate-600\">$").concat(car.price, "</span>\n     </div>\n     </div>\n    <div class=\"reserved-cars-container ml-3\">\n     <h2 class= \"reserved-cars-title text-center text-xl py-4 font-bold text-slate-600\"> Reservations <span id=\"counter-span\"></span></h2>\n     <ul class=\"reserved-cars flex justify-center flex-col mx-auto items-center py-2\">\n     </ul>\n    </div>\n    <div class='book-cars w-full max-w-xs ml-3'>\n    <h2 class='book-cars-title text-center py-4 text-xl font-bold text-slate-600'> Add a reservation </h2>\n\n    <form class='form flex justify-center flex-col mx-auto items-center'> \n\n          <input class=\"appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6\" id=\"userNameInput\" type=\"text\" placeholder=\"name\" required>\n\n          <input class='start-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id=\"startDateInput\" type=\"date\" placeholder='start-date'>\n\n          <input class='end-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id=\"endDateInput\" type=\"date\" placeholder='end-date'>\n\n          <button class='reserve-car-btn center text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg' type='button' id='reserve-button-").concat(id, "'> Reserve </button>\n        </form>\n    </div>\n    </div>   \n    ");
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showReservationModal);

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
module.exports = __webpack_require__.p + "d44360973806cc15e773.png";

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
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");





var homeApp = new _modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__.HomeApplication();

var registerHomeEvents = function registerHomeEvents() {
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
};

var logoImg = document.querySelector('.logo');
logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_4__;
homeApp.initialize().then(function () {
  registerHomeEvents();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxtQkFBbUI7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDanZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1FO0FBQ1E7QUFDNUQ7QUFDZixtQkFBbUIsMkVBQTJCO0FBQzlDLFNBQVMsdUVBQXVCO0FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBLElBQU15QyxPQUFPLEdBQUcsSUFBSTlGLG1FQUFKLEVBQWhCOztBQUVBLElBQU0rRixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsTUFBTUMsWUFBWSxHQUFHbkUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixDQUFyQjtBQUNBLE1BQU1tRSxZQUFZLEdBQUdwRSxRQUFRLENBQUNNLGFBQVQsQ0FDbkIsbUJBRG1CLENBQXJCO0FBSUE4RCxFQUFBQSxZQUFZLENBQUN6RSxXQUFiLEdBQTJCWSx1RUFBZSxFQUExQztBQUVBNEQsRUFBQUEsWUFBWSxDQUFDcEgsT0FBYixDQUFxQixVQUFDc0gsVUFBRDtBQUFBLFdBQWdCQSxVQUFVLENBQUNYLGdCQUFYLENBQ25DLE9BRG1DLEVBRW5DTyxPQUFPLENBQUNLLFdBRjJCLENBQWhCO0FBQUEsR0FBckI7QUFLQSxNQUFNQyxjQUFjLEdBQUd2RSxRQUFRLENBQUNDLGdCQUFULENBQ3JCLGdDQURxQixDQUF2QjtBQUlBc0UsRUFBQUEsY0FBYyxDQUFDeEgsT0FBZixDQUF1QixVQUFDeUgsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ2QsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEJLLDRFQUE5QixDQUFUO0FBQUEsR0FBdkI7QUFFQSxNQUFNVSxrQkFBa0IsR0FBR3pFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FDekIscUJBRHlCLENBQTNCO0FBSUF3RSxFQUFBQSxrQkFBa0IsQ0FBQzFILE9BQW5CLENBQTJCLFVBQUN5SCxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDZCxnQkFBSixDQUFxQixPQUFyQixFQUE4QlIsNkVBQTlCLENBQVQ7QUFBQSxHQUEzQjtBQUNELENBeEJEOztBQTBCQSxJQUFNd0IsT0FBTyxHQUFHMUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLE9BQXZCLENBQWhCO0FBQ0FvRSxPQUFPLENBQUNDLEdBQVIsR0FBY1gsNkNBQWQ7QUFFQUMsT0FBTyxDQUFDVyxVQUFSLEdBQXFCOUcsSUFBckIsQ0FBMEIsWUFBTTtBQUM5Qm9HLEVBQUFBLGtCQUFrQjtBQUNuQixDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWUvY2FyLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZS9jYXJzLWFwaS5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWUvaG9tZS1hcHAuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2hvbWUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2ludm9sdmVtZW50LWFwaS5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9ucy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvbi1hcHAuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb24tY291bnRlci5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgeWVhcixcbiAgICBpZCxcbiAgICBob3JzZXBvd2VyLFxuICAgIG1ha2UsXG4gICAgbW9kZWwsXG4gICAgcHJpY2UsXG4gICAgaW1nVXJsLFxuICApIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmhvcnNlcG93ZXIgPSBob3JzZXBvd2VyO1xuICAgIHRoaXMubWFrZSA9IG1ha2U7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmltZ1VybCA9IGltZ1VybDtcbiAgICB0aGlzLmxpa2UgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IENhciBmcm9tICcuL2Nhcic7XG5pbXBvcnQgeyBnb29kQ2Fyc0lkIH0gZnJvbSAnLi9ob21lLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyc0FwaSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybCA9ICdodHRwczovL3ByaXZhdGUtYW5vbi02NmZiYjc5Nzc0LWNhcnNhcGkxLmFwaWFyeS1tb2NrLmNvbS8nLFxuICApIHtcbiAgICB0aGlzLnJvb3RFbmRwb2ludCA9IHVybDtcbiAgICB0aGlzLmFsbENhcnNFbmRwb2ludCA9IGAke3VybH1jYXJzYDtcbiAgICB0aGlzLmdvb2RDYXJzSWQgPSBnb29kQ2Fyc0lkO1xuICAgIHRoaXMuZGF0YVByb21pc2UgPSB0aGlzLmdldEFsbENhcnMoKS50aGVuKChkYXRhKSA9PiB0aGlzLiNmb3JtYXRDYXJzKGRhdGEpKTtcbiAgfVxuXG4gIGdldERhdGFQcm9taXNlID0gKCkgPT4gdGhpcy5kYXRhUHJvbWlzZTtcblxuICAjZm9ybWF0Q2FycyA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZGF0YU9iaiA9IHt9O1xuICAgIGRhdGEuZm9yRWFjaCgoY2FyKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGAke2Nhci5pZH1gO1xuICAgICAgZGF0YU9ialtpZF0gPSBjYXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YU9iajtcbiAgfTtcblxuICBnZXRDYXJFbmRwb2ludEZyb21JZCA9IChpZCkgPT4gYCR7dGhpcy5hbGxDYXJzRW5kcG9pbnR9LyR7aWR9YDtcblxuICAjZm9ybWF0RGF0YSA9IChkYXRhKSA9PiBkYXRhLm1hcCgob2JqKSA9PiB7XG4gICAgY29uc3QgY2FyID0gbmV3IENhcigpO1xuICAgIGNhci55ZWFyID0gb2JqLnllYXI7XG4gICAgY2FyLmlkID0gb2JqLmlkO1xuICAgIGNhci5ob3JzZXBvd2VyID0gb2JqLmhvcnNlcG93ZXI7XG4gICAgY2FyLm1ha2UgPSBvYmoubWFrZTtcbiAgICBjYXIubW9kZWwgPSBvYmoubW9kZWw7XG4gICAgY2FyLnByaWNlID0gb2JqLnByaWNlO1xuICAgIGNhci5pbWdVcmwgPSBvYmouaW1nX3VybDtcbiAgICByZXR1cm4gY2FyO1xuICB9KTtcblxuICBnZXRBbGxDYXJzID0gYXN5bmMgKHVybCA9IHRoaXMuYWxsQ2Fyc0VuZHBvaW50KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBkYXRhID0gZGF0YS5maWx0ZXIoKG9iaikgPT4gdGhpcy5nb29kQ2Fyc0lkLmluY2x1ZGVzKG9iai5pZCkpO1xuXG4gICAgZGF0YSA9IGF3YWl0IHRoaXMuI2Zvcm1hdERhdGEoZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcbn1cbiIsImltcG9ydCBDYXJzQXBpIGZyb20gJy4vY2Fycy1hcGknO1xuaW1wb3J0IHtcbiAgY2FyUmVuZGVyLFxuICBsaWtlQ2xhc3MsXG4gIHVubGlrZUNsYXNzLFxufSBmcm9tICcuL2hvbWUtdXRpbHMnO1xuaW1wb3J0IEludm9sdmVtZW50QXBpIGZyb20gJy4vaW52b2x2ZW1lbnQtYXBpJztcblxuZXhwb3J0IGNsYXNzIEhvbWVBcHBsaWNhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2Fyc0FwaSA9IG5ldyBDYXJzQXBpKCk7XG5cbiAgICAvLyBET00gZWxlbWVudHNcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICB0aGlzLmludm9sdmVtZW50QXBpID0gbmV3IEludm9sdmVtZW50QXBpKCk7XG4gIH1cblxuICBpbml0aWFsaXplID0gKCkgPT5cbiAgICB0aGlzLmdldEFOdW1iZXJPZkNhcnMoMjQpLnRoZW4oKCkgPT5cbiAgICAgIHRoaXMuI3VwZGF0ZUxpa2VzKCksXG4gICAgKTtcblxuICBnZXRBbGxDYXJzID0gKCkgPT5cbiAgICB0aGlzLmNhcnNBcGkuZ2V0QWxsQ2FycygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuI2Rpc3BsYXlDYXJzKGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG5cbiAgZ2V0QU51bWJlck9mQ2FycyA9IChudW1iZXIpID0+XG4gICAgdGhpcy5jYXJzQXBpLmdldEFsbENhcnMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCB0b0JlRGlzcGxheWVkID0gZGF0YS5zbGljZSgwLCBudW1iZXIpO1xuXG4gICAgICB0aGlzLiNkaXNwbGF5Q2Fycyh0b0JlRGlzcGxheWVkKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG5cbiAgI2NsZWFyTWFpbiA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gJyc7XG4gIH07XG5cbiAgI2NyZWF0ZUNhckVsZW1lbnQgPSAoY2FyKSA9PlxuICAgIGNhclJlbmRlcihjYXIuaWQsIGNhci5pbWdVcmwsIGNhci5tYWtlLCBjYXIubW9kZWwpO1xuXG4gICNkaXNwbGF5Q2FycyA9ICh0b0JlRGlzcGxheWVkKSA9PiB7XG4gICAgdGhpcy4jY2xlYXJNYWluKCk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSB0b0JlRGlzcGxheWVkLnJlZHVjZShcbiAgICAgIChjb250ZW50LCBjYXIpID0+IHtcbiAgICAgICAgY29uc3QgY2FyRWxlbWVudCA9IHRoaXMuI2NyZWF0ZUNhckVsZW1lbnQoY2FyKTtcbiAgICAgICAgcmV0dXJuIGAke2NvbnRlbnR9XFxuJHtjYXJFbGVtZW50fWA7XG4gICAgICB9LFxuICAgICAgJycsXG4gICAgKTtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gbWFpbkNvbnRlbnQ7XG4gIH07XG5cbiAgdG9nZ2xlSGVhcnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFydCcpKSB7XG4gICAgICBjb25zdCBoZWFydEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGhlYXJ0Q291bnQgPVxuICAgICAgICBoZWFydEJ1dHRvbi5uZXh0U2libGluZy5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgICAgY29uc3QgeyBpZCB9ID1cbiAgICAgICAgaGVhcnRCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICBkYXRhLml0ZW1faWQgPSBOdW1iZXIoaWQpO1xuXG4gICAgICBpZiAoaGVhcnRCdXR0b24uY2xhc3NOYW1lID09PSBsaWtlQ2xhc3MpIHtcbiAgICAgICAgaGVhcnRCdXR0b24uY2xhc3NOYW1lID0gdW5saWtlQ2xhc3M7XG4gICAgICAgIGhlYXJ0Q291bnQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICtoZWFydENvdW50LnRleHRDb250ZW50IC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYXJ0QnV0dG9uLmNsYXNzTmFtZSA9IGxpa2VDbGFzcztcbiAgICAgICAgaGVhcnRDb3VudC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgK2hlYXJ0Q291bnQudGV4dENvbnRlbnQgKyAxO1xuICAgICAgICB0aGlzLmludm9sdmVtZW50QXBpLnNldExpa2VzRGF0YShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgI3VwZGF0ZUxpa2VzID0gKCkgPT4ge1xuICAgIHRoaXMuaW52b2x2ZW1lbnRBcGkuZ2V0TGlrZXNEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGlrZXNFbGVtZW50cyA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcycpO1xuICAgICAgbGlrZXNFbGVtZW50cy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9XG4gICAgICAgICAgbGlrZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgbnVtYmVyT2ZMaWtlcyA9IGRhdGEuZmluZChcbiAgICAgICAgICAoZSkgPT4gTnVtYmVyKGUuaXRlbV9pZCkgPT09IE51bWJlcihpZCksXG4gICAgICAgICk7XG4gICAgICAgIGlmIChudW1iZXJPZkxpa2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBudW1iZXJPZkxpa2VzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1iZXJPZkxpa2VzID0gbnVtYmVyT2ZMaWtlcy5saWtlcztcbiAgICAgICAgfVxuICAgICAgICBsaWtlLnRleHRDb250ZW50ID0gbnVtYmVyT2ZMaWtlcztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2Fyc0NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICByZXR1cm4gbWFpbi5jaGlsZEVsZW1lbnRDb3VudDtcbn07XG4iLCJleHBvcnQgY29uc3QgbGlrZUNsYXNzID0gJ2hlYXJ0IGZhcyBmYS1oZWFydCc7XG5leHBvcnQgY29uc3QgdW5saWtlQ2xhc3MgPSAnaGVhcnQgZmFyIGZhLWhlYXJ0JztcbmV4cG9ydCBjb25zdCBjYXJSZW5kZXIgPSAoXG4gIGlkLFxuICBpbWdVcmwsXG4gIG1ha2UsXG4gIG1vZGVsLFxuICBsaWtlcyA9IDAsXG4pID0+IGA8ZGl2XG4gICAgICBjbGFzcz1cImNhci1jYXJkIGZsZXggZmxleC1jb2wgZ2FwLTIgYm9yZGVyLTQgcm91bmRlZC1tZCBib3JkZXItdmlvbGV0LTYwMFwiIGlkPVwiJHtpZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXItaW1nIGgtNTAgb2JqZWN0LWNvdmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJ3LWZ1bGxcIlxuICAgICAgICAgIHNyYz1cIiR7aW1nVXJsfVwiXG4gICAgICAgICAgYWx0PVwiJHttYWtlLnRvVXBwZXJDYXNlKCl9ICR7bW9kZWwudG9VcHBlckNhc2UoKX1cIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhci1pbmZvIGZsZXgganVzdGlmeS1iZXR3ZWVuIHAtMiBtdC1hdXRvXCI+XG4gICAgICAgIDxoMj4ke21ha2UudG9VcHBlckNhc2UoKX0gJHttb2RlbC50b1VwcGVyQ2FzZSgpfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LXJlZC02MDBcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cIiR7dW5saWtlQ2xhc3N9XCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ibGFja1wiPjxzcGFuIGNsYXNzPVwibGlrZXNcIj4ke2xpa2VzfTwvc3Bhbj4gPHNwYW4+bGlrZXM8L3NwYW4+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhci1idXR0b25zIGZsZXggZmxleC1jb2wgZ2FwLTMgcC0yIFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwibW9kZWxcIiBjbGFzcz1cImNvbW1lbnQtYnV0dG9uIHB4LTIgcHktMSBib3JkZXItMiBob3Zlcjpib3JkZXItMiBob3ZlcjpzaGFkb3ctc20gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1za3ktNTAwXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJyZXNlcnZhdGlvbi1idXR0b24gcHgtMiBweS0xIGJvcmRlci0yIGhvdmVyOmJvcmRlci0yIGhvdmVyOnNoYWRvdy1zbSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS01MDBcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5SZXNlcnZhdGlvbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuZXhwb3J0IGNvbnN0IGZpbGVFeGlzdHMgPSAoaW1hZ2VVcmwpID0+IHtcbiAgY29uc3QgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGh0dHAub3BlbignSEVBRCcsIGltYWdlVXJsLCBmYWxzZSk7XG4gIGh0dHAuc2VuZCgpO1xuXG4gIHJldHVybiBOdW1iZXIoaHR0cC5zdGF0dXMpICE9PSA0MDQ7XG59XG5cbmV4cG9ydCBjb25zdCBnb29kQ2Fyc0lkID0gW1xuICAxLCA1LCA3LCA4LCAxMSwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjUsXG4gIDI2LCAyOSwgMzEsIDMyLCAzNCwgMzUsIDM5LCA0MSwgNDMsIDQ4LCA0OSwgNTAsIDUxLCA1MyxcbiAgNTUsIDU2LCA1NywgNTgsIDYwLCA2MiwgNjMsIDY0LCA2NSwgNjgsIDY5LCA3MywgNzUsIDc2LFxuICA3OSwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgOTAsIDk1LCA5OCwgMTAwLCAxMDEsIDEwMixcbiAgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTIsIDExMywgMTE0LCAxMTUsXG4gIDExNiwgMTE3LCAxMTgsIDExOSwgMTIyLCAxMjMsIDEyNCwgMTI2LCAxMjgsIDEyOSwgMTMwLFxuICAxMzMsIDEzNCwgMTM5LCAxNDEsIDE0MywgMTQ0LCAxNDUsIDE0NiwgMTQ3LCAxNDgsIDE0OSxcbiAgMTUwLCAxNTEsIDE1NCwgMTU1LCAxNTcsIDE1OCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsXG4gIDE2NiwgMTY4LCAxNjksIDE3MSwgMTcyLCAxNzgsIDE3OSwgMTgwLCAxODEsIDE4MywgMTg0LFxuICAxODUsIDE4OCwgMTg5LCAxOTIsIDE5NCwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMyxcbiAgMjA1LCAyMDcsIDIxNCwgMjE1LCAyMTYsIDIxNywgMjE5LCAyMzAsIDI0MCwgMjQ0LCAyNDUsXG4gIDI0NiwgMjQ3LCAyNTAsIDI1MSwgMjUyLCAyNTQsIDI1NSwgMjU5LCAyNjAsIDI2MSwgMjYyLFxuICAyNjMsIDI3MSwgMjczLCAyNzQsIDI3NywgMjc4LCAyODEsIDI4MiwgMjgzLCAyODQsIDI4NSxcbiAgMjg2LCAyODgsIDI5MCwgMjkyLCAyOTQsIDI5NSwgMjk2LCAyOTgsIDMwMCwgMzAxLCAzMDIsXG4gIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMTMsIDMxNSwgMzE4LCAzMTksIDMyMiwgMzIzLFxuICAzMjQsIDMyNSwgMzI2LCAzMjcsIDMyOSwgMzMwLCAzMzIsIDMzMywgMzM1LCAzMzYsIDMzNyxcbiAgMzM4LCAzNDUsIDM0NiwgMzQ3LCAzNDgsIDM1MCwgMzUxLCAzNTMsIDM1NCwgMzU1LCAzNTcsXG4gIDM1OSwgMzYxLCAzNjIsIDM2NiwgMzY5LCAzNzEsXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBcGkge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJyxcbiAgKSB7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSAnSzJrNjh3UEJzVEtBVDY4emlORXUnO1xuICAgIHRoaXMucm9vdEVuZHBvaW50ID0gdXJsO1xuICAgIHRoaXMubGlrZXNFbmRwb2ludCA9IGAke3VybH0ke3RoaXMucHJvamVjdElkfS9saWtlc2A7XG4gICAgdGhpcy5saWtlc0RhdGEgPSB0aGlzLiNnZXRMaWtlcygpO1xuICB9XG5cbiAgZ2V0TGlrZXNEYXRhID0gKCkgPT4gdGhpcy5saWtlc0RhdGE7XG5cbiAgc2V0TGlrZXNEYXRhID0gYXN5bmMgKGJvZHlEYXRhKSA9PiB7XG4gICAgYXdhaXQgdGhpcy4jYWRkTGlrZSh0aGlzLmxpa2VzRW5kcG9pbnQsIGJvZHlEYXRhKTtcbiAgICB0aGlzLmxpa2VzRGF0YSA9IGF3YWl0IHRoaXMuI2dldExpa2VzKCk7XG4gICAgcmV0dXJuIHRoaXMubGlrZXNEYXRhO1xuICB9O1xuXG4gICNnZXRMaWtlcyA9IGFzeW5jICh1cmwgPSB0aGlzLmxpa2VzRW5kcG9pbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gICNhZGRMaWtlID0gYXN5bmMgKHVybCA9IHRoaXMubGlrZXNFbmRwb2ludCwgYm9keURhdGEpID0+IHtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlEYXRhKSxcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCByZXNlcnZhdGlvbkNvdW50ZXIgZnJvbSAnLi9yZXNlcnZhdGlvbi1jb3VudGVyJztcblxuY29uc3QgYXBwSWQgPSAnSzJrNjh3UEJzVEtBVDY4emlORXUnO1xuXG5jb25zdCBzZXRSZXNlcnZlZFRvQVBJID0gYXN5bmMgKGRhdGFCb2R5KSA9PiB7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9yZXNlcnZhdGlvbnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCb2R5KSxcbiAgICB9LFxuICApO1xufTtcblxuY29uc3QgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JHtpZH1gO1xuICBjb25zdCBkaXNwbGF5UmVzZXJ2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucmVzZXJ2ZWQtY2FycycsXG4gICk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY291bnRlciA9IHJlc2VydmF0aW9uQ291bnRlcihkYXRhKTtcblxuICAgICAgY29uc3QgY291bnRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudGVyLXNwYW4nKTtcbiAgICAgIGNvdW50ZXJDb250YWluZXIuaW5uZXJIVE1MID0gYCgke2NvdW50ZXJ9KWA7XG5cbiAgICAgIGRpc3BsYXlSZXNlcnZlcy5pbm5lckhUTUwgPSBkYXRhLnJlZHVjZShcbiAgICAgICAgKGNvbnRlbnQsIGNvbW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGA8bGk+JHtjb21tZW50LmRhdGVfc3RhcnR9IC0gJHtjb21tZW50LmRhdGVfZW5kfSBieSAke2NvbW1lbnQudXNlcm5hbWV9PC9saT5gO1xuICAgICAgICAgIGNvbnRlbnQgKz0gY29tbWVudEVsZW1lbnQ7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgICcnLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZldGNoIERhdGEgRmFpbGVkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHNldFJlc2VydmVkVG9BUEksIGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkgfTtcbiIsImltcG9ydCBDYXJzQXBpIGZyb20gJy4uL2hvbWUvY2Fycy1hcGknO1xuaW1wb3J0IHtcbiAgc2V0UmVzZXJ2ZWRUb0FQSSxcbiAgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSxcbn0gZnJvbSAnLi9pbnZvbHZlbWVudEFQSSc7XG5cbmNvbnN0IGNhckFwaSA9IG5ldyBDYXJzQXBpKCk7XG5cbmNvbnN0IHJlc2VydmF0aW9uc1BvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyN1c2VyTmFtZUlucHV0JyxcbiAgKTtcblxuICBjb25zdCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNzdGFydERhdGVJbnB1dCcsXG4gICk7XG5cbiAgY29uc3QgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZERhdGVJbnB1dCcpO1xuXG4gIHVzZXJOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgc3RhcnREYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgZW5kRGF0ZUlucHV0LnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBzYXZlUmVzZXJ2YXRpb25Ub0FwaSA9IChlKSA9PiB7XG4gIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5hdCgtMSk7XG4gIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjdXNlck5hbWVJbnB1dCcsXG4gICk7XG5cbiAgY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjc3RhcnREYXRlSW5wdXQnLFxuICApO1xuXG4gIGNvbnN0IGVuZERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmREYXRlSW5wdXQnKTtcblxuICBjb25zdCBkYXRhQm9keSA9IHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgICB1c2VybmFtZTogdXNlck5hbWVJbnB1dC52YWx1ZSxcbiAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGVJbnB1dC52YWx1ZSxcbiAgICBkYXRlX2VuZDogZW5kRGF0ZUlucHV0LnZhbHVlLFxuICB9O1xuXG4gIHNldFJlc2VydmVkVG9BUEkoZGF0YUJvZHkpLnRoZW4oKCkgPT4ge1xuICAgIGNsZWFySW5wdXRzKCk7XG4gICAgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSShpZCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1Jlc2VydmF0aW9uTW9kYWwgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuXG4gIGNhckFwaS5nZXREYXRhUHJvbWlzZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICByZXNlcnZhdGlvbnNQb3BVcC5jbGFzc0xpc3QuYWRkKFxuICAgICAgJ3Jlc2VydmF0aW9uLWNvbnRhaW5lcicsXG4gICAgKTtcbiAgICByZXNlcnZhdGlvbnNQb3BVcC5pZCA9ICdwb3AtdXAnO1xuICAgIHJlc2VydmF0aW9uc1BvcFVwLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXJ2YXRpb25zUG9wVXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBjb25zdCBjYXIgPSBkYXRhW2lkXTtcblxuICAgIHJlc2VydmF0aW9uc1BvcFVwLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24tY29udGVudCByZWxhdGl2ZSBoLWF1dG8gbW9kYWwtaXRlbXMgbS1hdXRvIGJnLXdoaXRlIGJvcmRlci12aW9sZXQtNjAwIGJvcmRlci1zb2xpZCBib3JkZXItNFwiIGlkPVwiJHtpZH1cIj5cblxuICAgIDxkaXYgY2xhc3M9J2ZsZXggcmVsYXRpdmUganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgPGltZyBjbGFzcz1cImZsZXgtMSBiZy1jb250YWluIHctNzhcIiBzcmM9JHtjYXIuaW1nVXJsfT5cbiAgICAgPGJ1dHRvbiBjbGFzcz0nY2xvc2UgYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgcHgtMiBib3JkZXItdmlvbGV0LTcwMCBob3Zlcjpib3JkZXItcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgYm9yZGVyLTQgYmctd2hpdGUnPiBYIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxoMiBjbGFzcz0ndGV4dC1jZW50ZXIgdGV4dC14bCB0ZXh0LXNsYXRlLTYwMCBweS01IGZvbnQtYm9sZCc+JHtjYXIubWFrZS50b1VwcGVyQ2FzZSgpfTwvaDI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGZsZXgtY29sIHctMS8yIG14LWF1dG8gZ2FwLXktNVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXgtYXV0byBmbGV4LXdyYXAgZ2FwLXktNVwiPlxuICAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSdtb2RlbCc+TW9kZWw6IDwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtjYXIubW9kZWwudG9VcHBlckNhc2UoKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3ctMi81IGZsZXggdGV4dC1sZyBqdXN0aWZ5LWNlbnRlciBnYXAteC00Jz5cbiAgICAgICAgIDxoMyBjbGFzcz0neWVhcic+WWVhcjo8L2gzPlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiAke2Nhci55ZWFyfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSdob3JzZXBvd2VyJz5Ib3JzZXBvd2VyOjwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+ICR7XG4gIGNhci5ob3JzZXBvd2VyXG59PC9zcGFuPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSdwcmljZSc+UHJpY2U6IDwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JCR7Y2FyLnByaWNlfTwvc3Bhbj5cbiAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZlZC1jYXJzLWNvbnRhaW5lciBtbC0zXCI+XG4gICAgIDxoMiBjbGFzcz0gXCJyZXNlcnZlZC1jYXJzLXRpdGxlIHRleHQtY2VudGVyIHRleHQteGwgcHktNCBmb250LWJvbGQgdGV4dC1zbGF0ZS02MDBcIj4gUmVzZXJ2YXRpb25zIDxzcGFuIGlkPVwiY291bnRlci1zcGFuXCI+PC9zcGFuPjwvaDI+XG4gICAgIDx1bCBjbGFzcz1cInJlc2VydmVkLWNhcnMgZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteC1hdXRvIGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nYm9vay1jYXJzIHctZnVsbCBtYXgtdy14cyBtbC0zJz5cbiAgICA8aDIgY2xhc3M9J2Jvb2stY2Fycy10aXRsZSB0ZXh0LWNlbnRlciBweS00IHRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtNjAwJz4gQWRkIGEgcmVzZXJ2YXRpb24gPC9oMj5cblxuICAgIDxmb3JtIGNsYXNzPSdmb3JtIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbXgtYXV0byBpdGVtcy1jZW50ZXInPiBcblxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgbWItNlwiIGlkPVwidXNlck5hbWVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9J3N0YXJ0LWRhdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMCBtYi02JyBpZD1cInN0YXJ0RGF0ZUlucHV0XCIgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj0nc3RhcnQtZGF0ZSc+XG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9J2VuZC1kYXRlIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgbWItNicgaWQ9XCJlbmREYXRlSW5wdXRcIiB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPSdlbmQtZGF0ZSc+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdyZXNlcnZlLWNhci1idG4gY2VudGVyIHRleHQtbGcgcHgtMiB3LTQwIG15LTUgaCBweS0xIG14LWF1dG8gYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTUwMCByb3VuZGVkLWxnJyB0eXBlPSdidXR0b24nIGlkPSdyZXNlcnZlLWJ1dHRvbi0ke2lkfSc+IFJlc2VydmUgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gICBcbiAgICBgO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zUG9wVXApO1xuXG4gICAgY29uc3QgZGlzcGxheVJlc2VydmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucmVzZXJ2ZWQtY2FycycsXG4gICAgKTtcblxuICAgIGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkoaWQpLmNhdGNoKCgpID0+IHtcbiAgICAgIGRpc3BsYXlSZXNlcnZlcy50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzZXJ2ZUNhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZm9ybS5mb3JtIC5yZXNlcnZlLWNhci1idG4nLFxuICAgICk7XG5cbiAgICByZXNlcnZlQ2FyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgc2F2ZVJlc2VydmF0aW9uVG9BcGksXG4gICAgKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjcG9wLXVwIC5jbG9zZScsXG4gICAgKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocmVzZXJ2YXRpb25zUG9wVXApO1xuICAgICAgcmVzZXJ2YXRpb25zUG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd1Jlc2VydmF0aW9uTW9kYWw7XG4iLCJjb25zdCByZXNlcnZhdGlvbkNvdW50ZXIgPSAocmVzZXJ2YXRpb24pID0+IHtcbiAgaWYgKHJlc2VydmF0aW9uLmxlbmd0aCkge1xuICAgIHJldHVybiByZXNlcnZhdGlvbi5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNlcnZhdGlvbkNvdW50ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn0iLCJpbXBvcnQgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgZnJvbSBcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanNcIjtcbmltcG9ydCBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgZnJvbSBcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBIb21lQXBwbGljYXRpb24sXG4gIGdldEFsbENhcnNDb3VudCxcbn0gZnJvbSAnLi9tb2R1bGVzL2hvbWUvaG9tZS1hcHAnO1xuaW1wb3J0IHsgc2hvd0NvbW1lbnRNb2RhbCB9IGZyb20gJy4vbW9kdWxlcy9jb21tZW50cy9jb21tZW50cy1hcHAnO1xuaW1wb3J0IHNob3dSZXNlcnZhdGlvbk1vZGFsIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb24tYXBwJztcbmltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcblxuY29uc3QgaG9tZUFwcCA9IG5ldyBIb21lQXBwbGljYXRpb24oKTtcblxuY29uc3QgcmVnaXN0ZXJIb21lRXZlbnRzID0gKCkgPT4ge1xuICBjb25zdCBsaWtlc0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQnKTtcbiAgY29uc3QgYWxsQ2Fyc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLmNhcnMtbmF2LWVsZW1lbnQnLFxuICApO1xuXG4gIGFsbENhcnNDb3VudC50ZXh0Q29udGVudCA9IGdldEFsbENhcnNDb3VudCgpO1xuXG4gIGxpa2VzQnV0dG9ucy5mb3JFYWNoKChsaWtlQnV0dG9uKSA9PiBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICBob21lQXBwLnRvZ2dsZUhlYXJ0LFxuICApKTtcblxuICBjb25zdCBjb21tZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy5jYXItYnV0dG9ucyA+IC5jb21tZW50LWJ1dHRvbicsXG4gICk7XG5cbiAgY29tbWVudEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q29tbWVudE1vZGFsKSk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnJlc2VydmF0aW9uLWJ1dHRvbicsXG4gICk7XG5cbiAgcmVzZXJ2YXRpb25CdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Jlc2VydmF0aW9uTW9kYWwpKTtcbn1cblxuY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5sb2dvSW1nLnNyYyA9IEljb247XG5cbmhvbWVBcHAuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuICByZWdpc3RlckhvbWVFdmVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkNhciIsInllYXIiLCJpZCIsImhvcnNlcG93ZXIiLCJtYWtlIiwibW9kZWwiLCJwcmljZSIsImltZ1VybCIsImxpa2UiLCJnb29kQ2Fyc0lkIiwiQ2Fyc0FwaSIsInVybCIsImRhdGFQcm9taXNlIiwiZGF0YSIsImRhdGFPYmoiLCJmb3JFYWNoIiwiY2FyIiwiYWxsQ2Fyc0VuZHBvaW50IiwibWFwIiwib2JqIiwiaW1nX3VybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImZpbHRlciIsImluY2x1ZGVzIiwicm9vdEVuZHBvaW50IiwiZ2V0QWxsQ2FycyIsInRoZW4iLCJjYXJSZW5kZXIiLCJsaWtlQ2xhc3MiLCJ1bmxpa2VDbGFzcyIsIkludm9sdmVtZW50QXBpIiwiSG9tZUFwcGxpY2F0aW9uIiwiZ2V0QU51bWJlck9mQ2FycyIsImNhcnNBcGkiLCJudW1iZXIiLCJ0b0JlRGlzcGxheWVkIiwic2xpY2UiLCJtYWluIiwiaW5uZXJIVE1MIiwibWFpbkNvbnRlbnQiLCJyZWR1Y2UiLCJjb250ZW50IiwiY2FyRWxlbWVudCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJoZWFydEJ1dHRvbiIsImhlYXJ0Q291bnQiLCJuZXh0U2libGluZyIsImZpcnN0Q2hpbGQiLCJwYXJlbnROb2RlIiwiaXRlbV9pZCIsIk51bWJlciIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiaW52b2x2ZW1lbnRBcGkiLCJzZXRMaWtlc0RhdGEiLCJnZXRMaWtlc0RhdGEiLCJsaWtlc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibnVtYmVyT2ZMaWtlcyIsImZpbmQiLCJ1bmRlZmluZWQiLCJsaWtlcyIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBbGxDYXJzQ291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsInRvVXBwZXJDYXNlIiwiZmlsZUV4aXN0cyIsImltYWdlVXJsIiwiaHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJsaWtlc0RhdGEiLCJib2R5RGF0YSIsImxpa2VzRW5kcG9pbnQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RJZCIsInJlc2VydmF0aW9uQ291bnRlciIsImFwcElkIiwic2V0UmVzZXJ2ZWRUb0FQSSIsImRhdGFCb2R5IiwiZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSIsImRpc3BsYXlSZXNlcnZlcyIsImNvdW50ZXIiLCJjb3VudGVyQ29udGFpbmVyIiwiY29tbWVudCIsImNvbW1lbnRFbGVtZW50IiwiZGF0ZV9zdGFydCIsImRhdGVfZW5kIiwidXNlcm5hbWUiLCJFcnJvciIsImNhckFwaSIsInJlc2VydmF0aW9uc1BvcFVwIiwiY3JlYXRlRWxlbWVudCIsImNsZWFySW5wdXRzIiwidXNlck5hbWVJbnB1dCIsInN0YXJ0RGF0ZUlucHV0IiwiZW5kRGF0ZUlucHV0IiwidmFsdWUiLCJzYXZlUmVzZXJ2YXRpb25Ub0FwaSIsInRhcmdldCIsInNwbGl0IiwiYXQiLCJzaG93UmVzZXJ2YXRpb25Nb2RhbCIsImdldERhdGFQcm9taXNlIiwiYWRkIiwiaGlkZGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJyZXNlcnZlQ2FyQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlQnRuIiwicmVtb3ZlQ2hpbGQiLCJyZXNlcnZhdGlvbiIsImxlbmd0aCIsInNob3dDb21tZW50TW9kYWwiLCJJY29uIiwiaG9tZUFwcCIsInJlZ2lzdGVySG9tZUV2ZW50cyIsImxpa2VzQnV0dG9ucyIsImFsbENhcnNDb3VudCIsImxpa2VCdXR0b24iLCJ0b2dnbGVIZWFydCIsImNvbW1lbnRCdXR0b25zIiwiYnRuIiwicmVzZXJ2YXRpb25CdXR0b25zIiwibG9nb0ltZyIsInNyYyIsImluaXRpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9