import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-BYukrN73.js";import{g as r,t as i}from"./Icons-DEBNYXPN.js";import{d as a,f as o,h as s,p as c,y as l}from"./colorSchemes-CoEbpJHX.js";import{n as u,t as d}from"./FormError-fbakqvHK.js";function f({className:e,label:t,error:n,variant:r=`checkbox`,colorScheme:a=`primary`,isRequired:o,ref:s,...c}){let l=(0,p.useId)(),u=c.id||l;return r===`switch`?(0,m.jsxs)(`div`,{className:e,children:[(0,m.jsxs)(`label`,{htmlFor:u,className:`inline-flex cursor-pointer items-center gap-3`,children:[(0,m.jsxs)(`div`,{className:`relative`,children:[(0,m.jsx)(`input`,{ref:s,type:`checkbox`,id:u,className:`peer sr-only`,...c}),(0,m.jsx)(`div`,{className:[`h-6 w-10 rounded-full bg-muted transition-colors`,v[a],n?`peer-focus-visible:ring-2 peer-focus-visible:ring-danger/30`:y[a],`after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-background after:shadow-sm after:transition-all peer-checked:after:translate-x-4`].join(` `)})]}),(0,m.jsxs)(`span`,{className:`text-sm text-foreground select-none`,children:[t,o&&(0,m.jsx)(`span`,{className:`ml-0.5 text-danger`,children:`*`})]})]}),(0,m.jsx)(d,{message:n})]}):(0,m.jsxs)(`div`,{className:e,children:[(0,m.jsxs)(`label`,{htmlFor:u,className:`flex cursor-pointer items-center gap-2 text-sm text-foreground`,children:[(0,m.jsxs)(`div`,{className:`relative h-4 w-4 shrink-0`,children:[(0,m.jsx)(`input`,{ref:s,type:`checkbox`,id:u,className:`peer sr-only`,...c}),(0,m.jsx)(`div`,{className:[`flex h-4 w-4 items-center justify-center rounded`,n?`border border-danger peer-hover:border-danger`:`border border-border peer-hover:border-foreground/30`,`bg-card transition-all`,`peer-disabled:opacity-60`,`peer-focus-visible:ring-2`,n?`peer-focus-visible:ring-danger/30`:g[a],h[a]].join(` `)}),(0,m.jsx)(i,{className:[`pointer-events-none absolute inset-0 h-4 w-4 p-0.5`,`opacity-0 transition-opacity peer-checked:opacity-100`,_[a]].join(` `)})]}),t,o&&(0,m.jsx)(`span`,{className:`ml-0.5 text-danger`,children:`*`})]}),(0,m.jsx)(d,{message:n})]})}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=t(),r(),a(),u(),m=n(),h=c(),g=s(),_=l(),v=o(),y=s(!0),f.__docgenInfo={description:``,methods:[],displayName:`Check`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'checkbox' | 'switch'`,elements:[{name:`literal`,value:`'checkbox'`},{name:`literal`,value:`'switch'`}]},description:``,defaultValue:{value:`'checkbox'`,computed:!1}}}}})))()}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{b(),x={title:`Form/Check`,component:f,tags:[`autodocs`],argTypes:{label:{control:`text`},error:{control:`text`},variant:{control:`select`,options:[`checkbox`,`switch`]},disabled:{control:`boolean`}}},S={args:{label:`Acepto términos y condiciones`}},C={args:{label:`Acepto términos`,error:`Debes aceptar los términos`}},w={args:{label:`Opción deshabilitada`,disabled:!0}},T={args:{label:`Notificaciones`,variant:`switch`}},E={args:{label:`Notificaciones`,variant:`switch`,error:`Error en la opción`}},D={args:{label:`Opción deshabilitada`,variant:`switch`,disabled:!0}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Acepto términos y condiciones'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Acepto términos',
    error: 'Debes aceptar los términos'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opción deshabilitada',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notificaciones',
    variant: 'switch'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notificaciones',
    variant: 'switch',
    error: 'Error en la opción'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opción deshabilitada',
    variant: 'switch',
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O=[`Checkbox`,`CheckboxWithError`,`CheckboxDisabled`,`Switch`,`SwitchWithError`,`SwitchDisabled`]})))()}k();export{S as Checkbox,w as CheckboxDisabled,C as CheckboxWithError,T as Switch,D as SwitchDisabled,E as SwitchWithError,O as __namedExportsOrder,x as default};