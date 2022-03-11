/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/modules/comments/comment-counter.js":
/*!*************************************************!*\
  !*** ./src/modules/comments/comment-counter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var commentCounter = function commentCounter(commentData) {
  if (commentData.length) {
    return commentData.length;
  }

  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

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
/* harmony import */ var _comment_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-counter */ "./src/modules/comments/comment-counter.js");






var carApi = new _home_cars_api__WEBPACK_IMPORTED_MODULE_2__["default"]();
var modalContainer = document.querySelector('#modal-container');

var renderComment = function renderComment(dataItem) {
  return "<li class=\"text-lg\">\n        <span>".concat(dataItem.creation_date, "</span> -\n        <span class=\"text-slate-600 mx-2\">").concat(dataItem.username, " : </span>\n        <span>").concat(dataItem.comment, "</span>\n      </li>");
};

var displayCommentCounter = function displayCommentCounter(data) {
  var numberOfComments = (0,_comment_counter__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
  var commentCounterElement = document.querySelector('#modal .comment-counter-header');
  commentCounterElement.textContent = "(".concat(numberOfComments, ")");
};

var displayComment = function displayComment(data) {
  var CommentContainer = document.querySelector('#modal .comment-container');

  if (data.length > 0) {
    var containerString = '';
    data.forEach(function (dataItem) {
      containerString += "".concat(renderComment(dataItem), " \n");
    });
    CommentContainer.innerHTML = containerString;
  } else {
    CommentContainer.innerHTML = '';
  }
};

var createComment = function createComment(event) {
  event.preventDefault();
  var api = new _createComments__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var form = document.querySelector('.form');
  var comBtn = document.querySelector('.form button');
  var id = Number(comBtn.id.split('-')[2]);
  var usernameInput = document.querySelector('.form .input');
  var commentInput = document.querySelector('#modal-container .modal-items form textarea');
  var username = usernameInput.value;
  var comment = commentInput.value;
  var commentObj = new _commentData__WEBPACK_IMPORTED_MODULE_3__["default"](username, comment, id);
  api.addComment(commentObj).then(function () {
    return api.getComment(id);
  }).then(function (data) {
    displayComment(data);
    displayCommentCounter(data);
  });
  form.reset();
};
var showCommentModal = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
    var id, form1, api, close;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = Number(e.target.parentNode.parentNode.id);
            _context.next = 3;
            return carApi.getDataPromise().then(function (data) {
              if (modalContainer.classList.contains('hidden')) {
                modalContainer.classList.add('show');
                modalContainer.classList.remove('hidden');
              }

              modalContainer.innerHTML = "\n    <div\n    class=\"relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\"\n    id=\"modal\"\n  >\n    <div class=\"h-96 img-container\">\n      <img\n        class=\"w-full h-full object-cover\"\n        src=\"".concat(data[id].imgUrl, "\"\n        alt=\"\"\n      />\n      <span id=\"close-modal-btn\" class=\"close\">\n        <i\n          class=\"fas fa-times absolute top-0 right-0 mt-3 mr-3 text-3xl text-white cursor-pointer\"\n        ></i>\n      </span>\n    </div>\n    <h2 class=\"text-center text-xl text-slate-600 py-5 font-bold\">").concat(data[id].make, "</h2>\n    <div class=\"flex justify-between flex-col w-1/2 mx-auto gap-y-5\">\n      <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Model</h3>\n          <span class=\"text-slate-600\">").concat(data[id].model, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Year</h3>\n          <span class=\"text-slate-600\">").concat(data[id].year, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>horsepower</h3>\n          <span class=\"text-slate-600\">").concat(data[id].horsepower, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Price</h3>\n          <span class=\"text-slate-600\">$").concat(data[id].price, "</span>\n        </div>\n      </div>\n    </div>\n    <h2 class=\"text-center text-xl py-4 font-bold text-slate-600\">\n      Comments <span class=\"comment-counter-header\"></span>\n    </h2>\n    <ul class=\"comment-container flex justify-center flex-col mx-auto items-center py-2\">\n    </ul>\n    <h2 class=\"text-center py-4 text-xl font-bold text-slate-600\">\n      Add Comment\n    </h2>\n    <form class=\"flex justify-center flex-col mx-auto items-center form\" id='comment-form'>\n\n    <input class=\"px-2 w-1/2 py-2 border-gray-400 rounded-lg h-10 focus:outline-none\n      focus:border-violet-600 input\" placeholder=\"Enter your username\" />\n     <textarea\n        class=\"w-1/2 h-32 px-2 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-violet-600 comment\"\n        placeholder=\"Write your comment here\" type=\"text\" \n      ></textarea>\n      \n      <button\n        id=\"comment-button-").concat(id, "\"\n        class=\"comment-button text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg\"\n        type=\"submit\"\n      >\n        Comment\n      </button>\n    </form>\n    \n  </div>\n    ");
            });

          case 3:
            form1 = document.querySelector('.form');
            form1.addEventListener('submit', createComment); // load comments

            api = new _createComments__WEBPACK_IMPORTED_MODULE_4__["default"]();
            _context.next = 8;
            return api.getComment(id).then(function (commentData) {
              displayComment(commentData);
              displayCommentCounter(commentData);
            })["catch"](function (commentData) {
              displayComment([]);
              displayCommentCounter(commentData);
            });

          case 8:
            close = document.querySelector('#modal-container .modal-items .img-container .close');
            close.addEventListener('click', function () {
              modalContainer.classList.add('hidden');
              modalContainer.classList.remove('show');
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function showCommentModal(_x) {
    return _ref.apply(this, arguments);
  };
}();

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
        var rootUrl,
            id,
            url,
            response,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rootUrl = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.commentsEndpoint;
                id = _args.length > 1 ? _args[1] : undefined;
                _context.prev = 2;
                url = "".concat(rootUrl, "?item_id=").concat(id);
                _context.next = 6;
                return fetch(url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 6:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", []);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
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

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getComment", function (id) {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _getComment).call(_this, _this.commentsEndpoint, id);
  });

  this.projectId = 'K2k68wPBsTKAT68ziNEu';
  this.rootEndpoint = _url;
  this.commentsEndpoint = "".concat(_url).concat(this.projectId, "/comments");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FB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QkFEbUIsQ0FBckI7QUFJQXNKLEVBQUFBLFlBQVksQ0FBQzlJLFdBQWIsR0FBMkJpRyx1RUFBZSxFQUExQztBQUVBNEMsRUFBQUEsWUFBWSxDQUFDekksT0FBYixDQUFxQixVQUFDMkksVUFBRDtBQUFBLFdBQWdCQSxVQUFVLENBQUN6RyxnQkFBWCxDQUNuQyxPQURtQyxFQUVuQ3FHLE9BQU8sQ0FBQ0ssV0FGMkIsQ0FBaEI7QUFBQSxHQUFyQjtBQUtBLE1BQU1DLGNBQWMsR0FBRzFKLFFBQVEsQ0FBQ3FHLGdCQUFULENBQ3JCLGdDQURxQixDQUF2QjtBQUlBcUQsRUFBQUEsY0FBYyxDQUFDN0ksT0FBZixDQUF1QixVQUFDOEksR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQzVHLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCaEIsNEVBQTlCLENBQVQ7QUFBQSxHQUF2QjtBQUVBLE1BQU02SCxrQkFBa0IsR0FBRzVKLFFBQVEsQ0FBQ3FHLGdCQUFULENBQ3pCLHFCQUR5QixDQUEzQjtBQUlBdUQsRUFBQUEsa0JBQWtCLENBQUMvSSxPQUFuQixDQUEyQixVQUFDOEksR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQzVHLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCMkYsNkVBQTlCLENBQVQ7QUFBQSxHQUEzQjtBQUNELENBeEJEOztBQTBCQSxJQUFNbUIsT0FBTyxHQUFHN0osUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhCO0FBQ0E0SixPQUFPLENBQUNDLEdBQVIsR0FBY1gsNkNBQWQ7QUFFQUMsT0FBTyxDQUFDVyxVQUFSLEdBQXFCbkksSUFBckIsQ0FBMEIsWUFBTTtBQUM5QnlILEVBQUFBLGtCQUFrQjtBQUNuQixDQUZELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnQtY291bnRlci5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnREYXRhLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY29tbWVudHMtYXBwLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY3JlYXRlQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2Nhci5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWUvY2Fycy1hcGkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2hvbWUtYXBwLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZS9ob21lLXV0aWxzLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZS9pbnZvbHZlbWVudC1hcGkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb24tYXBwLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9uLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzP2ZlOWUiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiY29uc3QgY29tbWVudENvdW50ZXIgPSAoY29tbWVudERhdGEpID0+IHtcbiAgaWYgKGNvbW1lbnREYXRhLmxlbmd0aCkge1xuICAgIHJldHVybiBjb21tZW50RGF0YS5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Q291bnRlcjtcbiIsImNsYXNzIENvbW1lbnREYXRhIHtcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIGNvbW1lbnQsIGlkKSB7XG4gICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIHRoaXMuY29tbWVudCA9IGNvbW1lbnQ7XG4gICAgdGhpcy5pdGVtX2lkID0gaWQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnREYXRhO1xuIiwiaW1wb3J0IENhcnNBcGkgZnJvbSAnLi4vaG9tZS9jYXJzLWFwaSc7XG5pbXBvcnQgQ29tbWVudERhdGEgZnJvbSAnLi9jb21tZW50RGF0YSc7XG5pbXBvcnQgQXBpIGZyb20gJy4vY3JlYXRlQ29tbWVudHMnO1xuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudC1jb3VudGVyJztcblxuY29uc3QgY2FyQXBpID0gbmV3IENhcnNBcGkoKTtcblxuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI21vZGFsLWNvbnRhaW5lcicsXG4pO1xuXG5jb25zdCByZW5kZXJDb21tZW50ID0gKGRhdGFJdGVtKSA9PiBgPGxpIGNsYXNzPVwidGV4dC1sZ1wiPlxuICAgICAgICA8c3Bhbj4ke2RhdGFJdGVtLmNyZWF0aW9uX2RhdGV9PC9zcGFuPiAtXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDAgbXgtMlwiPiR7ZGF0YUl0ZW0udXNlcm5hbWV9IDogPC9zcGFuPlxuICAgICAgICA8c3Bhbj4ke2RhdGFJdGVtLmNvbW1lbnR9PC9zcGFuPlxuICAgICAgPC9saT5gO1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudENvdW50ZXIgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBudW1iZXJPZkNvbW1lbnRzID0gY29tbWVudENvdW50ZXIoZGF0YSk7XG4gIGNvbnN0IGNvbW1lbnRDb3VudGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNtb2RhbCAuY29tbWVudC1jb3VudGVyLWhlYWRlcicsXG4gICk7XG5cbiAgY29tbWVudENvdW50ZXJFbGVtZW50LnRleHRDb250ZW50ID0gYCgke251bWJlck9mQ29tbWVudHN9KWA7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IENvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjbW9kYWwgLmNvbW1lbnQtY29udGFpbmVyJyxcbiAgKTtcbiAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgIGxldCBjb250YWluZXJTdHJpbmcgPSAnJztcbiAgICBkYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICBjb250YWluZXJTdHJpbmcgKz0gYCR7cmVuZGVyQ29tbWVudChkYXRhSXRlbSl9IFxcbmA7XG4gICAgfSk7XG5cbiAgICBDb21tZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRhaW5lclN0cmluZztcbiAgfSBlbHNlIHtcbiAgICBDb21tZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBhcGkgPSBuZXcgQXBpKCk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICBjb25zdCBjb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybSBidXR0b24nKTtcbiAgY29uc3QgaWQgPSBOdW1iZXIoY29tQnRuLmlkLnNwbGl0KCctJylbMl0pO1xuICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0gLmlucHV0Jyk7XG4gIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNtb2RhbC1jb250YWluZXIgLm1vZGFsLWl0ZW1zIGZvcm0gdGV4dGFyZWEnLFxuICApO1xuXG4gIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRJbnB1dC52YWx1ZTtcbiAgY29uc3QgY29tbWVudE9iaiA9IG5ldyBDb21tZW50RGF0YSh1c2VybmFtZSwgY29tbWVudCwgaWQpO1xuXG4gIGFwaVxuICAgIC5hZGRDb21tZW50KGNvbW1lbnRPYmopXG4gICAgLnRoZW4oKCkgPT4gYXBpLmdldENvbW1lbnQoaWQpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5Q29tbWVudChkYXRhKTtcbiAgICAgIGRpc3BsYXlDb21tZW50Q291bnRlcihkYXRhKTtcbiAgICB9KTtcbiAgZm9ybS5yZXNldCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb21tZW50TW9kYWwgPSBhc3luYyAoZSkgPT4ge1xuICBjb25zdCBpZCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICBhd2FpdCBjYXJBcGkuZ2V0RGF0YVByb21pc2UoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBoLWF1dG8gbW9kYWwtaXRlbXMgbS1hdXRvIGJnLXdoaXRlIGJvcmRlci12aW9sZXQtNjAwIGJvcmRlci1zb2xpZCBib3JkZXItNFwiXG4gICAgaWQ9XCJtb2RhbFwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiaC05NiBpbWctY29udGFpbmVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9XCIke2RhdGFbaWRdLmltZ1VybH1cIlxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgLz5cbiAgICAgIDxzcGFuIGlkPVwiY2xvc2UtbW9kYWwtYnRuXCIgY2xhc3M9XCJjbG9zZVwiPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLXRpbWVzIGFic29sdXRlIHRvcC0wIHJpZ2h0LTAgbXQtMyBtci0zIHRleHQtM3hsIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQteGwgdGV4dC1zbGF0ZS02MDAgcHktNSBmb250LWJvbGRcIj4ke2RhdGFbaWRdLm1ha2V9PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2wgdy0xLzIgbXgtYXV0byBnYXAteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG14LWF1dG8gZmxleC13cmFwIGdhcC15LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctMi81IGZsZXggdGV4dC1sZyBqdXN0aWZ5LWNlbnRlciBnYXAteC00XCI+XG4gICAgICAgICAgPGgzPk1vZGVsPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtkYXRhW2lkXS5tb2RlbH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICA8aDM+WWVhcjwvaDM+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiR7ZGF0YVtpZF0ueWVhcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICA8aDM+aG9yc2Vwb3dlcjwvaDM+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiR7ZGF0YVtpZF0uaG9yc2Vwb3dlcn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICA8aDM+UHJpY2U8L2gzPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4kJHtkYXRhW2lkXS5wcmljZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC14bCBweS00IGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTYwMFwiPlxuICAgICAgQ29tbWVudHMgPHNwYW4gY2xhc3M9XCJjb21tZW50LWNvdW50ZXItaGVhZGVyXCI+PC9zcGFuPlxuICAgIDwvaDI+XG4gICAgPHVsIGNsYXNzPVwiY29tbWVudC1jb250YWluZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteC1hdXRvIGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgPC91bD5cbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS00IHRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtNjAwXCI+XG4gICAgICBBZGQgQ29tbWVudFxuICAgIDwvaDI+XG4gICAgPGZvcm0gY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sIG14LWF1dG8gaXRlbXMtY2VudGVyIGZvcm1cIiBpZD0nY29tbWVudC1mb3JtJz5cblxuICAgIDxpbnB1dCBjbGFzcz1cInB4LTIgdy0xLzIgcHktMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1sZyBoLTEwIGZvY3VzOm91dGxpbmUtbm9uZVxuICAgICAgZm9jdXM6Ym9yZGVyLXZpb2xldC02MDAgaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdXNlcm5hbWVcIiAvPlxuICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3M9XCJ3LTEvMiBoLTMyIHB4LTIgcHktMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXZpb2xldC02MDAgY29tbWVudFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBjb21tZW50IGhlcmVcIiB0eXBlPVwidGV4dFwiIFxuICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICBcbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJjb21tZW50LWJ1dHRvbi0ke2lkfVwiXG4gICAgICAgIGNsYXNzPVwiY29tbWVudC1idXR0b24gdGV4dC1sZyBweC0yIHctNDAgbXktNSBoIHB5LTEgbXgtYXV0byBib3JkZXItMiBob3Zlcjpib3JkZXItMiBob3ZlcjpzaGFkb3ctc20gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1za3ktNTAwIHJvdW5kZWQtbGdcIlxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgQ29tbWVudFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIFxuICA8L2Rpdj5cbiAgICBgO1xuICB9KTtcblxuICBjb25zdCBmb3JtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gIGZvcm0xLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZUNvbW1lbnQpO1xuXG4gIC8vIGxvYWQgY29tbWVudHNcbiAgY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuXG4gIGF3YWl0IGFwaVxuICAgIC5nZXRDb21tZW50KGlkKVxuICAgIC50aGVuKChjb21tZW50RGF0YSkgPT4ge1xuICAgICAgZGlzcGxheUNvbW1lbnQoY29tbWVudERhdGEpO1xuICAgICAgZGlzcGxheUNvbW1lbnRDb3VudGVyKGNvbW1lbnREYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoY29tbWVudERhdGEpID0+IHtcbiAgICAgIGRpc3BsYXlDb21tZW50KFtdKTtcbiAgICAgIGRpc3BsYXlDb21tZW50Q291bnRlcihjb21tZW50RGF0YSk7XG4gICAgfSk7XG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjbW9kYWwtY29udGFpbmVyIC5tb2RhbC1pdGVtcyAuaW1nLWNvbnRhaW5lciAuY2xvc2UnLFxuICApO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH0pO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICApIHtcbiAgICB0aGlzLnByb2plY3RJZCA9ICdLMms2OHdQQnNUS0FUNjh6aU5FdSc7XG4gICAgdGhpcy5yb290RW5kcG9pbnQgPSB1cmw7XG4gICAgdGhpcy5jb21tZW50c0VuZHBvaW50ID0gYCR7dXJsfSR7dGhpcy5wcm9qZWN0SWR9L2NvbW1lbnRzYDtcbiAgfVxuXG4gICNnZXRDb21tZW50ID0gYXN5bmMgKFxuICAgIHJvb3RVcmwgPSB0aGlzLmNvbW1lbnRzRW5kcG9pbnQsXG4gICAgaWQsXG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHtyb290VXJsfT9pdGVtX2lkPSR7aWR9YDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgI2FkZENvbW1lbnQgPSBhc3luYyAoXG4gICAgdXJsID0gdGhpcy5jb21tZW50c0VuZHBvaW50LFxuICAgIGJvZHlEYXRhLFxuICApID0+IHtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlEYXRhKSxcbiAgICB9KTtcbiAgfTtcblxuICBhZGRDb21tZW50ID0gKGJvZHlEYXRhKSA9PiB0aGlzLiNhZGRDb21tZW50KHRoaXMuY29tbWVudHNFbmRwb2ludCwgYm9keURhdGEpO1xuXG4gIGdldENvbW1lbnQgPSAoaWQpID0+IHRoaXMuI2dldENvbW1lbnQodGhpcy5jb21tZW50c0VuZHBvaW50LCBpZCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICB5ZWFyLFxuICAgIGlkLFxuICAgIGhvcnNlcG93ZXIsXG4gICAgbWFrZSxcbiAgICBtb2RlbCxcbiAgICBwcmljZSxcbiAgICBpbWdVcmwsXG4gICkge1xuICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaG9yc2Vwb3dlciA9IGhvcnNlcG93ZXI7XG4gICAgdGhpcy5tYWtlID0gbWFrZTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xuICAgIHRoaXMubGlrZSA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgQ2FyIGZyb20gJy4vY2FyJztcbmltcG9ydCB7IGdvb2RDYXJzSWQgfSBmcm9tICcuL2hvbWUtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJzQXBpIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdXJsID0gJ2h0dHBzOi8vcHJpdmF0ZS1hbm9uLTY2ZmJiNzk3NzQtY2Fyc2FwaTEuYXBpYXJ5LW1vY2suY29tLycsXG4gICkge1xuICAgIHRoaXMucm9vdEVuZHBvaW50ID0gdXJsO1xuICAgIHRoaXMuYWxsQ2Fyc0VuZHBvaW50ID0gYCR7dXJsfWNhcnNgO1xuICAgIHRoaXMuZ29vZENhcnNJZCA9IGdvb2RDYXJzSWQ7XG4gICAgdGhpcy5kYXRhUHJvbWlzZSA9IHRoaXMuZ2V0QWxsQ2FycygpLnRoZW4oKGRhdGEpID0+IHRoaXMuI2Zvcm1hdENhcnMoZGF0YSkpO1xuICB9XG5cbiAgZ2V0RGF0YVByb21pc2UgPSAoKSA9PiB0aGlzLmRhdGFQcm9taXNlO1xuXG4gICNmb3JtYXRDYXJzID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBkYXRhT2JqID0ge307XG4gICAgZGF0YS5mb3JFYWNoKChjYXIpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gYCR7Y2FyLmlkfWA7XG4gICAgICBkYXRhT2JqW2lkXSA9IGNhcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhT2JqO1xuICB9O1xuXG4gIGdldENhckVuZHBvaW50RnJvbUlkID0gKGlkKSA9PiBgJHt0aGlzLmFsbENhcnNFbmRwb2ludH0vJHtpZH1gO1xuXG4gICNmb3JtYXREYXRhID0gKGRhdGEpID0+IGRhdGEubWFwKChvYmopID0+IHtcbiAgICBjb25zdCBjYXIgPSBuZXcgQ2FyKCk7XG4gICAgY2FyLnllYXIgPSBvYmoueWVhcjtcbiAgICBjYXIuaWQgPSBvYmouaWQ7XG4gICAgY2FyLmhvcnNlcG93ZXIgPSBvYmouaG9yc2Vwb3dlcjtcbiAgICBjYXIubWFrZSA9IG9iai5tYWtlO1xuICAgIGNhci5tb2RlbCA9IG9iai5tb2RlbDtcbiAgICBjYXIucHJpY2UgPSBvYmoucHJpY2U7XG4gICAgY2FyLmltZ1VybCA9IG9iai5pbWdfdXJsO1xuICAgIHJldHVybiBjYXI7XG4gIH0pO1xuXG4gIGdldEFsbENhcnMgPSBhc3luYyAodXJsID0gdGhpcy5hbGxDYXJzRW5kcG9pbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGRhdGEgPSBkYXRhLmZpbHRlcigob2JqKSA9PiB0aGlzLmdvb2RDYXJzSWQuaW5jbHVkZXMob2JqLmlkKSk7XG5cbiAgICBkYXRhID0gYXdhaXQgdGhpcy4jZm9ybWF0RGF0YShkYXRhKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuIiwiaW1wb3J0IENhcnNBcGkgZnJvbSAnLi9jYXJzLWFwaSc7XG5pbXBvcnQge1xuICBjYXJSZW5kZXIsXG4gIGxpa2VDbGFzcyxcbiAgdW5saWtlQ2xhc3MsXG59IGZyb20gJy4vaG9tZS11dGlscyc7XG5pbXBvcnQgSW52b2x2ZW1lbnRBcGkgZnJvbSAnLi9pbnZvbHZlbWVudC1hcGknO1xuXG5leHBvcnQgY2xhc3MgSG9tZUFwcGxpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJzQXBpID0gbmV3IENhcnNBcGkoKTtcblxuICAgIC8vIERPTSBlbGVtZW50c1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIHRoaXMuaW52b2x2ZW1lbnRBcGkgPSBuZXcgSW52b2x2ZW1lbnRBcGkoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUgPSAoKSA9PiB0aGlzLmdldEFOdW1iZXJPZkNhcnMoMjQpLnRoZW4oKCkgPT4gdGhpcy4jdXBkYXRlTGlrZXMoKSk7XG5cbiAgZ2V0QWxsQ2FycyA9ICgpID0+IHRoaXMuY2Fyc0FwaS5nZXRBbGxDYXJzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIHRoaXMuI2Rpc3BsYXlDYXJzKGRhdGEpO1xuICAgIHJldHVybiBkYXRhO1xuICB9KTtcblxuICBnZXRBTnVtYmVyT2ZDYXJzID0gKG51bWJlcikgPT4gdGhpcy5jYXJzQXBpLmdldEFsbENhcnMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc3QgdG9CZURpc3BsYXllZCA9IGRhdGEuc2xpY2UoMCwgbnVtYmVyKTtcblxuICAgIHRoaXMuI2Rpc3BsYXlDYXJzKHRvQmVEaXNwbGF5ZWQpO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0pO1xuXG4gICNjbGVhck1haW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9ICcnO1xuICB9O1xuXG4gICNjcmVhdGVDYXJFbGVtZW50ID0gKGNhcikgPT4gY2FyUmVuZGVyKGNhci5pZCwgY2FyLmltZ1VybCwgY2FyLm1ha2UsIGNhci5tb2RlbCk7XG5cbiAgI2Rpc3BsYXlDYXJzID0gKHRvQmVEaXNwbGF5ZWQpID0+IHtcbiAgICB0aGlzLiNjbGVhck1haW4oKTtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IHRvQmVEaXNwbGF5ZWQucmVkdWNlKFxuICAgICAgKGNvbnRlbnQsIGNhcikgPT4ge1xuICAgICAgICBjb25zdCBjYXJFbGVtZW50ID0gdGhpcy4jY3JlYXRlQ2FyRWxlbWVudChjYXIpO1xuICAgICAgICByZXR1cm4gYCR7Y29udGVudH1cXG4ke2NhckVsZW1lbnR9YDtcbiAgICAgIH0sXG4gICAgICAnJyxcbiAgICApO1xuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBtYWluQ29udGVudDtcbiAgfTtcblxuICB0b2dnbGVIZWFydCA9IChlKSA9PiB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYXJ0JykpIHtcbiAgICAgIGNvbnN0IGhlYXJ0QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgaGVhcnRDb3VudCA9IGhlYXJ0QnV0dG9uLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgICBjb25zdCB7IGlkIH0gPSBoZWFydEJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgIGRhdGEuaXRlbV9pZCA9IE51bWJlcihpZCk7XG5cbiAgICAgIGlmIChoZWFydEJ1dHRvbi5jbGFzc05hbWUgPT09IGxpa2VDbGFzcykge1xuICAgICAgICBoZWFydEJ1dHRvbi5jbGFzc05hbWUgPSB1bmxpa2VDbGFzcztcbiAgICAgICAgaGVhcnRDb3VudC50ZXh0Q29udGVudCA9ICtoZWFydENvdW50LnRleHRDb250ZW50IC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYXJ0QnV0dG9uLmNsYXNzTmFtZSA9IGxpa2VDbGFzcztcbiAgICAgICAgaGVhcnRDb3VudC50ZXh0Q29udGVudCA9ICtoZWFydENvdW50LnRleHRDb250ZW50ICsgMTtcbiAgICAgICAgdGhpcy5pbnZvbHZlbWVudEFwaS5zZXRMaWtlc0RhdGEoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gICN1cGRhdGVMaWtlcyA9ICgpID0+IHtcbiAgICB0aGlzLmludm9sdmVtZW50QXBpLmdldExpa2VzRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICAgIGxpa2VzRWxlbWVudHMuZm9yRWFjaCgobGlrZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBsaWtlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGxldCBudW1iZXJPZkxpa2VzID0gZGF0YS5maW5kKFxuICAgICAgICAgIChlKSA9PiBOdW1iZXIoZS5pdGVtX2lkKSA9PT0gTnVtYmVyKGlkKSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG51bWJlck9mTGlrZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG51bWJlck9mTGlrZXMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bWJlck9mTGlrZXMgPSBudW1iZXJPZkxpa2VzLmxpa2VzO1xuICAgICAgICB9XG4gICAgICAgIGxpa2UudGV4dENvbnRlbnQgPSBudW1iZXJPZkxpa2VzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxDYXJzQ291bnQgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIHJldHVybiBtYWluLmNoaWxkRWxlbWVudENvdW50O1xufTtcbiIsImV4cG9ydCBjb25zdCBsaWtlQ2xhc3MgPSAnaGVhcnQgZmFzIGZhLWhlYXJ0JztcbmV4cG9ydCBjb25zdCB1bmxpa2VDbGFzcyA9ICdoZWFydCBmYXIgZmEtaGVhcnQnO1xuZXhwb3J0IGNvbnN0IGNhclJlbmRlciA9IChcbiAgaWQsXG4gIGltZ1VybCxcbiAgbWFrZSxcbiAgbW9kZWwsXG4gIGxpa2VzID0gMCxcbikgPT4gYDxkaXZcbiAgICAgIGNsYXNzPVwiY2FyLWNhcmQgZmxleCBmbGV4LWNvbCBnYXAtMiBib3JkZXItNCByb3VuZGVkLW1kIGJvcmRlci12aW9sZXQtNjAwXCIgaWQ9XCIke2lkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhci1pbWcgaC01MCBvYmplY3QtY292ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInctZnVsbFwiXG4gICAgICAgICAgc3JjPVwiJHtpbWdVcmx9XCJcbiAgICAgICAgICBhbHQ9XCIke21ha2UudG9VcHBlckNhc2UoKX0gJHttb2RlbC50b1VwcGVyQ2FzZSgpfVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyLWluZm8gZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIG10LWF1dG9cIj5cbiAgICAgICAgPGgyPiR7bWFrZS50b1VwcGVyQ2FzZSgpfSAke21vZGVsLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcmVkLTYwMFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiJHt1bmxpa2VDbGFzc31cIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrXCI+PHNwYW4gY2xhc3M9XCJsaWtlc1wiPiR7bGlrZXN9PC9zcGFuPiA8c3Bhbj5saWtlczwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyLWJ1dHRvbnMgZmxleCBmbGV4LWNvbCBnYXAtMyBwLTIgXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJtb2RlbFwiIGNsYXNzPVwiY29tbWVudC1idXR0b24gcHgtMiBweS0xIGJvcmRlci0yIGhvdmVyOmJvcmRlci0yIGhvdmVyOnNoYWRvdy1zbSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS01MDBcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInJlc2VydmF0aW9uLWJ1dHRvbiBweC0yIHB5LTEgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTUwMFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuXG5leHBvcnQgY29uc3QgZmlsZUV4aXN0cyA9IChpbWFnZVVybCkgPT4ge1xuICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaHR0cC5vcGVuKCdIRUFEJywgaW1hZ2VVcmwsIGZhbHNlKTtcbiAgaHR0cC5zZW5kKCk7XG5cbiAgcmV0dXJuIE51bWJlcihodHRwLnN0YXR1cykgIT09IDQwNDtcbn07XG5cbmV4cG9ydCBjb25zdCBnb29kQ2Fyc0lkID0gW1xuICAxLCA1LCA3LCA4LCAxMSwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjUsXG4gIDI2LCAyOSwgMzEsIDMyLCAzNCwgMzUsIDM5LCA0MSwgNDMsIDQ4LCA0OSwgNTAsIDUxLCA1MyxcbiAgNTUsIDU2LCA1NywgNTgsIDYwLCA2MiwgNjMsIDY0LCA2NSwgNjgsIDY5LCA3MywgNzUsIDc2LFxuICA3OSwgODMsIDg0LCA4NSwgODYsIDg3LCA4OCwgOTAsIDk1LCA5OCwgMTAwLCAxMDEsIDEwMixcbiAgMTA0LCAxMDUsIDEwNiwgMTA3LCAxMDgsIDEwOSwgMTEwLCAxMTIsIDExMywgMTE0LCAxMTUsXG4gIDExNiwgMTE3LCAxMTgsIDExOSwgMTIyLCAxMjMsIDEyNCwgMTI2LCAxMjgsIDEyOSwgMTMwLFxuICAxMzMsIDEzNCwgMTM5LCAxNDEsIDE0MywgMTQ0LCAxNDUsIDE0NiwgMTQ3LCAxNDgsIDE0OSxcbiAgMTUwLCAxNTEsIDE1NCwgMTU1LCAxNTcsIDE1OCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsXG4gIDE2NiwgMTY4LCAxNjksIDE3MSwgMTcyLCAxNzgsIDE3OSwgMTgwLCAxODEsIDE4MywgMTg0LFxuICAxODUsIDE4OCwgMTg5LCAxOTIsIDE5NCwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMyxcbiAgMjA1LCAyMDcsIDIxNCwgMjE1LCAyMTYsIDIxNywgMjE5LCAyMzAsIDI0MCwgMjQ0LCAyNDUsXG4gIDI0NiwgMjQ3LCAyNTAsIDI1MSwgMjUyLCAyNTQsIDI1NSwgMjU5LCAyNjAsIDI2MSwgMjYyLFxuICAyNjMsIDI3MSwgMjczLCAyNzQsIDI3NywgMjc4LCAyODEsIDI4MiwgMjgzLCAyODQsIDI4NSxcbiAgMjg2LCAyODgsIDI5MCwgMjkyLCAyOTQsIDI5NSwgMjk2LCAyOTgsIDMwMCwgMzAxLCAzMDIsXG4gIDMwMywgMzA0LCAzMDUsIDMwNiwgMzA3LCAzMTMsIDMxNSwgMzE4LCAzMTksIDMyMiwgMzIzLFxuICAzMjQsIDMyNSwgMzI2LCAzMjcsIDMyOSwgMzMwLCAzMzIsIDMzMywgMzM1LCAzMzYsIDMzNyxcbiAgMzM4LCAzNDUsIDM0NiwgMzQ3LCAzNDgsIDM1MCwgMzUxLCAzNTMsIDM1NCwgMzU1LCAzNTcsXG4gIDM1OSwgMzYxLCAzNjIsIDM2NiwgMzY5LCAzNzEsXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBcGkge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJyxcbiAgKSB7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSAnSzJrNjh3UEJzVEtBVDY4emlORXUnO1xuICAgIHRoaXMucm9vdEVuZHBvaW50ID0gdXJsO1xuICAgIHRoaXMubGlrZXNFbmRwb2ludCA9IGAke3VybH0ke3RoaXMucHJvamVjdElkfS9saWtlc2A7XG4gICAgdGhpcy5saWtlc0RhdGEgPSB0aGlzLiNnZXRMaWtlcygpO1xuICB9XG5cbiAgZ2V0TGlrZXNEYXRhID0gKCkgPT4gdGhpcy5saWtlc0RhdGE7XG5cbiAgc2V0TGlrZXNEYXRhID0gYXN5bmMgKGJvZHlEYXRhKSA9PiB7XG4gICAgYXdhaXQgdGhpcy4jYWRkTGlrZSh0aGlzLmxpa2VzRW5kcG9pbnQsIGJvZHlEYXRhKTtcbiAgICB0aGlzLmxpa2VzRGF0YSA9IGF3YWl0IHRoaXMuI2dldExpa2VzKCk7XG4gICAgcmV0dXJuIHRoaXMubGlrZXNEYXRhO1xuICB9O1xuXG4gICNnZXRMaWtlcyA9IGFzeW5jICh1cmwgPSB0aGlzLmxpa2VzRW5kcG9pbnQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gICNhZGRMaWtlID0gYXN5bmMgKHVybCA9IHRoaXMubGlrZXNFbmRwb2ludCwgYm9keURhdGEpID0+IHtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlEYXRhKSxcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCByZXNlcnZhdGlvbkNvdW50ZXIgZnJvbSAnLi9yZXNlcnZhdGlvbi1jb3VudGVyJztcblxuY29uc3QgYXBwSWQgPSAnSzJrNjh3UEJzVEtBVDY4emlORXUnO1xuXG5jb25zdCBzZXRSZXNlcnZlZFRvQVBJID0gYXN5bmMgKGRhdGFCb2R5KSA9PiB7XG4gIGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9yZXNlcnZhdGlvbnNgLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFCb2R5KSxcbiAgICB9LFxuICApO1xufTtcblxuY29uc3QgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBJZH0vcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JHtpZH1gO1xuICBjb25zdCBkaXNwbGF5UmVzZXJ2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucmVzZXJ2ZWQtY2FycycsXG4gICk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBhd2FpdCByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY291bnRlciA9IHJlc2VydmF0aW9uQ291bnRlcihkYXRhKTtcblxuICAgICAgY29uc3QgY291bnRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudGVyLXNwYW4nKTtcbiAgICAgIGNvdW50ZXJDb250YWluZXIuaW5uZXJIVE1MID0gYCgke2NvdW50ZXJ9KWA7XG5cbiAgICAgIGRpc3BsYXlSZXNlcnZlcy5pbm5lckhUTUwgPSBkYXRhLnJlZHVjZShcbiAgICAgICAgKGNvbnRlbnQsIGNvbW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IGA8bGk+JHtjb21tZW50LmRhdGVfc3RhcnR9IC0gJHtjb21tZW50LmRhdGVfZW5kfSBieSAke2NvbW1lbnQudXNlcm5hbWV9PC9saT5gO1xuICAgICAgICAgIGNvbnRlbnQgKz0gY29tbWVudEVsZW1lbnQ7XG4gICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgICcnLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZldGNoIERhdGEgRmFpbGVkJyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHNldFJlc2VydmVkVG9BUEksIGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkgfTtcbiIsImltcG9ydCBDYXJzQXBpIGZyb20gJy4uL2hvbWUvY2Fycy1hcGknO1xuaW1wb3J0IHtcbiAgc2V0UmVzZXJ2ZWRUb0FQSSxcbiAgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSxcbn0gZnJvbSAnLi9pbnZvbHZlbWVudEFQSSc7XG5cbmNvbnN0IGNhckFwaSA9IG5ldyBDYXJzQXBpKCk7XG5cbmNvbnN0IHJlc2VydmF0aW9uc1BvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBjbGVhcklucHV0cyA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyN1c2VyTmFtZUlucHV0JyxcbiAgKTtcblxuICBjb25zdCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNzdGFydERhdGVJbnB1dCcsXG4gICk7XG5cbiAgY29uc3QgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZERhdGVJbnB1dCcpO1xuXG4gIHVzZXJOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgc3RhcnREYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgZW5kRGF0ZUlucHV0LnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBzYXZlUmVzZXJ2YXRpb25Ub0FwaSA9IChlKSA9PiB7XG4gIGNvbnN0IGlkID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKS5hdCgtMSk7XG4gIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjdXNlck5hbWVJbnB1dCcsXG4gICk7XG5cbiAgY29uc3Qgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjc3RhcnREYXRlSW5wdXQnLFxuICApO1xuXG4gIGNvbnN0IGVuZERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmREYXRlSW5wdXQnKTtcblxuICBjb25zdCBkYXRhQm9keSA9IHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgICB1c2VybmFtZTogdXNlck5hbWVJbnB1dC52YWx1ZSxcbiAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGVJbnB1dC52YWx1ZSxcbiAgICBkYXRlX2VuZDogZW5kRGF0ZUlucHV0LnZhbHVlLFxuICB9O1xuXG4gIHNldFJlc2VydmVkVG9BUEkoZGF0YUJvZHkpLnRoZW4oKCkgPT4ge1xuICAgIGNsZWFySW5wdXRzKCk7XG4gICAgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSShpZCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1Jlc2VydmF0aW9uTW9kYWwgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuXG4gIGNhckFwaS5nZXREYXRhUHJvbWlzZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICByZXNlcnZhdGlvbnNQb3BVcC5jbGFzc0xpc3QuYWRkKFxuICAgICAgJ3Jlc2VydmF0aW9uLWNvbnRhaW5lcicsXG4gICAgKTtcbiAgICByZXNlcnZhdGlvbnNQb3BVcC5pZCA9ICdwb3AtdXAnO1xuICAgIHJlc2VydmF0aW9uc1BvcFVwLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXJ2YXRpb25zUG9wVXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBjb25zdCBjYXIgPSBkYXRhW2lkXTtcblxuICAgIHJlc2VydmF0aW9uc1BvcFVwLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24tY29udGVudCByZWxhdGl2ZSBoLWF1dG8gbW9kYWwtaXRlbXMgbS1hdXRvIGJnLXdoaXRlIGJvcmRlci12aW9sZXQtNjAwIGJvcmRlci1zb2xpZCBib3JkZXItNFwiIGlkPVwiJHtpZH1cIj5cblxuICAgIDxkaXYgY2xhc3M9J2ZsZXggcmVsYXRpdmUganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgPGltZyBjbGFzcz1cImZsZXgtMSBiZy1jb250YWluIHctNzhcIiBzcmM9JHtjYXIuaW1nVXJsfT5cbiAgICAgPGJ1dHRvbiBjbGFzcz0nY2xvc2UgYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LTJ4bCByb3VuZGVkLWZ1bGwgcHgtMiBib3JkZXItdmlvbGV0LTcwMCBob3Zlcjpib3JkZXItcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC01MDAgYm9yZGVyLTQgYmctd2hpdGUnPiBYIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxoMiBjbGFzcz0ndGV4dC1jZW50ZXIgdGV4dC14bCB0ZXh0LXNsYXRlLTYwMCBweS01IGZvbnQtYm9sZCc+JHtjYXIubWFrZS50b1VwcGVyQ2FzZSgpfTwvaDI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGZsZXgtY29sIHctMS8yIG14LWF1dG8gZ2FwLXktNVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXgtYXV0byBmbGV4LXdyYXAgZ2FwLXktNVwiPlxuICAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSdtb2RlbCc+TW9kZWw6IDwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtjYXIubW9kZWwudG9VcHBlckNhc2UoKX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J3ctMi81IGZsZXggdGV4dC1sZyBqdXN0aWZ5LWNlbnRlciBnYXAteC00Jz5cbiAgICAgICAgIDxoMyBjbGFzcz0neWVhcic+WWVhcjo8L2gzPlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiAke2Nhci55ZWFyfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSdob3JzZXBvd2VyJz5Ib3JzZXBvd2VyOjwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+ICR7XG4gIGNhci5ob3JzZXBvd2VyXG59PC9zcGFuPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSdwcmljZSc+UHJpY2U6IDwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JCR7Y2FyLnByaWNlfTwvc3Bhbj5cbiAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZlZC1jYXJzLWNvbnRhaW5lciBtbC0zXCI+XG4gICAgIDxoMiBjbGFzcz0gXCJyZXNlcnZlZC1jYXJzLXRpdGxlIHRleHQtY2VudGVyIHRleHQteGwgcHktNCBmb250LWJvbGQgdGV4dC1zbGF0ZS02MDBcIj4gUmVzZXJ2YXRpb25zIDxzcGFuIGlkPVwiY291bnRlci1zcGFuXCI+PC9zcGFuPjwvaDI+XG4gICAgIDx1bCBjbGFzcz1cInJlc2VydmVkLWNhcnMgZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteC1hdXRvIGl0ZW1zLWNlbnRlciBweS0yXCI+XG4gICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nYm9vay1jYXJzIHctZnVsbCBtYXgtdy14cyBtbC0zJz5cbiAgICA8aDIgY2xhc3M9J2Jvb2stY2Fycy10aXRsZSB0ZXh0LWNlbnRlciBweS00IHRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtNjAwJz4gQWRkIGEgcmVzZXJ2YXRpb24gPC9oMj5cblxuICAgIDxmb3JtIGNsYXNzPSdmb3JtIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbXgtYXV0byBpdGVtcy1jZW50ZXInPiBcblxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgbWItNlwiIGlkPVwidXNlck5hbWVJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgcmVxdWlyZWQ+XG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9J3N0YXJ0LWRhdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMCBtYi02JyBpZD1cInN0YXJ0RGF0ZUlucHV0XCIgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj0nc3RhcnQtZGF0ZSc+XG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9J2VuZC1kYXRlIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgbWItNicgaWQ9XCJlbmREYXRlSW5wdXRcIiB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPSdlbmQtZGF0ZSc+XG5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdyZXNlcnZlLWNhci1idG4gY2VudGVyIHRleHQtbGcgcHgtMiB3LTQwIG15LTUgaCBweS0xIG14LWF1dG8gYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTUwMCByb3VuZGVkLWxnJyB0eXBlPSdidXR0b24nIGlkPSdyZXNlcnZlLWJ1dHRvbi0ke2lkfSc+IFJlc2VydmUgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gICBcbiAgICBgO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25zUG9wVXApO1xuXG4gICAgY29uc3QgZGlzcGxheVJlc2VydmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcucmVzZXJ2ZWQtY2FycycsXG4gICAgKTtcblxuICAgIGdldERhdGFGcm9tSW52b2x2ZW1lbnRBUEkoaWQpLmNhdGNoKCgpID0+IHtcbiAgICAgIGRpc3BsYXlSZXNlcnZlcy50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzZXJ2ZUNhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZm9ybS5mb3JtIC5yZXNlcnZlLWNhci1idG4nLFxuICAgICk7XG5cbiAgICByZXNlcnZlQ2FyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgc2F2ZVJlc2VydmF0aW9uVG9BcGksXG4gICAgKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjcG9wLXVwIC5jbG9zZScsXG4gICAgKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQocmVzZXJ2YXRpb25zUG9wVXApO1xuICAgICAgcmVzZXJ2YXRpb25zUG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93UmVzZXJ2YXRpb25Nb2RhbDtcbiIsImNvbnN0IHJlc2VydmF0aW9uQ291bnRlciA9IChyZXNlcnZhdGlvbikgPT4ge1xuICBpZiAocmVzZXJ2YXRpb24ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc2VydmF0aW9uLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2VydmF0aW9uQ291bnRlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIEhvbWVBcHBsaWNhdGlvbixcbiAgZ2V0QWxsQ2Fyc0NvdW50LFxufSBmcm9tICcuL21vZHVsZXMvaG9tZS9ob21lLWFwcCc7XG5pbXBvcnQgeyBzaG93Q29tbWVudE1vZGFsIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnRzLWFwcCc7XG5pbXBvcnQgc2hvd1Jlc2VydmF0aW9uTW9kYWwgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvbi1hcHAnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnO1xuXG5jb25zdCBob21lQXBwID0gbmV3IEhvbWVBcHBsaWNhdGlvbigpO1xuXG5jb25zdCByZWdpc3RlckhvbWVFdmVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydCcpO1xuICBjb25zdCBhbGxDYXJzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuY2Fycy1uYXYtZWxlbWVudCcsXG4gICk7XG5cbiAgYWxsQ2Fyc0NvdW50LnRleHRDb250ZW50ID0gZ2V0QWxsQ2Fyc0NvdW50KCk7XG5cbiAgbGlrZXNCdXR0b25zLmZvckVhY2goKGxpa2VCdXR0b24pID0+IGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIGhvbWVBcHAudG9nZ2xlSGVhcnQsXG4gICkpO1xuXG4gIGNvbnN0IGNvbW1lbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmNhci1idXR0b25zID4gLmNvbW1lbnQtYnV0dG9uJyxcbiAgKTtcblxuICBjb21tZW50QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDb21tZW50TW9kYWwpKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucmVzZXJ2YXRpb24tYnV0dG9uJyxcbiAgKTtcblxuICByZXNlcnZhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmVzZXJ2YXRpb25Nb2RhbCkpO1xufTtcblxuY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5sb2dvSW1nLnNyYyA9IEljb247XG5cbmhvbWVBcHAuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuICByZWdpc3RlckhvbWVFdmVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNvbW1lbnRDb3VudGVyIiwiY29tbWVudERhdGEiLCJsZW5ndGgiLCJDb21tZW50RGF0YSIsInVzZXJuYW1lIiwiY29tbWVudCIsImlkIiwiaXRlbV9pZCIsIkNhcnNBcGkiLCJBcGkiLCJjYXJBcGkiLCJtb2RhbENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlbmRlckNvbW1lbnQiLCJkYXRhSXRlbSIsImNyZWF0aW9uX2RhdGUiLCJkaXNwbGF5Q29tbWVudENvdW50ZXIiLCJkYXRhIiwibnVtYmVyT2ZDb21tZW50cyIsImNvbW1lbnRDb3VudGVyRWxlbWVudCIsInRleHRDb250ZW50IiwiZGlzcGxheUNvbW1lbnQiLCJDb21tZW50Q29udGFpbmVyIiwiY29udGFpbmVyU3RyaW5nIiwiZm9yRWFjaCIsImlubmVySFRNTCIsImNyZWF0ZUNvbW1lbnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXBpIiwiZm9ybSIsImNvbUJ0biIsIk51bWJlciIsInNwbGl0IiwidXNlcm5hbWVJbnB1dCIsImNvbW1lbnRJbnB1dCIsInZhbHVlIiwiY29tbWVudE9iaiIsImFkZENvbW1lbnQiLCJ0aGVuIiwiZ2V0Q29tbWVudCIsInJlc2V0Iiwic2hvd0NvbW1lbnRNb2RhbCIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0RGF0YVByb21pc2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsImltZ1VybCIsIm1ha2UiLCJtb2RlbCIsInllYXIiLCJob3JzZXBvd2VyIiwicHJpY2UiLCJmb3JtMSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInVybCIsInJvb3RVcmwiLCJjb21tZW50c0VuZHBvaW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiYm9keURhdGEiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3RJZCIsInJvb3RFbmRwb2ludCIsIkNhciIsImxpa2UiLCJnb29kQ2Fyc0lkIiwiZGF0YVByb21pc2UiLCJkYXRhT2JqIiwiY2FyIiwiYWxsQ2Fyc0VuZHBvaW50IiwibWFwIiwib2JqIiwiaW1nX3VybCIsImZpbHRlciIsImluY2x1ZGVzIiwiZ2V0QWxsQ2FycyIsImNhclJlbmRlciIsImxpa2VDbGFzcyIsInVubGlrZUNsYXNzIiwiSW52b2x2ZW1lbnRBcGkiLCJIb21lQXBwbGljYXRpb24iLCJnZXRBTnVtYmVyT2ZDYXJzIiwiY2Fyc0FwaSIsIm51bWJlciIsInRvQmVEaXNwbGF5ZWQiLCJzbGljZSIsIm1haW4iLCJtYWluQ29udGVudCIsInJlZHVjZSIsImNvbnRlbnQiLCJjYXJFbGVtZW50IiwiY3VycmVudFRhcmdldCIsImhlYXJ0QnV0dG9uIiwiaGVhcnRDb3VudCIsIm5leHRTaWJsaW5nIiwiZmlyc3RDaGlsZCIsImNsYXNzTmFtZSIsImludm9sdmVtZW50QXBpIiwic2V0TGlrZXNEYXRhIiwiZ2V0TGlrZXNEYXRhIiwibGlrZXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJudW1iZXJPZkxpa2VzIiwiZmluZCIsInVuZGVmaW5lZCIsImxpa2VzIiwiZ2V0QWxsQ2Fyc0NvdW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJ0b1VwcGVyQ2FzZSIsImZpbGVFeGlzdHMiLCJpbWFnZVVybCIsImh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwibGlrZXNEYXRhIiwibGlrZXNFbmRwb2ludCIsInJlc2VydmF0aW9uQ291bnRlciIsImFwcElkIiwic2V0UmVzZXJ2ZWRUb0FQSSIsImRhdGFCb2R5IiwiZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSIsImRpc3BsYXlSZXNlcnZlcyIsImNvdW50ZXIiLCJjb3VudGVyQ29udGFpbmVyIiwiY29tbWVudEVsZW1lbnQiLCJkYXRlX3N0YXJ0IiwiZGF0ZV9lbmQiLCJFcnJvciIsInJlc2VydmF0aW9uc1BvcFVwIiwiY3JlYXRlRWxlbWVudCIsImNsZWFySW5wdXRzIiwidXNlck5hbWVJbnB1dCIsInN0YXJ0RGF0ZUlucHV0IiwiZW5kRGF0ZUlucHV0Iiwic2F2ZVJlc2VydmF0aW9uVG9BcGkiLCJhdCIsInNob3dSZXNlcnZhdGlvbk1vZGFsIiwiaGlkZGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJyZXNlcnZlQ2FyQnRuIiwiY2xvc2VCdG4iLCJyZW1vdmVDaGlsZCIsInJlc2VydmF0aW9uIiwiSWNvbiIsImhvbWVBcHAiLCJyZWdpc3RlckhvbWVFdmVudHMiLCJsaWtlc0J1dHRvbnMiLCJhbGxDYXJzQ291bnQiLCJsaWtlQnV0dG9uIiwidG9nZ2xlSGVhcnQiLCJjb21tZW50QnV0dG9ucyIsImJ0biIsInJlc2VydmF0aW9uQnV0dG9ucyIsImxvZ29JbWciLCJzcmMiLCJpbml0aWFsaXplIl0sInNvdXJjZVJvb3QiOiIifQ==