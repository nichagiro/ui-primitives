import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-Bu7iDlkI.js";import{c as r,d as i}from"./colorSchemes-CoEbpJHX.js";function a({defaultValue:e,value:t,onChange:n,variant:r=`underline`,colorScheme:i=`primary`,tabs:a,className:p}){let m=t!==void 0,[h,g]=(0,o.useState)(e??a[0]?.value??``),_=m?t:h,v=(0,o.useRef)([]),y=a.map((e,t)=>e.disabled?-1:t).filter(e=>e!==-1),b=(0,o.useCallback)(e=>{m||g(e),n?.(e)},[m,n]),x=(e,t)=>{let n=null;switch(e.key){case`ArrowRight`:e.preventDefault(),n=y[(y.indexOf(t)+1)%y.length];break;case`ArrowLeft`:e.preventDefault(),n=y[(y.indexOf(t)-1+y.length)%y.length];break;case`Home`:e.preventDefault(),n=y[0];break;case`End`:e.preventDefault(),n=y[y.length-1];break;case`Enter`:case` `:e.preventDefault(),b(a[t].value)}n!==null&&(v.current[n]?.focus(),b(a[n].value))},S=a.find(e=>e.value===_)?.content;return(0,s.jsxs)(`div`,{className:p??``,children:[(0,s.jsx)(`div`,{role:`tablist`,className:c[r],children:a.map((e,t)=>{let n=e.value===_,a=[`font-medium cursor-pointer transition-colors`,d[r],n?l[r][i]:u[r],r===`underline`?`border-b-2 -mb-px`:``,e.disabled?`opacity-50 cursor-not-allowed`:``].join(` `);return(0,s.jsx)(`button`,{ref:e=>{v.current[t]=e},type:`button`,role:`tab`,id:`tab-${e.value}`,"aria-selected":n,"aria-controls":`panel-${e.value}`,tabIndex:n?0:-1,disabled:e.disabled,className:a,onClick:()=>b(e.value),onKeyDown:e=>x(e,t),children:e.label},e.value)})}),S&&(0,s.jsx)(`div`,{role:`tabpanel`,id:`panel-${_}`,"aria-labelledby":`tab-${_}`,className:f[r],children:S})]})}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=t(),i(),s=n(),c={underline:`flex border-b border-border`,pill:`flex gap-1 p-1 bg-muted rounded-lg`,cards:`flex gap-0`},l={underline:r(e=>`text-${e} border-${e}`),pill:r(e=>`bg-${e} text-${e}-foreground shadow-sm rounded-md`),cards:r(e=>`bg-card text-${e} border border-border border-b-card -mb-px rounded-t-lg`)},u={underline:`text-muted-foreground hover:text-foreground border-transparent`,pill:`text-muted-foreground hover:text-foreground rounded-md`,cards:`text-muted-foreground hover:text-foreground bg-muted/50 border border-transparent rounded-t-lg`},d={underline:`px-4 py-2`,pill:`px-4 py-1.5`,cards:`px-4 py-2`},f={underline:`py-4 text-sm text-foreground`,pill:`py-4 text-sm text-foreground`,cards:`relative -mt-px border border-border rounded-b-lg rounded-tr-lg p-4 text-sm text-foreground`},a.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{defaultValue:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'underline' | 'pill' | 'cards'`,elements:[{name:`literal`,value:`'underline'`},{name:`literal`,value:`'pill'`},{name:`literal`,value:`'cards'`}]},description:``,defaultValue:{value:`'underline'`,computed:!1}},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  label: ReactNode\r
  content: ReactNode\r
  disabled?: boolean\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`content`,value:{name:`ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`TabsItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{m=t(),p(),h=n(),g={title:`UI/Tabs`,component:a,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`underline`,`pill`,`cards`]},colorScheme:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`]},defaultValue:{control:`text`}}},_=[{value:`tab1`,label:`Tab 1`,content:`Contenido del primer tab`},{value:`tab2`,label:`Tab 2`,content:`Contenido del segundo tab`},{value:`tab3`,label:`Tab 3`,content:`Contenido del tercer tab`}],v={args:{defaultValue:`tab1`,tabs:_}},y={args:{defaultValue:`tab1`,variant:`pill`,tabs:_}},b={args:{defaultValue:`tab1`,variant:`cards`,tabs:_}},x={args:{defaultValue:`tab1`,variant:`pill`,colorScheme:`success`,tabs:_}},S={args:{defaultValue:`tab1`,variant:`cards`,colorScheme:`danger`,tabs:_}},C={args:{defaultValue:`tab1`,tabs:[{value:`tab1`,label:`Activo`,content:`Contenido activo`},{value:`tab2`,label:`Deshabilitado`,content:`No debería verse`,disabled:!0},{value:`tab3`,label:`Otro`,content:`Otro contenido`}]}},w={args:{defaultValue:`overview`,tabs:[{value:`overview`,label:`Resumen`,content:(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{className:`text-base font-semibold mb-2`,children:`Resumen general`}),(0,h.jsx)(`p`,{children:`Este es un tab con contenido más complejo que incluye elementos HTML.`})]})},{value:`details`,label:`Detalles`,content:(0,h.jsxs)(`ul`,{className:`list-disc list-inside space-y-1`,children:[(0,h.jsx)(`li`,{children:`Elemento uno`}),(0,h.jsx)(`li`,{children:`Elemento dos`}),(0,h.jsx)(`li`,{children:`Elemento tres`})]})},{value:`settings`,label:`Configuración`,content:`Configuración del componente.`}]}},T={render:()=>{let[e,t]=(0,m.useState)(`tab1`);return(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsx)(a,{value:e,onChange:t,tabs:_}),(0,h.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Tab activo: `,e]})]})}},E={render:()=>(0,h.jsx)(`div`,{className:`space-y-6`,children:[`underline`,`pill`,`cards`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground mb-2 capitalize`,children:e}),(0,h.jsx)(a,{variant:e,defaultValue:`tab1`,tabs:_})]},e))})},D={render:()=>(0,h.jsx)(`div`,{className:`space-y-6`,children:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`].map(e=>(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground mb-2 capitalize`,children:e}),(0,h.jsx)(a,{defaultValue:`tab1`,colorScheme:e,tabs:_})]},e))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    tabs: sampleTabs
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'pill',
    tabs: sampleTabs
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'cards',
    tabs: sampleTabs
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'pill',
    colorScheme: 'success',
    tabs: sampleTabs
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'cards',
    colorScheme: 'danger',
    tabs: sampleTabs
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    tabs: [{
      value: 'tab1',
      label: 'Activo',
      content: 'Contenido activo'
    }, {
      value: 'tab2',
      label: 'Deshabilitado',
      content: 'No debería verse',
      disabled: true
    }, {
      value: 'tab3',
      label: 'Otro',
      content: 'Otro contenido'
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview',
    tabs: [{
      value: 'overview',
      label: 'Resumen',
      content: <div>\r
          <h3 className="text-base font-semibold mb-2">Resumen general</h3>\r
          <p>Este es un tab con contenido más complejo que incluye elementos HTML.</p>\r
        </div>
    }, {
      value: 'details',
      label: 'Detalles',
      content: <ul className="list-disc list-inside space-y-1">\r
          <li>Elemento uno</li>\r
          <li>Elemento dos</li>\r
          <li>Elemento tres</li>\r
        </ul>
    }, {
      value: 'settings',
      label: 'Configuración',
      content: 'Configuración del componente.'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('tab1');
    return <div className="space-y-3">\r
        <Tabs value={active} onChange={setActive} tabs={sampleTabs} />\r
        <p className="text-xs text-muted-foreground">Tab activo: {active}</p>\r
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      {(['underline', 'pill', 'cards'] as const).map(v => <div key={v}>\r
          <p className="text-xs font-medium text-muted-foreground mb-2 capitalize">{v}</p>\r
          <Tabs variant={v} defaultValue="tab1" tabs={sampleTabs} />\r
        </div>)}\r
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map(scheme => <div key={scheme}>\r
          <p className="text-xs font-medium text-muted-foreground mb-2 capitalize">{scheme}</p>\r
          <Tabs defaultValue="tab1" colorScheme={scheme} tabs={sampleTabs} />\r
        </div>)}\r
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Pill`,`Cards`,`PillSuccess`,`CardsDanger`,`WithDisabledTab`,`WithRichContent`,`Controlled`,`AllVariants`,`AllColorSchemes`]})))()}k();export{D as AllColorSchemes,E as AllVariants,b as Cards,S as CardsDanger,T as Controlled,v as Default,y as Pill,x as PillSuccess,C as WithDisabledTab,w as WithRichContent,O as __namedExportsOrder,g as default};