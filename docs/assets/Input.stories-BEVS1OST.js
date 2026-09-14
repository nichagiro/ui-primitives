import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-o7jEyD7u.js";import{n as r,t as i}from"./cn-zQoGKVzp.js";import{n as a,t as o}from"./FieldWrapper-BUKIyNcT.js";function s({className:e,label:t,error:n,colorScheme:r,isRequired:a,ref:s,...d}){let f=(0,c.useId)(),p=d.id||f;return(0,l.jsx)(o,{label:t,error:n,colorScheme:r,htmlFor:p,isRequired:a,children:(0,l.jsx)(`input`,{ref:s,id:p,className:i(u,e),...d})})}var c,l,u;function d(){return(d=e((()=>{c=t(),a(),r(),l=n(),u=[`block w-full bg-transparent text-sm text-foreground outline-none`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),s.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``}}}})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{d(),f={title:`Form/Input`,component:s,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},disabled:{control:`boolean`},type:{control:`select`,options:[`text`,`email`,`password`,`date`,`time`,`number`]}}},p={args:{label:`Nombre`,placeholder:`Tu nombre`}},m={args:{label:`Email`,type:`email`,error:`Email inválido`,defaultValue:`mal@`}},h={args:{label:`Usuario`,disabled:!0,defaultValue:`juanperez`}},g={args:{label:`Fecha de nacimiento`,type:`date`}},_={args:{label:`Contraseña`,type:`password`,placeholder:`********`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Tu nombre'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email inválido',
    defaultValue: 'mal@'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    disabled: true,
    defaultValue: 'juanperez'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fecha de nacimiento',
    type: 'date'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: '********'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithError`,`Disabled`,`DateInput`,`Password`]})))()}y();export{g as DateInput,p as Default,h as Disabled,_ as Password,m as WithError,v as __namedExportsOrder,f as default};