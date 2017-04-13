import React from 'react'
import css from '../css/main.css'



const Sorts = (props) => {
  return (
    <div>
      <div className = 'sorts'>
        <center>
          <h1> Sort By:</h1>

          <div onClick = {props.sortAZ}> <h2>Users A - Z</h2  ></div>
            <div style = {{height: 2}}> </div>
          <div onClick = {props.sortZA}> <h2> Users Z - A </h2  > </div>

        </center>
      </div>

    </div>

  )
}

export default Sorts
