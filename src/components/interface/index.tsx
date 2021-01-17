import React from 'react';
import { withRouter } from "react-router";

import Toolbar from '../../modules/toolbar';
import ProfilePanel from '../../modules/profile-panel';
import WebAction from '../../modules/web-action';

import Navigator from '../../dialogs/navigator';
import Inventory from '../../dialogs/inventory';
import Wardrobe from '../../dialogs/wardrobe';
import Achievements from '../../dialogs/achievements';

class Interface extends React.Component<any, any> {
    
    render(){

        const isRoom = (this.props.location.pathname.includes('room'));

        return (
            <main className={"client" + (isRoom ? " is-room" : '')}>

                {this.props.children}

                <Inventory />
                <Wardrobe />
                <Achievements />
                <Navigator />

                <WebAction isRoom={isRoom}/>
                <ProfilePanel isRoom={isRoom}/>
                <Toolbar isRoom={isRoom} />
            </main>
        )
    }
}

export default withRouter(Interface);