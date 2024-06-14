'use client'

import React from 'react'

function btn({name}) {
    console.log(name)
  return (
    <div>
      <button onClick={()=>alert(name)}>Submit</button>
    </div>
  )
}

export default btn