import React from 'react';
import Constants from '../interface/Constants';

export class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: props.kind,
            references: props.references,
            requiredValue: props.requiredValue,
            value: props.value,
            onClick = props.onClick
        };
    }

    renderCell() {

    }

    render() {
        if (this.state.value) {
            return <td>{this.state.value}</td>;
        }
        else {
            return <td onClick={this.state.onClick}></td>;
        }
    }
}