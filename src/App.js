import React, { Component } from "react";
import './App.css';
import TotalTimer from './TotalTimer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Timers">
                    <TotalTimer />
                </div>
            </div>
        );
    }
}

export default App;