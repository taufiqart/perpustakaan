import{r as o,q as T,W as E,a as s,j as e}from"./app-ec749146.js";import{B as y,A as l}from"./BookLoader-a55cfee4.js";import{D as u,M as v,S as b,a as I}from"./SecondaryButton-7115fe62.js";import{I as M,T as A,a as L,P as O}from"./TextInput-e9dc6453.js";function z({file:a}){o.useRef();const N=T().props;o.useState(!1);const{data:f,setData:c,put:w,delete:C,processing:r,errors:D,clearErrors:p,reset:g}=E(),[k,h]=o.useState(!1),[S,x]=o.useState(!1),[t,i]=o.useState(),m=()=>{h(!1),i(),g(),p()},j=()=>{h(!0)},d=()=>{x(!1),i(),g(),p()},F=()=>{x(!0)};o.useEffect(()=>{i(N.flash)},[r]);const R=n=>{n.preventDefault(),C(route("file.delete"),{onSuccess:()=>setTimeout(()=>m(),[1e3])})},B=n=>{n.preventDefault(),console.log(f),w(route("file.rename"),{onSuccess:()=>setTimeout(()=>d(),[1e3])}),console.log(t)};return s("div",{className:"relative flex flex-col items-center group",children:[e("div",{className:"overflow-hidden  text-center break-words ",children:e("div",{className:"w-20 md:w-32 h-20 md:h-32 overflow-hidden flex justify-center items-center",children:a.type=="image"?e("img",{src:a.path,alt:a.filename,className:"w-full h-full object-contain"}):a.type=="video"?e("video",{src:a.path}):a.type=="audio"?e("i",{className:"fas fa-headphones text-7xl text-center"}):e("i",{className:"fas fa-file text-7xl text-center"})})}),s("div",{className:"flex overflow-clip mt-2  ",children:[e("h1",{className:"text-xs md:text-sm w-20 md:w-32 break-words text-center",children:a.filename}),s(u,{children:[e(u.Trigger,{children:e("button",{type:"button",className:" hidden group-hover:inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:e("i",{className:"fas fa-ellipsis-v"})})}),s(u.Content,{children:[s("div",{className:"block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700",onClick:()=>{c(a),F()},children:[e("i",{className:"fas fa-edit"})," Rename"]}),s("div",{className:"block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700",onClick:()=>{c(a),j()},children:[e("i",{className:"fas fa-trash"})," Hapus"]})]})]})]}),s(v,{show:S,onClose:d,children:[e(y,{loader:r}),s("form",{className:"p-6  ",onSubmit:B,children:[!r&&(t==null?void 0:t.error)&&e(l,{type:"error",message:t==null?void 0:t.error}),!r&&(t==null?void 0:t.success)&&e(l,{type:"success",message:t==null?void 0:t.success}),s("div",{className:"mt-3",children:[e(M,{htmlFor:"filename",value:"filename"}),e(A,{id:"filename",type:"text",name:"filename",value:f.filename||"",onChange:n=>c("filename",n.target.value),className:"mt-1 block w-full ",placeholder:"filename"}),e(L,{message:D.slug,className:"mt-2"})]}),s("div",{className:"mt-6 flex justify-end",children:[e(b,{onClick:d,children:"Cancel"}),e(O,{className:"ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600",disabled:r,as:"button",children:"Rename"})]})]})]}),s(v,{show:k,onClose:m,maxWidth:"sm",children:[e(y,{loader:r}),s("form",{className:"p-6 w-full h-full",onSubmit:R,children:[!r&&(t==null?void 0:t.error)&&e(l,{type:"error",message:t==null?void 0:t.error}),!r&&(t==null?void 0:t.success)&&e(l,{type:"success",message:t==null?void 0:t.success}),e("h2",{className:"text-lg font-medium text-gray-500",children:"Are you sure you want to delete?"}),e("h2",{className:"text-lg font-medium text-gray-900",children:a.filename}),s("div",{className:"mt-6 flex justify-end",children:[e(b,{onClick:m,children:"Cancel"}),e(I,{className:"ml-3",disabled:r,as:"button",children:"Delete"})]})]})]})]})}export{z as default};