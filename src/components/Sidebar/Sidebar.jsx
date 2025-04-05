import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button } from '@mui/material';

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
        

        {/* Button -> Tweet*/}

        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>

        <div className='AccountStatus'>
          <Avatar src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-user-icon-icons-logos-emojis-users-2400.png&f=1&nofb=1&ipt=d05c147bf991baca14fca4b0d0e7b72db67c353d88db9e40b8cd4255e5513e81&ipo=images" />
          <div className='AccountStatus names'>
            <h3>Pseudoname</h3>
            <span>username</span>

          </div>
        </div>

    </div>
  )
}

export default Sidebar;
