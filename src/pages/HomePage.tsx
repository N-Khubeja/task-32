import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchUsers } from '../store/users/action'
import { decrement, increment } from '../store/users/user.slice'

const HomePage:React.FC = () => {
  const {count,error,isLoading,users} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },[])

  if(isLoading) return <h1>...LOADING</h1>
    
  return (
    <div>
        <h1>{count}</h1>
      {users.map(({id,name,email}) => 
      <div key={id}>
        <h3>{name}</h3>
        <h4>{email}</h4>
      </div>)}

      {error && <h1>{error}</h1>}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default HomePage