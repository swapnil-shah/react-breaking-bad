import React from 'react'
import spinner from '../img/spinner.gif'

const Spinner = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <img src={spinner} alt="spinner" style={{ width: '100px' }} />
    </div>
  )
}

export default Spinner
