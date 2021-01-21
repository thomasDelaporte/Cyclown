import React from 'react';

import Dialog from '@components/Dialog';

import AchievementsMain from './main';
import AchievementsCategory from './category';

import './index.scss';

export default class Achievements extends React.PureComponent {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <Dialog title="Achievements" className="achievements">
                <AchievementsMain />
            </Dialog>
        )
    }
}