import React, { Component } from 'react';
<<<<<<< HEAD
import UserInput from './components/UserInput';
import { ConnectedUsers } from './components/Users';
=======
import UserInput from './components/UserInput'

import { ConnectedUsers } from './components/Users'
>>>>>>> eb6bb67da8fb827982339f8511b35ab7b479ceaa

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers />
      </div>
    );
  }
}

export default App;
