import React from 'react';

import './index.scss';

export interface ChatLogProps {
    close?: () => void
}

export default function ChatLog(props: ChatLogProps) {
    return (
        <section className="chat-history">
                
        <div className="chat-history-content">
            
        </div>
        
        <div className="chat-history-scrollbar">
            <div className="chat-history-scrollbar-track"></div>
        </div>

        <i className="more" onClick={props.close}></i>
    </section>
    )
}