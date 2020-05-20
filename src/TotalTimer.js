import React, { Component } from "react";
import "./App.css";
import Timer from './Timer';

class TotalTimer extends Component {
    state = {
        timerTotalOn: false,
        timerTotalStart: 0,
        timerTotalTime: 0,
    };

    constructor(props) {
        super(props);
    }

    startTotalTimer = () => {
        this.setState({
            timerTotalOn: true,
            timerTotalTime: this.state.timerTotalTime,
            timerTotalStart: Date.now() - this.state.timerTotalTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTotalTime: Date.now() - this.state.timerTotalStart
            });
        }, this.props.interval);
    };

    stopTotalTimer = () => {
        this.setState({ timerTotalOn: false });
        clearInterval(this.timer);
    };

    resetTotalTimer = (value) => {
        this.setState({
            timerTotalTime: this.state.timerTotalTime - value
        });
    };

    render() {
        const { timerTotalTime } = this.state;
        let miliseconds = ("0" + (Math.floor(timerTotalTime / 10) % 100)).slice(-2) + "0";
        let seconds = ("0" + (Math.floor(timerTotalTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTotalTime / 60000) % 60)).slice(-2);
        return (
            <div>
                <div>
                    <h3>Total Timer</h3>
                </div>
                <div>
                    <h3>{minutes} : {seconds} . {miliseconds}</h3>
                </div>
                <Timer resetTotalTimer={this.resetTotalTimer} stopTotalTimer={this.stopTotalTimer} startTotalTimer={this.startTotalTimer} interval={10000} timerName={"Timer 1"} />
                <Timer resetTotalTimer={this.resetTotalTimer} stopTotalTimer={this.stopTotalTimer} startTotalTimer={this.startTotalTimer} interval={1000} timerName={"Timer 2"} />
                <Timer resetTotalTimer={this.resetTotalTimer} stopTotalTimer={this.stopTotalTimer} startTotalTimer={this.startTotalTimer} interval={100} timerName={"Timer 3"} />
            </div>
        );
    }
}

export default TotalTimer;