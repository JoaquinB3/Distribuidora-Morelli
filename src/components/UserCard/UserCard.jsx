import React from 'react'
import "./_userCard.scss"
import { Button } from '../Button/Button'

// const name="Jose Francisco Arce"
// const arroba="jf_arce"


export default function UserCard({avatar, name, arroba}) {

  return (
    <div className='userCard'>
    
      <img className='img-userCard' src={avatar} alt="" />

      <div className='containerInfo'>
        <h3 className='usuario-userCard'>{name}</h3>
        <p className='arroba-userCard'>{arroba}</p>
      </div>
      <Button/>
    </div>
  )
}
