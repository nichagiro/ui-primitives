import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-CDD3I0Bv.js";import{n as r,t as i}from"./cn-BYIVTXtt.js";import{a,c as o,g as s,h as c,o as l,p as u}from"./Icons-tzRqAsr1.js";function d({variant:e=`info`,title:t,children:n,dismissible:r,className:o}){let[s,c]=(0,f.useState)(!1);return s?null:(0,p.jsxs)(`div`,{role:`alert`,className:i(`flex items-start gap-3 rounded-md border px-4 py-3 text-sm`,h[e],o),children:[m[e],(0,p.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[t&&(0,p.jsx)(`p`,{className:`font-medium`,children:t}),(0,p.jsx)(`div`,{children:n})]}),r&&(0,p.jsx)(`button`,{type:`button`,onClick:()=>c(!0),className:`shrink-0 rounded p-1 opacity-60 transition-opacity hover:opacity-100`,"aria-label":`Cerrar`,children:(0,p.jsx)(a,{className:`h-4 w-4`})})]})}var f,p,m,h;function g(){return(g=e((()=>{f=t(),s(),r(),p=n(),m={info:(0,p.jsx)(o,{className:`h-5 w-5 shrink-0`}),success:(0,p.jsx)(u,{className:`h-5 w-5 shrink-0`}),warning:(0,p.jsx)(c,{className:`h-5 w-5 shrink-0`}),error:(0,p.jsx)(l,{className:`h-5 w-5 shrink-0`})},h={info:`border-info bg-info/10 text-info`,success:`border-success bg-success/10 text-success`,warning:`border-warning bg-warning/10 text-warning`,error:`border-danger bg-danger/10 text-danger`},d.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{g(),_=n(),v={title:`UI/Alert`,component:d,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},title:{control:`text`},dismissible:{control:`boolean`}}},y={args:{children:`Esto es un mensaje informativo`,variant:`info`,title:`Información`}},b={args:{children:`Operación completada correctamente`,variant:`success`,title:`Éxito`}},x={args:{children:`La sesión expirará pronto`,variant:`warning`,title:`Atención`}},S={args:{children:`Error al conectar con el servidor`,variant:`error`,title:`Error`}},C={args:{children:`Hacé clic en la X para cerrar`,variant:`info`,dismissible:!0}},w={args:{children:`Mensaje sin título`,variant:`success`,dismissible:!0}},T={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,_.jsx)(d,{variant:`info`,title:`Info`,children:`Mensaje informativo`}),(0,_.jsx)(d,{variant:`success`,title:`Success`,children:`Operación exitosa`}),(0,_.jsx)(d,{variant:`warning`,title:`Warning`,children:`Cuidado`}),(0,_.jsx)(d,{variant:`error`,title:`Error`,children:`Algo salió mal`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Esto es un mensaje informativo',
    variant: 'info',
    title: 'Información'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Operación completada correctamente',
    variant: 'success',
    title: 'Éxito'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'La sesión expirará pronto',
    variant: 'warning',
    title: 'Atención'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Error al conectar con el servidor',
    variant: 'error',
    title: 'Error'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Hacé clic en la X para cerrar',
    variant: 'info',
    dismissible: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Mensaje sin título',
    variant: 'success',
    dismissible: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Alert variant="info" title="Info">Mensaje informativo</Alert>\r
      <Alert variant="success" title="Success">Operación exitosa</Alert>\r
      <Alert variant="warning" title="Warning">Cuidado</Alert>\r
      <Alert variant="error" title="Error">Algo salió mal</Alert>\r
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Info`,`Success`,`Warning`,`Error`,`Dismissible`,`WithoutTitle`,`AllVariants`]})))()}D();export{T as AllVariants,C as Dismissible,S as Error,y as Info,b as Success,x as Warning,w as WithoutTitle,E as __namedExportsOrder,v as default};