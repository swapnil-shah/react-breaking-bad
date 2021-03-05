import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const CharacterProfile = ({ match }) => {
  const character = match.params.id
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      let response = await axios(`https://www.breakingbadapi.com/api/characters/${character}`);
      let data = await response.data;
      console.log(data)
      setProfile(data);
      setLoading(true)
    }
    getUser()
  }, [character])
  return (
    <>
      <Link to="/">Back to Home</Link>
      { loading && <h1>{profile.map(item => (
        <div key={item.char_id}>{item.name}</div>
      ))}</h1>}
    </>
  )
}

export default CharacterProfile
