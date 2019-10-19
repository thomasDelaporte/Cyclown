import React from 'react';
import Draggable from '../../components/draggable';

export default class Camera extends React.PureComponent {

    render(){
        return (

            <Draggable>
                {(styleDragable, startDraging) => (
                    
                    <div className="dialog camera" onMouseDown={startDraging} style={styleDragable}>
                
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
                )}
            </Draggable>
        )
    }
}