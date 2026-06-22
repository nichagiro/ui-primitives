import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-Cite5768.js";import{n as i,p as a}from"./Icons-Btyb2xif.js";function o({colorScheme:e,title:t,children:n,className:r}){let[a,o]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:[`rounded-lg border border-border bg-card shadow-sm overflow-hidden`,r??``].join(` `),children:[t&&(0,c.jsxs)(`button`,{type:`button`,onClick:()=>o(!a),className:[`flex w-full items-center justify-between px-4 pt-3 pb-2 text-sm font-medium text-left`,e?l[e]+` `+u[e]:`text-foreground`].join(` `),children:[t,(0,c.jsx)(i,{className:[`h-4 w-4 shrink-0 transition-transform duration-200`,a?`-rotate-90`:``].join(` `)})]}),(0,c.jsx)(`div`,{className:[`grid transition-[grid-template-rows] duration-200`,a?`grid-rows-[0fr]`:`grid-rows-[1fr]`].join(` `),children:(0,c.jsx)(`div`,{className:`overflow-hidden`,children:(0,c.jsx)(`div`,{className:`px-4 py-3`,children:n})})})]})}var s,c,l,u,d=e((()=>{s=t(n(),1),a(),c=r(),l={primary:`bg-primary/10`,secondary:`bg-secondary/10`,success:`bg-success/10`,warning:`bg-warning/10`,danger:`bg-danger/10`,info:`bg-info/10`},u={primary:`text-primary`,secondary:`text-secondary`,success:`text-success`,warning:`text-warning`,danger:`text-danger`,info:`text-info`},o.__docgenInfo={description:``,methods:[],displayName:`Panel`,props:{colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{d(),f=r(),p={title:`UI/Panel`,component:o,tags:[`autodocs`],argTypes:{colorScheme:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`]},title:{control:`text`},children:{control:`text`}}},m={args:{children:`Contenido del panel`}},h={args:{title:`Título`,children:`Contenido del panel`}},g={args:{title:`Primary`,children:`Contenido del panel`,colorScheme:`primary`}},_={args:{title:`Success`,children:`Contenido del panel`,colorScheme:`success`}},v={args:{title:`Warning`,children:`Contenido del panel`,colorScheme:`warning`}},y={args:{title:`Danger`,children:`Contenido del panel`,colorScheme:`danger`}},b={args:{title:`Info`,children:`Contenido del panel`,colorScheme:`info`}},x={args:{title:`Secondary`,children:`Contenido del panel`,colorScheme:`secondary`}},S={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsx)(o,{title:`Default`,children:`Contenido`}),(0,f.jsx)(o,{title:`Primary`,colorScheme:`primary`,children:`Contenido`}),(0,f.jsx)(o,{title:`Secondary`,colorScheme:`secondary`,children:`Contenido`}),(0,f.jsx)(o,{title:`Success`,colorScheme:`success`,children:`Contenido`}),(0,f.jsx)(o,{title:`Warning`,colorScheme:`warning`,children:`Contenido`}),(0,f.jsx)(o,{title:`Danger`,colorScheme:`danger`,children:`Contenido`}),(0,f.jsx)(o,{title:`Info`,colorScheme:`info`,children:`Contenido`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Contenido del panel'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Título',
    children: 'Contenido del panel'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Primary',
    children: 'Contenido del panel',
    colorScheme: 'primary'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success',
    children: 'Contenido del panel',
    colorScheme: 'success'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    children: 'Contenido del panel',
    colorScheme: 'warning'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Danger',
    children: 'Contenido del panel',
    colorScheme: 'danger'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Info',
    children: 'Contenido del panel',
    colorScheme: 'info'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Secondary',
    children: 'Contenido del panel',
    colorScheme: 'secondary'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Panel title="Default">Contenido</Panel>\r
      <Panel title="Primary" colorScheme="primary">Contenido</Panel>\r
      <Panel title="Secondary" colorScheme="secondary">Contenido</Panel>\r
      <Panel title="Success" colorScheme="success">Contenido</Panel>\r
      <Panel title="Warning" colorScheme="warning">Contenido</Panel>\r
      <Panel title="Danger" colorScheme="danger">Contenido</Panel>\r
      <Panel title="Info" colorScheme="info">Contenido</Panel>\r
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithTitle`,`Primary`,`Success`,`Warning`,`Danger`,`Info`,`Secondary`,`AllColorSchemes`]}))();export{S as AllColorSchemes,y as Danger,m as Default,b as Info,g as Primary,x as Secondary,_ as Success,v as Warning,h as WithTitle,C as __namedExportsOrder,p as default};