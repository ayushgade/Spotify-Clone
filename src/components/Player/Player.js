import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './player.css';
import Siderbar from './Siderbar';

function Player({ spotify }) {
    return (
        <div className="player">
        <div className="player_body">
            <Siderbar />
            <Body spotify={spotify}/>
        </div>
        <Footer />
        </div>
    )
}

export default Player
