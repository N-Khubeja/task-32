import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <div style={{display:'flex',gap:'10px'}}>
        <Link style={{color:'black'}} to={'/beers'}>beers</Link>
        <Link style={{color:'black'}} to={'/'}>home</Link>
    </div>
  )
}

export default Navbar