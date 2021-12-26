/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });

class Component {

    constructor(width, height, color, x, y, ctx, type) {
        this.width = width;
        this.type = type;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;    
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
    }


    update = (a) => {
        if (this.type == "text") {
            this.ctx.font = this.width + " " + this.height;
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "image") {
            this.image = new Image();
            this.image.src = this.color;
            this.ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
   }

    newPos = (a) => {
        this.x += this.speedX;
        this.y += this.speedY;        
    }  

    clicked = (gx, gy) => {
        var myleft = this.x * 4;
        var myright = this.x * 4 + (this.width * 4);
        var mytop = this.y * 4;
        var mybottom = this.y * 4 + (this.height * 4);
        var clicked = true;
        if ((mybottom < gy) || (mytop > gy) || (myright < gx) || (myleft > gx)) {
            clicked = false;
        }
        console.log(`${mytop},${mybottom},${myleft},${myright}`)
        console.log(`${gx},${gy}`)
        return clicked;
    }


}




/***/ }),

/***/ "./images/begin_blue.png":
/*!*******************************!*\
  !*** ./images/begin_blue.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85404962663f779e5871.png";

/***/ }),

/***/ "./images/begin_red.png":
/*!******************************!*\
  !*** ./images/begin_red.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc8714c82d597e17478a.png";

/***/ }),

/***/ "./images/begin_yellow.png":
/*!*********************************!*\
  !*** ./images/begin_yellow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80d579fb00feb44310de.png";

/***/ }),

/***/ "./images/title_screen.png":
/*!*********************************!*\
  !*** ./images/title_screen.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "790024433e30a8a8f265.png";

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _images_title_screen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/title_screen.png */ "./images/title_screen.png");
/* harmony import */ var _images_begin_red_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/begin_red.png */ "./images/begin_red.png");
/* harmony import */ var _images_begin_blue_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/begin_blue.png */ "./images/begin_blue.png");
/* harmony import */ var _images_begin_yellow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../images/begin_yellow.png */ "./images/begin_yellow.png");



 
 

class Title { 

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.btn = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](80, 20, _images_begin_red_png__WEBPACK_IMPORTED_MODULE_2__, 110, 110, this.ctx, "image");
        this.mousePos = new _component__WEBPACK_IMPORTED_MODULE_0__["default"]("9px", "Consolas", "black", 220, 10, this.ctx, "text");
        this.myBackground = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](300, 150, _images_title_screen_png__WEBPACK_IMPORTED_MODULE_1__, 0, 0, this.ctx, "image");
        this.titleWords = new _component__WEBPACK_IMPORTED_MODULE_0__["default"]("16px", "TitleScreen", "black", 10, 15, this.ctx, "text");
        this.titleWords2 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"]("16px", "TitleScreen", "black", 10, 70, this.ctx, "text");
        this.titleScreen = true;
        this.gx = 0;
        this.gy = 0;
    }


    animate() {
        this.myBackground.newPos();
        this.myBackground.update();
        this.btn.newPos();
        this.btn.update();
        this.mousePos.text = `${this.gx.toFixed()}, ${this.gy.toFixed()}`
        this.mousePos.update();
        this.titleWords.text = "\"...the one that makes it to the top"
        this.titleWords.update();
        this.titleWords2.text = "will have their greatest desire fulfilled...\""
        this.titleWords2.update();
        return this.titleScreen;
    }





}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNLEdBQUcsU0FBUyxHQUFHLE9BQU8sR0FBRyxRQUFRO0FBQzlELHVCQUF1QixHQUFHLEdBQUcsR0FBRztBQUNoQztBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNrQjtBQUNMO0FBQ0U7QUFDSTs7QUFFdkM7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQVMsU0FBUyxrREFBUTtBQUNqRCw0QkFBNEIsa0RBQVM7QUFDckMsZ0NBQWdDLGtEQUFTLFdBQVcscURBQVU7QUFDOUQsOEJBQThCLGtEQUFTO0FBQ3ZDLCtCQUErQixrREFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0IsSUFBSSxrQkFBa0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3dlcl9vZl9kcmVhbXMvLi9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3dlcl9vZl9kcmVhbXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3dlcl9vZl9kcmVhbXMvLi9zcmMvdGl0bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgY29sb3IsIHgsIHksIGN0eCwgdHlwZSkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDsgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG5cbiAgICB1cGRhdGUgPSAoYSkgPT4ge1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gdGhpcy53aWR0aCArIFwiIFwiICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy50ZXh0LCB0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IFwiaW1hZ2VcIikge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy54LFxuICAgICAgICAgICAgICAgIHRoaXMueSxcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgfVxuXG4gICAgbmV3UG9zID0gKGEpID0+IHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFk7ICAgICAgICBcbiAgICB9ICBcblxuICAgIGNsaWNrZWQgPSAoZ3gsIGd5KSA9PiB7XG4gICAgICAgIHZhciBteWxlZnQgPSB0aGlzLnggKiA0O1xuICAgICAgICB2YXIgbXlyaWdodCA9IHRoaXMueCAqIDQgKyAodGhpcy53aWR0aCAqIDQpO1xuICAgICAgICB2YXIgbXl0b3AgPSB0aGlzLnkgKiA0O1xuICAgICAgICB2YXIgbXlib3R0b20gPSB0aGlzLnkgKiA0ICsgKHRoaXMuaGVpZ2h0ICogNCk7XG4gICAgICAgIHZhciBjbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKChteWJvdHRvbSA8IGd5KSB8fCAobXl0b3AgPiBneSkgfHwgKG15cmlnaHQgPCBneCkgfHwgKG15bGVmdCA+IGd4KSkge1xuICAgICAgICAgICAgY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGAke215dG9wfSwke215Ym90dG9tfSwke215bGVmdH0sJHtteXJpZ2h0fWApXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2d4fSwke2d5fWApXG4gICAgICAgIHJldHVybiBjbGlja2VkO1xuICAgIH1cblxuXG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCdcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vLi4vaW1hZ2VzL3RpdGxlX3NjcmVlbi5wbmcnXG5pbXBvcnQgQmVnaW5SZWQgZnJvbSAnLi8uLi9pbWFnZXMvYmVnaW5fcmVkLnBuZydcbmltcG9ydCBCZWdpbkJsdWUgZnJvbSAnLi8uLi9pbWFnZXMvYmVnaW5fYmx1ZS5wbmcnXG5pbXBvcnQgQmVnaW5ZZWxsb3cgZnJvbSAnLi8uLi9pbWFnZXMvYmVnaW5feWVsbG93LnBuZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUge1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmJ0biA9IG5ldyBDb21wb25lbnQoODAsIDIwLCBCZWdpblJlZCwgMTEwLCAxMTAsIHRoaXMuY3R4LCBcImltYWdlXCIpO1xuICAgICAgICB0aGlzLm1vdXNlUG9zID0gbmV3IENvbXBvbmVudChcIjlweFwiLCBcIkNvbnNvbGFzXCIsIFwiYmxhY2tcIiwgMjIwLCAxMCwgdGhpcy5jdHgsIFwidGV4dFwiKTtcbiAgICAgICAgdGhpcy5teUJhY2tncm91bmQgPSBuZXcgQ29tcG9uZW50KDMwMCwgMTUwLCBCYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmN0eCwgXCJpbWFnZVwiKTtcbiAgICAgICAgdGhpcy50aXRsZVdvcmRzID0gbmV3IENvbXBvbmVudChcIjE2cHhcIiwgXCJUaXRsZVNjcmVlblwiLCBcImJsYWNrXCIsIDEwLCAxNSwgdGhpcy5jdHgsIFwidGV4dFwiKTtcbiAgICAgICAgdGhpcy50aXRsZVdvcmRzMiA9IG5ldyBDb21wb25lbnQoXCIxNnB4XCIsIFwiVGl0bGVTY3JlZW5cIiwgXCJibGFja1wiLCAxMCwgMzAsIHRoaXMuY3R4LCBcInRleHRcIik7XG4gICAgICAgIHRoaXMudGl0bGVTY3JlZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmd4ID0gMDtcbiAgICAgICAgdGhpcy5neSA9IDA7XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLm15QmFja2dyb3VuZC5uZXdQb3MoKTtcbiAgICAgICAgdGhpcy5teUJhY2tncm91bmQudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuYnRuLm5ld1BvcygpO1xuICAgICAgICB0aGlzLmJ0bi51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy50ZXh0ID0gYCR7dGhpcy5neC50b0ZpeGVkKCl9LCAke3RoaXMuZ3kudG9GaXhlZCgpfWBcbiAgICAgICAgdGhpcy5tb3VzZVBvcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy50aXRsZVdvcmRzLnRleHQgPSBcIlxcXCIuLi50aGUgb25lIHRoYXQgbWFrZXMgaXQgdG8gdGhlIHRvcFwiXG4gICAgICAgIHRoaXMudGl0bGVXb3Jkcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy50aXRsZVdvcmRzMi50ZXh0ID0gXCJ3aWxsIGhhdmUgdGhlaXIgZ3JlYXRlc3QgZGVzaXJlIGZ1bGZpbGxlZC4uLlxcXCJcIlxuICAgICAgICB0aGlzLnRpdGxlV29yZHMyLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVNjcmVlbjtcbiAgICB9XG5cblxuXG5cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==