/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ball.js":
/*!*********************!*\
  !*** ./src/Ball.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\n\nclass Ball extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, radius = 10, color = 'blue') {\n    super(x, y, radius * 2, radius * 2, color)\n\n    this.radius = radius;\n    this.dx = 2\n    this.dy = -2\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout-oop/./src/Ball.js?");

/***/ }),

/***/ "./src/Brick.js":
/*!**********************!*\
  !*** ./src/Brick.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\n\nclass Brick extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width = 75, height = 20, color = 'red') {\n    super(x, y, width, height, color);\n    this.status = 1;\n    this.width = width;\n    this.height = height;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://breakout-oop/./src/Brick.js?");

/***/ }),

/***/ "./src/Bricks.js":
/*!***********************!*\
  !*** ./src/Bricks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick.js */ \"./src/Brick.js\");\n\n\nclass Bricks {\n  constructor(rows = 3, cols = 5) {\n    this.rows = rows\n    this.cols = cols\n    this.bricks = []\n    this.setup()\n  }\n\n  // ---------------- DETECT COLLISIONS ---------------------- //\n//   collisionDetection(ball) {\n//   for (let c = 0; c < this.cols; c += 1) {\n//     for (let r = 0; r < this.rows; r += 1) {\n//       const b = this.bricks[c][r];\n//       if (b.status === 1) {\n//         console.log(ball.x);\n//         console.log(b.x);\n\n//         if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.Height) {\n//           ball.dy = -ball.dy;\n//           b.status = 0;\n//           this.bricks[c][r] = b;\n//         }\n//       }\n//     }\n//   }\n// }\n\n  setup() {\n    for (let c = 0; c < this.cols; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        const brick = new _Brick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.brickWidth = brick.width;\n        this.brickHeight = brick.height;\n        brick.x = (c * (brick.width + 10)) + 30;\n        brick.y = (r * (brick.height + 10)) + 30;\n        this.bricks[c][r] = brick;\n      }\n    }\n  }\n\n  render(ctx) {\n    for (let c = 0; c < this.cols; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        if (this.bricks[c][r].status === 1) {\n          this.bricks[c][r].render(ctx);\n        }\n      }\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://breakout-oop/./src/Bricks.js?");

/***/ }),

/***/ "./src/GameLabel.js":
/*!**************************!*\
  !*** ./src/GameLabel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameLabel {\n  constructor(canvasWidth, color = 'black', font = '16px Helvetica') {\n    this.canvasWidth = canvasWidth;\n    this.color = color,\n    this.font = font;\n\n    this.lives = 2;\n    this.score = 0;\n  }\n\n  render(ctx) {\n    ctx.font = '16px Arial';\n    ctx.fillStyle = this.color;\n    ctx.fillText(`Lives: ${this.lives}`, this.canvasWidth - 65, 20);\n    ctx.fillText(`Score: ${this.score}`, 8, 20);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n\n//# sourceURL=webpack://breakout-oop/./src/GameLabel.js?");

/***/ }),

/***/ "./src/Paddle.js":
/*!***********************!*\
  !*** ./src/Paddle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./src/Sprite.js\");\n\n\nclass Paddle extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(x, y, width = 75, height = 10, color = 'purple') {\n    super(x, y, width, height, color);\n   \n  }\n\n  render(ctx, canvasHeight) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath(); \n  }\n\n  \n\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n//# sourceURL=webpack://breakout-oop/./src/Paddle.js?");

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sprite {\n  constructor(x, y, width, height, color='red') {\n    this.x = x\n    this.y = y\n    this.width = width\n    this.height = height\n    this.color = color\n  }\n\n  moveTo(x, y) {\n    this.x = x\n    this.y = y\n  }\n\n  moveBy(dx, dy) {\n    this.x += dx\n    this.y += dy\n  }\n\n  render(ctx) {\n    ctx.beginPath()\n    ctx.rect(this.x, this.y, this.width, this.height)\n    ctx.fillStyle = this.color\n    ctx.fill()\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://breakout-oop/./src/Sprite.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ \"./src/Ball.js\");\n/* harmony import */ var _Bricks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bricks.js */ \"./src/Bricks.js\");\n/* harmony import */ var _GameLabel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLabel.js */ \"./src/GameLabel.js\");\n/* harmony import */ var _Paddle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paddle.js */ \"./src/Paddle.js\");\n\n\n\n\n\n// --------------------------------------------- //\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\nconst paddleHeight = 10;\nconst paddleWidth = 75;\n\nlet paddleX = (canvas.width - paddleWidth) / 2;\n\nlet rightPressed = false;\nlet leftPressed = false;\n\nconst ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width / 2, canvas.height - 30);\nconst bricks = new _Bricks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst paddle = new _Paddle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](paddleX, canvas.height - paddleHeight);\nconst gameLabel = new _GameLabel_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](canvas.width);\n\n// --------------------------------------------- //\nfunction mouseMoveHandler(e) {\n  const relativeX = e.clientX - canvas.offsetLeft;\n  if (relativeX > 0 && relativeX < canvas.width) {\n    paddle.x = relativeX - paddleWidth / 2;\n  }\n}\n\nfunction keyDownHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = true;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = true;\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = false;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = false;\n  }\n}\n\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\n\n// ---------------- BALL BOUNCES ---------------------- //\nfunction moveBall(ball) {\n  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) { ball.dx = -ball.dx; }\n  if (ball.y + ball.dy < ball.radius) {\n    ball.dy = -ball.dy;\n  } else if (ball.y + ball.dy > canvas.height - ball.radius) {\n    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\n      ball.dy = -ball.dy;\n    } else {\n      gameLabel.lives -= 1;\n      if (gameLabel.lives < 0) {\n        // eslint-disable-next-line no-alert\n        alert('GAME OVER');\n        document.location.reload();\n        // eslint-disable-next-line no-use-before-define\n        requestAnimationFrame(draw());\n      } else {\n        ball.x = canvas.width / 2;\n        ball.y = canvas.height - 30;\n        ball.dx = 2;\n        ball.dy = -2;\n        paddleX = (canvas.width - paddleWidth) / 2;\n      }\n    }\n  }\n}\n\nfunction collisionDetection(bricks, ball, gameLabel) {\n  for (let c = 0; c < bricks.cols; c += 1) {\n    for (let r = 0; r < bricks.rows; r += 1) {\n      if(bricks.bricks[c][r].status == 1)\n        if (ball.x > bricks.bricks[c][r].x && ball.x < bricks.bricks[c][r].x + bricks.bricks[c][r].width && ball.y > bricks.bricks[c][r].y && ball.y < bricks.bricks[c][r].y + bricks.bricks[c][r].height) {\n          console.log(bricks.bricks[c][r]);\n          ball.dy = -ball.dy;\n          bricks.bricks[c][r].status = 0;\n          gameLabel.score += 1;\n        }\n    }\n  }\n  if (gameLabel.score === bricks.rows * bricks.cols) {\n    // gameLabel.render(ctx);\n    // eslint-disable-next-line no-alert\n    alert('YOU WIN, CONGRATS!');\n    gameLabel.score = 0;\n    document.location.reload();\n    // eslint-disable-next-line no-use-before-define\n    // requestAnimationFrame(draw()); // Needed for Chrome to end game\n  }\n}\n\n// ---------------- RUNS ---------------------- //\nfunction draw() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height); // white background\n\n  bricks.render(ctx);\n  ball.render(ctx);\n  paddle.render(ctx, canvas.height);\n  gameLabel.render(ctx);\n\n  moveBall(ball);\n  collisionDetection(bricks, ball, gameLabel);  \n\n  if (rightPressed) { paddle.x += 7; } else if (leftPressed) { paddle.x -= 7; }\n  ball.x += ball.dx;\n  ball.y += ball.dy;\n  // console.log(ball);\n  requestAnimationFrame(draw);\n}\n\ndraw();\n\n//# sourceURL=webpack://breakout-oop/./src/scripts.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;