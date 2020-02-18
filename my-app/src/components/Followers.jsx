import React from 'react'

function Followers(props) {
    console.log(props.info)
    return (
        <div className="card">
            <h1>{props.item.login}</h1>
            <img src={props.item.avatar_url} alt=""/>
            <p>Link to {props.item.login}'s GitHub <a href={props.item.html_url}>here</a></p>
        </div>
    )
}

export default Followers
