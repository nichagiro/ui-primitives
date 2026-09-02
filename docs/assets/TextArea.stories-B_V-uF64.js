import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-Cc7pzyhf.js";import{n as r,t as i}from"./FieldWrapper-DQNhivna.js";function a({className:e,label:t,error:n,colorScheme:r,resize:a=`none`,isRequired:u,ref:d,...f}){let p=(0,o.useId)(),m=f.id||p;return(0,s.jsx)(i,{label:t,error:n,colorScheme:r,htmlFor:m,isRequired:u,children:(0,s.jsx)(`textarea`,{ref:d,id:m,className:l+` `+c[a]+(e?` `+e:``),...f})})}var o,s,c,l;function u(){return(u=e((()=>{o=t(),r(),s=n(),c={none:`resize-none`,vertical:`resize-y`,both:`resize`},l=[`block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),a.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}}}}})))()}var d,f,p,m,h,g;function _(){return(_=e((()=>{u(),d={title:`Form/TextArea`,component:a,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},resize:{control:`select`,options:[`none`,`vertical`,`both`]}}},f={args:{label:`Comentarios`,placeholder:`Escribí algo...`}},p={args:{label:`Descripción`,error:`Mínimo 10 caracteres`,defaultValue:`Corto`}},m={args:{label:`Descripción larga`,resize:`vertical`,placeholder:`Este textarea solo se estira verticalmente`}},h={args:{label:`Descripción`,resize:`both`,placeholder:`Se estira en ambas direcciones`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comentarios',
    placeholder: 'Escribí algo...'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    error: 'Mínimo 10 caracteres',
    defaultValue: 'Corto'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción larga',
    resize: 'vertical',
    placeholder: 'Este textarea solo se estira verticalmente'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    resize: 'both',
    placeholder: 'Se estira en ambas direcciones'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithError`,`ResizeVertical`,`ResizeBoth`]})))()}_();export{f as Default,h as ResizeBoth,m as ResizeVertical,p as WithError,g as __namedExportsOrder,d as default};