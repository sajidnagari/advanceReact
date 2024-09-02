import React from 'react'
import { useGlobalState } from '../globalContext/globalContext'

 const Home = () => {
  const { user, count }= useGlobalState()
   
 
  return (
    <div>
      <h1>Welcome to Home Page</h1>
        First Name {user}
        <p style={{margin: "10px"}}>
          count {count}
          </p>
    </div>
  )
}
export default Home