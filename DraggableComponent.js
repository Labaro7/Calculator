import React, { useState } from 'react';
import Calculator from './Calculator';

class DraggableComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0,
            isDragging: false
        }
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown = (event) => {
        this.setState({
            isDragging: true
        })
    };

    handleMouseMove = (event) => {
        if (this.state.isDragging) {
            this.setState({
                x: this.state.x + event.movementX,
                y: this.state.y + event.movementY,
            });
        }
    };

    handleMouseUp = (event) => {
        this.setState({
            isDragging: false
        })
    };

    render(){
        return (
            <div
                style={{
                    position: 'absolute',
                    top: this.state.y,
                    left: this.state.x,
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'black',
                    cursor: 'grab',
                }}

                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}
                >
                <Calculator />
            </div>
        );
    }
}

export default DraggableComponent;
