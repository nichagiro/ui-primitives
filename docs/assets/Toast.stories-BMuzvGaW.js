import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-o7jEyD7u.js";import{t as r}from"./react-dom-JxAecrST.js";import{a as i,c as a,g as o,h as s,o as c,p as l}from"./Icons-S0XrGTpk.js";import{n as u,t as d}from"./Button-DmLU9SsO.js";function f(){return g}function p(e){let t=`toast-${++v}`;return g=[...g,{...e,id:t}],_.forEach(e=>e()),t}function m(e){g=g.filter(t=>t.id!==e),_.forEach(e=>e())}function h(e){return _.push(e),()=>{_=_.filter(t=>t!==e)}}var g,_,v,y;function b(){return(b=e((()=>{g=[],_=[],v=0,y={success:(e,t)=>p({message:e,variant:`success`,duration:t??4e3}),error:(e,t)=>p({message:e,variant:`danger`,duration:t??5e3}),info:(e,t)=>p({message:e,variant:`info`,duration:t??4e3}),warning:(e,t)=>p({message:e,variant:`warning`,duration:t??4e3}),dismiss:e=>m(e)}})))()}function x({id:e,message:t,variant:n,duration:r}){let a=(0,S.useCallback)(()=>m(e),[e]);return(0,C.jsxs)(`div`,{role:`alert`,className:[`relative flex items-start gap-3 overflow-hidden rounded-xl border-none p-4 pr-11 text-sm shadow-lg`,T[n]??``,`animate-[rhf-toastIn_300ms_ease-out]`].join(` `),children:[w[n]??null,(0,C.jsx)(`p`,{className:`flex-1 pt-0.5`,children:t}),(0,C.jsx)(`button`,{type:`button`,onClick:a,className:`absolute right-3 top-3 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100`,"aria-label":`Cerrar`,children:(0,C.jsx)(i,{className:`h-4 w-4`})}),(0,C.jsx)(`span`,{className:[`absolute bottom-0 left-0 h-0.75`,E[n]??``,`animate-[rhf-toastProgress_var(--duration)_linear]`].join(` `),style:{"--duration":`${r}ms`},onAnimationEnd:a})]})}var S,C,w,T,E;function D(){return(D=e((()=>{S=t(),b(),o(),C=n(),w={info:(0,C.jsx)(a,{className:`h-5 w-5 shrink-0`}),success:(0,C.jsx)(l,{className:`h-5 w-5 shrink-0`}),warning:(0,C.jsx)(s,{className:`h-5 w-5 shrink-0`}),danger:(0,C.jsx)(c,{className:`h-5 w-5 shrink-0`})},T={info:`bg-info text-info-foreground`,success:`bg-success text-success-foreground`,warning:`bg-warning text-warning-foreground`,danger:`bg-danger text-danger-foreground`},E={info:`bg-white/40`,success:`bg-white/40`,warning:`bg-black/20`,danger:`bg-white/40`},x.__docgenInfo={description:``,methods:[],displayName:`ToastItem`,props:{id:{required:!0,tsType:{name:`string`},description:``},message:{required:!0,tsType:{name:`string`},description:``},variant:{required:!0,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},duration:{required:!0,tsType:{name:`number`},description:``}}}})))()}function O(){if(document.getElementById(N))return;let e=document.createElement(`style`);e.id=N,e.textContent=`
    @keyframes rhf-toastIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes rhf-toastProgress {
      from { width: 100%; }
      to { width: 0%; }
    }
  `,document.head.appendChild(e)}function k({maxVisible:e=5}){let[t,n]=(0,A.useState)([]);return(0,A.useEffect)(()=>(O(),h(()=>n([...f()]))),[]),(0,j.createPortal)((0,M.jsx)(`div`,{className:`fixed right-4 top-4 z-100 flex w-80 flex-col gap-2 sm:w-96`,children:t.slice(0,e).map(e=>(0,M.jsx)(x,{...e},e.id))}),document.body)}var A,j,M,N;function P(){return(P=e((()=>{A=t(),j=r(),b(),D(),M=n(),N=`rhf-toast-keyframes`})))()}function F(){return(F=e((()=>{P(),b()})))()}var I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{F(),u(),I=n(),L={title:`UI/Toast`,component:k,tags:[`autodocs`],argTypes:{maxVisible:{control:`number`,description:`Cantidad máxima de toasts visibles a la vez.`}},parameters:{docs:{description:{component:`
El sistema de toasts funciona con un patrón **provider global**: montás un único
\`<Toaster />\` en la raíz de tu app (suele ir en \`App.tsx\`, junto a tel routing o layout),
y después disparás notificaciones desde **cualquier componente** con la API imperativa
\`toast.*\` — sin necesidad de pasar props ni contexto.

\`<Toaster />\` se encarga de renderizar los toasts vía portal a \`document.body\`,
así que puede vivir en cualquier lugar del arbol; solo debe montarse **una vez**.

\`\`\`tsx
// App.tsx — montá Toaster UNA sola vez
import { Toaster } from '@nichagiro/ui-primitives'

function App() {
  return (
    <>
      <YourRoutes />
      <Toaster maxVisible={5} />
    </>
  )
}
\`\`\`

\`\`\`tsx
// Cualquier componente o util — dispará un toast
import { toast } from '@nichagiro/ui-primitives'

toast.success('Usuario creado correctamente')           // 4s
toast.error('Error al conectar con el servidor')        // 5s
toast.info('Esto es un mensaje informativo', 3000)      // duración custom
toast.warning('La sesión expirará pronto')
toast.dismiss(id)                                       // cerrar programáticamente
\`\`\`
      `}}}},R={parameters:{docs:{description:{story:"\nPresioná los botones para probar cada variante en vivo. En producción montás\nun `<Toaster />` en la raíz y llamás a `toast.*` desde donde necesites.\n        "}}},render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,I.jsx)(d,{colorScheme:`info`,onClick:()=>y.info(`Esto es un mensaje informativo`),children:`Mostrar Info`}),(0,I.jsx)(d,{colorScheme:`success`,onClick:()=>y.success(`Usuario creado correctamente`),children:`Mostrar Success`}),(0,I.jsx)(d,{colorScheme:`warning`,onClick:()=>y.warning(`La sesión expirará pronto`),children:`Mostrar Warning`}),(0,I.jsx)(d,{colorScheme:`danger`,onClick:()=>y.error(`Error al conectar con el servidor`),children:`Mostrar Error`})]})]})},z={render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{}),(0,I.jsx)(d,{colorScheme:`info`,onClick:()=>y.info(`Esto es un mensaje informativo`),children:`Mostrar Info`})]})},B={render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{}),(0,I.jsx)(d,{colorScheme:`success`,onClick:()=>y.success(`Usuario creado correctamente`),children:`Mostrar Success`})]})},V={render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{}),(0,I.jsx)(d,{colorScheme:`warning`,onClick:()=>y.warning(`La sesión expirará pronto`),children:`Mostrar Warning`})]})},H={render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{}),(0,I.jsx)(d,{colorScheme:`danger`,onClick:()=>y.error(`Error al conectar con el servidor`),children:`Mostrar Error`})]})},U={render:()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,I.jsx)(d,{colorScheme:`info`,onClick:()=>y.info(`Info`),children:`Info`}),(0,I.jsx)(d,{colorScheme:`success`,onClick:()=>y.success(`Success`),children:`Success`}),(0,I.jsx)(d,{colorScheme:`warning`,onClick:()=>y.warning(`Warning`),children:`Warning`}),(0,I.jsx)(d,{colorScheme:`danger`,onClick:()=>y.error(`Error`),children:`Error`})]})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Presioná los botones para probar cada variante en vivo. En producción montás
un \\\`<Toaster />\\\` en la raíz y llamás a \\\`toast.*\\\` desde donde necesites.
        \`
      }
    }
  },
  render: () => <>\r
      <Toaster />\r
      <div className="flex flex-wrap gap-2">\r
        <Button colorScheme="info" onClick={() => toast.info('Esto es un mensaje informativo')}>\r
          Mostrar Info\r
        </Button>\r
        <Button colorScheme="success" onClick={() => toast.success('Usuario creado correctamente')}>\r
          Mostrar Success\r
        </Button>\r
        <Button colorScheme="warning" onClick={() => toast.warning('La sesión expirará pronto')}>\r
          Mostrar Warning\r
        </Button>\r
        <Button colorScheme="danger" onClick={() => toast.error('Error al conectar con el servidor')}>\r
          Mostrar Error\r
        </Button>\r
      </div>\r
    </>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Usage`,`Info`,`Success`,`Warning`,`Error`,`AllToasts`]})))()}G();export{U as AllToasts,H as Error,z as Info,B as Success,R as Usage,V as Warning,W as __namedExportsOrder,L as default};