import{r as _,W as K,q as U,a as C,j as m,d as W}from"./app-ec749146.js";import{B as q,A as D}from"./BookLoader-a55cfee4.js";import{I as k,T as G,a as w,P as Y}from"./TextInput-e9dc6453.js";import{A as $}from"./AdminLayout-8ed1aef8.js";import{t as J}from"./function-6c0aa4d6.js";var A={exports:{}},Q="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",X=Q,Z=X;function H(){}function V(){}V.resetWarningCache=H;var ee=function(){function t(e,i,a,c,s,l){if(l!==Z){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function o(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:V,resetWarningCache:H};return r.PropTypes=r,r};A.exports=ee();var n=A.exports,O=globalThis&&globalThis.__assign||function(){return O=Object.assign||function(t){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},O.apply(this,arguments)},F={onActivate:n.func,onAddUndo:n.func,onBeforeAddUndo:n.func,onBeforeExecCommand:n.func,onBeforeGetContent:n.func,onBeforeRenderUI:n.func,onBeforeSetContent:n.func,onBeforePaste:n.func,onBlur:n.func,onChange:n.func,onClearUndos:n.func,onClick:n.func,onContextMenu:n.func,onCommentChange:n.func,onCopy:n.func,onCut:n.func,onDblclick:n.func,onDeactivate:n.func,onDirty:n.func,onDrag:n.func,onDragDrop:n.func,onDragEnd:n.func,onDragGesture:n.func,onDragOver:n.func,onDrop:n.func,onExecCommand:n.func,onFocus:n.func,onFocusIn:n.func,onFocusOut:n.func,onGetContent:n.func,onHide:n.func,onInit:n.func,onKeyDown:n.func,onKeyPress:n.func,onKeyUp:n.func,onLoadContent:n.func,onMouseDown:n.func,onMouseEnter:n.func,onMouseLeave:n.func,onMouseMove:n.func,onMouseOut:n.func,onMouseOver:n.func,onMouseUp:n.func,onNodeChange:n.func,onObjectResizeStart:n.func,onObjectResized:n.func,onObjectSelected:n.func,onPaste:n.func,onPostProcess:n.func,onPostRender:n.func,onPreProcess:n.func,onProgressState:n.func,onRedo:n.func,onRemove:n.func,onReset:n.func,onSaveContent:n.func,onSelectionChange:n.func,onSetAttrib:n.func,onSetContent:n.func,onShow:n.func,onSubmit:n.func,onUndo:n.func,onVisualAid:n.func,onSkinLoadError:n.func,onThemeLoadError:n.func,onModelLoadError:n.func,onPluginLoadError:n.func,onIconsLoadError:n.func,onLanguageLoadError:n.func,onScriptsLoad:n.func,onScriptsLoadError:n.func},ne=O({apiKey:n.string,id:n.string,inline:n.bool,init:n.object,initialValue:n.string,onEditorChange:n.func,value:n.string,tagName:n.string,cloudChannel:n.string,plugins:n.oneOfType([n.string,n.array]),toolbar:n.oneOfType([n.string,n.array]),disabled:n.bool,textareaName:n.string,tinymceScriptSrc:n.oneOfType([n.string,n.arrayOf(n.string),n.arrayOf(n.shape({src:n.string,async:n.bool,defer:n.bool}))]),rollback:n.oneOfType([n.number,n.oneOf([!1])]),scriptLoading:n.shape({async:n.bool,defer:n.bool,delay:n.number})},F),T=function(t){return typeof t=="function"},B=function(t){return t in F},P=function(t){return t.substr(2)},te=function(t,o,r,e,i,a,c){var s=Object.keys(i).filter(B),l=Object.keys(a).filter(B),u=s.filter(function(d){return a[d]===void 0}),f=l.filter(function(d){return i[d]===void 0});u.forEach(function(d){var p=P(d),g=c[p];r(p,g),delete c[p]}),f.forEach(function(d){var p=e(t,d),g=P(d);c[g]=p,o(g,p)})},re=function(t,o,r,e,i){return te(i,t.on.bind(t),t.off.bind(t),function(a,c){return function(s){var l;return(l=a(c))===null||l===void 0?void 0:l(s,t)}},o,r,e)},x=0,z=function(t){var o=Date.now(),r=Math.floor(Math.random()*1e9);return x++,t+"_"+r+x+String(o)},j=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},R=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},oe=function(t,o){return R(t).concat(R(o))},ie=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},ae=function(t){if(!("isConnected"in Node.prototype)){for(var o=t,r=t.parentNode;r!=null;)o=r,r=o.parentNode;return o===t.ownerDocument}return t.isConnected},M=function(t,o){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(o):t.setMode(o))},L=globalThis&&globalThis.__assign||function(){return L=Object.assign||function(t){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},L.apply(this,arguments)},se=function(t,o,r){var e,i,a=t.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=o.id,a.src=o.src,a.async=(e=o.async)!==null&&e!==void 0?e:!1,a.defer=(i=o.defer)!==null&&i!==void 0?i:!1;var c=function(){a.removeEventListener("load",c),a.removeEventListener("error",s),r(o.src)},s=function(l){a.removeEventListener("load",c),a.removeEventListener("error",s),r(o.src,l)};a.addEventListener("load",c),a.addEventListener("error",s),t.head&&t.head.appendChild(a)},ce=function(t){var o={},r=function(c,s){var l=o[c];l.done=!0,l.error=s;for(var u=0,f=l.handlers;u<f.length;u++){var d=f[u];d(c,s)}l.handlers=[]},e=function(c,s,l){var u=function(S){return l!==void 0?l(S):console.error(S)};if(c.length===0){u(new Error("At least one script must be provided"));return}for(var f=0,d=!1,p=function(S,N){d||(N?(d=!0,u(N)):++f===c.length&&s())},g=0,v=c;g<v.length;g++){var y=v[g],h=o[y.src];if(h)h.done?p(y.src,h.error):h.handlers.push(p);else{var b=z("tiny-");o[y.src]={id:b,src:y.src,done:!1,error:null,handlers:[p]},se(t,L({id:b},y),r)}}},i=function(){for(var c,s=0,l=Object.values(o);s<l.length;s++){var u=l[s],f=t.getElementById(u.id);f!=null&&f.tagName==="SCRIPT"&&((c=f.parentNode)===null||c===void 0||c.removeChild(f))}o={}},a=function(){return t};return{loadScripts:e,deleteScripts:i,getDocument:a}},le=function(){var t=[],o=function(i){var a=t.find(function(c){return c.getDocument()===i});return a===void 0&&(a=ce(i),t.push(a)),a},r=function(i,a,c,s,l){var u=function(){return o(i).loadScripts(a,s,l)};c>0?setTimeout(u,c):u()},e=function(){for(var i=t.pop();i!=null;i=t.pop())i.deleteScripts()};return{loadList:r,reinitialize:e}},ue=le(),I=function(t){var o=t;return o&&o.tinymce?o.tinymce:null},de=globalThis&&globalThis.__extends||function(){var t=function(o,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])},t(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(t){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},E.apply(this,arguments)},fe=function(t){de(o,t);function o(r){var e=this,i,a,c;return e=t.call(this,r)||this,e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var s=e.editor,l=e.props.value;s&&l&&l!==e.currentContent&&s.undoManager.ignore(function(){if(s.setContent(l),e.valueCursor&&(!e.inline||s.hasFocus()))try{s.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(s){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(s){(s.key==="Enter"||s.key==="Backspace"||s.key==="Delete")&&e.handleBeforeInput(s)},e.handleEditorChange=function(s){var l=e.editor;if(l&&l.initialized){var u=l.getContent();e.props.value!==void 0&&e.props.value!==u&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),u!==e.currentContent&&(e.currentContent=u,T(e.props.onEditorChange)&&e.props.onEditorChange(u,l))}},e.handleEditorChangeSpecial=function(s){(s.key==="Backspace"||s.key==="Delete")&&e.handleEditorChange(s)},e.initialise=function(s){var l,u,f;s===void 0&&(s=0);var d=e.elementRef.current;if(d){if(!ae(d)){if(s===0)setTimeout(function(){return e.initialise(1)},1);else if(s<100)setTimeout(function(){return e.initialise(s+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var p=I(e.view);if(!p)throw new Error("tinymce should have been loaded into global scope");var g=E(E({},e.props.init),{selector:void 0,target:d,readonly:e.props.disabled,inline:e.inline,plugins:oe((l=e.props.init)===null||l===void 0?void 0:l.plugins,e.props.plugins),toolbar:(u=e.props.toolbar)!==null&&u!==void 0?u:(f=e.props.init)===null||f===void 0?void 0:f.toolbar,setup:function(v){e.editor=v,e.bindHandlers({}),e.inline&&!j(d)&&v.once("PostRender",function(y){v.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&T(e.props.init.setup)&&e.props.init.setup(v)},init_instance_callback:function(v){var y,h,b=e.getInitialValue();e.currentContent=(y=e.currentContent)!==null&&y!==void 0?y:v.getContent(),e.currentContent!==b&&(e.currentContent=b,v.setContent(b),v.undoManager.clear(),v.undoManager.add(),v.setDirty(!1));var S=(h=e.props.disabled)!==null&&h!==void 0?h:!1;M(e.editor,S?"readonly":"design"),e.props.init&&T(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(v)}});e.inline||(d.style.visibility=""),j(d)&&(d.value=e.getInitialValue()),p.init(g)}},e.id=e.props.id||z("tiny-react"),e.elementRef=_.createRef(),e.inline=(c=(i=e.props.inline)!==null&&i!==void 0?i:(a=e.props.init)===null||a===void 0?void 0:a.inline)!==null&&c!==void 0?c:!1,e.boundHandlers={},e}return Object.defineProperty(o.prototype,"view",{get:function(){var r,e;return(e=(r=this.elementRef.current)===null||r===void 0?void 0:r.ownerDocument.defaultView)!==null&&e!==void 0?e:window},enumerable:!1,configurable:!0}),o.prototype.componentDidUpdate=function(r){var e=this,i,a;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(r),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==r.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var c=this.editor;c.undoManager.transact(function(){var l;if(!e.inline||c.hasFocus())try{l=c.selection.getBookmark(3)}catch{}var u=e.valueCursor;if(c.setContent(e.props.value),!e.inline||c.hasFocus())for(var f=0,d=[l,u];f<d.length;f++){var p=d[f];if(p)try{c.selection.moveToBookmark(p),e.valueCursor=p;break}catch{}}})}if(this.props.disabled!==r.disabled){var s=(a=this.props.disabled)!==null&&a!==void 0?a:!1;M(this.editor,s?"readonly":"design")}}},o.prototype.componentDidMount=function(){var r=this,e,i,a,c,s;if(I(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(e=this.props).onScriptsLoadError)===null||i===void 0||i.call(e,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((a=this.elementRef.current)===null||a===void 0)&&a.ownerDocument){var l=function(){var f,d;(d=(f=r.props).onScriptsLoad)===null||d===void 0||d.call(f),r.initialise()},u=function(f){var d,p;(p=(d=r.props).onScriptsLoadError)===null||p===void 0||p.call(d,f)};ue.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(s=(c=this.props.scriptLoading)===null||c===void 0?void 0:c.delay)!==null&&s!==void 0?s:0,l,u)}},o.prototype.componentWillUnmount=function(){var r=this,e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){e.off(i,r.boundHandlers[i])}),this.boundHandlers={},e.remove(),this.editor=void 0)},o.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},o.prototype.changeEvents=function(){var r,e,i,a=(i=(e=(r=I(this.view))===null||r===void 0?void 0:r.Env)===null||e===void 0?void 0:e.browser)===null||i===void 0?void 0:i.isIE();return a?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},o.prototype.beforeInputEvent=function(){return ie()?"beforeinput SelectionChange":"SelectionChange"},o.prototype.renderInline=function(){var r=this.props.tagName,e=r===void 0?"div":r;return _.createElement(e,{ref:this.elementRef,id:this.id})},o.prototype.renderIframe=function(){return _.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},o.prototype.getScriptSources=function(){var r,e,i=(r=this.props.scriptLoading)===null||r===void 0?void 0:r.async,a=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:a}]:this.props.tinymceScriptSrc.map(function(u){return typeof u=="string"?{src:u,async:i,defer:a}:u});var c=this.props.cloudChannel,s=this.props.apiKey?this.props.apiKey:"no-api-key",l="https://cdn.tiny.cloud/1/".concat(s,"/tinymce/").concat(c,"/tinymce.min.js");return[{src:l,async:i,defer:a}]},o.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},o.prototype.bindHandlers=function(r){var e=this;if(this.editor!==void 0){re(this.editor,r,this.props,this.boundHandlers,function(s){return e.props[s]});var i=function(s){return s.onEditorChange!==void 0||s.value!==void 0},a=i(r),c=i(this.props);!a&&c?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):a&&!c&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},o.propTypes=ne,o.defaultProps={cloudChannel:"6"},o}(_.Component);function ye({article:t,categories:o}){const[r,e]=_.useState(),i=_.useRef(null),{data:a,setData:c,errors:s,processing:l,post:u,put:f,delete:d,reset:p,clearErrors:g}=K(t),v=U().props;return _.useEffect(()=>{e(v.flash)},[l]),C($,{children:[m(q,{loader:l}),m("div",{className:"bg-white rounded-md",children:C("form",{className:"p-6  ",onSubmit:h=>{h.preventDefault(),a.content=i.current.getContent(),a.id?f(route("pages.update",a.id),{onSuccess:()=>{setTimeout(()=>{window.location=route("pages.index")},1e3)}}):u(route("pages.store"),{onSuccess:()=>{setTimeout(()=>{window.location=route("pages.index")},1e3)}})},children:[!l&&(r==null?void 0:r.error)&&m(D,{type:"error",message:r==null?void 0:r.error}),!l&&(r==null?void 0:r.success)&&m(D,{type:"success",message:r==null?void 0:r.success}),C("div",{className:"mt-3",children:[m(k,{htmlFor:"title",value:"Title"}),m(G,{id:"title",type:"text",name:"title",value:a.title,onChange:h=>{c("title",h.target.value)},className:"mt-1 block w-full",placeholder:"title"}),m(w,{message:s.title,className:"mt-2"})]}),C("div",{className:"mt-3",children:[m(k,{htmlFor:"category_id",value:"Category"}),C("select",{id:"category_id",type:"text",name:"category_id",defaultValue:a.category_id,onChange:h=>c("category_id",h.target.value),className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",placeholder:"category",children:[m("option",{value:"",children:"Category"}),o.map(h=>m("option",{value:h.id,children:h.title},h.id))]}),m(w,{message:s.parent_id,className:"mt-2"})]}),C("div",{className:"mt-3",children:[m(k,{htmlFor:"content",value:"Content"}),m(fe,{tinymceScriptSrc:"/assets/tinymce/tinymce.min.js",onInit:(h,b)=>i.current=b,initialValue:a.content,init:{automatic_uploads:!0,images_upload_url:route("upload.images"),images_upload_handler:J,images_upload_credentials:!0,height:500,menubar:!0,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount","print code preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons"],content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",toolbar:"undo redo | code  bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen preview save print | image media pageembed link anchor codesample | ltr rtl",fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",importcss_append:!0,template_cdate_format:"[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",template_mdate_format:"[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",toolbar_mode:"sliding",font_formats:"Andale Mono=andale mono,times;Poppins; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"}}),m(w,{message:s.content,className:"mt-2"})]}),C("div",{className:"mt-6 flex justify-end",children:[C(W,{className:"inline-flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",href:route("pages.index"),children:[" ",m("i",{className:"fas fa-arrow-left"})," Back"]}),m(Y,{className:"ml-3 bg-blue-400 hover:bg-blue-600 focus:bg-blue-600",disabled:l,as:"button",children:"Submit"})]})]})})]})}export{ye as default};
