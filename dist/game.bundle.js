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

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        this.titleWords2 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"]("16px", "TitleScreen", "black", 10, 30, this.ctx, "text");
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
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TowerOfDreams)
/* harmony export */ });
/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.js */ "./src/title.js");
/* harmony import */ var _images_begin_red_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/begin_red.png */ "./images/begin_red.png");
/* harmony import */ var _images_begin_blue_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/begin_blue.png */ "./images/begin_blue.png");
/* harmony import */ var _images_begin_yellow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/begin_yellow.png */ "./images/begin_yellow.png");





class TowerOfDreams {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d");
        this.ctx.scale(4,4)
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.title = new _title_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, this.dimensions);
        this.registerEvents();
        this.animate();
        this.titleScreen = true;
    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.boundHoverHandler = this.hover.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx.canvas.addEventListener("mouseup", this.boundClickHandler); 
        this.ctx.canvas.addEventListener("mousemove", this.boundHoverHandler);  
    }

    updateGxGy(e) {
        let rect = this.canvas.getBoundingClientRect();
        this.gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
        this.gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
    }

    hover(e) {
        this.updateGxGy(e);
        if (this.titleScreen === true) { this.titleHover(e) }
        
    }

    click(e) {
        this.updateGxGy(e);
        if (this.titleScreen === true) { this.titleClick(e) }
    }

    titleClick(e) {
        if (e.type == "mousedown" && this.title.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "down"
            this.title.btn.color = _images_begin_yellow_png__WEBPACK_IMPORTED_MODULE_3__
        } else if (e.type == "mouseup" && this.title.btn.clicked(this.gx, this.gy)) {
            this.title.btn.color = _images_begin_red_png__WEBPACK_IMPORTED_MODULE_1__
            this.mouseState = "up"
            this.beginGame();
        } else if (e.type == "mouseup" && !this.title.btn.clicked(this.gx, this.gy)) {
            this.mouseState = "up"
            this.title.btn.color = _images_begin_red_png__WEBPACK_IMPORTED_MODULE_1__
        }
    }

    titleHover(e) {
        this.title.gx = this.gx;
        this.title.gy = this.gy;
        if (this.title.btn.clicked(this.gx, this.gy) && this.mouseState !== "down") {
            this.title.btn.color = _images_begin_blue_png__WEBPACK_IMPORTED_MODULE_2__
        } else if (!this.title.btn.clicked(this.gx, this.gy)) {
            this.title.btn.color = _images_begin_red_png__WEBPACK_IMPORTED_MODULE_1__
        }
        if (this.title.btn.clicked(this.gx, this.gy) && this.mouseState === "down") {
            this.title.btn.color = _images_begin_yellow_png__WEBPACK_IMPORTED_MODULE_3__
        } 
    }

    beginGame() {
        this.titleScreen = false;
        this.avitarChooser = true;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.titleScreen === true) { this.title.animate(); }
        if (this.avitarChooser === true) { this.title.animate(); }
            
        
        
        requestAnimationFrame(this.animate.bind(this));
    }


}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2U7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU0sR0FBRyxTQUFTLEdBQUcsT0FBTyxHQUFHLFFBQVE7QUFDOUQsdUJBQXVCLEdBQUcsR0FBRyxHQUFHO0FBQ2hDO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERtQztBQUNrQjtBQUNMO0FBQ0U7QUFDSTs7QUFFdkM7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQVMsU0FBUyxrREFBUTtBQUNqRCw0QkFBNEIsa0RBQVM7QUFDckMsZ0NBQWdDLGtEQUFTLFdBQVcscURBQVU7QUFDOUQsOEJBQThCLGtEQUFTO0FBQ3ZDLCtCQUErQixrREFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0IsSUFBSSxrQkFBa0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEI7QUFDa0I7QUFDRTtBQUNJOztBQUV2QztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHlCQUF5QixpREFBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxREFBVztBQUM5QyxVQUFVO0FBQ1YsbUNBQW1DLGtEQUFRO0FBQzNDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxtQ0FBbUMsa0RBQVE7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtREFBUztBQUM1QyxVQUFVO0FBQ1YsbUNBQW1DLGtEQUFRO0FBQzNDO0FBQ0E7QUFDQSxtQ0FBbUMscURBQVc7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b3dlcl9vZl9kcmVhbXMvLi9zcmMvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Rvd2VyX29mX2RyZWFtcy8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB4LCB5LCBjdHgsIHR5cGUpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7ICAgIFxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuXG4gICAgdXBkYXRlID0gKGEpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcInRleHRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IHRoaXMud2lkdGggKyBcIiBcIiArIHRoaXMuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMudGV4dCwgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSBcImltYWdlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMueCxcbiAgICAgICAgICAgICAgICB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgIH1cblxuICAgIG5ld1BvcyA9IChhKSA9PiB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZOyAgICAgICAgXG4gICAgfSAgXG5cbiAgICBjbGlja2VkID0gKGd4LCBneSkgPT4ge1xuICAgICAgICB2YXIgbXlsZWZ0ID0gdGhpcy54ICogNDtcbiAgICAgICAgdmFyIG15cmlnaHQgPSB0aGlzLnggKiA0ICsgKHRoaXMud2lkdGggKiA0KTtcbiAgICAgICAgdmFyIG15dG9wID0gdGhpcy55ICogNDtcbiAgICAgICAgdmFyIG15Ym90dG9tID0gdGhpcy55ICogNCArICh0aGlzLmhlaWdodCAqIDQpO1xuICAgICAgICB2YXIgY2xpY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICgobXlib3R0b20gPCBneSkgfHwgKG15dG9wID4gZ3kpIHx8IChteXJpZ2h0IDwgZ3gpIHx8IChteWxlZnQgPiBneCkpIHtcbiAgICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgJHtteXRvcH0sJHtteWJvdHRvbX0sJHtteWxlZnR9LCR7bXlyaWdodH1gKVxuICAgICAgICBjb25zb2xlLmxvZyhgJHtneH0sJHtneX1gKVxuICAgICAgICByZXR1cm4gY2xpY2tlZDtcbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLy4uL2ltYWdlcy90aXRsZV9zY3JlZW4ucG5nJ1xuaW1wb3J0IEJlZ2luUmVkIGZyb20gJy4vLi4vaW1hZ2VzL2JlZ2luX3JlZC5wbmcnXG5pbXBvcnQgQmVnaW5CbHVlIGZyb20gJy4vLi4vaW1hZ2VzL2JlZ2luX2JsdWUucG5nJ1xuaW1wb3J0IEJlZ2luWWVsbG93IGZyb20gJy4vLi4vaW1hZ2VzL2JlZ2luX3llbGxvdy5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgICAgdGhpcy5idG4gPSBuZXcgQ29tcG9uZW50KDgwLCAyMCwgQmVnaW5SZWQsIDExMCwgMTEwLCB0aGlzLmN0eCwgXCJpbWFnZVwiKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IG5ldyBDb21wb25lbnQoXCI5cHhcIiwgXCJDb25zb2xhc1wiLCBcImJsYWNrXCIsIDIyMCwgMTAsIHRoaXMuY3R4LCBcInRleHRcIik7XG4gICAgICAgIHRoaXMubXlCYWNrZ3JvdW5kID0gbmV3IENvbXBvbmVudCgzMDAsIDE1MCwgQmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jdHgsIFwiaW1hZ2VcIik7XG4gICAgICAgIHRoaXMudGl0bGVXb3JkcyA9IG5ldyBDb21wb25lbnQoXCIxNnB4XCIsIFwiVGl0bGVTY3JlZW5cIiwgXCJibGFja1wiLCAxMCwgMTUsIHRoaXMuY3R4LCBcInRleHRcIik7XG4gICAgICAgIHRoaXMudGl0bGVXb3JkczIgPSBuZXcgQ29tcG9uZW50KFwiMTZweFwiLCBcIlRpdGxlU2NyZWVuXCIsIFwiYmxhY2tcIiwgMTAsIDMwLCB0aGlzLmN0eCwgXCJ0ZXh0XCIpO1xuICAgICAgICB0aGlzLnRpdGxlU2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5neCA9IDA7XG4gICAgICAgIHRoaXMuZ3kgPSAwO1xuICAgIH1cblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5teUJhY2tncm91bmQubmV3UG9zKCk7XG4gICAgICAgIHRoaXMubXlCYWNrZ3JvdW5kLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmJ0bi5uZXdQb3MoKTtcbiAgICAgICAgdGhpcy5idG4udXBkYXRlKCk7XG4gICAgICAgIHRoaXMubW91c2VQb3MudGV4dCA9IGAke3RoaXMuZ3gudG9GaXhlZCgpfSwgJHt0aGlzLmd5LnRvRml4ZWQoKX1gXG4gICAgICAgIHRoaXMubW91c2VQb3MudXBkYXRlKCk7XG4gICAgICAgIHRoaXMudGl0bGVXb3Jkcy50ZXh0ID0gXCJcXFwiLi4udGhlIG9uZSB0aGF0IG1ha2VzIGl0IHRvIHRoZSB0b3BcIlxuICAgICAgICB0aGlzLnRpdGxlV29yZHMudXBkYXRlKCk7XG4gICAgICAgIHRoaXMudGl0bGVXb3JkczIudGV4dCA9IFwid2lsbCBoYXZlIHRoZWlyIGdyZWF0ZXN0IGRlc2lyZSBmdWxmaWxsZWQuLi5cXFwiXCJcbiAgICAgICAgdGhpcy50aXRsZVdvcmRzMi51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVTY3JlZW47XG4gICAgfVxuXG5cblxuXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgVGl0bGUgZnJvbSAnLi90aXRsZS5qcydcbmltcG9ydCBCZWdpblJlZCBmcm9tICcuLy4uL2ltYWdlcy9iZWdpbl9yZWQucG5nJ1xuaW1wb3J0IEJlZ2luQmx1ZSBmcm9tICcuLy4uL2ltYWdlcy9iZWdpbl9ibHVlLnBuZydcbmltcG9ydCBCZWdpblllbGxvdyBmcm9tICcuLy4uL2ltYWdlcy9iZWdpbl95ZWxsb3cucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3dlck9mRHJlYW1zIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmN0eC5zY2FsZSg0LDQpXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXcgVGl0bGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLnRpdGxlU2NyZWVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5ib3VuZENsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEhvdmVySGFuZGxlciA9IHRoaXMuaG92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5ib3VuZENsaWNrSGFuZGxlcik7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmJvdW5kQ2xpY2tIYW5kbGVyKTsgXG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuYm91bmRIb3ZlckhhbmRsZXIpOyAgXG4gICAgfVxuXG4gICAgdXBkYXRlR3hHeShlKSB7XG4gICAgICAgIGxldCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuZ3ggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIChyZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0KSAqIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmd5ID0gIChlLmNsaWVudFkgLSByZWN0LnRvcCkgLyAocmVjdC5ib3R0b20gLSByZWN0LnRvcCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgaG92ZXIoZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUd4R3koZSk7XG4gICAgICAgIGlmICh0aGlzLnRpdGxlU2NyZWVuID09PSB0cnVlKSB7IHRoaXMudGl0bGVIb3ZlcihlKSB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVHeEd5KGUpO1xuICAgICAgICBpZiAodGhpcy50aXRsZVNjcmVlbiA9PT0gdHJ1ZSkgeyB0aGlzLnRpdGxlQ2xpY2soZSkgfVxuICAgIH1cblxuICAgIHRpdGxlQ2xpY2soZSkge1xuICAgICAgICBpZiAoZS50eXBlID09IFwibW91c2Vkb3duXCIgJiYgdGhpcy50aXRsZS5idG4uY2xpY2tlZCh0aGlzLmd4LCB0aGlzLmd5KSkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlID0gXCJkb3duXCJcbiAgICAgICAgICAgIHRoaXMudGl0bGUuYnRuLmNvbG9yID0gQmVnaW5ZZWxsb3dcbiAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT0gXCJtb3VzZXVwXCIgJiYgdGhpcy50aXRsZS5idG4uY2xpY2tlZCh0aGlzLmd4LCB0aGlzLmd5KSkge1xuICAgICAgICAgICAgdGhpcy50aXRsZS5idG4uY29sb3IgPSBCZWdpblJlZFxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlID0gXCJ1cFwiXG4gICAgICAgICAgICB0aGlzLmJlZ2luR2FtZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PSBcIm1vdXNldXBcIiAmJiAhdGhpcy50aXRsZS5idG4uY2xpY2tlZCh0aGlzLmd4LCB0aGlzLmd5KSkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlID0gXCJ1cFwiXG4gICAgICAgICAgICB0aGlzLnRpdGxlLmJ0bi5jb2xvciA9IEJlZ2luUmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aXRsZUhvdmVyKGUpIHtcbiAgICAgICAgdGhpcy50aXRsZS5neCA9IHRoaXMuZ3g7XG4gICAgICAgIHRoaXMudGl0bGUuZ3kgPSB0aGlzLmd5O1xuICAgICAgICBpZiAodGhpcy50aXRsZS5idG4uY2xpY2tlZCh0aGlzLmd4LCB0aGlzLmd5KSAmJiB0aGlzLm1vdXNlU3RhdGUgIT09IFwiZG93blwiKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLmJ0bi5jb2xvciA9IEJlZ2luQmx1ZVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnRpdGxlLmJ0bi5jbGlja2VkKHRoaXMuZ3gsIHRoaXMuZ3kpKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLmJ0bi5jb2xvciA9IEJlZ2luUmVkXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGl0bGUuYnRuLmNsaWNrZWQodGhpcy5neCwgdGhpcy5neSkgJiYgdGhpcy5tb3VzZVN0YXRlID09PSBcImRvd25cIikge1xuICAgICAgICAgICAgdGhpcy50aXRsZS5idG4uY29sb3IgPSBCZWdpblllbGxvd1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGJlZ2luR2FtZSgpIHtcbiAgICAgICAgdGhpcy50aXRsZVNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF2aXRhckNob29zZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgaWYgKHRoaXMudGl0bGVTY3JlZW4gPT09IHRydWUpIHsgdGhpcy50aXRsZS5hbmltYXRlKCk7IH1cbiAgICAgICAgaWYgKHRoaXMuYXZpdGFyQ2hvb3NlciA9PT0gdHJ1ZSkgeyB0aGlzLnRpdGxlLmFuaW1hdGUoKTsgfVxuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==