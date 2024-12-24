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
       <div className='h-screen p-6  '>
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
          backgroundColor: 'red',
          color: '#b6c8d9',
        },
      },
    }}
  >
     <MenuItem icon={<GrOverview />} component={<Link to="/" />} suffix={<Badge variant="success">New</Badge>}>
     Overview
              </MenuItem>
              <MenuItem icon={<PiBooksLight />} component={<Link to="/courses" />} suffix={<Badge variant="success">New</Badge>}>
              Courses
              </MenuItem>
              <MenuItem icon={<GrSchedules />} component={<Link to="/schedule" />} suffix={<Badge variant="success">New</Badge>}>
              Schedule
              </MenuItem>
              <MenuItem icon={<GoCommentDiscussion />} component={<Link to="/discussion" />} suffix={<Badge variant="success">New</Badge>}>
              Discussion
              </MenuItem>
              <MenuItem icon={<GrSettingsOption />} component={<Link to="/settings" />} suffix={<Badge variant="success">New</Badge>}>
              Settings
              </MenuItem>
  </Menu>
</Sidebar>
       </div>
    );
};
export default SidebarComponent;
