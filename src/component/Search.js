import React, { useState } from 'react'

const Search = ({ getQuery }) => {

  const [text, setText] = useState('')

  const handleChange = (q) => {
    setText(q)
    getQuery(q)
  }
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search character..."
          className="form-control"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  )
}

export default Search
