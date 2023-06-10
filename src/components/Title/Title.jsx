import React from 'react'
import './Title.scss'

export default function Title({title, align}) {
  return (
    <div className='title' style={{textAlign: align}}>
      {title}
      <div className='title-line'></div>
    </div>
  )
}
