import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/elijahmandeville')
    .then(res => { 
      this.setState({ user: res.data})
      console.log(this.state.user)
    })
    .catch(err => console.log(err))
    console.log("componentDidMount running");
  }

  render() {
    return (
      <div className="App">
        <UserCard info={this.state} />
      </div>
    );
  }
}



export default App;
