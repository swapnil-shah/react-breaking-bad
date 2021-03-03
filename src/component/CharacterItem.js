import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    item.img && <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            {item.appearance.length > 0 && (
              <li>
                <strong>Season appearance: </strong>
                {item.appearance.map((season, i, arr) => {
                  if (arr.length > 1 && arr.length === i + 1) {
                    return ` and ${season}`
                  }
                  if (arr.length === 1 || arr.length === i + 2) {
                    return `${season}`
                  }
                  else {
                    return `${season}, `
                  }
                })}
              </li>
            )}
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
