import React from 'react'
import css from '../css/main.css'


const DropDown = (props) => {
  return (

    <div className = 'dropDown'>
      <select className = 'dropDownOptions' onChange = {props.handleChangeDropDown}>
        <option >Select Genre</option>
        <option name = 'genre'  value="Alternative Rock">Alternative Rock</option>
        <option name = 'genre'  value="Hip-hop &amp; Rap">Hip-hop & Rap</option>
        <option name = 'genre'  value="Pop">Pop</option>
        <option name = 'genre'  value="Rock">Rock</option>
        <option name = 'genre'  value="Ambient">Ambient</option>
        <option name = 'genre'  value="Classical">Classical</option>
        <option name = 'genre'  value="Country">Country</option>
        <option name = 'genre'  value="Dance &amp; EDM">Dance & EDM;</option>
        <option name = 'genre'  value="Dancehall">Dancehall</option>
        <option name = 'genre'  value="Deep House">Deep House</option>
        <option name = 'genre'  value="Disco">Disco</option>
        <option name = 'genre'  value="Dubstep">Dubstep</option>
        <option name = 'genre'  value="Electronic">Electronic</option>
        <option name = 'genre'  value="Folk &amp; Singer-Songwriter">Folk & Singer-Songwriter</option>
        <option name = 'genre'  value="House">House</option>
        <option name = 'genre'  value="Indie">Indie</option>
        <option name = 'genre'  value="Jazz &amp; Blues">Jazz & Blues</option>
        <option name = 'genre'  value="Latin">Latin</option>
        <option name = 'genre'  value="Metal">Metal</option>
        <option name = 'genre'  value="Piano">Piano</option>
        <option name = 'genre'  value="R&amp;B &amp; Soul">R&B & Soul</option>
        <option name = 'genre'  value="Reggae">Reggae</option>
        <option name = 'genre'  value="Reggaeton">Reggaeton</option>
        <option name = 'genre'  value="Rock">Rock</option>
        <option name = 'genre'  value="Soundtrack">Soundtrack</option>
        <option name = 'genre'  value="Techno">Techno</option>
        <option name = 'genre'  value="Trance">Trance</option>
        <option name = 'genre'  value="Trap">Trap</option>
        <option name = 'genre'  value="Triphop">Triphop</option>
        <option name = 'genre'  value="World">World</option>
        <option name = 'genre'  value="Drum &amp; Bass">Drum & Bass</option>
      </select>
    </div>



  )
}

  export default DropDown
