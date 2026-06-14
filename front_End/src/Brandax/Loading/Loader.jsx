import React from 'react'
import loading from "../animation/loader.gif"

function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
       <img src={loading} alt="Loading..." className="w-30 h-30" />
    </div>
  )
}

export default Loader