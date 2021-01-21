import React, { useState } from 'react';

import './index.scss';

export default function WebAction() {
    const [isFullscreen, toggleFullscreen] = useState(false);

    return (
        <div className="web_actions">

                <button className='action-item action-item-arrow'>
                    <i className="icon icon-small icon-habbo"></i><span className="action-item-expand">WEB</span>
                </button>

                <button className='action-item' onClick={() => toggleFullscreen(!isFullscreen)}>
                    <i className={"icon " + (isFullscreen ? "icon-disable-fs" : "icon-fs")}></i>
                </button>
            </div>
    )
}