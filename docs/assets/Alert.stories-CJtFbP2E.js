import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-B6rJEnqG.js";import{a as i,d as a,f as o,o as s,p as c,s as l}from"./Icons-DmAkIsXK.js";function u({variant:e=`info`,title:t,children:n,dismissible:r,className:a}){let[o,s]=(0,d.useState)(!1);return o?null:(0,f.jsxs)(`div`,{role:`alert`,className:[`flex items-start gap-3 rounded-md border px-4 py-3 text-sm`,m[e],a??``].join(` `),children:[p[e],(0,f.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[t&&(0,f.jsx)(`p`,{className:`font-medium`,children:t}),(0,f.jsx)(`div`,{children:n})]}),r&&(0,f.jsx)(`button`,{type:`button`,onClick:()=>s(!0),className:`shrink-0 rounded p-1 opacity-60 transition-opacity hover:opacity-100`,"aria-label":`Cerrar`,children:(0,f.jsx)(i,{className:`h-4 w-4`})})]})}var d,f,p,m,h=e((()=>{d=t(n(),1),c(),f=r(),p={info:(0,f.jsx)(l,{className:`h-5 w-5 shrink-0`}),success:(0,f.jsx)(a,{className:`h-5 w-5 shrink-0`}),warning:(0,f.jsx)(o,{className:`h-5 w-5 shrink-0`}),error:(0,f.jsx)(s,{className:`h-5 w-5 shrink-0`})},m={info:`border-info bg-info/10 text-info`,success:`border-success bg-success/10 text-success`,warning:`border-warning bg-warning/10 text-warning`,error:`border-danger bg-danger/10 text-danger`},u.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C,w,T;e((()=>{h(),g=r(),_={title:`UI/Alert`,component:u,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},title:{control:`text`},dismissible:{control:`boolean`}}},v={args:{children:`Esto es un mensaje informativo`,variant:`info`,title:`Información`}},y={args:{children:`Operación completada correctamente`,variant:`success`,title:`Éxito`}},b={args:{children:`La sesión expirará pronto`,variant:`warning`,title:`Atención`}},x={args:{children:`Error al conectar con el servidor`,variant:`error`,title:`Error`}},S={args:{children:`Hacé clic en la X para cerrar`,variant:`info`,dismissible:!0}},C={args:{children:`Mensaje sin título`,variant:`success`,dismissible:!0}},w={render:()=>(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsx)(u,{variant:`info`,title:`Info`,children:`Mensaje informativo`}),(0,g.jsx)(u,{variant:`success`,title:`Success`,children:`Operación exitosa`}),(0,g.jsx)(u,{variant:`warning`,title:`Warning`,children:`Cuidado`}),(0,g.jsx)(u,{variant:`error`,title:`Error`,children:`Algo salió mal`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Esto es un mensaje informativo',
    variant: 'info',
    title: 'Información'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Operación completada correctamente',
    variant: 'success',
    title: 'Éxito'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'La sesión expirará pronto',
    variant: 'warning',
    title: 'Atención'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Error al conectar con el servidor',
    variant: 'error',
    title: 'Error'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Hacé clic en la X para cerrar',
    variant: 'info',
    dismissible: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Mensaje sin título',
    variant: 'success',
    dismissible: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Alert variant="info" title="Info">Mensaje informativo</Alert>\r
      <Alert variant="success" title="Success">Operación exitosa</Alert>\r
      <Alert variant="warning" title="Warning">Cuidado</Alert>\r
      <Alert variant="error" title="Error">Algo salió mal</Alert>\r
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Info`,`Success`,`Warning`,`Error`,`Dismissible`,`WithoutTitle`,`AllVariants`]}))();export{w as AllVariants,S as Dismissible,x as Error,v as Info,y as Success,b as Warning,C as WithoutTitle,T as __namedExportsOrder,_ as default};