import React from 'react'
import "./_button.scss"

export const Button = ({children,icon,onClick}) => {

  return (
      <button className='button' onClick={onClick}>
        {icon}
        {children}
      </button>
  )
}

