import{j as o,r as s}from"./app-ec749146.js";function f({message:t,className:e="",...r}){return t?o("p",{...r,className:"text-sm text-red-600 "+e,children:t}):null}function l({value:t,className:e="",children:r,...n}){return o("label",{...n,className:"block font-medium text-sm text-gray-700 "+e,children:t||r})}function d({className:t="",disabled:e,children:r,...n}){return o("button",{...n,className:`inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${e&&"opacity-25"} `+t,disabled:e,children:r})}const m=s.forwardRef(function({type:e="text",className:r="",isFocused:n=!1,...a},i){const u=i||s.useRef();return s.useEffect(()=>{n&&u.current.focus()},[]),o("div",{className:"flex flex-col items-start",children:o("input",{...a,type:e,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+r,ref:u})})});export{l as I,d as P,m as T,f as a};