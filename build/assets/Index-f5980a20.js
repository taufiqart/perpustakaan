import{r as i,W as A,q as w,a as r,j as t}from"./app-46b63e30.js";import{A as C}from"./AdminLayout-ef4efa36.js";import F from"./CardFile-d99b3729.js";import{M as S,S as j}from"./SecondaryButton-367c83a3.js";import{P as d}from"./PrimaryButton-c42e6690.js";import{I as k,a as B}from"./TextInput-decbbf62.js";import{B as E,A as m}from"./BookLoader-4af509bb.js";function G({files:a}){const[f,n]=i.useState(!1),[e,u]=i.useState(),l=()=>{n(!1),u(),h(),v()},p=()=>{n(!0)},{data:I,setData:b,errors:g,processing:o,post:x,put:L,delete:D,reset:h,clearErrors:v}=A({title:"",slug:""}),c=w().props;i.useEffect(()=>{var s;u(c.flash),(s=c.flash)!=null&&s.success&&setTimeout(()=>{l()},[1e3])},[o]);const y=s=>{s.preventDefault(),x(route("file.store"))};return r(C,{children:[t("div",{className:"w-full flex gap-x-3 p-4 pt-0 pl-0 -mt-5",children:r(d,{onClick:()=>{p()},className:"inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",children:[t("i",{className:"fas fa-plus"}),"Add"]})}),t("div",{className:"w-full h-full bg-slate-100 rounded-md relative justify-evenly flex flex-wrap p-4 gap-4",children:a&&a.map((s,N)=>t(F,{file:s},N))}),r(S,{show:f,onClose:l,children:[t(E,{loader:o}),r("form",{className:"p-6  ",onSubmit:y,children:[!o&&(e==null?void 0:e.error)&&(e==null?void 0:e.error.map(s=>t(m,{type:"error",message:s.filename}))),!o&&(e==null?void 0:e.success)&&t(m,{type:"success",message:e==null?void 0:e.success}),r("div",{className:"mt-3",children:[t(k,{htmlFor:"file",value:"file"}),t("input",{id:"file",type:"file",name:"file",multiple:!0,onChange:s=>b("file",s.target.files),className:`mt-1 block w-full text-sm text-slate-500 focus:outline-none focus:border-none
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100`,placeholder:"title"}),t(B,{message:g.title,className:"mt-2"})]}),r("div",{className:"mt-6 flex justify-end",children:[t(j,{onClick:l,children:"Cancel"}),t(d,{className:"ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600",disabled:o,as:"button",children:"Submit"})]})]})]})]})}export{G as default};
