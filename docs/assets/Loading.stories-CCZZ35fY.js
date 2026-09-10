import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BYukrN73.js";import{f as n,g as r}from"./Icons-DEBNYXPN.js";import{d as i,n as a,v as o}from"./colorSchemes-CoEbpJHX.js";function s({colorScheme:e,size:t}){let{dot:n,gap:r}=f[t];return(0,u.jsx)(`span`,{className:`inline-flex items-center ${r}`,children:[0,1,2].map(t=>(0,u.jsx)(`span`,{className:`${n} block rounded-full ${h[e]} animate-bounce`,style:{animationDelay:`${t*.15}s`}},t))})}function c({colorScheme:e,size:t}){let{bar:n,height:r}=p[t];return(0,u.jsx)(`span`,{className:`inline-flex items-end gap-0.5`,children:[0,1,2].map(t=>(0,u.jsx)(`span`,{className:`${n} ${r} rounded-full ${h[e]} animate-pulse`,style:{animationDelay:`${t*.15}s`}},t))})}function l({variant:e=`spinner`,colorScheme:t=`primary`,size:r=`md`,className:i}){let a=`inline-flex items-center justify-center ${i??``}`;return(0,u.jsxs)(`div`,{className:a,role:`status`,"aria-label":`Loading`,children:[e===`spinner`&&(0,u.jsx)(n,{className:`${d[r]} ${m[t]}`}),e===`dots`&&(0,u.jsx)(s,{colorScheme:t,size:r}),e===`bars`&&(0,u.jsx)(c,{colorScheme:t,size:r})]})}var u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),u=t(),d={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-10 w-10`},f={sm:{dot:`h-1 w-1`,gap:`gap-1`},md:{dot:`h-1.5 w-1.5`,gap:`gap-1.5`},lg:{dot:`h-2 w-2`,gap:`gap-2`}},p={sm:{bar:`w-0.5`,height:`h-3`},md:{bar:`w-1`,height:`h-4`},lg:{bar:`w-1.5`,height:`h-6`}},m=o(),h=a(),l.__docgenInfo={description:``,methods:[],displayName:`Loading`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'spinner' | 'dots' | 'bars'`,elements:[{name:`literal`,value:`'spinner'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'bars'`}]},description:``,defaultValue:{value:`'spinner'`,computed:!1}},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{g(),_=t(),v={title:`UI/Loading`,component:l,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`spinner`,`dots`,`bars`]},colorScheme:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`,`warning`,`info`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},y={args:{variant:`spinner`}},b={args:{variant:`dots`}},x={args:{variant:`bars`}},S={args:{size:`sm`}},C={args:{size:`lg`}},w={args:{colorScheme:`danger`}},T={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-col items-center gap-8`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,_.jsx)(l,{variant:`spinner`,colorScheme:`primary`}),(0,_.jsx)(l,{variant:`spinner`,colorScheme:`secondary`}),(0,_.jsx)(l,{variant:`spinner`,colorScheme:`danger`}),(0,_.jsx)(l,{variant:`spinner`,colorScheme:`success`}),(0,_.jsx)(l,{variant:`spinner`,colorScheme:`warning`}),(0,_.jsx)(l,{variant:`spinner`,colorScheme:`info`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,_.jsx)(l,{variant:`dots`,colorScheme:`primary`}),(0,_.jsx)(l,{variant:`dots`,colorScheme:`secondary`}),(0,_.jsx)(l,{variant:`dots`,colorScheme:`danger`}),(0,_.jsx)(l,{variant:`dots`,colorScheme:`success`}),(0,_.jsx)(l,{variant:`dots`,colorScheme:`warning`}),(0,_.jsx)(l,{variant:`dots`,colorScheme:`info`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,_.jsx)(l,{variant:`bars`,colorScheme:`primary`}),(0,_.jsx)(l,{variant:`bars`,colorScheme:`secondary`}),(0,_.jsx)(l,{variant:`bars`,colorScheme:`danger`}),(0,_.jsx)(l,{variant:`bars`,colorScheme:`success`}),(0,_.jsx)(l,{variant:`bars`,colorScheme:`warning`}),(0,_.jsx)(l,{variant:`bars`,colorScheme:`info`})]})]})},E={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,_.jsx)(l,{variant:`spinner`,size:`sm`}),(0,_.jsx)(l,{variant:`spinner`,size:`md`}),(0,_.jsx)(l,{variant:`spinner`,size:`lg`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,_.jsx)(l,{variant:`dots`,size:`sm`}),(0,_.jsx)(l,{variant:`dots`,size:`md`}),(0,_.jsx)(l,{variant:`dots`,size:`lg`})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,_.jsx)(l,{variant:`bars`,size:`sm`}),(0,_.jsx)(l,{variant:`bars`,size:`md`}),(0,_.jsx)(l,{variant:`bars`,size:`lg`})]})]})},D={render:()=>(0,_.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,_.jsx)(l,{variant:`spinner`,size:`lg`})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    colorScheme: 'danger'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 items-center justify-center">\r
      <Loading variant="spinner" size="lg" />\r
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Spinner`,`Dots`,`Bars`,`Small`,`Large`,`Danger`,`AllVariants`,`AllSizes`,`FullPageLoading`]})))()}k();export{E as AllSizes,T as AllVariants,x as Bars,w as Danger,b as Dots,D as FullPageLoading,C as Large,S as Small,y as Spinner,O as __namedExportsOrder,v as default};