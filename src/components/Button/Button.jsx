import React from 'react'
import "./_button.scss"

export const Button = ({children,icon}) => {

  return (
      <button className='button'>
        {icon}
        {children}
      </button>
  )
}

