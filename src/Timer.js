import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0,
    };

    constructor(props) {
        super(props);
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, this.props.interval);
        this.props.startTotalTimer();
    };

    stopTimer = () => {
        this.props.stopTotalTimer();
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
        this.props.resetTotalTimer(this.state.timerTime);
    };
    
    render() {
        const { timerTime } = this.state;
        let miliseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2) + "0";
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        return (
            <div class="timer-face">
                <div>{this.props.timerName}</div>
                <div>
                    {minutes} : {seconds} . {miliseconds}
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button class="button" onClick={this.startTimer}>Play</button>
                )}
                {this.state.timerOn === true && (
                    <button class="button" onClick={this.stopTimer}>Pause</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button class="button" onClick={this.startTimer}>Play</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button class="button" onClick={this.resetTimer}>Reset</button>
                )}
            </div>
        );
    }
}

export default Timer;