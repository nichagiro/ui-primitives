import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CDD3I0Bv.js";import{n,t as r}from"./cn-BYIVTXtt.js";import{f as i,g as a}from"./Icons-tzRqAsr1.js";function o({colorScheme:e,size:t}){let{dot:n,gap:r}=d[t];return(0,l.jsx)(`span`,{className:`inline-flex items-center ${r}`,children:[0,1,2].map(t=>(0,l.jsx)(`span`,{className:`${n} block rounded-full ${m[e]} animate-bounce`,style:{animationDelay:`${t*.15}s`}},t))})}function s({colorScheme:e,size:t}){let{bar:n,height:r}=f[t];return(0,l.jsx)(`span`,{className:`inline-flex items-end gap-0.5`,children:[0,1,2].map(t=>(0,l.jsx)(`span`,{className:`${n} ${r} rounded-full ${m[e]} animate-pulse`,style:{animationDelay:`${t*.15}s`}},t))})}function c({variant:e=`spinner`,colorScheme:t=`primary`,size:n=`md`,className:a}){let c=r(`inline-flex items-center justify-center`,a);return(0,l.jsxs)(`div`,{className:c,role:`status`,"aria-label":`Loading`,children:[e===`spinner`&&(0,l.jsx)(i,{className:`${u[n]} ${p[t]}`}),e===`dots`&&(0,l.jsx)(o,{colorScheme:t,size:n}),e===`bars`&&(0,l.jsx)(s,{colorScheme:t,size:n})]})}var l,u,d,f,p,m;function h(){return(h=e((()=>{a(),n(),l=t(),u={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-10 w-10`},d={sm:{dot:`h-1 w-1`,gap:`gap-1`},md:{dot:`h-1.5 w-1.5`,gap:`gap-1.5`},lg:{dot:`h-2 w-2`,gap:`gap-2`}},f={sm:{bar:`w-0.5`,height:`h-3`},md:{bar:`w-1`,height:`h-4`},lg:{bar:`w-1.5`,height:`h-6`}},p={primary:`text-primary`,secondary:`text-secondary`,success:`text-success`,warning:`text-warning`,danger:`text-danger`,info:`text-info`},m={primary:`bg-primary`,secondary:`bg-secondary`,success:`bg-success`,warning:`bg-warning`,danger:`bg-danger`,info:`bg-info`},c.__docgenInfo={description:``,methods:[],displayName:`Loading`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'spinner' | 'dots' | 'bars'`,elements:[{name:`literal`,value:`'spinner'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'bars'`}]},description:``,defaultValue:{value:`'spinner'`,computed:!1}},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{h(),g=t(),_={title:`UI/Loading`,component:c,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`spinner`,`dots`,`bars`]},colorScheme:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`,`warning`,`info`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},v={args:{variant:`spinner`}},y={args:{variant:`dots`}},b={args:{variant:`bars`}},x={args:{size:`sm`}},S={args:{size:`lg`}},C={args:{colorScheme:`danger`}},w={render:()=>(0,g.jsxs)(`div`,{className:`flex flex-col items-center gap-8`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,g.jsx)(c,{variant:`spinner`,colorScheme:`primary`}),(0,g.jsx)(c,{variant:`spinner`,colorScheme:`secondary`}),(0,g.jsx)(c,{variant:`spinner`,colorScheme:`danger`}),(0,g.jsx)(c,{variant:`spinner`,colorScheme:`success`}),(0,g.jsx)(c,{variant:`spinner`,colorScheme:`warning`}),(0,g.jsx)(c,{variant:`spinner`,colorScheme:`info`})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,g.jsx)(c,{variant:`dots`,colorScheme:`primary`}),(0,g.jsx)(c,{variant:`dots`,colorScheme:`secondary`}),(0,g.jsx)(c,{variant:`dots`,colorScheme:`danger`}),(0,g.jsx)(c,{variant:`dots`,colorScheme:`success`}),(0,g.jsx)(c,{variant:`dots`,colorScheme:`warning`}),(0,g.jsx)(c,{variant:`dots`,colorScheme:`info`})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,g.jsx)(c,{variant:`bars`,colorScheme:`primary`}),(0,g.jsx)(c,{variant:`bars`,colorScheme:`secondary`}),(0,g.jsx)(c,{variant:`bars`,colorScheme:`danger`}),(0,g.jsx)(c,{variant:`bars`,colorScheme:`success`}),(0,g.jsx)(c,{variant:`bars`,colorScheme:`warning`}),(0,g.jsx)(c,{variant:`bars`,colorScheme:`info`})]})]})},T={render:()=>(0,g.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,g.jsx)(c,{variant:`spinner`,size:`sm`}),(0,g.jsx)(c,{variant:`spinner`,size:`md`}),(0,g.jsx)(c,{variant:`spinner`,size:`lg`})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,g.jsx)(c,{variant:`dots`,size:`sm`}),(0,g.jsx)(c,{variant:`dots`,size:`md`}),(0,g.jsx)(c,{variant:`dots`,size:`lg`})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,g.jsx)(c,{variant:`bars`,size:`sm`}),(0,g.jsx)(c,{variant:`bars`,size:`md`}),(0,g.jsx)(c,{variant:`bars`,size:`lg`})]})]})},E={render:()=>(0,g.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,g.jsx)(c,{variant:`spinner`,size:`lg`})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    colorScheme: 'danger'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-8">\r
      <div className="flex items-center gap-6">\r
        <Loading variant="spinner" colorScheme="primary" />\r
        <Loading variant="spinner" colorScheme="secondary" />\r
        <Loading variant="spinner" colorScheme="danger" />\r
        <Loading variant="spinner" colorScheme="success" />\r
        <Loading variant="spinner" colorScheme="warning" />\r
        <Loading variant="spinner" colorScheme="info" />\r
      </div>\r
      <div className="flex items-center gap-6">\r
        <Loading variant="dots" colorScheme="primary" />\r
        <Loading variant="dots" colorScheme="secondary" />\r
        <Loading variant="dots" colorScheme="danger" />\r
        <Loading variant="dots" colorScheme="success" />\r
        <Loading variant="dots" colorScheme="warning" />\r
        <Loading variant="dots" colorScheme="info" />\r
      </div>\r
      <div className="flex items-center gap-6">\r
        <Loading variant="bars" colorScheme="primary" />\r
        <Loading variant="bars" colorScheme="secondary" />\r
        <Loading variant="bars" colorScheme="danger" />\r
        <Loading variant="bars" colorScheme="success" />\r
        <Loading variant="bars" colorScheme="warning" />\r
        <Loading variant="bars" colorScheme="info" />\r
      </div>\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-6">\r
      <div className="flex items-center gap-6">\r
        <Loading variant="spinner" size="sm" />\r
        <Loading variant="spinner" size="md" />\r
        <Loading variant="spinner" size="lg" />\r
      </div>\r
      <div className="flex items-center gap-6">\r
        <Loading variant="dots" size="sm" />\r
        <Loading variant="dots" size="md" />\r
        <Loading variant="dots" size="lg" />\r
      </div>\r
      <div className="flex items-center gap-6">\r
        <Loading variant="bars" size="sm" />\r
        <Loading variant="bars" size="md" />\r
        <Loading variant="bars" size="lg" />\r
      </div>\r
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 items-center justify-center">\r
      <Loading variant="spinner" size="lg" />\r
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Spinner`,`Dots`,`Bars`,`Small`,`Large`,`Danger`,`AllVariants`,`AllSizes`,`FullPageLoading`]})))()}O();export{T as AllSizes,w as AllVariants,b as Bars,C as Danger,y as Dots,E as FullPageLoading,S as Large,x as Small,v as Spinner,D as __namedExportsOrder,_ as default};