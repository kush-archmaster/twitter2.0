import React from 'react'
import './css/sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOpt from './SidebarOpt';

//icons
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {Button} from '@material-ui/core';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            
            <TwitterIcon className='sidebar__twitterIcon'/>

            {/*Sidebar options */}
            <SidebarOpt active text='Home' Icon={HomeIcon}/>
            <SidebarOpt text='Explore' Icon={ExploreIcon}/>
            <SidebarOpt text='Notifications' Icon={NotificationsNoneIcon}/>
            <SidebarOpt text='Messages' Icon={MailOutlineIcon}/>
            <SidebarOpt text='Bookmarks' Icon={BookmarkBorderIcon}/>
            <SidebarOpt text='Lists' Icon={ListAltIcon}/>
            <SidebarOpt text='Profile' Icon={PermIdentityIcon}/>
            <SidebarOpt text='More' Icon={MoreHorizIcon}/>

            {/* Tweet button */}
            <Button className='sidebar_tweet' variant='outlined' 
            fullWidth> Tweet</Button>

        </div>
    )
}

export default Sidebar
