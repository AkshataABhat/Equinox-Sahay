import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";  
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from "./StateProvider";
import {Button}from '@material-ui/core';



function Sidebar() {
	const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">

        <SidebarRow src={user.photoURL}title={user.displayName}/>
		
		
		<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Updates" />
    	<SidebarRow Icon={EmojiFlagsIcon} title="Resources" />
		
	  	<SidebarRow Icon={ChatIcon} title="Connections" />
		
		
    	<SidebarRow  Icon={PeopleIcon} title="Helpline"  />
    	
    	<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
		


            
        </div>
    )
}

export default Sidebar
