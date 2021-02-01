import React from 'react';

export class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            value: props.value,
            isHeld: props.isHeld
        };
    }

    roll() {
        this.setState({ value: this.props.value });
    }

    hold() {
        this.props.onHold();
        this.setState({ isHeld: this.props.isHeld });
    }

    render() {
        let button = "";
        if (this.props.value > 0 && !this.state.isHeld) {
            button = <button onClick={() => this.hold()}>
                Hold
            </button>
        }
        return (
            <div className={`dice ${this.state.isHeld ? "held" : "free"}`}>
                {this.props.value}
                {button}
            </div>);
    }
}