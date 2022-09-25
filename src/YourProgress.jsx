import React from 'react'
import './App.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function YourProgress() {
  return (
    <div className='progressContent'>
      <ProgressBar animated now={100} />
    </div>
  )
}
