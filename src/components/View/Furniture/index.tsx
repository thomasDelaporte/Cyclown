import React from 'react';

import '../index.scss';

export default class FurnitureView extends React.PureComponent<any, any> {

    render(){
        return (
            <React.Fragment>

                <div className="furniture-item frame-100">
                    <div className="frame-header">
                        <h3>Golden Apple</h3>

                        <button className="btn btn-volter btn-action">
                            <i className="icon icon-close-thin"></i>
                        </button>
                    </div>

                    <img src="https://s3.eu-north-1.amazonaws.com/fuusio/furni/golden_apple__2.png" />

                    <div className="frame-footer">

                        <i className="icon icon-small icon-profile">Textarea</i>

                        {this.props.isBuyable &&
                            <button className="btn btn-volter btn-flat btn-light">Buy one</button>
                        }
                    </div>
                </div>

                <div className="furniture-item-actions">
                    <button className="btn btn-volter btn-flat">Move</button>
                    <button className="btn btn-volter btn-flat">Rotate</button>
                    <button className="btn btn-volter btn-flat">Pick up</button>
                    <button className="btn btn-volter btn-flat">Use</button>
                </div>
            </React.Fragment>
        )
    }
}