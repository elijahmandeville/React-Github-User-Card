import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

class UserCard extends Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios
        .get("https://api.github.com/users/elijahmandeville/folowers")
        //Step 1: Set state to followers: { followers: res.data.?? }
        .then(res => this.setState(/* ^^ Here */))
        .catch(err => console.log("Error: ", err))
    }

    render() {
        return (
            <div className="card">
                {/* Step 2: Figure out passing of user state props from App.js. Then use elements below */}
                <img src={props.info.user.avatar_url} alt="User's avatar" className="avatar img" /> <br />
                <p>{props.info.user.login}</p>
                <p>Link to {this.props.info.user.login}'s info: <a href={props.info.user.url} /></p>
                <h4>Followers:</h4> <br />
                {this.state.followers.map((item, index) => {
                    return <p>{item}</p>
                })}
            </div>
        )
    }
    
}

export default UserCard
