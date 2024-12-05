import React from 'react'
import { CircleLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className=' flex justify-center items-center text-white'>

        <CircleLoader color='#ffff'></CircleLoader>
      
    </div>
  )
}

export default loading
