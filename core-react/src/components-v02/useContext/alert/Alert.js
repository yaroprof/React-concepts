import React, {useContext} from 'react'
import { AlertContext } from '../UseContext'



const Alert = () => {
  const alert = useContext(AlertContext)

  if(!alert) return null 
  
  return (
    <div className='alert'>
      Very important message!
    </div>
  )
}

export default Alert