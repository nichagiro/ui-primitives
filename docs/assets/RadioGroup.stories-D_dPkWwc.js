import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,t as n}from"./iframe-DU7P1u0I.js";function r({className:e,label:t,options:n,error:r,colorScheme:c=`primary`,orientation:l=`vertical`,isRequired:u,...d}){return(0,i.jsxs)(`fieldset`,{className:e,children:[(0,i.jsxs)(`legend`,{className:`mb-2 text-xs font-medium text-primary`,children:[t,u&&(0,i.jsx)(`span`,{className:`ml-0.5 text-danger`,children:`*`})]}),(0,i.jsx)(`div`,{className:l===`horizontal`?`flex flex-wrap gap-4`:`space-y-2`,children:n.map(e=>(0,i.jsxs)(`label`,{className:`flex cursor-pointer items-center gap-2 text-sm text-foreground`,children:[(0,i.jsxs)(`div`,{className:`relative h-4 w-4 shrink-0`,children:[(0,i.jsx)(`input`,{type:`radio`,value:e.value,disabled:d.disabled||e.disabled,className:`peer sr-only`,...d}),(0,i.jsx)(`div`,{className:[`flex h-4 w-4 items-center justify-center rounded-full`,r?`border border-danger peer-hover:border-danger`:`border border-border peer-hover:border-foreground/30`,`bg-card transition-all`,`peer-disabled:opacity-60`,`peer-focus-visible:ring-2`,r?`peer-focus-visible:ring-danger/30`:o[c],a[c]].join(` `)}),(0,i.jsx)(`div`,{className:[`pointer-events-none absolute inset-0 flex h-4 w-4 items-center justify-center`,`opacity-0 transition-opacity peer-checked:opacity-100`].join(` `),children:(0,i.jsx)(`div`,{className:`h-2 w-2 rounded-full `+s[c]})})]}),e.label]},e.value))}),r&&(0,i.jsx)(`p`,{className:`mt-1 text-xs text-danger`,role:`alert`,children:r})]})}var i,a,o,s,c=e((()=>{t(),i=n(),a={primary:`peer-checked:border-primary`,secondary:`peer-checked:border-secondary`,success:`peer-checked:border-success`,warning:`peer-checked:border-warning`,danger:`peer-checked:border-danger`,info:`peer-checked:border-info`},o={primary:`peer-focus-visible:ring-primary/30`,secondary:`peer-focus-visible:ring-secondary/30`,success:`peer-focus-visible:ring-success/30`,warning:`peer-focus-visible:ring-warning/30`,danger:`peer-focus-visible:ring-danger/30`,info:`peer-focus-visible:ring-info/30`},s={primary:`bg-primary`,secondary:`bg-secondary`,success:`bg-success`,warning:`bg-warning`,danger:`bg-danger`,info:`bg-info`},r.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{label:{required:!0,tsType:{name:`string`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  label: string\r
  value: string\r
  disabled?: boolean\r
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`RadioOption[]`},description:``},error:{required:!1,tsType:{name:`string`},description:``},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:``}}}})),l,u,d,f,p,m,h;e((()=>{c(),l=[{label:`Masculino`,value:`m`},{label:`Femenino`,value:`f`},{label:`Prefiero no decirlo`,value:`ns/nc`}],u={title:`Form/RadioGroup`,component:r,tags:[`autodocs`],argTypes:{label:{control:`text`},error:{control:`text`},orientation:{control:`select`,options:[`vertical`,`horizontal`]}}},d={args:{label:`Género`,options:l,orientation:`vertical`}},f={args:{label:`Género`,options:l,orientation:`horizontal`}},p={args:{label:`Género`,options:l,error:`Seleccioná un género`}},m={args:{label:`Género`,options:[{label:`Masculino`,value:`m`},{label:`Femenino`,value:`f`,disabled:!0}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    orientation: 'vertical'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    orientation: 'horizontal'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Género',
    options,
    error: 'Seleccioná un género'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Vertical`,`Horizontal`,`WithError`,`WithDisabledOption`]}))();export{f as Horizontal,d as Vertical,m as WithDisabledOption,p as WithError,h as __namedExportsOrder,u as default};