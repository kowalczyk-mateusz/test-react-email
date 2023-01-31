/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"}":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Inter","arguments":[{"subsets":["latin"],"variable":"--font-inter"}],"variableName":"inter"} ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Inter_9c9965', '__Inter_Fallback_9c9965'\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_9c9965\",\n\t\"variable\": \"__variable_9c9965\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz97XCJwYXRoXCI6XCJzcmMvcGFnZXMvX2FwcC50c3hcIixcImltcG9ydFwiOlwiSW50ZXJcIixcImFyZ3VtZW50c1wiOlt7XCJzdWJzZXRzXCI6W1wibGF0aW5cIl0sXCJ2YXJpYWJsZVwiOlwiLS1mb250LWludGVyXCJ9XSxcInZhcmlhYmxlTmFtZVwiOlwiaW50ZXJcIn0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLFdBQVcsZ0ZBQWdGO0FBQzNGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLXByZXZpZXcvLi9ub2RlX21vZHVsZXMvQG5leHQvZm9udC9nb29nbGUvdGFyZ2V0LmNzcz9hNTgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN0eWxlXCI6IHtcImZvbnRGYW1pbHlcIjpcIidfX0ludGVyXzljOTk2NScsICdfX0ludGVyX0ZhbGxiYWNrXzljOTk2NSdcIixcImZvbnRTdHlsZVwiOlwibm9ybWFsXCJ9LFxuXHRcImNsYXNzTmFtZVwiOiBcIl9fY2xhc3NOYW1lXzljOTk2NVwiLFxuXHRcInZhcmlhYmxlXCI6IFwiX192YXJpYWJsZV85Yzk5NjVcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"}\n");

/***/ }),

/***/ "./src/components/tooltip-content.tsx":
/*!********************************************!*\
  !*** ./src/components/tooltip-content.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TooltipContent\": () => (/* binding */ TooltipContent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-tooltip */ \"@radix-ui/react-tooltip\");\n/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/_app */ \"./src/pages/_app.tsx\");\n\n\n\n\n\nconst TooltipContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(({ sideOffset =6 , children , ...props }, forwardedRef)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Portal, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Content, {\n            ...props,\n            ref: forwardedRef,\n            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"bg-black border border-slate-6 z-20 px-3 py-2 rounded-md text-xs\", `${_pages_app__WEBPACK_IMPORTED_MODULE_4__.inter.variable} font-sans`),\n            sideOffset: sideOffset,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/components/tooltip-content.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/components/tooltip-content.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined));\nTooltipContent.displayName = \"TooltipContent\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b29sdGlwLWNvbnRlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ3hCO0FBQ0w7QUFDTztBQVMvQixNQUFNSSwrQkFBaUJGLDZDQUFnQixDQUc1QyxDQUFDLEVBQUVJLFlBQWEsRUFBQyxFQUFFQyxTQUFRLEVBQUUsR0FBR0MsT0FBTyxFQUFFQyw2QkFDekMsOERBQUNULDJEQUF1QjtrQkFDdEIsNEVBQUNBLDREQUF3QjtZQUN0QixHQUFHUSxLQUFLO1lBQ1RJLEtBQUtIO1lBQ0xJLFdBQVdaLGlEQUFVQSxDQUNuQixvRUFDQSxDQUFDLEVBQUVFLHNEQUFjLENBQUMsVUFBVSxDQUFDO1lBRS9CRyxZQUFZQTtzQkFFWEM7Ozs7Ozs7Ozs7bUJBR0o7QUFFSEgsZUFBZVcsV0FBVyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtcHJldmlldy8uL3NyYy9jb21wb25lbnRzL3Rvb2x0aXAtY29udGVudC50c3g/N2RkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUb29sdGlwUHJpbWl0aXZlIGZyb20gJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW50ZXIgfSBmcm9tICcuLi9wYWdlcy9fYXBwJztcblxudHlwZSBDb250ZW50RWxlbWVudCA9IFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFRvb2x0aXBQcmltaXRpdmUuQ29udGVudD47XG50eXBlIENvbnRlbnRQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcbiAgdHlwZW9mIFRvb2x0aXBQcmltaXRpdmUuQ29udGVudFxuPjtcblxuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwUHJvcHMgZXh0ZW5kcyBDb250ZW50UHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFRvb2x0aXBDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgQ29udGVudEVsZW1lbnQsXG4gIFJlYWRvbmx5PFRvb2x0aXBQcm9wcz5cbj4oKHsgc2lkZU9mZnNldCA9IDYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCBmb3J3YXJkZWRSZWYpID0+IChcbiAgPFRvb2x0aXBQcmltaXRpdmUuUG9ydGFsPlxuICAgIDxUb29sdGlwUHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHJlZj17Zm9yd2FyZGVkUmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAnYmctYmxhY2sgYm9yZGVyIGJvcmRlci1zbGF0ZS02IHotMjAgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC14cycsXG4gICAgICAgIGAke2ludGVyLnZhcmlhYmxlfSBmb250LXNhbnNgLFxuICAgICAgKX1cbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVG9vbHRpcFByaW1pdGl2ZS5Db250ZW50PlxuICA8L1Rvb2x0aXBQcmltaXRpdmUuUG9ydGFsPlxuKSk7XG5cblRvb2x0aXBDb250ZW50LmRpc3BsYXlOYW1lID0gJ1Rvb2x0aXBDb250ZW50JztcbiJdLCJuYW1lcyI6WyJUb29sdGlwUHJpbWl0aXZlIiwiY2xhc3NuYW1lcyIsIlJlYWN0IiwiaW50ZXIiLCJUb29sdGlwQ29udGVudCIsImZvcndhcmRSZWYiLCJzaWRlT2Zmc2V0IiwiY2hpbGRyZW4iLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsIlBvcnRhbCIsIkNvbnRlbnQiLCJyZWYiLCJjbGFzc05hbWUiLCJ2YXJpYWJsZSIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tooltip-content.tsx\n");

/***/ }),

/***/ "./src/components/tooltip.tsx":
/*!************************************!*\
  !*** ./src/components/tooltip.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tooltip\": () => (/* binding */ Tooltip),\n/* harmony export */   \"TooltipRoot\": () => (/* binding */ TooltipRoot)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-tooltip */ \"@radix-ui/react-tooltip\");\n/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tooltip_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-content */ \"./src/components/tooltip-content.tsx\");\n\n\n\n\nconst TooltipRoot = ({ children , ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Root, {\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/components/tooltip.tsx\",\n        lineNumber: 12,\n        columnNumber: 7\n    }, undefined);\nconst Tooltip = Object.assign(TooltipRoot, {\n    Arrow: _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.TooltipArrow,\n    Provider: _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.TooltipProvider,\n    Content: _tooltip_content__WEBPACK_IMPORTED_MODULE_3__.TooltipContent,\n    Trigger: _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.TooltipTrigger\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b29sdGlwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTREO0FBQzdCO0FBQ29CO0FBTTVDLE1BQU1HLGNBQWdELENBQUMsRUFDNURDLFNBQVEsRUFDUixHQUFHQyxPQUNKLGlCQUFLLDhEQUFDTCx5REFBcUI7UUFBRSxHQUFHSyxLQUFLO2tCQUFHRDs7Ozs7a0JBQWtDO0FBRXBFLE1BQU1HLFVBQVVDLE9BQU9DLE1BQU0sQ0FBQ04sYUFBYTtJQUNoRE8sT0FBT1YsaUVBQTZCO0lBQ3BDWSxVQUFVWixvRUFBZ0M7SUFDMUNjLFNBQVNaLDREQUFjQTtJQUN2QmEsU0FBU2YsbUVBQStCO0FBQzFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1lbWFpbC1wcmV2aWV3Ly4vc3JjL2NvbXBvbmVudHMvdG9vbHRpcC50c3g/NzgzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUb29sdGlwUHJpbWl0aXZlIGZyb20gJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRlbnQnO1xuXG50eXBlIFJvb3RQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgVG9vbHRpcFByaW1pdGl2ZS5Sb290PjtcblxuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwUHJvcHMgZXh0ZW5kcyBSb290UHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFRvb2x0aXBSb290OiBSZWFjdC5GQzxSZWFkb25seTxUb29sdGlwUHJvcHM+PiA9ICh7XG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSkgPT4gPFRvb2x0aXBQcmltaXRpdmUuUm9vdCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1Rvb2x0aXBQcmltaXRpdmUuUm9vdD47XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gT2JqZWN0LmFzc2lnbihUb29sdGlwUm9vdCwge1xuICBBcnJvdzogVG9vbHRpcFByaW1pdGl2ZS5Ub29sdGlwQXJyb3csXG4gIFByb3ZpZGVyOiBUb29sdGlwUHJpbWl0aXZlLlRvb2x0aXBQcm92aWRlcixcbiAgQ29udGVudDogVG9vbHRpcENvbnRlbnQsXG4gIFRyaWdnZXI6IFRvb2x0aXBQcmltaXRpdmUuVG9vbHRpcFRyaWdnZXIsXG59KTtcbiJdLCJuYW1lcyI6WyJUb29sdGlwUHJpbWl0aXZlIiwiUmVhY3QiLCJUb29sdGlwQ29udGVudCIsIlRvb2x0aXBSb290IiwiY2hpbGRyZW4iLCJwcm9wcyIsIlJvb3QiLCJUb29sdGlwIiwiT2JqZWN0IiwiYXNzaWduIiwiQXJyb3ciLCJUb29sdGlwQXJyb3ciLCJQcm92aWRlciIsIlRvb2x0aXBQcm92aWRlciIsIkNvbnRlbnQiLCJUcmlnZ2VyIiwiVG9vbHRpcFRyaWdnZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/tooltip.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"inter\": () => (/* reexport default from dynamic */ _next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default.a)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"variable\\\":\\\"--font-inter\\\"}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tooltip */ \"./src/components/tooltip.tsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().variable), \"font-sans\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"React Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Provider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/pages/_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/pages/_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mateusz/singalOs/visitorsTemplates/my-app/.react-email/src/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPYUE7QUFQa0I7QUFHSztBQUNQO0FBQ21CO0FBT2hELFNBQVNJLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1AsaURBQVVBLENBQUNELGtMQUFjLEVBQUU7OzBCQUN6Qyw4REFBQ0Usa0RBQUlBOzBCQUNILDRFQUFDUTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNQLGlFQUFnQjswQkFDZiw0RUFBQ0U7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQztBQWxCUkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1lbWFpbC1wcmV2aWV3Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbHRpcCc7XG5cbmV4cG9ydCBjb25zdCBpbnRlciA9IEludGVyKHtcbiAgc3Vic2V0czogWydsYXRpbiddLFxuICB2YXJpYWJsZTogJy0tZm9udC1pbnRlcicsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGludGVyLnZhcmlhYmxlLCAnZm9udC1zYW5zJyl9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWFjdCBFbWFpbDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VG9vbHRpcC5Qcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Ub29sdGlwLlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJpbnRlciIsImNsYXNzbmFtZXMiLCJIZWFkIiwiVG9vbHRpcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFibGUiLCJ0aXRsZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@radix-ui/react-tooltip":
/*!******************************************!*\
  !*** external "@radix-ui/react-tooltip" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-tooltip");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();