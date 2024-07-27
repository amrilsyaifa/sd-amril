/*! For license information please see components-Tag-Tag-stories.ccdb2591.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksd_amril=self.webpackChunksd_amril||[]).push([[511],{"./src/components/Tag/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OutlineTag:()=>OutlineTag,SampleTag:()=>SampleTag,WithClassName:()=>WithClassName,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,withLeftIcon:()=>withLeftIcon,withRightIcon:()=>withRightIcon});var _Tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Tag/Tag.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Tag",component:_Tag__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs"],parameters:{layout:"fullscreen"}},ClosedIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ".concat(props.className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),SampleTag={args:{label:"Jane Doe",size:"md"}},WithClassName={args:{label:"Jane Doe",size:"md",className:"bg-red-500 text-blue-500"}},OutlineTag={args:{label:"Jane Doe",size:"md",variant:"outline"}},withRightIcon={args:{label:"Jane Doe",size:"md",rightIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClosedIcon,{className:"ml-1"})}},withLeftIcon={args:{label:"Jane Doe",size:"md",leftIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ClosedIcon,{className:"mr-1"})}},__namedExportsOrder=["SampleTag","WithClassName","OutlineTag","withRightIcon","withLeftIcon"];SampleTag.parameters={...SampleTag.parameters,docs:{...SampleTag.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Jane Doe",\n    size: "md"\n  }\n}',...SampleTag.parameters?.docs?.source}}},WithClassName.parameters={...WithClassName.parameters,docs:{...WithClassName.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Jane Doe",\n    size: "md",\n    className: "bg-red-500 text-blue-500"\n  }\n}',...WithClassName.parameters?.docs?.source}}},OutlineTag.parameters={...OutlineTag.parameters,docs:{...OutlineTag.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Jane Doe",\n    size: "md",\n    variant: "outline"\n  }\n}',...OutlineTag.parameters?.docs?.source}}},withRightIcon.parameters={...withRightIcon.parameters,docs:{...withRightIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Jane Doe",\n    size: "md",\n    rightIcon: <ClosedIcon className="ml-1" />\n  }\n}',...withRightIcon.parameters?.docs?.source}}},withLeftIcon.parameters={...withLeftIcon.parameters,docs:{...withLeftIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Jane Doe",\n    size: "md",\n    leftIcon: <ClosedIcon className="mr-1" />\n  }\n}',...withLeftIcon.parameters?.docs?.source}}}},"./src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=_ref=>{let{label,leftIcon,rightIcon,size,variant="solid",className}=_ref;const tagClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-white min-w-1 max-w-fit",{"text-sm":"sm"===size,"text-base":"md"===size,"text-lg":"lg"===size,"border border-blue-500 bg-white text-blue-500":"outline"===variant,"bg-blue-500":"solid"===variant},className),labelClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-xs font-normal leading-none max-w-full flex-initial",{"text-sm":"sm"===size,"text-base":"md"===size,"text-lg":"lg"===size});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:tagClass,children:[leftIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-auto",children:leftIcon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:labelClass,children:label}),rightIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-auto",children:rightIcon})]})},__WEBPACK_DEFAULT_EXPORT__=Tag;Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!0,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "solid"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);