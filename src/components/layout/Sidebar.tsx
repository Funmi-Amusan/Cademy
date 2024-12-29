import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import React from 'react';
import { GrOverview, GrSchedules, GrSettingsOption } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { PiBooksLight } from "react-icons/pi";
import { Badge } from './Badge';



const SidebarComponent = () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
       <div className='h-screen  '>
<Sidebar 
backgroundColor='white'
    collapsed={collapsed} >
    <div className=' flex gap-2 pb-12 pt-6 px-6 items-center'>
    <img src={Logo} className='w-4' alt="" />
    <h1 className=' font-medium text-2xl'>Cademy</h1>
    </div>

  <Menu 
    menuItemStyles={{
      button: {
        [`&.active`]: {
          backgroundColor: 'red',
          color: '#b6c8d9',
        },
      },
    }}
  >
     <MenuItem icon={<GrOverview />} component={<Link to="/" />} >
     Overview
              </MenuItem>
              <MenuItem icon={<PiBooksLight />} component={<Link to="/courses" />} suffix={<Badge variant="success">New</Badge>}>
              Courses
              </MenuItem>
              <MenuItem icon={<GrSchedules />} component={<Link to="/schedule" />} suffix={<Badge variant="danger" shape="circle">4</Badge>}>
              Schedule
              </MenuItem>
              <MenuItem icon={<GoCommentDiscussion />} component={<Link to="/discussion" />} suffix={<Badge variant="info" shape='circle'>9</Badge>}>
              Discussion
              </MenuItem>
              <MenuItem icon={<GrSettingsOption />} component={<Link to="/settings" />} 
             >
              Settings
              </MenuItem>
  </Menu>
</Sidebar>
       </div>
    );
};
export default SidebarComponent;
