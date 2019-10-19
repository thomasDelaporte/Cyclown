import React from 'react';
import Scrollbar from '../../../components/scrollbar';

export default class AchievementsCategory extends React.PureComponent {

    render(){
        return (
            
            <React.Fragment>

                <div className="dialog-cheader">

                    <i className="icon icon-big-arrow-left"></i>

                    <div className="achievements-cheader-info">
                        <h4>Your Profile</h4>
                        <small>30/86 badges collected</small>
                    </div>
                    
                    <img src="https://images.habbo.com/c_images/Quests/achicon_identity.png" />
                </div>

                <div className="dialog-content">
                    
                    <Scrollbar className="achievements-badges">
                
                    </Scrollbar>

                    <div className="achievements-badge">

                        <div className="achievements-badge-info">
                            a
                        </div>

                        <div className="achievements-badge-content">
                            <h6>True You !</h6>

                            <progress className="progressbar" value="0" max="1" 
                                data-label="0/1 to the next level"></progress>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}