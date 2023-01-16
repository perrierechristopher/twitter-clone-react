import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>

        {/* Twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon'/>

        <SidebarOption active text="Home" Icon={HomeIcon} />
        <SidebarOption text="Explore" Icon={SearchIcon} />
        <SidebarOption text="Notifications" Icon={NotificationsIcon} />
        <SidebarOption text="Messages" Icon={MailOutlineIcon} />
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarOption text="Lists" Icon={ListAltIcon} />
        <SidebarOption text="Profile" Icon={PermIdentityIcon} />
        <SidebarOption text="More" Icon={MoreHorizIcon} />
        
        { /* SidebarOption */}
        { /* SidebarOption */}
        { /* SidebarOption */}
        { /* SidebarOption */}
        { /* SidebarOption */}
        { /* SidebarOption */}
        { /* SidebarOption */}

        {/* Button -> Tweet*/}

        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar;
