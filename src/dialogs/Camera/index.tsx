import React from 'react';

import './index.scss';

export default function Camera() {
    return (
        <div className="dialog camera">
                
            <div className="dialog-header">

                <h3>Habbo Camera</h3>

                <div className="dialog-header-actions">
                            
                    <button className="btn btn-r63b btn-action btn-blue">
                        <i className="icon icon-help"></i>
                    </button>
                            
                    <button className="btn btn-r63b btn-action btn-red">
                        <i className="icon icon-close"></i>
                    </button>
                </div>
            </div>

            <div className="dialog-content">
                
                <canvas className="camera-content"></canvas>
                
                <button className="camera-action">

                </button>
            </div>
        </div>
    )
}