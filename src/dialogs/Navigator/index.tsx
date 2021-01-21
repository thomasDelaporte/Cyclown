import React from 'react';

import Dialog from '@components/Dialog';
import Scrollbar from '@components/Scrollbar';

import NavigatorGroup from './group';

import './index.scss';

export default class Navigator extends React.PureComponent {

    render(){
        return (
            <Dialog title="Navigator" className="navigator">

                <div className="dialog-nav">

                    <button className="btn btn-saved dialog-tabs-subaction">
                        <i className="icon icon-storm"></i>
                    </button>
                    
                    <ul className="dialog-tabs">
                        <li>Public</li>
                        <li className="is-active">All Rooms</li>
                        <li>Events</li>
                        <li>My World</li>
                    </ul>
                </div>

                <div className="dialog-content">

                    <div className="dialog-filter">

                        <select className="dropdown">
                            <option>Anything</option>
                            <option>Room Name</option>
                            <option>Owner</option>
                            <option>Tag</option>
                            <option>Group</option>
                        </select>

                        <input className="input" placeholder="filter rooms by..." />
                    </div>

                    <Scrollbar className="navigator-content">

                        <NavigatorGroup title="Most Popular Rooms" />
                        <NavigatorGroup title="Recommended For You" />
                        <NavigatorGroup title="Trading" />
                        <NavigatorGroup title="Party" />
                        <NavigatorGroup title="Chat and discussion" />
                        <NavigatorGroup title="Habbo Games" />
                    </Scrollbar>


                    <div className="navigator-actions">

                        <div className="navigator-actions-room">
                            <i className="icon icon-room-plus">Create Room</i>
                        </div>

                        <div className="navigator-actions-new">
                            <i className="icon icon-room-swap">Somewhere new</i>
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}