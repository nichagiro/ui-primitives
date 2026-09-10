import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-BYukrN73.js";import{n as r,t as i}from"./FieldWrapper-hI3kBUXC.js";function a({className:e,label:t,error:n,colorScheme:r,isRequired:a,ref:l,...u}){let d=(0,o.useId)(),f=u.id||d;return(0,s.jsx)(i,{label:t,error:n,colorScheme:r,htmlFor:f,isRequired:a,children:(0,s.jsx)(`input`,{ref:l,id:f,className:e?c+` `+e:c,...u})})}var o,s,c;function l(){return(l=e((()=>{o=t(),r(),s=n(),c=[`block w-full bg-transparent text-sm text-foreground outline-none`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),a.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``}}}})))()}var u,d,f,p,m,h,g;function _(){return(_=e((()=>{l(),u={title:`Form/Input`,component:a,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},disabled:{control:`boolean`},type:{control:`select`,options:[`text`,`email`,`password`,`date`,`time`,`number`]}}},d={args:{label:`Nombre`,placeholder:`Tu nombre`}},f={args:{label:`Email`,type:`email`,error:`Email inválido`,defaultValue:`mal@`}},p={args:{label:`Usuario`,disabled:!0,defaultValue:`juanperez`}},m={args:{label:`Fecha de nacimiento`,type:`date`}},h={args:{label:`Contraseña`,type:`password`,placeholder:`********`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Tu nombre'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email inválido',
    defaultValue: 'mal@'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    disabled: true,
    defaultValue: 'juanperez'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fecha de nacimiento',
    type: 'date'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: '********'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithError`,`Disabled`,`DateInput`,`Password`]})))()}_();export{m as DateInput,d as Default,p as Disabled,h as Password,f as WithError,g as __namedExportsOrder,u as default};