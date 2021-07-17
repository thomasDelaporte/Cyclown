import React from 'react';

import LandingPanel from '../../components/LandingPanel';
import './index.scss';

export default class Hotel extends React.Component<any, any> {

    render(){
        return (
            <section className="hotel">
                <LandingPanel />
            </section>
        )
    }
}