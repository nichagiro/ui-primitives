import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CnUOG2pE.js";import{n as i,t as a}from"./FieldWrapper-D8WU9jfn.js";function o({className:e,label:t,error:n,colorScheme:r,isRequired:i,ref:o,...u}){let d=(0,s.useId)(),f=u.id||d;return(0,c.jsx)(a,{label:t,error:n,colorScheme:r,htmlFor:f,isRequired:i,children:(0,c.jsx)(`input`,{ref:o,id:f,className:e?l+` `+e:l,...u})})}var s,c,l,u=e((()=>{s=t(n(),1),i(),c=r(),l=[`block w-full bg-transparent text-sm text-foreground outline-none`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),o.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},isRequired:{required:!1,tsType:{name:`boolean`},description:``}}}})),d,f,p,m,h,g,_;e((()=>{u(),d={title:`Form/Input`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},disabled:{control:`boolean`},type:{control:`select`,options:[`text`,`email`,`password`,`date`,`time`,`number`]}}},f={args:{label:`Nombre`,placeholder:`Tu nombre`}},p={args:{label:`Email`,type:`email`,error:`Email inválido`,defaultValue:`mal@`}},m={args:{label:`Usuario`,disabled:!0,defaultValue:`juanperez`}},h={args:{label:`Fecha de nacimiento`,type:`date`}},g={args:{label:`Contraseña`,type:`password`,placeholder:`********`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Tu nombre'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email inválido',
    defaultValue: 'mal@'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    disabled: true,
    defaultValue: 'juanperez'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fecha de nacimiento',
    type: 'date'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    type: 'password',
    placeholder: '********'
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithError`,`Disabled`,`DateInput`,`Password`]}))();export{h as DateInput,f as Default,m as Disabled,g as Password,p as WithError,_ as __namedExportsOrder,d as default};