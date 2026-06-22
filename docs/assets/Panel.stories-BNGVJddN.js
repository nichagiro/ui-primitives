import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./iframe-DKq0ZWMQ.js";function n({variant:e=`default`,title:t,children:n,footer:o,className:s}){return(0,r.jsxs)(`div`,{className:[`rounded-lg border bg-card shadow-sm`,i[e],s??``].join(` `),children:[t&&(0,r.jsx)(`div`,{className:`px-4 pt-3 pb-2 text-sm font-medium `+a[e],children:t}),(0,r.jsx)(`div`,{className:`px-4 py-3`,children:n}),o&&(0,r.jsx)(`div`,{className:`border-t border-border px-4 py-3 text-sm text-muted-foreground`,children:o})]})}var r,i,a,o=e((()=>{r=t(),i={default:`border-border`,primary:`border-primary`,success:`border-success`,warning:`border-warning`,danger:`border-danger`},a={default:`text-foreground`,primary:`text-primary`,success:`text-success`,warning:`text-warning`,danger:`text-danger`},n.__docgenInfo={description:``,methods:[],displayName:`Panel`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l,u,d,f,p,m,h,g,_;e((()=>{o(),s=t(),c={title:`UI/Panel`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`primary`,`success`,`warning`,`danger`]},title:{control:`text`},footer:{control:`text`},children:{control:`text`}}},l={args:{children:`Contenido del panel`}},u={args:{title:`Título`,children:`Contenido del panel`}},d={args:{title:`Título`,children:`Contenido del panel`,footer:`Footer del panel`}},f={args:{title:`Primary`,children:`Contenido del panel`,variant:`primary`}},p={args:{title:`Success`,children:`Contenido del panel`,variant:`success`}},m={args:{title:`Warning`,children:`Contenido del panel`,variant:`warning`}},h={args:{title:`Danger`,children:`Contenido del panel`,variant:`danger`}},g={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,s.jsx)(n,{title:`Default`,children:`Contenido`}),(0,s.jsx)(n,{title:`Primary`,variant:`primary`,children:`Contenido`}),(0,s.jsx)(n,{title:`Success`,variant:`success`,children:`Contenido`}),(0,s.jsx)(n,{title:`Warning`,variant:`warning`,children:`Contenido`}),(0,s.jsx)(n,{title:`Danger`,variant:`danger`,children:`Contenido`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Contenido del panel'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Título',
    children: 'Contenido del panel'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Título',
    children: 'Contenido del panel',
    footer: 'Footer del panel'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Primary',
    children: 'Contenido del panel',
    variant: 'primary'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success',
    children: 'Contenido del panel',
    variant: 'success'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    children: 'Contenido del panel',
    variant: 'warning'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Danger',
    children: 'Contenido del panel',
    variant: 'danger'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <Panel title="Default">Contenido</Panel>\r
      <Panel title="Primary" variant="primary">Contenido</Panel>\r
      <Panel title="Success" variant="success">Contenido</Panel>\r
      <Panel title="Warning" variant="warning">Contenido</Panel>\r
      <Panel title="Danger" variant="danger">Contenido</Panel>\r
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithTitle`,`WithTitleAndFooter`,`Primary`,`Success`,`Warning`,`Danger`,`AllVariants`]}))();export{g as AllVariants,h as Danger,l as Default,f as Primary,p as Success,m as Warning,u as WithTitle,d as WithTitleAndFooter,_ as __namedExportsOrder,c as default};