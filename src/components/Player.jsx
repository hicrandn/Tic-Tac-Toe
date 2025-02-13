import React from 'react'
import {useState} from 'react';

export default function Player  ({initialName, symbol,isActive})  {
    
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);

    function handleEditClick () {
        //setIsEditing(isEditing ? false : true);
        //setIsEditing(!isEditing);
        setIsEditing((editing)=> !editing)
        
    }

    function handleChange(event) {
     
      setPlayerName(event.target.value);

    }

   //let btnCaption = 'Edit';
    let editablePlayerName = <span className="player-name">{playerName}</span>;
   

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        //btnCaption = 'Save';
    }


  return (
   

          <li className = {isActive ? 'active': undefined}>
            <span className="player">
          {editablePlayerName}
          <span className = "player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
          </li>


  )
}


