import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-o7jEyD7u.js";import{n as r,t as i}from"./cn-zQoGKVzp.js";import{n as a,t as o}from"./FieldWrapper-BUKIyNcT.js";function s({className:e,label:t,error:n,colorScheme:r,resize:a=`none`,isRequired:s,ref:f,...p}){let m=(0,c.useId)(),h=p.id||m;return(0,l.jsx)(o,{label:t,error:n,colorScheme:r,htmlFor:h,isRequired:s,children:(0,l.jsx)(`textarea`,{ref:f,id:h,className:i(d,u[a],e),...p})})}var c,l,u,d;function f(){return(f=e((()=>{c=t(),a(),r(),l=n(),u={none:`resize-none`,vertical:`resize-y`,both:`resize`},d=[`block w-full bg-transparent text-sm text-foreground outline-none min-h-[80px]`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),s.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLTextAreaElement`}],raw:`Ref<HTMLTextAreaElement>`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'none'`,computed:!1}}}}})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{f(),p={title:`Form/TextArea`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},resize:{control:`select`,options:[`none`,`vertical`,`both`]}}},m={args:{label:`Comentarios`,placeholder:`Escribí algo...`}},h={args:{label:`Descripción`,error:`Mínimo 10 caracteres`,defaultValue:`Corto`}},g={args:{label:`Descripción larga`,resize:`vertical`,placeholder:`Este textarea solo se estira verticalmente`}},_={args:{label:`Descripción`,resize:`both`,placeholder:`Se estira en ambas direcciones`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comentarios',
    placeholder: 'Escribí algo...'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    error: 'Mínimo 10 caracteres',
    defaultValue: 'Corto'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción larga',
    resize: 'vertical',
    placeholder: 'Este textarea solo se estira verticalmente'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Descripción',
    resize: 'both',
    placeholder: 'Se estira en ambas direcciones'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithError`,`ResizeVertical`,`ResizeBoth`]})))()}y();export{m as Default,_ as ResizeBoth,g as ResizeVertical,h as WithError,v as __namedExportsOrder,p as default};