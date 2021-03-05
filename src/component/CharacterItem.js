import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterProfile from './CharacterProfile'

const CharacterItem = ({ item }) => {
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(false)

  const getUser = async () => {
    let response = await axios(`https://www.breakingbadapi.com/api/characters/${item.char_id}`);
    let data = await response.data;
    setProfile(data);
    setLoading(true)
  };

  return (
    <>
      {loading && <CharacterProfile profile={profile} loading={loading} />}
      {item.img && <div className='card' onClick={getUser}>
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
      </div>}
    </>
  )
}

export default CharacterItem
