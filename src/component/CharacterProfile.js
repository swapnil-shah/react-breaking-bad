import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Spinner from './Spinner'
import CharacterDetail from './CharacterDetail'

const CharacterProfile = ({ match, location }) => {
  window.history.pushState({}, null, location.pathname.replace(/\s+/g, '+').toLowerCase());
  const character = match.params.name.length ? match.params.name : location.pathname.replace("/", "").replace("+", " ")
  const [profile, setProfile] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      let response = await axios(`https://www.breakingbadapi.com/api/characters/?name=${character}`);
      let data = await response.data;
      console.log(data)
      setProfile(data);
      setLoading(false)
    }
    getUser()
  }, [character])
  return (
    <>
      <div className="back-container">
        <Link to="/" className="back-to-home">&#8592; Home page</Link>
      </div>
      { loading ? <Spinner /> : profile.map(item => (
        <CharacterDetail key={item.char_id} item={item} />
      ))}
    </>
  )
}

export default CharacterProfile
