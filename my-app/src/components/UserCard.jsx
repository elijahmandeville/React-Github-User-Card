import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Followers from './Followers';

import '../App.css'

const UserCard = props => {
    const [followers, setFollowers] = useState([])
    console.log(props.info)

    useEffect(() => {
        axios
            .get("https://api.github.com/users/elijahmandeville/followers")
            //Step 1: Set state to followers: { followers: res.data.?? }
            .then(res => setFollowers(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])


    return (
        <div className="user-card">
            {/* Step 2: Figure out passing of user state props from App.js. Then use elements below */}
            <img src={props.info.user.avatar_url} alt="User's avatar" className="avatar img" /> <br />
            <h3>{props.info.user.login}</h3>
            <p>Link to {props.info.user.login}'s info <a href={props.info.user.html_url}>here</a> </p>
            <h4>Followers:</h4> <br />
            <div className="followers-div">
                {followers.map((item, index) => {
                    return <Followers key={item.id} item={item} />
                })}
            </div>
        </div>
    )

}

export default UserCard
