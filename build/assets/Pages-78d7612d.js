import{j as e,a as t,r as c,W as T,q as D,d as k}from"./app-5d91f995.js";import{A as C}from"./AdminLayout-6c980391.js";import{D as i,M as S,S as A,a as j}from"./SecondaryButton-2580653c.js";import{B as M,A as p}from"./BookLoader-b3c3f800.js";const B=({children:a,className:o})=>e("th",{className:`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ${o}`,children:a}),E=({children:a,className:o})=>e("td",{className:`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-pre-wrap p-4 ${o}`,children:a}),u=({children:a,title:o})=>e("div",{className:"w-full mb-12 px-4",children:t("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white",children:[e("div",{className:"rounded-t mb-0 px-4 py-3 border-0",children:e("div",{className:"flex flex-wrap items-center",children:e("div",{className:"relative w-full px-4 max-w-full flex-grow flex-1",children:e("h3",{className:"font-semibold text-lg text-blueGray-700",children:o})})})}),e("div",{className:"block w-full overflow-x-auto",children:e("table",{className:"items-center w-full bg-transparent border-collapse",children:a})})]})});u.Th=B;u.Td=E;const l=u;function q({articles:a}){const[o,m]=c.useState(!1),[r,f]=c.useState(),d=()=>{m(!1),f(),y(),w()},b=s=>{g(s),m(!0)},{data:h,setData:g,errors:G,processing:n,post:L,put:$,delete:x,reset:y,clearErrors:w}=T(),N=D().props;c.useEffect(()=>{f(N.flash)},[n]);const v=s=>{s.preventDefault(),x(route("pages.destroy",h.id),{onSuccess:()=>setTimeout(()=>d(),[1e3])})};return t(C,{children:[e("div",{className:"w-full flex gap-x-3 p-4 pt-0 -mt-5",children:t(k,{href:route("pages.create"),className:"inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",children:[e("i",{className:"fas fa-plus"}),"Add"]})}),t(l,{children:[e("thead",{children:t("tr",{children:[e(l.Th,{children:"Judul"}),e(l.Th,{children:"Content"}),e(l.Th,{children:"Category"}),e(l.Th,{})]})}),e("tbody",{children:a&&a.map(s=>t("tr",{children:[e(l.Td,{children:s.title}),t(l.Td,{className:"!align-top",children:[" ",e("div",{className:"break-words max-h-20 overflow-hidden",dangerouslySetInnerHTML:{__html:s.content}})," "]}),e(l.Td,{children:s.category.title}),e(l.Td,{className:"text-right",children:t(i,{children:[e(i.Trigger,{children:e("button",{type:"button",className:"inline-flex hover:bg-white rounded-full items-center w-7 justify-center h-7 border border-transparent text-sm font-medium  text-gray-500  hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:e("i",{className:"fas fa-ellipsis-v"})})}),t(i.Content,{children:[t(i.Link,{className:"block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700",href:route("pages.edit",s.id),children:[e("i",{className:"fas fa-edit"})," ","Edit"]}),t("div",{className:"block w-full px-4 py-2 text-left text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out !text-gray-500 hover:!text-gray-700",onClick:()=>b(s),children:[e("i",{className:"fas fa-trash"})," ","Hapus"]})]})]})})]},s.slug))})]}),t(S,{show:o,onClose:d,maxWidth:"sm",children:[e(M,{loader:n}),t("form",{className:"p-6 w-full h-full",onSubmit:v,children:[!n&&(r==null?void 0:r.error)&&e(p,{type:"error",message:r==null?void 0:r.error}),!n&&(r==null?void 0:r.success)&&e(p,{type:"success",message:r==null?void 0:r.success}),e("h2",{className:"text-lg font-medium text-gray-500",children:"Are you sure you want to delete?"}),e("h2",{className:"text-lg font-medium text-gray-900",children:h.title}),t("div",{className:"mt-6 flex justify-end",children:[e(A,{onClick:d,children:"Cancel"}),e(j,{className:"ml-3",disabled:n,as:"button",children:"Delete"})]})]})]})]})}export{q as default};
