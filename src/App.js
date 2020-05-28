import React, { Component } from 'react';

import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
    state = {
        username: 'Sherlock Holmes',
    };

    handleOnChange = (event) => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <div className="App">
                <UserInput
                    username={this.state.username}
                    onChange={this.handleOnChange}
                />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;
