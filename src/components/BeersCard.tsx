import React from 'react'
import { useNavigate } from 'react-router-dom'

const BeersCard:React.FC<any> = ({beer:{id,image_url,name,tagline}}) => {
    const navigate = useNavigate()
  return (
    <div>
        <div onClick={() => navigate(`/beer/${id}`)}>
            <img src={image_url} alt="" />
        </div>
        <div>
            <h1>{name}</h1>
            <p>{tagline}</p>
        </div>
    </div>
  )
}

export default BeersCard