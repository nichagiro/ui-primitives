import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-o7jEyD7u.js";import{d as n,h as r,m as i,n as a}from"./colorSchemes-CoEbpJHX.js";import{n as o,t as s}from"./FormError-CrHl--Rk.js";function c({className:e,label:t,options:n,error:r,colorScheme:i=`primary`,orientation:a=`vertical`,isRequired:o,...c}){return(0,l.jsxs)(`fieldset`,{className:e,children:[(0,l.jsxs)(`legend`,{className:`mb-2 text-xs font-medium text-primary`,children:[t,o&&(0,l.jsx)(`span`,{className:`ml-0.5 text-danger`,children:`*`})]}),(0,l.jsx)(`div`,{className:a===`horizontal`?`flex flex-wrap gap-4`:`space-y-2`,children:n.map(e=>(0,l.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 text-sm text-foreground`,children:[(0,l.jsxs)(`div`,{className:`relative h-4 w-4 shrink-0`,children:[(0,l.jsx)(`input`,{type:`radio`,value:e.value,disabled:c.disabled||e.disabled,className:`peer sr-only`,...c}),(0,l.jsx)(`div`,{className:[`flex h-4 w-4 items-center justify-center rounded-full`,r?`border border-danger peer-hover:border-danger`:`border border-border peer-hover:border-foreground/30`,`bg-card transition-all`,`peer-disabled:opacity-60`,`peer-focus-visible:ring-2`,r?`peer-focus-visible:ring-danger/30`:d[i],u[i]].join(` `)}),(0,l.jsx)(`div`,{className:[`pointer-events-none absolute inset-0 flex h-4 w-4 items-center justify-center`,`opacity-0 transition-opacity peer-checked:opacity-100`].join(` `),children:(0,l.jsx)(`div`,{className:`h-2 w-2 rounded-full `+f[i]})})]}),e.label]},e.value))}),(0,l.jsx)(s,{message:r,className:`ps-0`})]})}var l,u,d,f;function p(){return(p=e((()=>{n(),o(),l=t(),u=i(),d=r(),f=a(),c.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  value: string
  disabled?: boolean
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`RadioOption[]`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}}}}})))()}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{p(),m=[{label:`Masculino`,value:`m`},{label:`Femenino`,value:`f`},{label:`Prefiero no decirlo`,value:`ns/nc`}],h={title:`Form/RadioGroup`,component:c,tags:[`autodocs`],argTypes:{label:{control:`text`},error:{control:`text`},orientation:{control:`select`,options:[`vertical`,`horizontal`]}}},g={args:{label:`Género`,options:m,orientation:`vertical`}},_={args:{label:`Género`,options:m,orientation:`horizontal`}},v={args:{label:`Género`,options:m,error:`Seleccioná un género`}},y={args:{label:`Género`,options:[{label:`Masculino`,value:`m`},{label:`Femenino`,value:`f`,disabled:!0}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    orientation: 'vertical'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    orientation: 'horizontal'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    error: 'Seleccioná un género'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options: [{
      label: 'Masculino',
      value: 'm'
    }, {
      label: 'Femenino',
      value: 'f',
      disabled: true
    }]
  }
}`,...y.parameters?.docs?.source}}},b=[`Vertical`,`Horizontal`,`WithError`,`WithDisabledOption`]})))()}x();export{_ as Horizontal,g as Vertical,y as WithDisabledOption,v as WithError,b as __namedExportsOrder,h as default};