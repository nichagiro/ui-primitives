import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-CDD3I0Bv.js";import{n as r,t as i}from"./cn-BYIVTXtt.js";import{n as a,t as o}from"./FieldWrapper-CQsSvPDp.js";var s,c;function l(){return(l=e((()=>{s={none:`resize-none`,vertical:`resize-y`,both:`resize`},c=[`block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `)})))()}function u({className:e,label:t,error:n,colorScheme:r,resize:o=`none`,isRequired:l,ref:u,...p}){let m=(0,d.useId)(),h=p.id||m;return(0,f.jsx)(a,{label:t,error:n,colorScheme:r,htmlFor:h,isRequired:l,children:(0,f.jsx)(`textarea`,{ref:u,id:h,className:i(c,s[o],e),...p})})}var d,f;function p(){return(p=e((()=>{d=t(),o(),r(),l(),f=n(),u.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}}}}})))()}function m(){return(m=e((()=>{p()})))()}var h,g,_,v,y,b;function x(){return(x=e((()=>{m(),h={title:`Form/TextArea`,component:u,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},resize:{control:`select`,options:[`none`,`vertical`,`both`]}}},g={args:{label:`Comentarios`,placeholder:`Escribí algo...`}},_={args:{label:`Descripción`,error:`Mínimo 10 caracteres`,defaultValue:`Corto`}},v={args:{label:`Descripción larga`,resize:`vertical`,placeholder:`Este textarea solo se estira verticalmente`}},y={args:{label:`Descripción`,resize:`both`,placeholder:`Se estira en ambas direcciones`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comentarios',
    placeholder: 'Escribí algo...'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    error: 'Mínimo 10 caracteres',
    defaultValue: 'Corto'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción larga',
    resize: 'vertical',
    placeholder: 'Este textarea solo se estira verticalmente'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    resize: 'both',
    placeholder: 'Se estira en ambas direcciones'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithError`,`ResizeVertical`,`ResizeBoth`]})))()}x();export{g as Default,y as ResizeBoth,v as ResizeVertical,_ as WithError,b as __namedExportsOrder,h as default};