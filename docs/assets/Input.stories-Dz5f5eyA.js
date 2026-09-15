import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-CDD3I0Bv.js";import{n as r,t as i}from"./cn-BYIVTXtt.js";import{n as a,t as o}from"./FieldWrapper-CQsSvPDp.js";var s;function c(){return(c=e((()=>{s=[`block w-full bg-transparent text-sm text-foreground outline-none`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `)})))()}function l({className:e,label:t,error:n,colorScheme:r,isRequired:o,ref:c,...l}){let f=(0,u.useId)(),p=l.id||f;return(0,d.jsx)(a,{label:t,error:n,colorScheme:r,htmlFor:p,isRequired:o,children:(0,d.jsx)(`input`,{ref:c,id:p,className:i(s,e),...l})})}var u,d;function f(){return(f=e((()=>{u=t(),o(),r(),c(),d=n(),l.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``}}}})))()}function p(){return(p=e((()=>{f()})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{p(),m={title:`Form/Input`,component:l,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},disabled:{control:`boolean`},type:{control:`select`,options:[`text`,`email`,`password`,`date`,`time`,`number`]}}},h={args:{label:`Nombre`,placeholder:`Tu nombre`}},g={args:{label:`Email`,type:`email`,error:`Email inválido`,defaultValue:`mal@`}},_={args:{label:`Usuario`,disabled:!0,defaultValue:`juanperez`}},v={args:{label:`Fecha de nacimiento`,type:`date`}},y={args:{label:`Contraseña`,type:`password`,placeholder:`********`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Tu nombre'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email inválido',
    defaultValue: 'mal@'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    disabled: true,
    defaultValue: 'juanperez'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fecha de nacimiento',
    type: 'date'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: '********'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithError`,`Disabled`,`DateInput`,`Password`]})))()}x();export{v as DateInput,h as Default,_ as Disabled,y as Password,g as WithError,b as __namedExportsOrder,m as default};