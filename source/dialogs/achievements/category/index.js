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
                        <span className="is-active"><img src="https://images.habbo.com/c_images/album1584/ACH_EmailVerification1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_Login3.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_AvatarLooks1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_RegistrationDuration9.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_Name1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_BasicClub1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_SafetyQuizGraduate1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_AllTimeHotelPresence12.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_Citizenship1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_VipHC1.gif" /></span>
                        <span><img src="https://images.habbo.com/c_images/album1584/ACH_BuildersClub1.gif" /></span>
                    </Scrollbar>

                    <div className="achievements-badge">

                        <img src="https://images.habbo.com/c_images/album1584/ACH_EmailVerification1.gif" className="achievements-badge-image" />

                        <div className="achievements-badge-content">
                            <h4>True You !</h4>
                            <small>Level 0/1</small>

                            <progress className="progressbar" value="0" max="1" 
                                data-label="0/1 to the next level"></progress>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}