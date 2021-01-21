import React from 'react';

import Dialog from '@components/Dialog';
import Scrollbar from '@components/Scrollbar';

export default class Wardrobe extends React.PureComponent {

    render(){
        return (
            <Dialog title="Change Your Looks" className="wardrobe">
                
                <div className="wardrobe-wrapper">

                    <div className="dialog-cheader wardrobe-header">

                        <h2>EZ-C2</h2>

                        <nav className="wardrobe-nav">

                            <ul className="dialog-tabs">
                                <li className="is-active"><i className="icon icon-puppet"></i></li>
                                <li><i className="icon icon-cap"></i></li>
                                <li><i className="icon icon-shirt"></i></li>
                                <li><i className="icon icon-pants"></i></li>
                                <li><i className="icon icon-star"></i></li>
                                <li><i className="icon icon-puppet-plus"></i></li>
                            </ul>

                            <button className="dialog-tabs-subaction btn btn-r63b">
                                <i className="icon icon-wardrobe-hc"></i>
                            </button>
                        </nav>
                    </div>

                    <div className="dialog-content wardrobe-wrapper">

                        <ul className="wardrobe-tabs">
                            <li className="icon icon-gender-boy is-active">Boy</li>
                            <li className="icon icon-gender-girl">Girl</li>
                        </ul>

                        <div className="wardrobe-content">

                            <div className="wardrobe-params">

                                <Scrollbar className="wardrobe-clothes">
                                    premier content
                                </Scrollbar>

                                <Scrollbar className="wardrobe-colors">
                                    <span style={{backgroundColor: '#bebebe'}}></span>
                                    <span className="is-active" style={{backgroundColor: '#816434'}}>
                                        <i className="icon icon-small icon-hc"></i>
                                    </span>
                                    <span style={{backgroundColor: '#5c4b32'}}></span>
                                    <span style={{backgroundColor: '#c79721'}}></span>
                                    <span style={{backgroundColor: '#ddd59d'}}></span>
                                </Scrollbar>
                            </div>

                            <div className="wardrobe-preview">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="wardrobe-hc">

                </div>
            </Dialog>
        )
    }
}