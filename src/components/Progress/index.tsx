import React from 'react';

import './index.scss';

export default function progress(props) {

    const percentage = (props.value * 100 / props.max) + '%';

    return (
        <div className={"progressbar" + (props.className ? " " + props.className :  '')} data-label={props.label}>
            <span style={{width: percentage}}></span>
        </div>
    )
}