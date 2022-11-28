// import React from 'react'
// import "./login.css";
// import {Menu} from "antd";
// import DAshContent from './DAshContent';
// import {DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined} from "@ant-design/icons";
// import {  Navigate, useNavigate } from 'react-router-dom';

// export const Dashboard = () => {
//     const navigate = useNavigate()
//   return (
//     <div style={{display:'flex', flexDirection:'row'}}>
//         <Menu 
//         onClick={({key})=>{
//             if(key==="signout"){

//             }else{
//                 navigate(key)
//             }
//         }}
//         items={[
//             {label:'Home', key: "/home ", icon: <HomeOutlined/>},
//             {label:'Dashboard',key:"/dashb"  , icon:<DashboardOutlined/>},
//             {label:'Users List',key:"/userl" , icon: <UnorderedListOutlined/>},
//             {label:'Profile',key:"/profile" , icon:<UserOutlined/>},
//             {label:'Signout',key:"signout", icon:<PoweroffOutlined/>, danger:true}
//         ]}>

//         </Menu>
//         <DAshContent/>
//     </div>
//   )
// }


