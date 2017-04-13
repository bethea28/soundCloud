
import React from 'react'
import {Link} from 'react-router'
import css from '../css/main.css'

const DisplayUser = (props) => {
  return (
    <article>

        <img onClick = {props.showUserTracks(props.id)} className = 'avatars' src = {props.avatar_url}/>
        <h5> {props.username} </h5>
        <h5> {props.city} </h5>


    </article>

  )
}


export default DisplayUser
