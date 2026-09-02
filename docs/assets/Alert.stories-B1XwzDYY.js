import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-Cc7pzyhf.js";import{a as r,f as i,m as a,o,p as s,s as c}from"./Icons-D1M9phwv.js";function l({variant:e=`info`,title:t,children:n,dismissible:i,className:a}){let[o,s]=(0,u.useState)(!1);return o?null:(0,d.jsxs)(`div`,{role:`alert`,className:[`flex items-start gap-3 rounded-md border px-4 py-3 text-sm`,p[e],a??``].join(` `),children:[f[e],(0,d.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[t&&(0,d.jsx)(`p`,{className:`font-medium`,children:t}),(0,d.jsx)(`div`,{children:n})]}),i&&(0,d.jsx)(`button`,{type:`button`,onClick:()=>s(!0),className:`shrink-0 rounded p-1 opacity-60 transition-opacity hover:opacity-100`,"aria-label":`Cerrar`,children:(0,d.jsx)(r,{className:`h-4 w-4`})})]})}var u,d,f,p;function m(){return(m=e((()=>{u=t(),a(),d=n(),f={info:(0,d.jsx)(c,{className:`h-5 w-5 shrink-0`}),success:(0,d.jsx)(i,{className:`h-5 w-5 shrink-0`}),warning:(0,d.jsx)(s,{className:`h-5 w-5 shrink-0`}),error:(0,d.jsx)(o,{className:`h-5 w-5 shrink-0`})},p={info:`border-info bg-info/10 text-info`,success:`border-success bg-success/10 text-success`,warning:`border-warning bg-warning/10 text-warning`,error:`border-danger bg-danger/10 text-danger`},l.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{m(),h=n(),g={title:`UI/Alert`,component:l,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},title:{control:`text`},dismissible:{control:`boolean`}}},_={args:{children:`Esto es un mensaje informativo`,variant:`info`,title:`Información`}},v={args:{children:`Operación completada correctamente`,variant:`success`,title:`Éxito`}},y={args:{children:`La sesión expirará pronto`,variant:`warning`,title:`Atención`}},b={args:{children:`Error al conectar con el servidor`,variant:`error`,title:`Error`}},x={args:{children:`Hacé clic en la X para cerrar`,variant:`info`,dismissible:!0}},S={args:{children:`Mensaje sin título`,variant:`success`,dismissible:!0}},C={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsx)(l,{variant:`info`,title:`Info`,children:`Mensaje informativo`}),(0,h.jsx)(l,{variant:`success`,title:`Success`,children:`Operación exitosa`}),(0,h.jsx)(l,{variant:`warning`,title:`Warning`,children:`Cuidado`}),(0,h.jsx)(l,{variant:`error`,title:`Error`,children:`Algo salió mal`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Esto es un mensaje informativo',
    variant: 'info',
    title: 'Información'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Operación completada correctamente',
    variant: 'success',
    title: 'Éxito'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'La sesión expirará pronto',
    variant: 'warning',
    title: 'Atención'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Error al conectar con el servidor',
    variant: 'error',
    title: 'Error'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Hacé clic en la X para cerrar',
    variant: 'info',
    dismissible: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Mensaje sin título',
    variant: 'success',
    dismissible: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Alert variant="info" title="Info">Mensaje informativo</Alert>\r
      <Alert variant="success" title="Success">Operación exitosa</Alert>\r
      <Alert variant="warning" title="Warning">Cuidado</Alert>\r
      <Alert variant="error" title="Error">Algo salió mal</Alert>\r
    </div>
}`,...C.parameters?.docs?.source}}},w=[`Info`,`Success`,`Warning`,`Error`,`Dismissible`,`WithoutTitle`,`AllVariants`]})))()}T();export{C as AllVariants,x as Dismissible,b as Error,_ as Info,v as Success,y as Warning,S as WithoutTitle,w as __namedExportsOrder,g as default};