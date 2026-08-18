import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-DxBQrE3I.js";import{n as r,t as i}from"./Pagination-BcTSPlVh.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a=t(),o=n(),s={title:`UI/Pagination`,component:i,tags:[`autodocs`],argTypes:{page:{control:{type:`number`,min:1}},totalPages:{control:{type:`number`,min:1}},totalItems:{control:{type:`number`,min:0}},startRecord:{control:{type:`number`,min:0}},endRecord:{control:{type:`number`,min:0}},colorScheme:{control:`select`,options:[`primary`,`danger`,`success`]}}},c={args:{page:1,totalPages:5,totalItems:50,startRecord:1,endRecord:10,onPageChange:()=>{},colorScheme:`primary`}},l={args:{page:3,totalPages:5,totalItems:50,startRecord:21,endRecord:30,onPageChange:()=>{},colorScheme:`primary`}},u={args:{page:5,totalPages:5,totalItems:50,startRecord:41,endRecord:50,onPageChange:()=>{},colorScheme:`danger`}},d={args:{page:10,totalPages:50,totalItems:500,startRecord:91,endRecord:100,onPageChange:()=>{},colorScheme:`primary`}},f={render:()=>{let[e,t]=(0,a.useState)(1);return(0,o.jsx)(i,{page:e,totalPages:10,totalItems:100,startRecord:(e-1)*10+1,endRecord:Math.min(e*10,100),onPageChange:t,colorScheme:`primary`})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    totalPages: 5,
    totalItems: 50,
    startRecord: 1,
    endRecord: 10,
    onPageChange: () => {},
    colorScheme: 'primary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    totalPages: 5,
    totalItems: 50,
    startRecord: 21,
    endRecord: 30,
    onPageChange: () => {},
    colorScheme: 'primary'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    totalPages: 5,
    totalItems: 50,
    startRecord: 41,
    endRecord: 50,
    onPageChange: () => {},
    colorScheme: 'danger'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    totalPages: 50,
    totalItems: 500,
    startRecord: 91,
    endRecord: 100,
    onPageChange: () => {},
    colorScheme: 'primary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;
    return <Pagination page={page} totalPages={totalPages} totalItems={100} startRecord={(page - 1) * 10 + 1} endRecord={Math.min(page * 10, 100)} onPageChange={setPage} colorScheme="primary" />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`MiddlePage`,`LastPage`,`ManyPages`,`Interactive`]})))()}m();export{c as Default,f as Interactive,u as LastPage,d as ManyPages,l as MiddlePage,p as __namedExportsOrder,s as default};