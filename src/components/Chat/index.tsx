import React, { useState } from 'react';

import './index.scss';

export default function Chat() {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <div className="chat-box">

            <div className="chat-style-picker">

                <div className="chat-style-picker-button" onClick={() => toggleOpen(!isOpen)}>
                    <i className="icon icon-carret-down-gray"></i>
                    <i className="icon icon-messages"></i>

                    <div className="chat-style-picker-arrow"></div>
                </div>

                <div className={"chat-style-picker-content" + (isOpen ?  " is-open" : '')}>
                    list of styles
                </div>
            </div>

            <input type="text" className="chat-input" placeholder="Chiru, is the best manager." />

            <button className="btn btn-action btn-blue">
                <i className="icon icon-help"></i>
            </button>
        </div>
    )
}
