import React from 'react';

export default class AchievementsMain extends React.PureComponent {

    render(){
        return (
            <div className="dialog-content">

                <ul className="achievements-nav">
                    <li>
                        <h5>Your Profile</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_identity_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>

                    <li>
                        <h5>Make Friends</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_social_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>

                    <li>
                        <h5>Explore Habbo</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_explore_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>
                    
                    <li>
                        <h5>Pets</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_pets_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>

                    <li>
                        <h5>Games</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_games_inactive.png" />
                            <span>30/86</span>
                        </div>
                    </li>

                    <li>
                        <h5>Build Your Room</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_room_builder_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>

                    <li>
                        <h5>Music</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_music_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>

                    <li>
                        <h5>About Habbo</h5>

                        <div className="achievements-icon-item">
                            <img src="https://images.habbo.com/c_images/Quests/achcategory_tools_active.png" />
                            <span>30/86</span>
                        </div>
                    </li>
                </ul>

                <progress className="progressbar achievements-total" value="108" max="1335" 
                    data-label="Total Achievements: 108/1335"></progress>

                <p className="achievements-score">Achievement score: 1914</p>
            </div>
        )
    }
}