import React from 'react';

import './index.scss';

export default class ChatHistory extends React.PureComponent<any, any> {

    render(){
        return (
            <section className="chat-history">
                
                <div className="chat-history-content">
                    
                </div>
                
                <div className="chat-history-scrollbar">
                    <div className="chat-history-scrollbar-track"></div>
                </div>

                <i className="more" onClick={this.props.close}></i>
            </section>
        )
    }
}