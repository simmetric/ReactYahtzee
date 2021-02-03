import React from 'react';
import { Dice } from './Dice';

const MAXROLLS = 30;
export class Roll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: 0,
            dice: [
                new Dice({ position: "l", value: null }),
                new Dice({ position: "l", value: null }),
                new Dice({ position: "l", value: null }),
                new Dice({ position: "l", value: null }),
                new Dice({ position: "l", value: null }),
            ]
        };
    }

    roll() {
        if (this.state.rolls < MAXROLLS) {
            const dice = this.state.dice.slice();
            let newDice = dice.map(d => {
                if (!d.isHeld) {
                    let rolled = Math.floor(Math.random() * 6) + 1;
                    console.log(rolled);
                    d.props.value = rolled;
                }
                return d;
            });
            this.setState({
                dice: newDice,
                rolls: this.state.rolls + 1
            });
        }
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
        dice[index].position = "r";
        this.setState({ dice: dice });
    }

    render() {
        return (<div>
            <button disabled={this.state.rolls >= MAXROLLS} onClick={() => this.roll()}>Roll</button>
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