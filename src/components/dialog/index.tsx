import React from 'react';

import './index.scss';

export default class Dialog extends React.PureComponent<any, any> {

    render(){
        return (

            <div className={"dialog" + (this.props.className ? ' ' + this.props.className : '')}>

                <div className="dialog-header">
                    <h3>{this.props.title}</h3>

                    <div className="dialog-header-actions">
                        
                        {this.props.needHelp &&
                            <button className="btn btn-r63b btn-action btn-blue">
                                <i className="icon icon-help"></i>
                            </button>
                        }

                        <button className="btn btn-r63b btn-action btn-red">
                            <i className="icon icon-close"></i>
                        </button>
                    </div>
                </div>

                <div className="dialog-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}