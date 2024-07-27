/*! For license information please see components-SelectDropdown-SelectDropdown-stories.67e1505c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksd_amril=self.webpackChunksd_amril||[]).push([[615],{"./src/components/SelectDropdown/SelectDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectDropdownInput:()=>SelectDropdownInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectDropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),Tag=__webpack_require__("./src/components/Tag/Tag.tsx");function useCallbackRef(callback){let deps=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const callbackRef=(0,react.useRef)((()=>{throw new Error("Cannot call an event handler while rendering.")}));return(0,react.useInsertionEffect)((()=>{callbackRef.current=callback})),(0,react.useCallback)((function(){for(var _callbackRef$current,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),deps)}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function isValidEvent(event,ref){var _ref$current;const target=event.target;if(target){if(!getOwnerDocument(target).contains(target))return!1}return!(null!==(_ref$current=ref.current)&&void 0!==_ref$current&&_ref$current.contains(target))}function getOwnerDocument(node){var _node$ownerDocument;return null!==(_node$ownerDocument=null==node?void 0:node.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:document}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SearchInput=_ref=>{let{value,onChange}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,jsx_runtime.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,jsx_runtime.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})}),(0,jsx_runtime.jsx)("input",{value,onChange,type:"search",id:"default-search",className:"block w-full p-2.5 ps-10 text-sm text-gray-900 border-b",required:!0})]})},SelectDropdown_SearchInput=SearchInput;SearchInput.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"value"}],return:{name:"void"}}},description:""}}};const ClosedIcon=_ref=>{let{onClick}=_ref;return(0,jsx_runtime.jsx)("div",{onClick,children:(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2",children:[(0,jsx_runtime.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,jsx_runtime.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})},SelectDropdown_ClosedIcon=ClosedIcon;ClosedIcon.__docgenInfo={description:"",methods:[],displayName:"ClosedIcon",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const SelectDropdown=_ref=>{let{placeholder,options,isMulti,value,withSearch,withInput=!0,className,onChange}=_ref;const ref=(0,react.useRef)(null),{open,onOpen,onClose,onToggle}=function useDisclosure(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onClose:onCloseProp,onOpen:onOpenProp,open:openProp,id:idProp}=props,handleOpen=useCallbackRef(onOpenProp),handleClose=useCallbackRef(onCloseProp),[openState,setopen]=(0,react.useState)(props.defaultOpen||!1),open=void 0!==openProp?openProp:openState,isControlled=void 0!==openProp,uid=(0,react.useId)(),id=null!=idProp?idProp:"disclosure-".concat(uid),onClose=(0,react.useCallback)((()=>{isControlled||setopen(!1),null==handleClose||handleClose()}),[isControlled,handleClose]),onOpen=(0,react.useCallback)((()=>{isControlled||setopen(!0),null==handleOpen||handleOpen()}),[isControlled,handleOpen]),onToggle=(0,react.useCallback)((()=>{open?onClose():onOpen()}),[open,onOpen,onClose]);return{open,onOpen,onClose,onToggle,isControlled,getButtonProps:function getButtonProps(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...props,"aria-expanded":open,"aria-controls":id,onClick(event){var _props$onClick;null===(_props$onClick=props.onClick)||void 0===_props$onClick||_props$onClick.call(props,event),onToggle()}}},getDisclosureProps:function getDisclosureProps(){return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},hidden:!open,id}}}}();!function useOutsideClick(props){const{ref,handler,enabled=!0}=props,savedHandler=useCallbackRef(handler),state=(0,react.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;(0,react.useEffect)((()=>{if(!enabled)return;const onPointerDown=e=>{isValidEvent(e,ref)&&(state.isPointerDown=!0)},onMouseUp=event=>{state.ignoreEmulatedMouseEvents?state.ignoreEmulatedMouseEvents=!1:state.isPointerDown&&handler&&isValidEvent(event,ref)&&(state.isPointerDown=!1,savedHandler(event))},onTouchEnd=event=>{state.ignoreEmulatedMouseEvents=!0,handler&&state.isPointerDown&&isValidEvent(event,ref)&&(state.isPointerDown=!1,savedHandler(event))},doc=getOwnerDocument(ref.current);return doc.addEventListener("mousedown",onPointerDown,!0),doc.addEventListener("mouseup",onMouseUp,!0),doc.addEventListener("touchstart",onPointerDown,!0),doc.addEventListener("touchend",onTouchEnd,!0),()=>{doc.removeEventListener("mousedown",onPointerDown,!0),doc.removeEventListener("mouseup",onMouseUp,!0),doc.removeEventListener("touchstart",onPointerDown,!0),doc.removeEventListener("touchend",onTouchEnd,!0)}}),[handler,ref,savedHandler,state,enabled])}({ref,handler:()=>onClose()});const[search,setSearch]=(0,react.useState)(""),selectClass=classnames_default()("w-full flex flex-col items-center h-64 mx-auto",className),newPlaceholder=value?"":placeholder||"",newValues=Array.isArray(value)?value:value?[value]:[],optionsFiltered=options.filter((option=>option.label.toLowerCase().includes(search.toLowerCase())));return(0,jsx_runtime.jsx)("div",{className:selectClass,ref,children:(0,jsx_runtime.jsx)("div",{className:"w-full px-4",children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center relative",children:[(0,jsx_runtime.jsx)("div",{className:"w-full svelte-1l8159u",children:(0,jsx_runtime.jsxs)("div",{className:"my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u",children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-auto flex-wrap",children:[newValues&&newValues.map((val=>{var _val$label;return(0,jsx_runtime.jsx)(Tag.A,{label:null!==(_val$label=null==val?void 0:val.label)&&void 0!==_val$label?_val$label:"",rightIcon:(0,jsx_runtime.jsx)(SelectDropdown_ClosedIcon,{onClick:()=>(val=>{const value=newValues.filter((v=>(null==v?void 0:v.value)!==(null==val?void 0:val.value)));return 0===value.length?onChange&&onChange(void 0):onChange&&onChange(value)})(val)})},null==val?void 0:val.value)})),(0,jsx_runtime.jsx)("div",{className:"flex-1",onClick:()=>withSearch||!withInput?onToggle():null,children:!withSearch&&withInput&&(0,jsx_runtime.jsx)("input",{value:search,onFocus:onOpen,onChange:e=>setSearch(e.target.value),placeholder:newPlaceholder,className:"bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"})})]}),(0,jsx_runtime.jsx)("div",{className:"text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u",children:(0,jsx_runtime.jsx)("button",{className:"cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:classnames_default()("feather feather-chevron-up w-4 h-4 rotate-180",{"rotate-0":open}),children:(0,jsx_runtime.jsx)("polyline",{points:"18 15 12 9 6 15"})})})})]})}),open&&(0,jsx_runtime.jsxs)("div",{className:"absolute shadow top-100 bg-white z-40 w-full lef-0 rounded",children:[withSearch&&(0,jsx_runtime.jsx)(SelectDropdown_SearchInput,{value:search,onChange:e=>setSearch(e.target.value)}),(0,jsx_runtime.jsx)("div",{className:"max-h-select overflow-y-auto",children:(0,jsx_runtime.jsx)("div",{className:"flex flex-col w-full",children:optionsFiltered.map(((option,idx)=>{const isSelected=newValues.some((val=>(null==val?void 0:val.value)===option.value));return(0,jsx_runtime.jsx)("div",{onClick:()=>option.isDisabled?null:(val=>{if(isMulti){const value=newValues.some((v=>(null==v?void 0:v.value)===val.value))?newValues.filter((v=>(null==v?void 0:v.value)!==val.value)):[...newValues,val];return onChange&&onChange(value)}return onChange&&onChange(val)})(option),className:classnames_default()("cursor-pointer w-full border-gray-100 rounded-t hover:bg-blue-100",{"border-b":idx!==options.length-1,"bg-blue-100":isSelected,"!bg-gray-100 cursor-not-allowed":option.isDisabled}),children:(0,jsx_runtime.jsx)("div",{className:"flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100",children:(0,jsx_runtime.jsx)("div",{className:"w-full items-center flex",children:(0,jsx_runtime.jsx)("div",{className:"mx-2 leading-6",children:option.label})})})},option.value)}))})})]})]})})})},SelectDropdown_SelectDropdown=SelectDropdown;SelectDropdown.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},isMulti:{required:!1,tsType:{name:"boolean"},description:""},withSearch:{required:!1,tsType:{name:"boolean"},description:""},withInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"ValueDropdown | ValueDropdown[]",elements:[{name:"ValueDropdown"},{name:"Array",elements:[{name:"ValueDropdown"}],raw:"ValueDropdown[]"}]},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ValueDropdown"}],raw:"ValueDropdown[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ValueDropdown | ValueDropdown[] | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ValueDropdown | ValueDropdown[] | undefined",elements:[{name:"ValueDropdown"},{name:"Array",elements:[{name:"ValueDropdown"}],raw:"ValueDropdown[]"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""}}};const SelectDropdown_stories={title:"Form/SelectDropdown",component:SelectDropdown_SelectDropdown,tags:["autodocs"],parameters:{layout:"fullscreen"}},RenderComponent=args=>{const[value,setValue]=(0,react.useState)(args.value);return(0,jsx_runtime.jsx)(SelectDropdown_SelectDropdown,{...args,value,onChange:value=>{setValue(value)}})},SelectDropdownInput={args:{placeholder:"Select a color",options:[{value:"ocean",label:"Ocean",color:"#00B8D9"},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630"},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],isMulti:!0,withSearch:!1,withInput:!1,value:void 0},render:args=>(0,jsx_runtime.jsx)(RenderComponent,{...args})},__namedExportsOrder=["SelectDropdownInput"];SelectDropdownInput.parameters={...SelectDropdownInput.parameters,docs:{...SelectDropdownInput.parameters?.docs,source:{originalSource:'{\n  args: {\n    placeholder: "Select a color",\n    options,\n    isMulti: true,\n    withSearch: false,\n    withInput: false,\n    value: undefined\n  },\n  render: args => <RenderComponent {...args} />\n}',...SelectDropdownInput.parameters?.docs?.source}}}},"./src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=_ref=>{let{label,leftIcon,rightIcon,size,variant="solid",className}=_ref;const tagClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-white min-w-1 max-w-fit",{"text-sm":"sm"===size,"text-base":"md"===size,"text-lg":"lg"===size,"border border-blue-500 bg-white text-blue-500":"outline"===variant,"bg-blue-500":"solid"===variant},className),labelClass=classnames__WEBPACK_IMPORTED_MODULE_0___default()("text-xs font-normal leading-none max-w-full flex-initial",{"text-sm":"sm"===size,"text-base":"md"===size,"text-lg":"lg"===size});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:tagClass,children:[leftIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-auto",children:leftIcon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:labelClass,children:label}),rightIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"flex flex-auto",children:rightIcon})]})},__WEBPACK_DEFAULT_EXPORT__=Tag;Tag.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!0,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "solid"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);