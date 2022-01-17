// import React, {Component} from 'react';
import React from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay'
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TimeDisplay/>
            </div>
        );
    }
}
export default App;
