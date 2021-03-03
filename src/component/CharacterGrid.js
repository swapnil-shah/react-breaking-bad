import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return (
    <>
      {isLoading ? <Spinner /> :
        <div className="cards">
          {items.map(item => (
            <CharacterItem item={item} key={item.char_id} />
          ))}
        </div>}
    </>
  )
}

export default CharacterGrid
