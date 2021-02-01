import React from 'react';
import { Dice } from './Dice';

export class Roll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dice: [
                new Dice({ position: "l", value: null}),
                new Dice({ position: "l", value: null}),
                new Dice({ position: "l", value: null}),
                new Dice({ position: "l", value: null}),
                new Dice({ position: "l", value: null}),
            ]
        };
    }

    roll() {
        const dice = this.state.dice.slice();
        let newDice = dice.map(d => {
            let rolled = Math.floor(Math.random() * 6) + 1;
            console.log(rolled);
            d.props.value = rolled;
            return d;
        });
        this.setState({ dice: newDice });
    }

    reset() {
        this.setState({
            value: null,
            isHeld: false,
            position: "l",
        });
    }

    hold(index) {
        const dice = this.state.dice.slice();
        dice[index].isHeld = true;
        this.setState({ dice: dice });
    }

    render() {
        return (<div>
            <button onClick={() => this.roll()}>Roll</button>
            {this.state.dice.length}
            {this.state.dice.reduce((pv, cv) => pv + (cv.props.value ? cv.props.value : 0), 0)}
            {this.state.dice.map((d, index) => {
                return <Dice
                    key={index}
                    index={index}
                    value={d.props.value}
                    onHold={this.hold.bind(this, index)}
                />
            })}
        </div>)
    }
}