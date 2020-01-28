webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./util/apollo-client.js":
/*!*******************************!*\
  !*** ./util/apollo-client.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);




 // Update the GraphQL endpoint to any instance of GraphQL that you like

var GRAPHQL_URL = 'http://localhost:8888/injiri/';
var link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["createHttpLink"])({
  fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default.a,
  // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
}); // Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default()( // You can get headers and ctx (context) from the callback params
// e.g. ({ headers, ctx, initialState })
function (_ref) {
  var initialState = _ref.initialState;
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    link: link,
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]() //  rehydrate the cache using the initial data passed from the server:
    .restore(initialState || {})
  });
}));

/***/ })

})
//# sourceMappingURL=_app.js.2a7af9d90ba8bd80b9c3.hot-update.js.map