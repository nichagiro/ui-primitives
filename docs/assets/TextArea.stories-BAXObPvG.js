import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-mBZGJjS4.js";import{n as i,t as a}from"./FieldWrapper-BBu1zQON.js";function o({className:e,label:t,error:n,colorScheme:r,resize:i=`none`,isRequired:o,ref:d,...f}){let p=(0,s.useId)(),m=f.id||p;return(0,c.jsx)(a,{label:t,error:n,colorScheme:r,htmlFor:m,isRequired:o,children:(0,c.jsx)(`textarea`,{ref:d,id:m,className:u+` `+l[i]+(e?` `+e:``),...f})})}var s,c,l,u,d=e((()=>{s=t(n(),1),i(),c=r(),l={none:`resize-none`,vertical:`resize-y`,both:`resize`},u=[`block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),o.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}}}}})),f,p,m,h,g,_;e((()=>{d(),f={title:`Form/TextArea`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},resize:{control:`select`,options:[`none`,`vertical`,`both`]}}},p={args:{label:`Comentarios`,placeholder:`Escribí algo...`}},m={args:{label:`Descripción`,error:`Mínimo 10 caracteres`,defaultValue:`Corto`}},h={args:{label:`Descripción larga`,resize:`vertical`,placeholder:`Este textarea solo se estira verticalmente`}},g={args:{label:`Descripción`,resize:`both`,placeholder:`Se estira en ambas direcciones`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comentarios',
    placeholder: 'Escribí algo...'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    error: 'Mínimo 10 caracteres',
    defaultValue: 'Corto'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción larga',
    resize: 'vertical',
    placeholder: 'Este textarea solo se estira verticalmente'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    resize: 'both',
    placeholder: 'Se estira en ambas direcciones'
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithError`,`ResizeVertical`,`ResizeBoth`]}))();export{p as Default,g as ResizeBoth,h as ResizeVertical,m as WithError,_ as __namedExportsOrder,f as default};