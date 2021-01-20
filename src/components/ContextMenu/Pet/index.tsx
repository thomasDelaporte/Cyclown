import React from 'react';

import ContextMenu from '../';

export default class PetContextMenu extends React.PureComponent<any, any> {

    render(){
        return (
            <ContextMenu className="pet-actions" {...this.props}>
                {this.props.isRidable && <li><span>Ride</span></li> }
                <li><span>Scratch (3)</span></li>
            </ContextMenu>
        )
    }
}