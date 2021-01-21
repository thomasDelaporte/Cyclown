import React from 'react';

import './index.scss';

export interface DialogProps {
    title: string,
    needHelp: boolean,
    className?: string,
    children?: React.ReactNode
}

const Dialog: React.FunctionComponent<DialogProps> = (props: DialogProps) => {
    return (
        <div className={"dialog" + (props.className ? ' ' + props.className : '')}>

            <div className="dialog-header">
                <h3>{props.title}</h3>

                <div className="dialog-header-actions">
                    
                    {props.needHelp &&
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
                {props.children}
            </div>
        </div>
    )
}

export default Dialog;
