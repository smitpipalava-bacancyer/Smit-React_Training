import { createContext } from 'react'
import Profile from './Profile'

export const firstContainer = createContext();

function Task4() {
  
  const data = {
    name : "smit",
    age : 21,
    company : "BACANCY SERVICES PRIVATE LIMITED"
  }

  return (
    <>
      <firstContainer.Provider value={data}>
        <Profile />
      </firstContainer.Provider>
    </>
  )
}

export default Task4