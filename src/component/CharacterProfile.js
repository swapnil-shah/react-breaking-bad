import React from 'react'

const CharacterProfile = ({ profile, loading }) => {
  return (
    loading && <div className="profile"></div>
  )
}

export default CharacterProfile
