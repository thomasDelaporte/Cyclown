import React from 'react';
import Dialog from '../../components/dialog';

import AchievementsMain from './main/';
import AchievementsCategory from './category/';

export default class Achievements extends React.PureComponent {
    
    render(){
        return (
            <Dialog title="Achievements" className="achievements">
                
                <AchievementsMain />
            </Dialog>
        )
    }
}