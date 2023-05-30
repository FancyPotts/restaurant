"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage (insert) {\n  insert.innerHTML = ''\n  // const secondNav = document.createElement('div')\n  // const appBtn = document.createElement('button')\n  // const entreesBtn = document.createElement('button')\n  // const dessertsBtn = document.createElement('button')\n  // secondNav.classList.add('sidebar')\n  // appBtn.classList.add('menubutton', 'page-link')\n  // entreesBtn.classList.add('menubutton', 'page-link')\n  // dessertsBtn.classList.add('menubutton')\n\n  // insert.appendChild(secondNav)\n  // appBtn.innerHTML = 'Apps'\n  // entreesBtn.innerHTML = 'Entrees'\n  // dessertsBtn.innerHTML = 'Desserts'\n  // secondNav.appendChild(appBtn)\n  // secondNav.appendChild(entreesBtn)\n  // secondNav.appendChild(dessertsBtn)\n\n  const wrapper = document.createElement('div')\n  const apps = document.createElement('ul')\n  const appsList = document.createElement('li')\n  const entrees = document.createElement('ul')\n  const entreesList = document.createElement('li')\n  const desserts = document.createElement('ul')\n  const dessertsList = document.createElement('li')\n\n  appsList.textContent = 'Apps list goes here'\n  entreesList.textContent = 'Entrees list goes here'\n  dessertsList.textContent = 'Desserts list goes here'\n\n  wrapper.classList.add('wrapper')\n\n  apps.id = 'apps'\n  entrees.id = 'entrees'\n  desserts.id = 'desserts'\n\n  apps.innerHTML = 'Apps'\n  entrees.innerHTML = 'Entrees'\n  desserts.innerHTML = 'Desserts'\n\n  apps.appendChild(appsList)\n  entrees.appendChild(entreesList)\n  desserts.append(dessertsList)\n\n  wrapper.appendChild(apps)\n  wrapper.appendChild(entrees)\n  wrapper.appendChild(desserts)\n\n  insert.appendChild(wrapper)\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);