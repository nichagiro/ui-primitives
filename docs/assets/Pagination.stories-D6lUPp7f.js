import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{A as n,t as r}from"./iframe-CM_yzx0O.js";import{n as i,t as a}from"./Pagination-DUWYj9Hv.js";var o,s,c,l,u,d,f,p,m;e((()=>{i(),o=t(n(),1),s=r(),c={title:`UI/Pagination`,component:a,tags:[`autodocs`],argTypes:{page:{control:{type:`number`,min:1}},totalPages:{control:{type:`number`,min:1}},totalItems:{control:{type:`number`,min:0}},startRecord:{control:{type:`number`,min:0}},endRecord:{control:{type:`number`,min:0}},colorScheme:{control:`select`,options:[`primary`,`danger`,`success`]}}},l={args:{page:1,totalPages:5,totalItems:50,startRecord:1,endRecord:10,onPageChange:()=>{},colorScheme:`primary`}},u={args:{page:3,totalPages:5,totalItems:50,startRecord:21,endRecord:30,onPageChange:()=>{},colorScheme:`primary`}},d={args:{page:5,totalPages:5,totalItems:50,startRecord:41,endRecord:50,onPageChange:()=>{},colorScheme:`danger`}},f={args:{page:10,totalPages:50,totalItems:500,startRecord:91,endRecord:100,onPageChange:()=>{},colorScheme:`primary`}},p={render:()=>{let[e,t]=(0,o.useState)(1);return(0,s.jsx)(a,{page:e,totalPages:10,totalItems:100,startRecord:(e-1)*10+1,endRecord:Math.min(e*10,100),onPageChange:t,colorScheme:`primary`})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 5,
    totalItems: 50,
    startRecord: 1,
    endRecord: 10,
    onPageChange: () => {},
    colorScheme: 'primary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    totalPages: 5,
    totalItems: 50,
    startRecord: 21,
    endRecord: 30,
    onPageChange: () => {},
    colorScheme: 'primary'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 5,
    totalItems: 50,
    startRecord: 41,
    endRecord: 50,
    onPageChange: () => {},
    colorScheme: 'danger'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    totalPages: 50,
    totalItems: 500,
    startRecord: 91,
    endRecord: 100,
    onPageChange: () => {},
    colorScheme: 'primary'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;
    return <Pagination page={page} totalPages={totalPages} totalItems={100} startRecord={(page - 1) * 10 + 1} endRecord={Math.min(page * 10, 100)} onPageChange={setPage} colorScheme="primary" />;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`MiddlePage`,`LastPage`,`ManyPages`,`Interactive`]}))();export{l as Default,p as Interactive,d as LastPage,f as ManyPages,u as MiddlePage,m as __namedExportsOrder,c as default};