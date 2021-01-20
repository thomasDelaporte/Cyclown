import React from 'react';

import './index.scss';

export default class AvatarView extends React.PureComponent<any, any> {

    render(){
        return (
            <div className="user-infos frame-100">
                
                <div className="frame-header">

                    <i className="icon icon-home"></i>
                    <h3>EZ-C2</h3>

                    <button className="btn btn-volter btn-action">
                        <i className="icon icon-close-thin"></i>
                    </button>
                </div>

                <div className="user-infos-content">

                    <div className="frame-card user-infos-avatar">
                        <img src="https://www.habborator.org/exec/imager/directions/4.gif" />
                    </div>

                    <div className="user-infos-badges">
                        <img src="https://content.puhekupla.com/img/badges/DE78E.png" />
                        <img src="https://content.puhekupla.com/img/badges/ACH_Profile_Gimmegimme_13.png" />
                        <img src="https://content.puhekupla.com/img/badges/DE70E.png" />
                        <img src="https://content.puhekupla.com/img/badges/V2113.png" />

                        <img src="https://www.habbo.com/habbo-imaging/badge/b06134t09010a4872f64ad6a5743cc3ba72069e03d3a.gif" 
                            className="user-infos-badges-guild" />
                    </div>
                </div>

                <hr />

                <textarea className="frame-card user-infos-motto is-own" spellcheck="false">
                    Smile, because it confuses people.
                </textarea>

                <div className="frame-footer">
                    <p className="user-infos-achievement">Achievement score <br/>1433</p>

                    <ul className="user-infos-relationships">
                        <li className="icon icon-relation-skull"><u>Fiona3..</u></li>
                        <li className="icon icon-relation-friend"><u>jahanvi21</u>and 21 others</li>
                    </ul>
                </div>
            </div>
        )
    }
}