/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__background_block_js__ = __webpack_require__(/*! ./background/block.js */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9iYWNrZ3JvdW5kL2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************************!*\
  !*** ./src/background/block.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n\n// https://javascriptforwp.com/how-to-use-inspectorcontrols/\n// https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/cover/edit.js\n// https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n// https://developer.wordpress.org/resource/dashicons/\n// https://wordpress.org/gutenberg/handbook/block-api/\n\n// <pre>{JSON.stringify(props, null, 2)}</pre>\n\n//  Import CSS.\n// import './style.scss';\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    BlockIcon = _wp$editor.BlockIcon,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaPlaceholder = _wp$editor.MediaPlaceholder,\n    MediaUpload = _wp$editor.MediaUpload,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    Toolbar = _wp$components.Toolbar,\n    Button = _wp$components.Button,\n    FormToggle = _wp$components.FormToggle;\n\n\nvar ALLOWED_MEDIA_TYPES = ['image'];\nvar IMAGE_BACKGROUND_TYPE = 'image';\n\nregisterBlockType('rlj/background', {\n\n  title: __('Background'),\n  icon: 'smiley',\n  category: 'common', // common, formatting, layout widgets, embed.\n  keywords: [__('rlj-blocks'), __('Background'), __('Wrapper')],\n  supports: {\n    // align: true,\n    align: ['full', 'wide'],\n    anchor: false\n  },\n  attributes: {\n    \"url\": {\n      \"type\": \"string\"\n    },\n    \"id\": {\n      \"type\": \"number\"\n    },\n    \"hasParallax\": {\n      \"type\": \"boolean\",\n      \"default\": false\n    }\n    // \"dimRatio\": {\n    // \"type\": \"number\",\n    // \"default\": 50\n    // },\n    // \"overlayColor\": {\n    // \"type\": \"string\"\n    // },\n    // \"customOverlayColor\": {\n    // \"type\": \"string\"\n    // },\n    // \"backgroundType\": {\n    // \"type\": \"string\",\n    // \"default\": \"image\"\n    // },\n    // \"focalPoint\": {\n    // \"type\": \"object\"\n    // }\n  },\n\n  edit: function edit(props) {\n\n    function onSelectImage(media) {\n      if (!media || !media.url) {\n        props.setAttributes({\n          url: undefined,\n          id: undefined\n        });\n        return;\n      }\n    }\n\n    function removeImage(e) {\n      if (e) e.preventDefault();\n\n      props.setAttributes({\n        url: undefined,\n        id: undefined\n      });\n    }\n\n    function toggleHasParallax() {\n      props.setAttributes({\n        hasParallax: !props.attributes.hasParallax\n      });\n    }\n\n    var style = null;\n    var classes = props.className;\n    // var classes = '';\n\n    if (props.attributes.url) {\n\n      style = {\n        backgroundImage: 'url(' + props.attributes.url + ')'\n      };\n\n      classes += ' has-background';\n\n      if (props.attributes.hasParallax) {\n        classes += ' has-parallax';\n      }\n    }\n\n    return [wp.element.createElement(\n      InspectorControls,\n      null,\n      wp.element.createElement(MediaPlaceholder, {\n        labels: {\n          title: __('Background'),\n          instructions: __('Upload an image or pick one from your media library.')\n        },\n        onSelect: function onSelect(media) {\n          props.setAttributes({ id: media.id, url: media.url });\n        },\n        accept: 'image/*',\n        allowedTypes: ALLOWED_MEDIA_TYPES,\n        notices: props.noticeUI,\n        onError: props.onUploadError\n      }),\n      wp.element.createElement(\n        'div',\n        { 'class': 'components-panel__row' },\n        wp.element.createElement(\n          Button,\n          {\n            onClick: removeImage,\n            className: 'button button-large'\n          },\n          __('Remove background')\n        )\n      ),\n      wp.element.createElement(\n        'div',\n        { 'class': 'components-panel__row' },\n        wp.element.createElement(\n          'label',\n          {\n            htmlFor: 'rlj-background-has-parallax'\n          },\n          __('Fixed background', 'rlj')\n        ),\n        wp.element.createElement(FormToggle, {\n          id: 'rlj-background-has-parallax',\n          label: __('Fixed background', 'rlj'),\n          checked: props.attributes.hasParallax,\n          onChange: toggleHasParallax\n        })\n      )\n    ), wp.element.createElement(\n      'div',\n      {\n        className: classes,\n        style: style\n      },\n      wp.element.createElement(InnerBlocks, null)\n    )];\n  },\n\n  // save: function( props ) {\n  save: function save(props) {\n\n    var style = null;\n    // var classes = props.className;\n    var classes = '';\n\n    if (props.attributes.url) {\n\n      style = {\n        backgroundImage: 'url(' + props.attributes.url + ')'\n      };\n\n      classes += ' has-background';\n\n      if (props.attributes.hasParallax) {\n        classes += ' has-parallax';\n      }\n    }\n\n    return wp.element.createElement(\n      'div',\n      {\n        className: classes,\n        style: style\n      },\n      wp.element.createElement(InnerBlocks.Content, null)\n    );\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2Jsb2NrLmpzPzU5MWIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBodHRwczovL2phdmFzY3JpcHRmb3J3cC5jb20vaG93LXRvLXVzZS1pbnNwZWN0b3Jjb250cm9scy9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjL2NvdmVyL2VkaXQuanNcbi8vIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zL1xuLy8gaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG5cbi8vIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT5cblxuLy8gIEltcG9ydCBDU1MuXG4vLyBpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBCbG9ja0ljb24gPSBfd3AkZWRpdG9yLkJsb2NrSWNvbixcbiAgICBJbm5lckJsb2NrcyA9IF93cCRlZGl0b3IuSW5uZXJCbG9ja3MsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIE1lZGlhUGxhY2Vob2xkZXIgPSBfd3AkZWRpdG9yLk1lZGlhUGxhY2Vob2xkZXIsXG4gICAgTWVkaWFVcGxvYWQgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkLFxuICAgIE1lZGlhVXBsb2FkQ2hlY2sgPSBfd3AkZWRpdG9yLk1lZGlhVXBsb2FkQ2hlY2s7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEljb25CdXR0b24gPSBfd3AkY29tcG9uZW50cy5JY29uQnV0dG9uLFxuICAgIFRvb2xiYXIgPSBfd3AkY29tcG9uZW50cy5Ub29sYmFyLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBGb3JtVG9nZ2xlID0gX3dwJGNvbXBvbmVudHMuRm9ybVRvZ2dsZTtcblxuXG52YXIgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsnaW1hZ2UnXTtcbnZhciBJTUFHRV9CQUNLR1JPVU5EX1RZUEUgPSAnaW1hZ2UnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgncmxqL2JhY2tncm91bmQnLCB7XG5cbiAgdGl0bGU6IF9fKCdCYWNrZ3JvdW5kJyksXG4gIGljb246ICdzbWlsZXknLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsIC8vIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuICBrZXl3b3JkczogW19fKCdybGotYmxvY2tzJyksIF9fKCdCYWNrZ3JvdW5kJyksIF9fKCdXcmFwcGVyJyldLFxuICBzdXBwb3J0czoge1xuICAgIC8vIGFsaWduOiB0cnVlLFxuICAgIGFsaWduOiBbJ2Z1bGwnLCAnd2lkZSddLFxuICAgIGFuY2hvcjogZmFsc2VcbiAgfSxcbiAgYXR0cmlidXRlczoge1xuICAgIFwidXJsXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcImlkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcImhhc1BhcmFsbGF4XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH1cbiAgICAvLyBcImRpbVJhdGlvXCI6IHtcbiAgICAvLyBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAvLyBcImRlZmF1bHRcIjogNTBcbiAgICAvLyB9LFxuICAgIC8vIFwib3ZlcmxheUNvbG9yXCI6IHtcbiAgICAvLyBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIC8vIH0sXG4gICAgLy8gXCJjdXN0b21PdmVybGF5Q29sb3JcIjoge1xuICAgIC8vIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgLy8gfSxcbiAgICAvLyBcImJhY2tncm91bmRUeXBlXCI6IHtcbiAgICAvLyBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAvLyBcImRlZmF1bHRcIjogXCJpbWFnZVwiXG4gICAgLy8gfSxcbiAgICAvLyBcImZvY2FsUG9pbnRcIjoge1xuICAgIC8vIFwidHlwZVwiOiBcIm9iamVjdFwiXG4gICAgLy8gfVxuICB9LFxuXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblxuICAgIGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UobWVkaWEpIHtcbiAgICAgIGlmICghbWVkaWEgfHwgIW1lZGlhLnVybCkge1xuICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgICBpZDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSW1hZ2UoZSkge1xuICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgIHVybDogdW5kZWZpbmVkLFxuICAgICAgICBpZDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVIYXNQYXJhbGxheCgpIHtcbiAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICBoYXNQYXJhbGxheDogIXByb3BzLmF0dHJpYnV0ZXMuaGFzUGFyYWxsYXhcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IG51bGw7XG4gICAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc05hbWU7XG4gICAgLy8gdmFyIGNsYXNzZXMgPSAnJztcblxuICAgIGlmIChwcm9wcy5hdHRyaWJ1dGVzLnVybCkge1xuXG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBwcm9wcy5hdHRyaWJ1dGVzLnVybCArICcpJ1xuICAgICAgfTtcblxuICAgICAgY2xhc3NlcyArPSAnIGhhcy1iYWNrZ3JvdW5kJztcblxuICAgICAgaWYgKHByb3BzLmF0dHJpYnV0ZXMuaGFzUGFyYWxsYXgpIHtcbiAgICAgICAgY2xhc3NlcyArPSAnIGhhcy1wYXJhbGxheCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgIG51bGwsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFQbGFjZWhvbGRlciwge1xuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICB0aXRsZTogX18oJ0JhY2tncm91bmQnKSxcbiAgICAgICAgICBpbnN0cnVjdGlvbnM6IF9fKCdVcGxvYWQgYW4gaW1hZ2Ugb3IgcGljayBvbmUgZnJvbSB5b3VyIG1lZGlhIGxpYnJhcnkuJylcbiAgICAgICAgfSxcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IGlkOiBtZWRpYS5pZCwgdXJsOiBtZWRpYS51cmwgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFjY2VwdDogJ2ltYWdlLyonLFxuICAgICAgICBhbGxvd2VkVHlwZXM6IEFMTE9XRURfTUVESUFfVFlQRVMsXG4gICAgICAgIG5vdGljZXM6IHByb3BzLm5vdGljZVVJLFxuICAgICAgICBvbkVycm9yOiBwcm9wcy5vblVwbG9hZEVycm9yXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgJ2NsYXNzJzogJ2NvbXBvbmVudHMtcGFuZWxfX3JvdycgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvbkNsaWNrOiByZW1vdmVJbWFnZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfXygnUmVtb3ZlIGJhY2tncm91bmQnKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiAnY29tcG9uZW50cy1wYW5lbF9fcm93JyB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBodG1sRm9yOiAncmxqLWJhY2tncm91bmQtaGFzLXBhcmFsbGF4J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX18oJ0ZpeGVkIGJhY2tncm91bmQnLCAncmxqJylcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEZvcm1Ub2dnbGUsIHtcbiAgICAgICAgICBpZDogJ3Jsai1iYWNrZ3JvdW5kLWhhcy1wYXJhbGxheCcsXG4gICAgICAgICAgbGFiZWw6IF9fKCdGaXhlZCBiYWNrZ3JvdW5kJywgJ3JsaicpLFxuICAgICAgICAgIGNoZWNrZWQ6IHByb3BzLmF0dHJpYnV0ZXMuaGFzUGFyYWxsYXgsXG4gICAgICAgICAgb25DaGFuZ2U6IHRvZ2dsZUhhc1BhcmFsbGF4XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuICAgICldO1xuICB9LFxuXG4gIC8vIHNhdmU6IGZ1bmN0aW9uKCBwcm9wcyApIHtcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXG4gICAgdmFyIHN0eWxlID0gbnVsbDtcbiAgICAvLyB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzTmFtZTtcbiAgICB2YXIgY2xhc3NlcyA9ICcnO1xuXG4gICAgaWYgKHByb3BzLmF0dHJpYnV0ZXMudXJsKSB7XG5cbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmF0dHJpYnV0ZXMudXJsICsgJyknXG4gICAgICB9O1xuXG4gICAgICBjbGFzc2VzICs9ICcgaGFzLWJhY2tncm91bmQnO1xuXG4gICAgICBpZiAocHJvcHMuYXR0cmlidXRlcy5oYXNQYXJhbGxheCkge1xuICAgICAgICBjbGFzc2VzICs9ICcgaGFzLXBhcmFsbGF4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG4gICAgKTtcbiAgfVxuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZ3JvdW5kL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */,
/* 6 */
/*!************************************!*\
  !*** ./src/background/editor.scss ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2VkaXRvci5zY3NzP2Q0YmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iYWNrZ3JvdW5kL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);