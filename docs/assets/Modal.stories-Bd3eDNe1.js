import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-o7jEyD7u.js";import{t as r}from"./react-dom-JxAecrST.js";import{a as i,g as a}from"./Icons-S0XrGTpk.js";import{n as o,t as s}from"./cn-zQoGKVzp.js";import{n as c,t as l}from"./Button-DmLU9SsO.js";function u(){if(document.getElementById(g))return;let e=document.createElement(`style`);e.id=g,e.textContent=`
    dialog[open] { animation: rhf-scaleIn 200ms ease-out; }
    dialog::backdrop {
      background: rgba(0 0 0 / 0.5);
      backdrop-filter: blur(4px);
      animation: rhf-fadeIn 150ms ease-out;
    }
    @keyframes rhf-fadeIn { from { opacity: 0 } to { opacity: 1 } }
    @keyframes rhf-scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
  `,document.head.appendChild(e)}function d({open:e,onClose:t,title:n,children:r,footer:a,size:o=`md`,persistent:c=!1,className:l}){let d=(0,f.useRef)(null),g=(0,f.useRef)(t);return(0,f.useEffect)(()=>{g.current=t},[t]),(0,f.useEffect)(()=>{u()},[]),(0,f.useEffect)(()=>{let t=d.current;if(!t||!e)return;t.showModal();let n=e=>{e.key===`Escape`&&(c?e.preventDefault():g.current())},r=e=>{e.target===t&&!c&&g.current()},i=e=>{c&&e.preventDefault()};return t.addEventListener(`keydown`,n),t.addEventListener(`click`,r),t.addEventListener(`cancel`,i),()=>{t.removeEventListener(`keydown`,n),t.removeEventListener(`click`,r),t.removeEventListener(`cancel`,i),t.open&&t.close()}},[e,c]),e?(0,p.createPortal)((0,m.jsxs)(`dialog`,{ref:d,"aria-label":n??`Diálogo`,className:s(`flex fixed m-auto inset-0 max-h-[85vh] w-full flex-col rounded-xl border border-border bg-card shadow-2xl`,`p-0 backdrop:bg-overlay/50 backdrop:backdrop-blur-sm`,h[o],l),children:[n&&(0,m.jsxs)(`div`,{className:`flex items-center justify-between border-b border-border px-6 py-4`,children:[(0,m.jsx)(`h2`,{className:`text-base font-semibold text-foreground`,children:n}),(0,m.jsx)(`button`,{type:`button`,onClick:t,className:`rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,"aria-label":`Cerrar`,children:(0,m.jsx)(i,{className:`h-5 w-5`})})]}),(0,m.jsx)(`div`,{className:`overflow-y-auto px-6 py-4 text-sm leading-relaxed text-foreground`,children:r}),a&&(0,m.jsx)(`div`,{className:`flex items-center justify-end gap-3 px-6 pb-4 pt-0`,children:a})]}),document.body):null}var f,p,m,h,g;function _(){return(_=e((()=>{f=t(),p=r(),a(),o(),m=n(),h={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`,xl:`max-w-xl`,full:`max-w-[calc(100vw-2rem)]`},g=`rhf-modal-styles`})))()}var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{_(),c(),v=t(),y=n(),b={title:`UI/Modal`,component:d,tags:[`autodocs`],argTypes:{open:{control:`boolean`},title:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`full`]},persistent:{control:`boolean`}}},x={args:{open:!0,title:`Modal abierto`,children:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Este es el contenido del modal.`}),onClose:()=>{}}},S={args:{open:!0,title:`Modal persistente`,persistent:!0,children:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Solo se cierra con el botón X. Escape y clic fuera no funcionan.`}),onClose:()=>{}}},C={args:{open:!0,title:`Confirmar acción`,children:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`¿Estás seguro de querer continuar?`}),footer:(0,y.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,y.jsx)(l,{variant:`ghost`,children:`Cancelar`}),(0,y.jsx)(l,{colorScheme:`danger`,children:`Eliminar`})]}),onClose:()=>{}}},w={args:{open:!0,title:`Modal pequeño`,size:`sm`,children:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Contenido compacto.`}),onClose:()=>{}}},T={args:{open:!0,title:`Modal grande`,size:`lg`,children:(0,y.jsxs)(`div`,{className:`space-y-4 text-muted-foreground`,children:[(0,y.jsx)(`p`,{children:`Este modal ocupa más espacio horizontal.`}),(0,y.jsx)(`p`,{children:`Ideal para formularios extensos o tablas.`})]}),onClose:()=>{}}},E={render:()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>t(!0),children:`Abrir modal`}),(0,y.jsx)(d,{open:e,onClose:()=>t(!1),title:`Modal interactivo`,children:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Hacé clic fuera o presioná Escape para cerrar.`})})]})}},D={render:()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l,{onClick:()=>t(!0),children:`Abrir modal persistente`}),(0,y.jsx)(d,{open:e,onClose:()=>t(!1),title:`Modal persistente`,persistent:!0,children:(0,y.jsx)(`p`,{className:`text-muted-foreground`,children:`Solo podés cerrarlo con el botón X.`})})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal abierto',
    children: <p className="text-muted-foreground">Este es el contenido del modal.</p>,
    onClose: () => {}
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal persistente',
    persistent: true,
    children: <p className="text-muted-foreground">\r
        Solo se cierra con el botón X. Escape y clic fuera no funcionan.\r
      </p>,
    onClose: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Modal pequeño',
    size: 'sm',
    children: <p className="text-muted-foreground">Contenido compacto.</p>,
    onClose: () => {}
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>\r
        <Modal open={open} onClose={() => setOpen(false)} title="Modal interactivo">\r
          <p className="text-muted-foreground">Hacé clic fuera o presioná Escape para cerrar.</p>\r
        </Modal>\r
      </>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Open`,`Persistent`,`WithFooter`,`Small`,`Large`,`Interactive`,`InteractivePersistent`]})))()}k();export{E as Interactive,D as InteractivePersistent,T as Large,x as Open,S as Persistent,w as Small,C as WithFooter,O as __namedExportsOrder,b as default};