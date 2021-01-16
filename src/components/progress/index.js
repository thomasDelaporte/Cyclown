import React from 'react';

export default class Progress extends React.PureComponent {

    render(){

        const percentage = (this.props.value * 100 / this.props.max) + '%';

        return (
            <div className={"progressbar" + (this.props.className ? " " + this.props.className : '')} label={this.props.label}>
                <span style={{width: percentage}}></span>
            </div>
        )
    }
}