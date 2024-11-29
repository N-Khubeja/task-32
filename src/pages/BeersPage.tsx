import React, { useState } from 'react'
import { useFetchBeersQuery } from '../store/beer/beer.api'
import BeersCard from '../components/BeersCard'

const BeersPage:React.FC = () => {
    const [page,setPage] = useState(1)
    const [per_page,set_perPage] = useState(10)
    const {data,isLoading} = useFetchBeersQuery({page,per_page})

    if(isLoading) return <p>...LOADING</p>
  return (
    <div>
        <select value={page} onChange={(e) => setPage(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>

        <select value={per_page} onChange={(e) => set_perPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={80}>80</option>
        </select>

        <h1>Beers</h1>
        <div>
            {data?.map((beer:any) => (
                <BeersCard key={beer.id} beer={beer}/>
            ))}
        </div>
    </div>
  )
}

export default BeersPage