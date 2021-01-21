import React, {PureComponent} from 'react';

import './index.scss';

export interface FriendSlotProps {
    type: string,
    isOpen: boolean,
    username: string,
    toggleSlot: () => void
}

export default function FriendSlot(props: FriendSlotProps) {
    
    if(props.type === 'unknown')
        return (
            <div className={"toolbar-friends-slot is-unknown" + (props.isOpen ? " is-open" : '')} onClick={props.toggleSlot}>
                <div className='toolbar-friends-slot-header'>
                    <img src={require('../../../assets/web-gallery/r63b/toolbar/icons/friend_head.png')} />
                    Find new <br /> friends
                </div>

                <div className="toolbar-friends-slot-content">
                    <p>Looking for new friend ? Search for Habbos.</p>
                    <button className='btn btn-r63b btn-bold'>Go get friends</button>
                </div>
            </div>
        ); 
       
    return (
        <div className={"toolbar-friends-slot" + (props.isOpen ? " is-open" : '')} onClick={props.toggleSlot}>
            <div className='toolbar-friends-slot-header'>
                <img src={`https://www.habbo.com/habbo-imaging/avatarimage?hb=image&user=${props.username}&headonly=1&direction=2&head_direction=2&action=&gesture=&size=m`} />
                {props.username}
            </div>

            <div className='toolbar-friends-slot-content'>
                <span className='icon icon-sendmessage' />
                <span className='icon icon-joinroom' />
                <span className='icon icon-profile' />
            </div>
        </div>
    );
}