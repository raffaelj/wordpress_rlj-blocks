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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_block_js__ = __webpack_require__(/*! ./section/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9zZWN0aW9uL2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./src/section/block.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n// Notes and research:\n// https://javascriptforwp.com/how-to-use-inspectorcontrols/\n// https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/cover/edit.js\n// https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n// https://developer.wordpress.org/resource/dashicons/\n// https://wordpress.org/gutenberg/handbook/block-api/\n\n// <pre>{JSON.stringify(props, null, 2)}</pre>\n\n\n//  Import CSS.\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    BlockIcon = _wp$editor.BlockIcon,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaPlaceholder = _wp$editor.MediaPlaceholder,\n    MediaUpload = _wp$editor.MediaUpload,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck,\n    withColors = _wp$editor.withColors,\n    PanelColorSettings = _wp$editor.PanelColorSettings;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    FormToggle = _wp$components.FormToggle,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    SelectControl = _wp$components.SelectControl;\n\n\nvar ALLOWED_MEDIA_TYPES = ['image'];\nvar IMAGE_BACKGROUND_TYPE = 'image';\n\n// fix to prevent a crash when clicking on \"Styles\" in the sidebar\n// if using without Gutenberg addon version >= 6.0.0\n// source: https://github.com/WordPress/gutenberg/issues/9897#issuecomment-478362380\nvar el = wp.element.createElement;\nvar allowSectionStyles = wp.compose.createHigherOrderComponent(function (BlockEdit) {\n\n  return function (props) {\n    var content = el(BlockEdit, props);\n\n    if (props.name === 'rlj/section' && typeof props.insertBlocksAfter === 'undefined') {\n      content = el('div', {});\n    }\n\n    return el(wp.element.Fragment, {}, content);\n  };\n}, 'allowSectionStyles');\nwp.hooks.addFilter('editor.BlockEdit', 'rlj/section', allowSectionStyles);\n// end of styles crash fix\n\n\nregisterBlockType('rlj/section', {\n\n  title: __('Section'),\n  icon: 'layout',\n  category: 'common', // common, formatting, layout widgets, embed.\n  keywords: [__('rlj-blocks'), __('Background'), __('Wrapper')],\n  supports: {\n    // align: true,\n    align: ['full', 'wide'],\n    anchor: true\n  },\n  styles: [{\n    name: 'default',\n    label: __('Default'),\n    isDefault: true\n  }, {\n    name: 'rounded',\n    label: __('Rounded')\n  }, {\n    name: 'shadow',\n    label: __('Shadow')\n  }, {\n    name: 'shadow-rounded',\n    label: __('Shadow + Rounded')\n  }],\n  attributes: {\n    'url': {\n      'type': 'string'\n    },\n    'size': {\n      'type': 'string',\n      'default': 'large'\n    },\n    'sizes': {\n      'type': 'object'\n    },\n    'id': {\n      'type': 'number'\n    },\n    'hasParallax': {\n      'type': 'boolean',\n      'default': false\n    },\n    'overlay': {\n      'type': 'boolean',\n      'default': false\n    },\n    'hideBackgroundWhileEditing': {\n      'type': 'boolean',\n      'default': false\n    },\n    'backgroundColor': {\n      'type': 'string'\n    },\n    'customBackgroundColor': {\n      'type': 'string'\n    }\n    // 'textColor': {\n    // 'type': 'object'\n    // },\n    // 'dimRatio': {\n    // 'type': 'number',\n    // 'default': 50\n    // },\n    // 'overlayColor': {\n    // 'type': 'string'\n    // },\n    // 'customOverlayColor': {\n    // 'type': 'string'\n    // },\n    // 'backgroundType': {\n    // 'type': 'string',\n    // 'default': 'image'\n    // },\n    // 'focalPoint': {\n    // 'type': 'object'\n    // }\n  },\n\n  // edit: withColors( 'backgroundColor', { textColor: 'color' } )(function( props ) {\n  edit: withColors('backgroundColor')(function (props) {\n\n    function getImageSizeOptions() {\n\n      if (_typeof(props.attributes.sizes) == 'object') {\n        return Object.keys(props.attributes.sizes).map(function (k) {\n          return { label: k, value: k };\n        });\n      }\n\n      return [];\n    }\n\n    var style = {};\n    var classes = props.className;\n\n    var image_preview_style = {\n      maxHeight: '150px',\n      margin: '0 auto'\n    };\n\n    var image_hide_style = {\n      maxWidth: '40px',\n      maxHeight: '40px',\n      margin: '0',\n      position: 'absolute',\n      right: '0',\n      opacity: '.3'\n    };\n\n    if (props.attributes.url) {\n\n      if (!props.attributes.hideBackgroundWhileEditing) {\n        style.backgroundImage = 'url(' + props.attributes.url + ')';\n      }\n\n      classes += ' has-background';\n\n      if (props.attributes.hasParallax) {\n        classes += ' has-parallax';\n      }\n    }\n\n    if (props.backgroundColor.color) {\n\n      if (props.backgroundColor.color) {\n        style.backgroundColor = props.backgroundColor.color;\n      }\n    }\n\n    if (props.attributes.overlay) {\n      classes += ' has-background-dim';\n    }\n\n    return [wp.element.createElement(\n      InspectorControls,\n      null,\n      wp.element.createElement(\n        PanelBody,\n        null,\n        wp.element.createElement(\n          PanelRow,\n          null,\n          !props.attributes.url && wp.element.createElement(MediaPlaceholder, {\n            labels: {\n              title: __('Background'),\n              instructions: __('Upload an image or pick one from your media library.')\n            },\n            onSelect: function onSelect(media) {\n              // console.log(media);\n              props.setAttributes({\n                id: media.id,\n                url: media.url,\n                sizes: media.sizes\n              });\n              if (props.attributes.size && media.sizes[props.attributes.size]) {\n                props.setAttributes({\n                  url: media.sizes[props.attributes.size].url\n                });\n              }\n            },\n            accept: 'image/*',\n            allowedTypes: ALLOWED_MEDIA_TYPES,\n            notices: props.noticeUI,\n            onError: props.onUploadError\n          })\n        ),\n        props.attributes.url && wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement('img', { src: props.attributes.url, style: image_preview_style })\n        ),\n        props.attributes.url && wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement(\n            MediaUploadCheck,\n            null,\n            wp.element.createElement(MediaUpload, {\n              onSelect: function onSelect(media) {\n                props.setAttributes({\n                  id: media.id,\n                  url: media.url,\n                  sizes: media.sizes });\n                if (props.attributes.size && media.sizes[props.attributes.size]) {\n                  props.setAttributes({\n                    url: media.sizes[props.attributes.size].url\n                  });\n                }\n              },\n              allowedTypes: ALLOWED_MEDIA_TYPES,\n              value: props.attributes.id,\n              render: function render(_ref) {\n                var open = _ref.open;\n                return wp.element.createElement(\n                  Button,\n                  {\n                    onClick: open,\n                    className: 'button button-large'\n                  },\n                  __('Change background')\n                );\n              }\n            })\n          )\n        ),\n        props.attributes.url && wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement(\n            Button,\n            {\n              onClick: function onClick() {\n                props.setAttributes({ id: null, url: null });\n              },\n              className: 'button button-large'\n            },\n            __('Remove background')\n          )\n        ),\n        props.attributes.url && wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement(SelectControl, {\n            label: __('Image Size'),\n            value: props.attributes.size || '',\n            options: getImageSizeOptions(),\n            onChange: function onChange(size) {\n              props.setAttributes({ size: size, url: props.attributes.sizes[size].url });\n            }\n          })\n        ),\n        props.attributes.url && wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement(\n            'label',\n            {\n              htmlFor: 'rlj-section-has-parallax'\n            },\n            __('Fixed background', 'rlj')\n          ),\n          wp.element.createElement(FormToggle, {\n            id: 'rlj-section-has-parallax',\n            label: __('Fixed background', 'rlj'),\n            checked: props.attributes.hasParallax,\n            onChange: function onChange() {\n              props.setAttributes({ hasParallax: !props.attributes.hasParallax });\n            }\n          })\n        ),\n        props.attributes.url && wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement(\n            'label',\n            {\n              htmlFor: 'rlj-section-hide-background'\n            },\n            __('Hide background while editing', 'rlj')\n          ),\n          wp.element.createElement(FormToggle, {\n            id: 'rlj-section-hide-background',\n            label: __('Hide background while editing', 'rlj'),\n            checked: props.attributes.hideBackgroundWhileEditing,\n            onChange: function onChange() {\n              props.setAttributes({ hideBackgroundWhileEditing: !props.attributes.hideBackgroundWhileEditing });\n            }\n          })\n        )\n      ),\n      wp.element.createElement(\n        PanelColorSettings,\n        {\n          title: __('Color Settings'),\n          initialOpen: false,\n          colorSettings: [{\n            value: props.backgroundColor.color,\n            onChange: props.setBackgroundColor,\n            label: __('Background Color')\n          }]\n        },\n        wp.element.createElement(\n          PanelRow,\n          null,\n          wp.element.createElement(\n            'label',\n            {\n              htmlFor: 'rlj-section-overlay'\n            },\n            __('Overlay', 'rlj')\n          ),\n          wp.element.createElement(FormToggle, {\n            id: 'rlj-section-overlay',\n            label: __('Overlay', 'rlj'),\n            checked: props.attributes.overlay,\n            onChange: function onChange() {\n              props.setAttributes({ overlay: !props.attributes.overlay });\n            }\n          })\n        )\n      )\n    ), wp.element.createElement(\n      'div',\n      {\n        className: classes,\n        style: style\n      },\n      props.attributes.url && props.attributes.hideBackgroundWhileEditing && wp.element.createElement('img', {\n        src: props.attributes.url,\n        style: image_hide_style\n      }),\n      wp.element.createElement(InnerBlocks, null)\n    )];\n  }),\n\n  save: function save(props) {\n\n    var style = {};\n    var classes = '';\n\n    if (props.attributes.url) {\n\n      style.backgroundImage = 'url(' + props.attributes.url + ')';\n\n      classes += ' has-background';\n\n      if (props.attributes.hasParallax) {\n        classes += ' has-parallax';\n      }\n    }\n\n    if (props.attributes.backgroundColor) {\n      classes += ' has-' + props.attributes.backgroundColor + '-background-color';\n    }\n\n    if (props.attributes.customBackgroundColor) {\n      style.backgroundColor = props.attributes.customBackgroundColor;\n    }\n\n    if (props.attributes.overlay) {\n      classes += ' has-background-dim';\n    }\n\n    return wp.element.createElement(\n      'div',\n      {\n        className: classes,\n        style: style\n      },\n      wp.element.createElement(InnerBlocks.Content, null)\n    );\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZWN0aW9uL2Jsb2NrLmpzPzQwM2IiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vLyBOb3RlcyBhbmQgcmVzZWFyY2g6XG4vLyBodHRwczovL2phdmFzY3JpcHRmb3J3cC5jb20vaG93LXRvLXVzZS1pbnNwZWN0b3Jjb250cm9scy9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Xb3JkUHJlc3MvZ3V0ZW5iZXJnL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2Jsb2NrLWxpYnJhcnkvc3JjL2NvdmVyL2VkaXQuanNcbi8vIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zL1xuLy8gaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG5cbi8vIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT5cblxuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGVkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEJsb2NrSWNvbiA9IF93cCRlZGl0b3IuQmxvY2tJY29uLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcyxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgTWVkaWFQbGFjZWhvbGRlciA9IF93cCRlZGl0b3IuTWVkaWFQbGFjZWhvbGRlcixcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgTWVkaWFVcGxvYWRDaGVjayA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWRDaGVjayxcbiAgICB3aXRoQ29sb3JzID0gX3dwJGVkaXRvci53aXRoQ29sb3JzLFxuICAgIFBhbmVsQ29sb3JTZXR0aW5ncyA9IF93cCRlZGl0b3IuUGFuZWxDb2xvclNldHRpbmdzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgRm9ybVRvZ2dsZSA9IF93cCRjb21wb25lbnRzLkZvcm1Ub2dnbGUsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxSb3csXG4gICAgU2VsZWN0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlNlbGVjdENvbnRyb2w7XG5cblxudmFyIEFMTE9XRURfTUVESUFfVFlQRVMgPSBbJ2ltYWdlJ107XG52YXIgSU1BR0VfQkFDS0dST1VORF9UWVBFID0gJ2ltYWdlJztcblxuLy8gZml4IHRvIHByZXZlbnQgYSBjcmFzaCB3aGVuIGNsaWNraW5nIG9uIFwiU3R5bGVzXCIgaW4gdGhlIHNpZGViYXJcbi8vIGlmIHVzaW5nIHdpdGhvdXQgR3V0ZW5iZXJnIGFkZG9uIHZlcnNpb24gPj0gNi4wLjBcbi8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL1dvcmRQcmVzcy9ndXRlbmJlcmcvaXNzdWVzLzk4OTcjaXNzdWVjb21tZW50LTQ3ODM2MjM4MFxudmFyIGVsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xudmFyIGFsbG93U2VjdGlvblN0eWxlcyA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoZnVuY3Rpb24gKEJsb2NrRWRpdCkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29udGVudCA9IGVsKEJsb2NrRWRpdCwgcHJvcHMpO1xuXG4gICAgaWYgKHByb3BzLm5hbWUgPT09ICdybGovc2VjdGlvbicgJiYgdHlwZW9mIHByb3BzLmluc2VydEJsb2Nrc0FmdGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29udGVudCA9IGVsKCdkaXYnLCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsKHdwLmVsZW1lbnQuRnJhZ21lbnQsIHt9LCBjb250ZW50KTtcbiAgfTtcbn0sICdhbGxvd1NlY3Rpb25TdHlsZXMnKTtcbndwLmhvb2tzLmFkZEZpbHRlcignZWRpdG9yLkJsb2NrRWRpdCcsICdybGovc2VjdGlvbicsIGFsbG93U2VjdGlvblN0eWxlcyk7XG4vLyBlbmQgb2Ygc3R5bGVzIGNyYXNoIGZpeFxuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdybGovc2VjdGlvbicsIHtcblxuICB0aXRsZTogX18oJ1NlY3Rpb24nKSxcbiAgaWNvbjogJ2xheW91dCcsXG4gIGNhdGVnb3J5OiAnY29tbW9uJywgLy8gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4gIGtleXdvcmRzOiBbX18oJ3Jsai1ibG9ja3MnKSwgX18oJ0JhY2tncm91bmQnKSwgX18oJ1dyYXBwZXInKV0sXG4gIHN1cHBvcnRzOiB7XG4gICAgLy8gYWxpZ246IHRydWUsXG4gICAgYWxpZ246IFsnZnVsbCcsICd3aWRlJ10sXG4gICAgYW5jaG9yOiB0cnVlXG4gIH0sXG4gIHN0eWxlczogW3tcbiAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgbGFiZWw6IF9fKCdEZWZhdWx0JyksXG4gICAgaXNEZWZhdWx0OiB0cnVlXG4gIH0sIHtcbiAgICBuYW1lOiAncm91bmRlZCcsXG4gICAgbGFiZWw6IF9fKCdSb3VuZGVkJylcbiAgfSwge1xuICAgIG5hbWU6ICdzaGFkb3cnLFxuICAgIGxhYmVsOiBfXygnU2hhZG93JylcbiAgfSwge1xuICAgIG5hbWU6ICdzaGFkb3ctcm91bmRlZCcsXG4gICAgbGFiZWw6IF9fKCdTaGFkb3cgKyBSb3VuZGVkJylcbiAgfV0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICAndXJsJzoge1xuICAgICAgJ3R5cGUnOiAnc3RyaW5nJ1xuICAgIH0sXG4gICAgJ3NpemUnOiB7XG4gICAgICAndHlwZSc6ICdzdHJpbmcnLFxuICAgICAgJ2RlZmF1bHQnOiAnbGFyZ2UnXG4gICAgfSxcbiAgICAnc2l6ZXMnOiB7XG4gICAgICAndHlwZSc6ICdvYmplY3QnXG4gICAgfSxcbiAgICAnaWQnOiB7XG4gICAgICAndHlwZSc6ICdudW1iZXInXG4gICAgfSxcbiAgICAnaGFzUGFyYWxsYXgnOiB7XG4gICAgICAndHlwZSc6ICdib29sZWFuJyxcbiAgICAgICdkZWZhdWx0JzogZmFsc2VcbiAgICB9LFxuICAgICdvdmVybGF5Jzoge1xuICAgICAgJ3R5cGUnOiAnYm9vbGVhbicsXG4gICAgICAnZGVmYXVsdCc6IGZhbHNlXG4gICAgfSxcbiAgICAnaGlkZUJhY2tncm91bmRXaGlsZUVkaXRpbmcnOiB7XG4gICAgICAndHlwZSc6ICdib29sZWFuJyxcbiAgICAgICdkZWZhdWx0JzogZmFsc2VcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiB7XG4gICAgICAndHlwZSc6ICdzdHJpbmcnXG4gICAgfSxcbiAgICAnY3VzdG9tQmFja2dyb3VuZENvbG9yJzoge1xuICAgICAgJ3R5cGUnOiAnc3RyaW5nJ1xuICAgIH1cbiAgICAvLyAndGV4dENvbG9yJzoge1xuICAgIC8vICd0eXBlJzogJ29iamVjdCdcbiAgICAvLyB9LFxuICAgIC8vICdkaW1SYXRpbyc6IHtcbiAgICAvLyAndHlwZSc6ICdudW1iZXInLFxuICAgIC8vICdkZWZhdWx0JzogNTBcbiAgICAvLyB9LFxuICAgIC8vICdvdmVybGF5Q29sb3InOiB7XG4gICAgLy8gJ3R5cGUnOiAnc3RyaW5nJ1xuICAgIC8vIH0sXG4gICAgLy8gJ2N1c3RvbU92ZXJsYXlDb2xvcic6IHtcbiAgICAvLyAndHlwZSc6ICdzdHJpbmcnXG4gICAgLy8gfSxcbiAgICAvLyAnYmFja2dyb3VuZFR5cGUnOiB7XG4gICAgLy8gJ3R5cGUnOiAnc3RyaW5nJyxcbiAgICAvLyAnZGVmYXVsdCc6ICdpbWFnZSdcbiAgICAvLyB9LFxuICAgIC8vICdmb2NhbFBvaW50Jzoge1xuICAgIC8vICd0eXBlJzogJ29iamVjdCdcbiAgICAvLyB9XG4gIH0sXG5cbiAgLy8gZWRpdDogd2l0aENvbG9ycyggJ2JhY2tncm91bmRDb2xvcicsIHsgdGV4dENvbG9yOiAnY29sb3InIH0gKShmdW5jdGlvbiggcHJvcHMgKSB7XG4gIGVkaXQ6IHdpdGhDb2xvcnMoJ2JhY2tncm91bmRDb2xvcicpKGZ1bmN0aW9uIChwcm9wcykge1xuXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2VTaXplT3B0aW9ucygpIHtcblxuICAgICAgaWYgKF90eXBlb2YocHJvcHMuYXR0cmlidXRlcy5zaXplcykgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzLmF0dHJpYnV0ZXMuc2l6ZXMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBrLCB2YWx1ZTogayB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgdmFyIGltYWdlX3ByZXZpZXdfc3R5bGUgPSB7XG4gICAgICBtYXhIZWlnaHQ6ICcxNTBweCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXG4gICAgfTtcblxuICAgIHZhciBpbWFnZV9oaWRlX3N0eWxlID0ge1xuICAgICAgbWF4V2lkdGg6ICc0MHB4JyxcbiAgICAgIG1heEhlaWdodDogJzQwcHgnLFxuICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICBvcGFjaXR5OiAnLjMnXG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5hdHRyaWJ1dGVzLnVybCkge1xuXG4gICAgICBpZiAoIXByb3BzLmF0dHJpYnV0ZXMuaGlkZUJhY2tncm91bmRXaGlsZUVkaXRpbmcpIHtcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcHJvcHMuYXR0cmlidXRlcy51cmwgKyAnKSc7XG4gICAgICB9XG5cbiAgICAgIGNsYXNzZXMgKz0gJyBoYXMtYmFja2dyb3VuZCc7XG5cbiAgICAgIGlmIChwcm9wcy5hdHRyaWJ1dGVzLmhhc1BhcmFsbGF4KSB7XG4gICAgICAgIGNsYXNzZXMgKz0gJyBoYXMtcGFyYWxsYXgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5iYWNrZ3JvdW5kQ29sb3IuY29sb3IpIHtcblxuICAgICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvci5jb2xvcikge1xuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IuY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmF0dHJpYnV0ZXMub3ZlcmxheSkge1xuICAgICAgY2xhc3NlcyArPSAnIGhhcy1iYWNrZ3JvdW5kLWRpbSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgIG51bGwsXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBhbmVsUm93LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgIXByb3BzLmF0dHJpYnV0ZXMudXJsICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVBsYWNlaG9sZGVyLCB7XG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IF9fKCdCYWNrZ3JvdW5kJyksXG4gICAgICAgICAgICAgIGluc3RydWN0aW9uczogX18oJ1VwbG9hZCBhbiBpbWFnZSBvciBwaWNrIG9uZSBmcm9tIHlvdXIgbWVkaWEgbGlicmFyeS4nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtZWRpYSk7XG4gICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgIGlkOiBtZWRpYS5pZCxcbiAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICBzaXplczogbWVkaWEuc2l6ZXNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5hdHRyaWJ1dGVzLnNpemUgJiYgbWVkaWEuc2l6ZXNbcHJvcHMuYXR0cmlidXRlcy5zaXplXSkge1xuICAgICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgdXJsOiBtZWRpYS5zaXplc1twcm9wcy5hdHRyaWJ1dGVzLnNpemVdLnVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWNjZXB0OiAnaW1hZ2UvKicsXG4gICAgICAgICAgICBhbGxvd2VkVHlwZXM6IEFMTE9XRURfTUVESUFfVFlQRVMsXG4gICAgICAgICAgICBub3RpY2VzOiBwcm9wcy5ub3RpY2VVSSxcbiAgICAgICAgICAgIG9uRXJyb3I6IHByb3BzLm9uVXBsb2FkRXJyb3JcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBwcm9wcy5hdHRyaWJ1dGVzLnVybCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUGFuZWxSb3csXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBwcm9wcy5hdHRyaWJ1dGVzLnVybCwgc3R5bGU6IGltYWdlX3ByZXZpZXdfc3R5bGUgfSlcbiAgICAgICAgKSxcbiAgICAgICAgcHJvcHMuYXR0cmlidXRlcy51cmwgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBhbmVsUm93LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTWVkaWFVcGxvYWRDaGVjayxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcbiAgICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICBpZDogbWVkaWEuaWQsXG4gICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICAgIHNpemVzOiBtZWRpYS5zaXplcyB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuYXR0cmlidXRlcy5zaXplICYmIG1lZGlhLnNpemVzW3Byb3BzLmF0dHJpYnV0ZXMuc2l6ZV0pIHtcbiAgICAgICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnNpemVzW3Byb3BzLmF0dHJpYnV0ZXMuc2l6ZV0udXJsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFsbG93ZWRUeXBlczogQUxMT1dFRF9NRURJQV9UWVBFUyxcbiAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuaWQsXG4gICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3BlbiA9IF9yZWYub3BlbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBvcGVuLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWxhcmdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF9fKCdDaGFuZ2UgYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHByb3BzLmF0dHJpYnV0ZXMudXJsICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgaWQ6IG51bGwsIHVybDogbnVsbCB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1sYXJnZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfXygnUmVtb3ZlIGJhY2tncm91bmQnKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgcHJvcHMuYXR0cmlidXRlcy51cmwgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBhbmVsUm93LFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRyb2wsIHtcbiAgICAgICAgICAgIGxhYmVsOiBfXygnSW1hZ2UgU2l6ZScpLFxuICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuc2l6ZSB8fCAnJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IGdldEltYWdlU2l6ZU9wdGlvbnMoKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShzaXplKSB7XG4gICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBzaXplOiBzaXplLCB1cmw6IHByb3BzLmF0dHJpYnV0ZXMuc2l6ZXNbc2l6ZV0udXJsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIHByb3BzLmF0dHJpYnV0ZXMudXJsICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGh0bWxGb3I6ICdybGotc2VjdGlvbi1oYXMtcGFyYWxsYXgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX18oJ0ZpeGVkIGJhY2tncm91bmQnLCAncmxqJylcbiAgICAgICAgICApLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChGb3JtVG9nZ2xlLCB7XG4gICAgICAgICAgICBpZDogJ3Jsai1zZWN0aW9uLWhhcy1wYXJhbGxheCcsXG4gICAgICAgICAgICBsYWJlbDogX18oJ0ZpeGVkIGJhY2tncm91bmQnLCAncmxqJyksXG4gICAgICAgICAgICBjaGVja2VkOiBwcm9wcy5hdHRyaWJ1dGVzLmhhc1BhcmFsbGF4LFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgaGFzUGFyYWxsYXg6ICFwcm9wcy5hdHRyaWJ1dGVzLmhhc1BhcmFsbGF4IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIHByb3BzLmF0dHJpYnV0ZXMudXJsICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGh0bWxGb3I6ICdybGotc2VjdGlvbi1oaWRlLWJhY2tncm91bmQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX18oJ0hpZGUgYmFja2dyb3VuZCB3aGlsZSBlZGl0aW5nJywgJ3JsaicpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuICAgICAgICAgICAgaWQ6ICdybGotc2VjdGlvbi1oaWRlLWJhY2tncm91bmQnLFxuICAgICAgICAgICAgbGFiZWw6IF9fKCdIaWRlIGJhY2tncm91bmQgd2hpbGUgZWRpdGluZycsICdybGonKSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IHByb3BzLmF0dHJpYnV0ZXMuaGlkZUJhY2tncm91bmRXaGlsZUVkaXRpbmcsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyBoaWRlQmFja2dyb3VuZFdoaWxlRWRpdGluZzogIXByb3BzLmF0dHJpYnV0ZXMuaGlkZUJhY2tncm91bmRXaGlsZUVkaXRpbmcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUGFuZWxDb2xvclNldHRpbmdzLFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6IF9fKCdDb2xvciBTZXR0aW5ncycpLFxuICAgICAgICAgIGluaXRpYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgICBjb2xvclNldHRpbmdzOiBbe1xuICAgICAgICAgICAgdmFsdWU6IHByb3BzLmJhY2tncm91bmRDb2xvci5jb2xvcixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5zZXRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICBsYWJlbDogX18oJ0JhY2tncm91bmQgQ29sb3InKVxuICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbFJvdyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGh0bWxGb3I6ICdybGotc2VjdGlvbi1vdmVybGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9fKCdPdmVybGF5JywgJ3JsaicpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoRm9ybVRvZ2dsZSwge1xuICAgICAgICAgICAgaWQ6ICdybGotc2VjdGlvbi1vdmVybGF5JyxcbiAgICAgICAgICAgIGxhYmVsOiBfXygnT3ZlcmxheScsICdybGonKSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IHByb3BzLmF0dHJpYnV0ZXMub3ZlcmxheSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IG92ZXJsYXk6ICFwcm9wcy5hdHRyaWJ1dGVzLm92ZXJsYXkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSxcbiAgICAgIHByb3BzLmF0dHJpYnV0ZXMudXJsICYmIHByb3BzLmF0dHJpYnV0ZXMuaGlkZUJhY2tncm91bmRXaGlsZUVkaXRpbmcgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgIHNyYzogcHJvcHMuYXR0cmlidXRlcy51cmwsXG4gICAgICAgIHN0eWxlOiBpbWFnZV9oaWRlX3N0eWxlXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2NrcywgbnVsbClcbiAgICApXTtcbiAgfSksXG5cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgdmFyIGNsYXNzZXMgPSAnJztcblxuICAgIGlmIChwcm9wcy5hdHRyaWJ1dGVzLnVybCkge1xuXG4gICAgICBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBwcm9wcy5hdHRyaWJ1dGVzLnVybCArICcpJztcblxuICAgICAgY2xhc3NlcyArPSAnIGhhcy1iYWNrZ3JvdW5kJztcblxuICAgICAgaWYgKHByb3BzLmF0dHJpYnV0ZXMuaGFzUGFyYWxsYXgpIHtcbiAgICAgICAgY2xhc3NlcyArPSAnIGhhcy1wYXJhbGxheCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmF0dHJpYnV0ZXMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICBjbGFzc2VzICs9ICcgaGFzLScgKyBwcm9wcy5hdHRyaWJ1dGVzLmJhY2tncm91bmRDb2xvciArICctYmFja2dyb3VuZC1jb2xvcic7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmF0dHJpYnV0ZXMuY3VzdG9tQmFja2dyb3VuZENvbG9yKSB7XG4gICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5hdHRyaWJ1dGVzLmN1c3RvbUJhY2tncm91bmRDb2xvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuYXR0cmlidXRlcy5vdmVybGF5KSB7XG4gICAgICBjbGFzc2VzICs9ICcgaGFzLWJhY2tncm91bmQtZGltJztcbiAgICB9XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG4gICAgKTtcbiAgfVxuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWN0aW9uL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************!*\
  !*** ./src/section/editor.scss ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZWN0aW9uL2VkaXRvci5zY3NzPzBhNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWN0aW9uL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);