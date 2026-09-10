import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-BYukrN73.js";import{t as r}from"./react-dom-DU-gGrge.js";import{a as i,g as a}from"./Icons-DEBNYXPN.js";import{n as o,t as s}from"./Button-B0udNDth.js";function c(){if(document.getElementById(m))return;let e=document.createElement(`style`);e.id=m,e.textContent=`
    dialog[open] { animation: rhf-scaleIn 200ms ease-out; }
    dialog::backdrop {
      background: rgba(0 0 0 / 0.5);
      backdrop-filter: blur(4px);
      animation: rhf-fadeIn 150ms ease-out;
    }
    @keyframes rhf-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes rhf-scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
  `,document.head.appendChild(e)}function l({open:e,onClose:t,title:n,children:r,footer:a,size:o=`md`,persistent:s=!1,className:l}){let m=(0,u.useRef)(null),h=(0,u.useRef)(t);return(0,u.useEffect)(()=>{h.current=t},[t]),(0,u.useEffect)(()=>{c()},[]),(0,u.useEffect)(()=>{let t=m.current;if(!t||!e)return;t.showModal();let n=e=>{e.key===`Escape`&&(s?e.preventDefault():h.current())},r=e=>{e.target===t&&!s&&h.current()},i=e=>{s&&e.preventDefault()};return t.addEventListener(`keydown`,n),t.addEventListener(`click`,r),t.addEventListener(`cancel`,i),()=>{t.removeEventListener(`keydown`,n),t.removeEventListener(`click`,r),t.removeEventListener(`cancel`,i),t.open&&t.close()}},[e,s]),e?(0,d.createPortal)((0,f.jsxs)(`dialog`,{ref:m,"aria-label":n??`Diálogo`,className:[`flex fixed m-auto inset-0 max-h-[85vh] w-full flex-col rounded-xl border border-border bg-card shadow-2xl`,`p-0 backdrop:bg-overlay/50 backdrop:backdrop-blur-sm`,p[o],l??``].join(` `),children:[n&&(0,f.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-6 py-4`,children:[(0,f.jsx)(`h2`,{className:`text-base font-semibold text-foreground`,children:n}),(0,f.jsx)(`button`,{type:`button`,onClick:t,className:`rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,"aria-label":`Cerrar`,children:(0,f.jsx)(i,{className:`h-5 w-5`})})]}),(0,f.jsx)(`div`,{className:`overflow-y-auto px-6 py-4 text-sm leading-relaxed text-foreground`,children:r}),a&&(0,f.jsx)(`div`,{className:`flex items-center justify-end gap-3 px-6 pb-4 pt-0`,children:a})]}),document.body):null}var u,d,f,p,m;function h(){return(h=e((()=>{u=t(),d=r(),a(),f=n(),p={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`,xl:`max-w-xl`,full:`max-w-[calc(100vw-2rem)]`},m=`rhf-modal-styles`})))()}var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{h(),o(),g=t(),_=n(),v={title:`UI/Modal`,component:l,tags:[`autodocs`],argTypes:{open:{control:`boolean`},title:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`full`]},persistent:{control:`boolean`}}},y={args:{open:!0,title:`Modal abierto`,children:(0,_.jsx)(`p`,{className:`text-muted-foreground`,children:`Este es el contenido del modal.`}),onClose:()=>{}}},b={args:{open:!0,title:`Modal persistente`,persistent:!0,children:(0,_.jsx)(`p`,{className:`text-muted-foreground`,children:`Solo se cierra con el botón X. Escape y clic fuera no funcionan.`}),onClose:()=>{}}},x={args:{open:!0,title:`Confirmar acción`,children:(0,_.jsx)(`p`,{className:`text-muted-foreground`,children:`¿Estás seguro de querer continuar?`}),footer:(0,_.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,_.jsx)(s,{variant:`ghost`,children:`Cancelar`}),(0,_.jsx)(s,{colorScheme:`danger`,children:`Eliminar`})]}),onClose:()=>{}}},S={args:{open:!0,title:`Modal pequeño`,size:`sm`,children:(0,_.jsx)(`p`,{className:`text-muted-foreground`,children:`Contenido compacto.`}),onClose:()=>{}}},C={args:{open:!0,title:`Modal grande`,size:`lg`,children:(0,_.jsxs)(`div`,{className:`space-y-4 text-muted-foreground`,children:[(0,_.jsx)(`p`,{children:`Este modal ocupa más espacio horizontal.`}),(0,_.jsx)(`p`,{children:`Ideal para formularios extensos o tablas.`})]}),onClose:()=>{}}},w={render:()=>{let[e,t]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{onClick:()=>t(!0),children:`Abrir modal`}),(0,_.jsx)(l,{open:e,onClose:()=>t(!1),title:`Modal interactivo`,children:(0,_.jsx)(`p`,{className:`text-muted-foreground`,children:`Hacé clic fuera o presioná Escape para cerrar.`})})]})}},T={render:()=>{let[e,t]=(0,g.useState)(!1);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{onClick:()=>t(!0),children:`Abrir modal persistente`}),(0,_.jsx)(l,{open:e,onClose:()=>t(!1),title:`Modal persistente`,persistent:!0,children:(0,_.jsx)(`p`,{className:`text-muted-foreground`,children:`Solo podés cerrarlo con el botón X.`})})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal abierto',
    children: <p className="text-muted-foreground">Este es el contenido del modal.</p>,
    onClose: () => {}
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal persistente',
    persistent: true,
    children: <p className="text-muted-foreground">\r
        Solo se cierra con el botón X. Escape y clic fuera no funcionan.\r
      </p>,
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Abrir modal persistente</Button>\r
        <Modal open={open} onClose={() => setOpen(false)} title="Modal persistente" persistent>\r
          <p className="text-muted-foreground">\r
            Solo podés cerrarlo con el botón X.\r
          </p>\r
        </Modal>\r
      </>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Open`,`Persistent`,`WithFooter`,`Small`,`Large`,`Interactive`,`InteractivePersistent`]})))()}D();export{w as Interactive,T as InteractivePersistent,C as Large,y as Open,b as Persistent,S as Small,x as WithFooter,E as __namedExportsOrder,v as default};