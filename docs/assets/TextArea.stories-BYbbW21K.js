import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-Cite5768.js";import{n as i,t as a}from"./FieldWrapper-DY3n8eKN.js";function o({className:e,label:t,required:n,error:r,colorScheme:i,resize:o=`none`,ref:d,...f}){let p=(0,s.useId)(),m=f.id||p;return(0,c.jsx)(a,{label:t,required:n,error:r,colorScheme:i,htmlFor:m,children:(0,c.jsx)(`textarea`,{ref:d,id:m,className:u+` `+l[o]+(e?` `+e:``),...f})})}var s,c,l,u,d=e((()=>{s=t(n(),1),i(),c=r(),l={none:`resize-none`,vertical:`resize-y`,both:`resize`},u=[`block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),o.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},label:{required:!0,tsType:{name:`string`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}}}}})),f,p,m,h,g,_,v;e((()=>{d(),f={title:`Form/TextArea`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},resize:{control:`select`,options:[`none`,`vertical`,`both`]},required:{control:`boolean`}}},p={args:{label:`Comentarios`,placeholder:`Escribí algo...`}},m={args:{label:`Descripción`,error:`Mínimo 10 caracteres`,defaultValue:`Corto`}},h={args:{label:`Descripción larga`,resize:`vertical`,placeholder:`Este textarea solo se estira verticalmente`}},g={args:{label:`Descripción`,resize:`both`,placeholder:`Se estira en ambas direcciones`}},_={args:{label:`Mensaje`,required:!0,placeholder:`Tu mensaje...`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Mensaje',
    required: true,
    placeholder: 'Tu mensaje...'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithError`,`ResizeVertical`,`ResizeBoth`,`Required`]}))();export{p as Default,_ as Required,g as ResizeBoth,h as ResizeVertical,m as WithError,v as __namedExportsOrder,f as default};