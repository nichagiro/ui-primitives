import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-DKq0ZWMQ.js";import{n as i,t as a}from"./FieldWrapper-DZIw5Ai2.js";function o({className:e,label:t,required:n,error:r,colorScheme:i,ref:o,...u}){let d=(0,s.useId)(),f=u.id||d;return(0,c.jsx)(a,{label:t,required:n,error:r,colorScheme:i,htmlFor:f,children:(0,c.jsx)(`input`,{ref:o,id:f,className:e?l+` `+e:l,...u})})}var s,c,l,u=e((()=>{s=t(n(),1),i(),c=r(),l=[`block w-full bg-transparent text-sm text-foreground outline-none`,`placeholder:text-muted-foreground`,`disabled:cursor-not-allowed`,`pb-2`].join(` `),o.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},label:{required:!0,tsType:{name:`string`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``}}}})),d,f,p,m,h,g,_,v;e((()=>{u(),d={title:`Form/Input`,component:o,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},error:{control:`text`},required:{control:`boolean`},disabled:{control:`boolean`},type:{control:`select`,options:[`text`,`email`,`password`,`date`,`time`,`number`]}}},f={args:{label:`Nombre`,placeholder:`Tu nombre`}},p={args:{label:`Email`,type:`email`,error:`Email inválido`,defaultValue:`mal@`}},m={args:{label:`Teléfono`,required:!0,placeholder:`+54 11 1234-5678`}},h={args:{label:`Usuario`,disabled:!0,defaultValue:`juanperez`}},g={args:{label:`Fecha de nacimiento`,type:`date`}},_={args:{label:`Contraseña`,type:`password`,placeholder:`********`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    label: 'Teléfono',
    required: true,
    placeholder: '+54 11 1234-5678'
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithError`,`Required`,`Disabled`,`DateInput`,`Password`]}))();export{g as DateInput,f as Default,h as Disabled,_ as Password,m as Required,p as WithError,v as __namedExportsOrder,d as default};