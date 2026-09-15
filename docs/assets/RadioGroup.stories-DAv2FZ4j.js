import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CDD3I0Bv.js";import{n,t as r}from"./FormError-Czfk3QH3.js";var i,a,o;function s(){return(s=e((()=>{i={primary:`peer-checked:border-primary`,secondary:`peer-checked:border-secondary`,success:`peer-checked:border-success`,warning:`peer-checked:border-warning`,danger:`peer-checked:border-danger`,info:`peer-checked:border-info`},a={primary:`peer-focus-visible:ring-primary/30`,secondary:`peer-focus-visible:ring-secondary/30`,success:`peer-focus-visible:ring-success/30`,warning:`peer-focus-visible:ring-warning/30`,danger:`peer-focus-visible:ring-danger/30`,info:`peer-focus-visible:ring-info/30`},o={primary:`bg-primary`,secondary:`bg-secondary`,success:`bg-success`,warning:`bg-warning`,danger:`bg-danger`,info:`bg-info`}})))()}function c({className:e,label:t,options:r,error:s,colorScheme:c=`primary`,orientation:u=`vertical`,isRequired:d,...f}){return(0,l.jsxs)(`fieldset`,{className:e,children:[(0,l.jsxs)(`legend`,{className:`mb-2 text-xs font-medium text-primary`,children:[t,d&&(0,l.jsx)(`span`,{className:`ml-0.5 text-danger`,children:`*`})]}),(0,l.jsx)(`div`,{className:u===`horizontal`?`flex flex-wrap gap-4`:`space-y-2`,children:r.map(e=>(0,l.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 text-sm text-foreground`,children:[(0,l.jsxs)(`div`,{className:`relative h-4 w-4 shrink-0`,children:[(0,l.jsx)(`input`,{type:`radio`,value:e.value,disabled:f.disabled||e.disabled,className:`peer sr-only`,...f}),(0,l.jsx)(`div`,{className:[`flex h-4 w-4 items-center justify-center rounded-full`,s?`border border-danger peer-hover:border-danger`:`border border-border peer-hover:border-foreground/30`,`bg-card transition-all`,`peer-disabled:opacity-60`,`peer-focus-visible:ring-2`,s?`peer-focus-visible:ring-danger/30`:a[c],i[c]].join(` `)}),(0,l.jsx)(`div`,{className:[`pointer-events-none absolute inset-0 flex h-4 w-4 items-center justify-center`,`opacity-0 transition-opacity peer-checked:opacity-100`].join(` `),children:(0,l.jsx)(`div`,{className:`h-2 w-2 rounded-full `+o[c]})})]}),e.label]},e.value))}),(0,l.jsx)(n,{message:s,className:`ps-0`})]})}var l;function u(){return(u=e((()=>{r(),s(),l=t(),c.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{label:{required:!0,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string
  value: string
  disabled?: boolean
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`RadioOption[]`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}}}}})))()}function d(){return(d=e((()=>{u()})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{d(),f=[{label:`Masculino`,value:`m`},{label:`Femenino`,value:`f`},{label:`Prefiero no decirlo`,value:`ns/nc`}],p={title:`Form/RadioGroup`,component:c,tags:[`autodocs`],argTypes:{label:{control:`text`},error:{control:`text`},orientation:{control:`select`,options:[`vertical`,`horizontal`]}}},m={args:{label:`Género`,options:f,orientation:`vertical`}},h={args:{label:`Género`,options:f,orientation:`horizontal`}},g={args:{label:`Género`,options:f,error:`Seleccioná un género`}},_={args:{label:`Género`,options:[{label:`Masculino`,value:`m`},{label:`Femenino`,value:`f`,disabled:!0}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    orientation: 'vertical'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    orientation: 'horizontal'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    error: 'Seleccioná un género'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Vertical`,`Horizontal`,`WithError`,`WithDisabledOption`]})))()}y();export{h as Horizontal,m as Vertical,_ as WithDisabledOption,g as WithError,v as __namedExportsOrder,p as default};