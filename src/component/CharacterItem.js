import React from 'react'
import { Link } from "react-router-dom";


const CharacterItem = ({ item }) => {

  return (
    <>
      {item.img && <Link to={`${item.name}`}>
        <div className='card'>
          <img src={item.img} alt='' />
          <div className="card__nickname">{item.nickname}</div>
        </div>
      </Link>}
    </>
  )
}

export default CharacterItem
