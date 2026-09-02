import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DocQHzAp.js";import{d as n,m as r}from"./Icons-D8RvHZoD.js";function i({colorScheme:e,size:t}){let{dot:n,gap:r}=l[t];return(0,s.jsx)(`span`,{className:`inline-flex items-center ${r}`,children:[0,1,2].map(t=>(0,s.jsx)(`span`,{className:`${n} block rounded-full ${f[e]} animate-bounce`,style:{animationDelay:`${t*.15}s`}},t))})}function a({colorScheme:e,size:t}){let{bar:n,height:r}=u[t];return(0,s.jsx)(`span`,{className:`inline-flex items-end gap-0.5`,children:[0,1,2].map(t=>(0,s.jsx)(`span`,{className:`${n} ${r} rounded-full ${f[e]} animate-pulse`,style:{animationDelay:`${t*.15}s`}},t))})}function o({variant:e=`spinner`,colorScheme:t=`primary`,size:r=`md`,className:o}){let l=`inline-flex items-center justify-center ${o??``}`;return(0,s.jsxs)(`div`,{className:l,role:`status`,"aria-label":`Loading`,children:[e===`spinner`&&(0,s.jsx)(n,{className:`${c[r]} ${d[t]}`}),e===`dots`&&(0,s.jsx)(i,{colorScheme:t,size:r}),e===`bars`&&(0,s.jsx)(a,{colorScheme:t,size:r})]})}var s,c,l,u,d,f;function p(){return(p=e((()=>{r(),s=t(),c={sm:`h-4 w-4`,md:`h-6 w-6`,lg:`h-10 w-10`},l={sm:{dot:`h-1 w-1`,gap:`gap-1`},md:{dot:`h-1.5 w-1.5`,gap:`gap-1.5`},lg:{dot:`h-2 w-2`,gap:`gap-2`}},u={sm:{bar:`w-0.5`,height:`h-3`},md:{bar:`w-1`,height:`h-4`},lg:{bar:`w-1.5`,height:`h-6`}},d={primary:`text-primary`,secondary:`text-secondary`,success:`text-success`,warning:`text-warning`,danger:`text-danger`,info:`text-info`},f={primary:`bg-primary`,secondary:`bg-secondary`,success:`bg-success`,warning:`bg-warning`,danger:`bg-danger`,info:`bg-info`},o.__docgenInfo={description:``,methods:[],displayName:`Loading`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'spinner' | 'dots' | 'bars'`,elements:[{name:`literal`,value:`'spinner'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'bars'`}]},description:``,defaultValue:{value:`'spinner'`,computed:!1}},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{p(),m=t(),h={title:`UI/Loading`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`spinner`,`dots`,`bars`]},colorScheme:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`,`warning`,`info`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},g={args:{variant:`spinner`}},_={args:{variant:`dots`}},v={args:{variant:`bars`}},y={args:{size:`sm`}},b={args:{size:`lg`}},x={args:{colorScheme:`danger`}},S={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-8`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,m.jsx)(o,{variant:`spinner`,colorScheme:`primary`}),(0,m.jsx)(o,{variant:`spinner`,colorScheme:`secondary`}),(0,m.jsx)(o,{variant:`spinner`,colorScheme:`danger`}),(0,m.jsx)(o,{variant:`spinner`,colorScheme:`success`}),(0,m.jsx)(o,{variant:`spinner`,colorScheme:`warning`}),(0,m.jsx)(o,{variant:`spinner`,colorScheme:`info`})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,m.jsx)(o,{variant:`dots`,colorScheme:`primary`}),(0,m.jsx)(o,{variant:`dots`,colorScheme:`secondary`}),(0,m.jsx)(o,{variant:`dots`,colorScheme:`danger`}),(0,m.jsx)(o,{variant:`dots`,colorScheme:`success`}),(0,m.jsx)(o,{variant:`dots`,colorScheme:`warning`}),(0,m.jsx)(o,{variant:`dots`,colorScheme:`info`})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,m.jsx)(o,{variant:`bars`,colorScheme:`primary`}),(0,m.jsx)(o,{variant:`bars`,colorScheme:`secondary`}),(0,m.jsx)(o,{variant:`bars`,colorScheme:`danger`}),(0,m.jsx)(o,{variant:`bars`,colorScheme:`success`}),(0,m.jsx)(o,{variant:`bars`,colorScheme:`warning`}),(0,m.jsx)(o,{variant:`bars`,colorScheme:`info`})]})]})},C={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-6`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,m.jsx)(o,{variant:`spinner`,size:`sm`}),(0,m.jsx)(o,{variant:`spinner`,size:`md`}),(0,m.jsx)(o,{variant:`spinner`,size:`lg`})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,m.jsx)(o,{variant:`dots`,size:`sm`}),(0,m.jsx)(o,{variant:`dots`,size:`md`}),(0,m.jsx)(o,{variant:`dots`,size:`lg`})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,m.jsx)(o,{variant:`bars`,size:`sm`}),(0,m.jsx)(o,{variant:`bars`,size:`md`}),(0,m.jsx)(o,{variant:`bars`,size:`lg`})]})]})},w={render:()=>(0,m.jsx)(`div`,{className:`flex h-64 items-center justify-center`,children:(0,m.jsx)(o,{variant:`spinner`,size:`lg`})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bars'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    colorScheme: 'danger'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 items-center justify-center">\r
      <Loading variant="spinner" size="lg" />\r
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Spinner`,`Dots`,`Bars`,`Small`,`Large`,`Danger`,`AllVariants`,`AllSizes`,`FullPageLoading`]})))()}E();export{C as AllSizes,S as AllVariants,v as Bars,x as Danger,_ as Dots,w as FullPageLoading,b as Large,y as Small,g as Spinner,T as __namedExportsOrder,h as default};