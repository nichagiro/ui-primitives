import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-DocQHzAp.js";function r({defaultValue:e,value:t,onChange:n,variant:r=`underline`,colorScheme:d=`primary`,tabs:f,className:p}){let m=t!==void 0,[h,g]=(0,i.useState)(e??f[0]?.value??``),_=m?t:h,v=(0,i.useRef)([]),y=f.map((e,t)=>e.disabled?-1:t).filter(e=>e!==-1),b=(0,i.useCallback)(e=>{m||g(e),n?.(e)},[m,n]),x=(e,t)=>{let n=null;switch(e.key){case`ArrowRight`:e.preventDefault(),n=y[(y.indexOf(t)+1)%y.length];break;case`ArrowLeft`:e.preventDefault(),n=y[(y.indexOf(t)-1+y.length)%y.length];break;case`Home`:e.preventDefault(),n=y[0];break;case`End`:e.preventDefault(),n=y[y.length-1];break;case`Enter`:case` `:e.preventDefault(),b(f[t].value)}n!==null&&(v.current[n]?.focus(),b(f[n].value))},S=f.find(e=>e.value===_)?.content;return(0,a.jsxs)(`div`,{className:p??``,children:[(0,a.jsx)(`div`,{role:`tablist`,className:o[r],children:f.map((e,t)=>{let n=e.value===_,i=[`font-medium cursor-pointer transition-colors`,l[r],n?s[r][d]:c[r],r===`underline`?`border-b-2 -mb-px`:``,e.disabled?`opacity-50 cursor-not-allowed`:``].join(` `);return(0,a.jsx)(`button`,{ref:e=>{v.current[t]=e},type:`button`,role:`tab`,id:`tab-${e.value}`,"aria-selected":n,"aria-controls":`panel-${e.value}`,tabIndex:n?0:-1,disabled:e.disabled,className:i,onClick:()=>b(e.value),onKeyDown:e=>x(e,t),children:e.label},e.value)})}),S&&(0,a.jsx)(`div`,{role:`tabpanel`,id:`panel-${_}`,"aria-labelledby":`tab-${_}`,className:u[r],children:S})]})}var i,a,o,s,c,l,u;function d(){return(d=e((()=>{i=t(),a=n(),o={underline:`flex border-b border-border`,pill:`flex gap-1 p-1 bg-muted rounded-lg`,cards:`flex gap-0`},s={underline:{primary:`text-primary border-primary`,secondary:`text-secondary border-secondary`,success:`text-success border-success`,warning:`text-warning border-warning`,danger:`text-danger border-danger`,info:`text-info border-info`},pill:{primary:`bg-primary text-primary-foreground shadow-sm rounded-md`,secondary:`bg-secondary text-secondary-foreground shadow-sm rounded-md`,success:`bg-success text-success-foreground shadow-sm rounded-md`,warning:`bg-warning text-warning-foreground shadow-sm rounded-md`,danger:`bg-danger text-danger-foreground shadow-sm rounded-md`,info:`bg-info text-info-foreground shadow-sm rounded-md`},cards:{primary:`bg-card text-primary border border-border border-b-card -mb-px rounded-t-lg`,secondary:`bg-card text-secondary border border-border border-b-card -mb-px rounded-t-lg`,success:`bg-card text-success border border-border border-b-card -mb-px rounded-t-lg`,warning:`bg-card text-warning border border-border border-b-card -mb-px rounded-t-lg`,danger:`bg-card text-danger border border-border border-b-card -mb-px rounded-t-lg`,info:`bg-card text-info border border-border border-b-card -mb-px rounded-t-lg`}},c={underline:`text-muted-foreground hover:text-foreground border-transparent`,pill:`text-muted-foreground hover:text-foreground rounded-md`,cards:`text-muted-foreground hover:text-foreground bg-muted/50 border border-transparent rounded-t-lg`},l={underline:`px-4 py-2`,pill:`px-4 py-1.5`,cards:`px-4 py-2`},u={underline:`py-4 text-sm text-foreground`,pill:`py-4 text-sm text-foreground`,cards:`relative -mt-px border border-border rounded-b-lg rounded-tr-lg p-4 text-sm text-foreground`},r.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{defaultValue:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'underline' | 'pill' | 'cards'`,elements:[{name:`literal`,value:`'underline'`},{name:`literal`,value:`'pill'`},{name:`literal`,value:`'cards'`}]},description:``,defaultValue:{value:`'underline'`,computed:!1}},colorScheme:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{\r
  value: string\r
  label: ReactNode\r
  content: ReactNode\r
  disabled?: boolean\r
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`content`,value:{name:`ReactNode`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`TabsItem[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{f=t(),d(),p=n(),m={title:`UI/Tabs`,component:r,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`underline`,`pill`,`cards`]},colorScheme:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`]},defaultValue:{control:`text`}}},h=[{value:`tab1`,label:`Tab 1`,content:`Contenido del primer tab`},{value:`tab2`,label:`Tab 2`,content:`Contenido del segundo tab`},{value:`tab3`,label:`Tab 3`,content:`Contenido del tercer tab`}],g={args:{defaultValue:`tab1`,tabs:h}},_={args:{defaultValue:`tab1`,variant:`pill`,tabs:h}},v={args:{defaultValue:`tab1`,variant:`cards`,tabs:h}},y={args:{defaultValue:`tab1`,variant:`pill`,colorScheme:`success`,tabs:h}},b={args:{defaultValue:`tab1`,variant:`cards`,colorScheme:`danger`,tabs:h}},x={args:{defaultValue:`tab1`,tabs:[{value:`tab1`,label:`Activo`,content:`Contenido activo`},{value:`tab2`,label:`Deshabilitado`,content:`No debería verse`,disabled:!0},{value:`tab3`,label:`Otro`,content:`Otro contenido`}]}},S={args:{defaultValue:`overview`,tabs:[{value:`overview`,label:`Resumen`,content:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{className:`text-base font-semibold mb-2`,children:`Resumen general`}),(0,p.jsx)(`p`,{children:`Este es un tab con contenido más complejo que incluye elementos HTML.`})]})},{value:`details`,label:`Detalles`,content:(0,p.jsxs)(`ul`,{className:`list-disc list-inside space-y-1`,children:[(0,p.jsx)(`li`,{children:`Elemento uno`}),(0,p.jsx)(`li`,{children:`Elemento dos`}),(0,p.jsx)(`li`,{children:`Elemento tres`})]})},{value:`settings`,label:`Configuración`,content:`Configuración del componente.`}]}},C={render:()=>{let[e,t]=(0,f.useState)(`tab1`);return(0,p.jsxs)(`div`,{className:`space-y-3`,children:[(0,p.jsx)(r,{value:e,onChange:t,tabs:h}),(0,p.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Tab activo: `,e]})]})}},w={render:()=>(0,p.jsx)(`div`,{className:`space-y-6`,children:[`underline`,`pill`,`cards`].map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground mb-2 capitalize`,children:e}),(0,p.jsx)(r,{variant:e,defaultValue:`tab1`,tabs:h})]},e))})},T={render:()=>(0,p.jsx)(`div`,{className:`space-y-6`,children:[`primary`,`secondary`,`success`,`warning`,`danger`,`info`].map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-xs font-medium text-muted-foreground mb-2 capitalize`,children:e}),(0,p.jsx)(r,{defaultValue:`tab1`,colorScheme:e,tabs:h})]},e))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    tabs: sampleTabs
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'pill',
    tabs: sampleTabs
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'cards',
    tabs: sampleTabs
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'pill',
    colorScheme: 'success',
    tabs: sampleTabs
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    variant: 'cards',
    colorScheme: 'danger',
    tabs: sampleTabs
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('tab1');
    return <div className="space-y-3">\r
        <Tabs value={active} onChange={setActive} tabs={sampleTabs} />\r
        <p className="text-xs text-muted-foreground">Tab activo: {active}</p>\r
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      {(['underline', 'pill', 'cards'] as const).map(v => <div key={v}>\r
          <p className="text-xs font-medium text-muted-foreground mb-2 capitalize">{v}</p>\r
          <Tabs variant={v} defaultValue="tab1" tabs={sampleTabs} />\r
        </div>)}\r
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      {(['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map(scheme => <div key={scheme}>\r
          <p className="text-xs font-medium text-muted-foreground mb-2 capitalize">{scheme}</p>\r
          <Tabs defaultValue="tab1" colorScheme={scheme} tabs={sampleTabs} />\r
        </div>)}\r
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Pill`,`Cards`,`PillSuccess`,`CardsDanger`,`WithDisabledTab`,`WithRichContent`,`Controlled`,`AllVariants`,`AllColorSchemes`]})))()}D();export{T as AllColorSchemes,w as AllVariants,v as Cards,b as CardsDanger,C as Controlled,g as Default,_ as Pill,y as PillSuccess,x as WithDisabledTab,S as WithRichContent,E as __namedExportsOrder,m as default};