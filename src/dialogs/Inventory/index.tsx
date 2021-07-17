import React from 'react';

import Dialog from '@components/Dialog';
import Scrollbar from '@components/Scrollbar';

import './index.scss';

export default class Inventory extends React.PureComponent<any, any> {

    render(){
        return (
            <Dialog className="inventory" title="Inventory" defaultPos={[1000, 200]}>
                
                <div className="dialog-nav">

                    <ul className="dialog-tabs">
                        <li className="is-active">Furniture</li>
                        <li>Rentables</li>
                        <li>Pets</li>
                        <li>Achieved badges</li>
                        <li>Bots</li>
                    </ul>
                </div>

                <div className="dialog-content">
                    
                    <div className="dialog-filter">

                        <input className="input" type="text" />

                        <select className="dropdown">
                            <option>Any type</option>
                            <option>Floor items</option>
                            <option>Wall items</option>
                        </select>
                    </div>

                    <div className="inventory-content">

                        <Scrollbar>
                            <ul className="items-list">
                                <li>
                                    <img src={ require('../../assets/web-gallery/inventory/small_rainbow_c21_crackable1.png') } />
                                    <span>2</span>
                                </li>
                                <li className="is-active"><img src={ require('../../assets/web-gallery/inventory/small_vwave_c21_barstool.png') } /></li>
                                <li><img src={ require('../../assets/web-gallery/inventory/small_vwave_c21_bench.png') } /></li>
                                <li><img src={ require('../../assets/web-gallery/inventory/small_vwave_c21_buildings.png') } /></li>
                                <li><img src={ require('../../assets/web-gallery/inventory/small_vwave_c21_buildings.png') } /></li>
                                <li><img src={ require('../../assets/web-gallery/inventory/small_vwave_c21_dumpster.png') } /></li>
                                <li><img src={ require('../../assets/web-gallery/inventory/small_vwave_c21_glitchrailcrnr.png') } /></li>
                            </ul>
                        </Scrollbar>
                        
                        <div className="inventory-content-render">
                        
                        </div>
                    </div>
                </div>
            </Dialog>
        )
    }
}