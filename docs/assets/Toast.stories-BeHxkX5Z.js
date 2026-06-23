import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-BBNuycjZ.js";import{t as i}from"./react-dom-BN461QeS.js";import{a,d as o,f as s,o as c,p as l,s as u}from"./Icons-CysMEwKH.js";import{n as d,t as f}from"./Button-D3i-aT0q.js";function p(){return _}function m(e){let t=`toast-${++y}`;return _=[..._,{...e,id:t}],v.forEach(e=>e()),t}function h(e){_=_.filter(t=>t.id!==e),v.forEach(e=>e())}function g(e){return v.push(e),()=>{v=v.filter(t=>t!==e)}}var _,v,y,b,x=e((()=>{_=[],v=[],y=0,b={success:(e,t)=>m({message:e,variant:`success`,duration:t??4e3}),error:(e,t)=>m({message:e,variant:`danger`,duration:t??5e3}),info:(e,t)=>m({message:e,variant:`info`,duration:t??4e3}),warning:(e,t)=>m({message:e,variant:`warning`,duration:t??4e3}),dismiss:e=>h(e)}}));function S({id:e,message:t,variant:n,duration:r}){let i=(0,C.useCallback)(()=>h(e),[e]);return(0,w.jsxs)(`div`,{role:`alert`,className:[`relative flex items-start gap-3 overflow-hidden rounded-xl border-none p-4 pr-11 text-sm shadow-lg`,E[n]??``,`animate-[rhf-toastIn_300ms_ease-out]`].join(` `),children:[T[n]??null,(0,w.jsx)(`p`,{className:`flex-1 pt-0.5`,children:t}),(0,w.jsx)(`button`,{type:`button`,onClick:i,className:`absolute right-3 top-3 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100`,"aria-label":`Cerrar`,children:(0,w.jsx)(a,{className:`h-4 w-4`})}),(0,w.jsx)(`span`,{className:[`absolute bottom-0 left-0 h-0.75`,D[n]??``,`animate-[rhf-toastProgress_var(--duration)_linear]`].join(` `),style:{"--duration":`${r}ms`},onAnimationEnd:i})]})}var C,w,T,E,D,O=e((()=>{C=t(n(),1),x(),l(),w=r(),T={info:(0,w.jsx)(u,{className:`h-5 w-5 shrink-0`}),success:(0,w.jsx)(o,{className:`h-5 w-5 shrink-0`}),warning:(0,w.jsx)(s,{className:`h-5 w-5 shrink-0`}),danger:(0,w.jsx)(c,{className:`h-5 w-5 shrink-0`})},E={info:`bg-info text-info-foreground`,success:`bg-success text-success-foreground`,warning:`bg-warning text-warning-foreground`,danger:`bg-danger text-danger-foreground`},D={info:`bg-white/40`,success:`bg-white/40`,warning:`bg-black/20`,danger:`bg-white/40`},S.__docgenInfo={description:``,methods:[],displayName:`ToastItem`,props:{id:{required:!0,tsType:{name:`string`},description:``},message:{required:!0,tsType:{name:`string`},description:``},variant:{required:!0,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},duration:{required:!0,tsType:{name:`number`},description:``}}}}));function k(){if(document.getElementById(P))return;let e=document.createElement(`style`);e.id=P,e.textContent=`
    @keyframes rhf-toastIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes rhf-toastProgress {
      from { width: 100%; }
      to { width: 0%; }
    }
  `,document.head.appendChild(e)}function A({maxVisible:e=5}){let[t,n]=(0,j.useState)([]);return(0,j.useEffect)(()=>(k(),g(()=>n([...p()]))),[]),(0,M.createPortal)((0,N.jsx)(`div`,{className:`fixed right-4 top-4 z-100 flex w-80 flex-col gap-2 sm:w-96`,children:t.slice(0,e).map(e=>(0,N.jsx)(S,{...e},e.id))}),document.body)}var j,M,N,P,F=e((()=>{j=t(n(),1),M=t(i(),1),x(),O(),N=r(),P=`rhf-toast-keyframes`})),I=e((()=>{F(),x()})),L,R,z,B,V,H,U,W;e((()=>{I(),d(),L=r(),R={title:`UI/Toast`,component:A,tags:[`autodocs`]},z={render:()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(A,{}),(0,L.jsx)(f,{colorScheme:`info`,onClick:()=>b.info(`Esto es un mensaje informativo`),children:`Mostrar Info`})]})},B={render:()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(A,{}),(0,L.jsx)(f,{colorScheme:`success`,onClick:()=>b.success(`Usuario creado correctamente`),children:`Mostrar Success`})]})},V={render:()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(A,{}),(0,L.jsx)(f,{colorScheme:`warning`,onClick:()=>b.warning(`La sesión expirará pronto`),children:`Mostrar Warning`})]})},H={render:()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(A,{}),(0,L.jsx)(f,{colorScheme:`danger`,onClick:()=>b.error(`Error al conectar con el servidor`),children:`Mostrar Error`})]})},U={render:()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(A,{}),(0,L.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,L.jsx)(f,{colorScheme:`info`,onClick:()=>b.info(`Info`),children:`Info`}),(0,L.jsx)(f,{colorScheme:`success`,onClick:()=>b.success(`Success`),children:`Success`}),(0,L.jsx)(f,{colorScheme:`warning`,onClick:()=>b.warning(`Warning`),children:`Warning`}),(0,L.jsx)(f,{colorScheme:`danger`,onClick:()=>b.error(`Error`),children:`Error`})]})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <Toaster />\r
      <Button colorScheme="info" onClick={() => toast.info('Esto es un mensaje informativo')}>\r
        Mostrar Info\r
      </Button>\r
    </>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <Toaster />\r
      <Button colorScheme="success" onClick={() => toast.success('Usuario creado correctamente')}>\r
        Mostrar Success\r
      </Button>\r
    </>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <Toaster />\r
      <Button colorScheme="warning" onClick={() => toast.warning('La sesión expirará pronto')}>\r
        Mostrar Warning\r
      </Button>\r
    </>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <Toaster />\r
      <Button colorScheme="danger" onClick={() => toast.error('Error al conectar con el servidor')}>\r
        Mostrar Error\r
      </Button>\r
    </>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <Toaster />\r
      <div className="flex flex-wrap gap-2">\r
        <Button colorScheme="info" onClick={() => toast.info('Info')}>Info</Button>\r
        <Button colorScheme="success" onClick={() => toast.success('Success')}>Success</Button>\r
        <Button colorScheme="warning" onClick={() => toast.warning('Warning')}>Warning</Button>\r
        <Button colorScheme="danger" onClick={() => toast.error('Error')}>Error</Button>\r
      </div>\r
    </>
}`,...U.parameters?.docs?.source}}},W=[`Info`,`Success`,`Warning`,`Error`,`AllToasts`]}))();export{U as AllToasts,H as Error,z as Info,B as Success,V as Warning,W as __namedExportsOrder,R as default};