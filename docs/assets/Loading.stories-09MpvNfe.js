import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-o7jEyD7u.js";import{f as n,g as r}from"./Icons-S0XrGTpk.js";import{n as i,t as a}from"./cn-zQoGKVzp.js";import{d as o,n as s,v as c}from"./colorSchemes-CoEbpJHX.js";function l({colorScheme:e,size:t}){let{dot:n,gap:r}=m[t];return(0,f.jsx)(`span`,{className:`inline-flex items-center ${r}`,children:[0,1,2].map(t=>(0,f.jsx)(`span`,{className:`${n} block rounded-full ${_[e]} animate-bounce`,style:{animationDelay:`${t*.15}s`}},t))})}function u({colorScheme:e,size:t}){let{bar:n,height:r}=h[t];return(0,f.jsx)(`span`,{className:`inline-flex items-end gap-0.5`,children:[0,1,2].map(t=>(0,f.jsx)(`span`,{className:`${n} ${r} rounded-full ${_[e]} animate-pulse`,style:{animationDelay:`${t*.15}s`}},t))})}function d({variant:e=`spinner`,colorScheme:t=`primary`,size:r=`md`,className:i}){let o=a(`inline-flex items-center justify-center`,i);return(0,f.jsxs)(`div`,{className:o,role:`status`,"aria-label":`Loading`,children:[e===`spinner`&&(0,f.jsx)(n,{className:`${p[r]} ${g[t]}`}),e===`dots`&&(0,f.jsx)(l,{colorScheme:t,size:r}),e===`bars`&&(0,f.jsx)(u,{colorScheme:t,size:r})]})}var f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o(),i(),f=t(),p={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-10 w-10`},m={sm:{dot:`h-1 w-1`,gap:`gap-1`},md:{dot:`h-1.5 w-1.5`,gap:`gap-1.5`},lg:{dot:`h-2 w-2`,gap:`gap-2`}},h={sm:{bar:`w-0.5`,height:`h-3`},md:{bar:`w-1`,height:`h-4`},lg:{bar:`w-1.5`,height:`h-6`}},g=c(),_=s(),d.__docgenInfo={description:``,methods:[],displayName:`Loading`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'spinner' | 'dots' | 'bars'`,elements:[{name:`literal`,value:`'spinner'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'bars'`}]},description:``,defaultValue:{value:`'spinner'`,computed:!1}},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{v(),y=t(),b={title:`UI/Loading`,component:d,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`spinner`,`dots`,`bars`]},colorScheme:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`,`warning`,`info`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},x={args:{variant:`spinner`}},S={args:{variant:`dots`}},C={args:{variant:`bars`}},w={args:{size:`sm`}},T={args:{size:`lg`}},E={args:{colorScheme:`danger`}},D={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-8`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,y.jsx)(d,{variant:`spinner`,colorScheme:`primary`}),(0,y.jsx)(d,{variant:`spinner`,colorScheme:`secondary`}),(0,y.jsx)(d,{variant:`spinner`,colorScheme:`danger`}),(0,y.jsx)(d,{variant:`spinner`,colorScheme:`success`}),(0,y.jsx)(d,{variant:`spinner`,colorScheme:`warning`}),(0,y.jsx)(d,{variant:`spinner`,colorScheme:`info`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,y.jsx)(d,{variant:`dots`,colorScheme:`primary`}),(0,y.jsx)(d,{variant:`dots`,colorScheme:`secondary`}),(0,y.jsx)(d,{variant:`dots`,colorScheme:`danger`}),(0,y.jsx)(d,{variant:`dots`,colorScheme:`success`}),(0,y.jsx)(d,{variant:`dots`,colorScheme:`warning`}),(0,y.jsx)(d,{variant:`dots`,colorScheme:`info`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,y.jsx)(d,{variant:`bars`,colorScheme:`primary`}),(0,y.jsx)(d,{variant:`bars`,colorScheme:`secondary`}),(0,y.jsx)(d,{variant:`bars`,colorScheme:`danger`}),(0,y.jsx)(d,{variant:`bars`,colorScheme:`success`}),(0,y.jsx)(d,{variant:`bars`,colorScheme:`warning`}),(0,y.jsx)(d,{variant:`bars`,colorScheme:`info`})]})]})},O={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,y.jsx)(d,{variant:`spinner`,size:`sm`}),(0,y.jsx)(d,{variant:`spinner`,size:`md`}),(0,y.jsx)(d,{variant:`spinner`,size:`lg`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,y.jsx)(d,{variant:`dots`,size:`sm`}),(0,y.jsx)(d,{variant:`dots`,size:`md`}),(0,y.jsx)(d,{variant:`dots`,size:`lg`})]}),(0,y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,y.jsx)(d,{variant:`bars`,size:`sm`}),(0,y.jsx)(d,{variant:`bars`,size:`md`}),(0,y.jsx)(d,{variant:`bars`,size:`lg`})]})]})},k={render:()=>(0,y.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,y.jsx)(d,{variant:`spinner`,size:`lg`})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    colorScheme: 'danger'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 items-center justify-center">\r
      <Loading variant="spinner" size="lg" />\r
    </div>
}`,...k.parameters?.docs?.source}}},A=[`Spinner`,`Dots`,`Bars`,`Small`,`Large`,`Danger`,`AllVariants`,`AllSizes`,`FullPageLoading`]})))()}j();export{O as AllSizes,D as AllVariants,C as Bars,E as Danger,S as Dots,k as FullPageLoading,T as Large,w as Small,x as Spinner,A as __namedExportsOrder,b as default};