import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface DraggableProps {
    children: (styleDragable: any, startDraging: any) => ReactNode,
    defaultPos?: [number, number]
}

export default class Draggable extends React.PureComponent<DraggableProps, any> {

    constructor(props){
        super(props);

        let x = this.props.defaultPos ? this.props.defaultPos[0] : 300;
        let y = this.props.defaultPos ? this.props.defaultPos[1] : 200;

        this.state = {
            isDragging: false,
            x,
            y,
        }
    }

    componentWillMount() {
        document.addEventListener('mousemove', this.handleDraging);
        document.addEventListener('mouseup', this.stopDraging);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleDraging);
        document.removeEventListener('mouseup', this.stopDraging);
    }

    startDraging = (e) => {
        this.setState({ isDragging: true });
    }

    handleDraging = (e) => {
        
        if(!this.state.isDragging) return;
        
        const newX =  this.state.x + e.movementX;
        const newY = this.state.y + e.movementY;

        this.setState({ x: newX, y: newY });
    }

    stopDraging = () => {

        if(!this.state.isDragging) return;
        this.setState({ isDragging: false });
    }

    render(){
        return this.props.children({ top: this.state.y, left: this.state.x }, this.startDraging);
    }
}