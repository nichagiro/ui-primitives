import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-BBNuycjZ.js";import{t as i}from"./react-dom-BN461QeS.js";import{a,p as o}from"./Icons-CysMEwKH.js";import{n as s,t as c}from"./Button-D3i-aT0q.js";function l(){if(document.getElementById(h))return;let e=document.createElement(`style`);e.id=h,e.textContent=`
    dialog[open] { animation: rhf-scaleIn 200ms ease-out; }
    dialog::backdrop {
      background: rgba(0 0 0 / 0.5);
      backdrop-filter: blur(4px);
      animation: rhf-fadeIn 150ms ease-out;
    }
    @keyframes rhf-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes rhf-scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
  `,document.head.appendChild(e)}function u({open:e,onClose:t,title:n,children:r,footer:i,size:o=`md`,className:s}){let c=(0,d.useRef)(null),u=(0,d.useRef)(t);return(0,d.useEffect)(()=>{u.current=t},[t]),(0,d.useEffect)(()=>{l()},[]),(0,d.useEffect)(()=>{let t=c.current;t&&(e?t.open||t.showModal():t.open&&t.close())},[e]),(0,d.useEffect)(()=>{let e=c.current;if(!e)return;let t=()=>u.current();return e.addEventListener(`close`,t),()=>e.removeEventListener(`close`,t)},[]),e?(0,f.createPortal)((0,p.jsxs)(`dialog`,{ref:c,"aria-label":n??`Diálogo`,className:[`flex max-h-[85vh] w-full flex-col rounded-xl border border-border bg-card shadow-2xl`,`p-0 backdrop:bg-overlay/50 backdrop:backdrop-blur-sm`,m[o],s??``].join(` `),children:[n&&(0,p.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-6 py-4`,children:[(0,p.jsx)(`h2`,{className:`text-base font-semibold text-foreground`,children:n}),(0,p.jsx)(`button`,{type:`button`,onClick:t,className:`rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,"aria-label":`Cerrar`,children:(0,p.jsx)(a,{className:`h-5 w-5`})})]}),(0,p.jsx)(`div`,{className:`overflow-y-auto px-6 py-4 text-sm leading-relaxed text-foreground`,children:r}),i&&(0,p.jsx)(`div`,{className:`flex items-center justify-end gap-3 px-6 pb-4 pt-0`,children:i})]}),document.body):null}var d,f,p,m,h,g=e((()=>{d=t(n(),1),f=t(i(),1),o(),p=r(),m={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`,xl:`max-w-xl`,full:`max-w-[calc(100vw-2rem)]`},h=`rhf-modal-styles`})),_,v,y,b,x,S,C,w,T;e((()=>{g(),s(),_=t(n(),1),v=r(),y={title:`UI/Modal`,component:u,tags:[`autodocs`],argTypes:{open:{control:`boolean`},title:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},b={args:{open:!0,title:`Modal abierto`,children:(0,v.jsx)(`p`,{className:`text-muted-foreground`,children:`Este es el contenido del modal.`}),onClose:()=>{}}},x={args:{open:!0,title:`Confirmar acción`,children:(0,v.jsx)(`p`,{className:`text-muted-foreground`,children:`¿Estás seguro de querer continuar?`}),footer:(0,v.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,v.jsx)(c,{variant:`ghost`,children:`Cancelar`}),(0,v.jsx)(c,{colorScheme:`danger`,children:`Eliminar`})]}),onClose:()=>{}}},S={args:{open:!0,title:`Modal pequeño`,size:`sm`,children:(0,v.jsx)(`p`,{className:`text-muted-foreground`,children:`Contenido compacto.`}),onClose:()=>{}}},C={args:{open:!0,title:`Modal grande`,size:`lg`,children:(0,v.jsxs)(`div`,{className:`space-y-4 text-muted-foreground`,children:[(0,v.jsx)(`p`,{children:`Este modal ocupa más espacio horizontal.`}),(0,v.jsx)(`p`,{children:`Ideal para formularios extensos o tablas.`})]}),onClose:()=>{}}},w={render:()=>{let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c,{onClick:()=>t(!0),children:`Abrir modal`}),(0,v.jsx)(u,{open:e,onClose:()=>t(!1),title:`Modal interactivo`,children:(0,v.jsx)(`p`,{className:`text-muted-foreground`,children:`Hacé clic fuera o presioná Escape para cerrar.`})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal abierto',
    children: <p className="text-muted-foreground">Este es el contenido del modal.</p>,
    onClose: () => {}
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Confirmar acción',
    children: <p className="text-muted-foreground">¿Estás seguro de querer continuar?</p>,
    footer: <div className="flex justify-end gap-2">\r
        <Button variant="ghost">Cancelar</Button>\r
        <Button colorScheme="danger">Eliminar</Button>\r
      </div>,
    onClose: () => {}
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal pequeño',
    size: 'sm',
    children: <p className="text-muted-foreground">Contenido compacto.</p>,
    onClose: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal grande',
    size: 'lg',
    children: <div className="space-y-4 text-muted-foreground">\r
        <p>Este modal ocupa más espacio horizontal.</p>\r
        <p>Ideal para formularios extensos o tablas.</p>\r
      </div>,
    onClose: () => {}
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>\r
        <Modal open={open} onClose={() => setOpen(false)} title="Modal interactivo">\r
          <p className="text-muted-foreground">Hacé clic fuera o presioná Escape para cerrar.</p>\r
        </Modal>\r
      </>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Open`,`WithFooter`,`Small`,`Large`,`Interactive`]}))();export{w as Interactive,C as Large,b as Open,S as Small,x as WithFooter,T as __namedExportsOrder,y as default};