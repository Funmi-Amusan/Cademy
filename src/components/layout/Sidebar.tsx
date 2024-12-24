import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import React from 'react';


const SidebarComponent = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
       <div className='h-screen '>
<Sidebar 
    collapsed={collapsed} >
    <div className=' flex gap-2 pb-12'>
    <img src={Logo} className='w-6' alt="" />
    <h1 className=' font-bold'>Cademy</h1>
    </div>

  <Menu 
    menuItemStyles={{
      button: {
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/" />}> Overview</MenuItem>
    <MenuItem component={<Link to="/courses" />}> Courses</MenuItem>
    <MenuItem component={<Link to="/schedule" />}> Schedule</MenuItem>
    <MenuItem component={<Link to="/discussion" />}> Discussion</MenuItem>
    <MenuItem component={<Link to="/settings" />}> Settings</MenuItem>
  </Menu>
</Sidebar>
       </div>
    );
};
export default SidebarComponent;
