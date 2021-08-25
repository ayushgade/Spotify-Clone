import React from 'react';
import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from '../../DataLayer';

function Siderbar() {
    const [{ playlists }, dispatch] = useDataLayerValue();


    return (
        <div className='sidebar'>
            <img className='sidebar_logo' 
            src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-may-spotify-logo-dark-mode-cool-music-service-offers-legal-streaming-music-spotify-logo-dark-mode-218033923.jpg" 
            alt=""/>
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Libarary" />
        
        <br />
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
        ))}
        </div>
    )
}

export default Siderbar
