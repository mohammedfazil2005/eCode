import React, { useContext, useState } from 'react'
import './PatternHeader.css'
import { UserContextAPI } from '../../context/UserContext'
import PatternsContent from '../patternsContent/PatternsContent'
import { Spinner } from 'react-bootstrap'


const PatternHeader = () => {

     const {isStored,setIsStored}=useContext(UserContextAPI)
      const [loader,setLoader]=useState(false)

      


    const learningClick=()=>{
        sessionStorage.setItem("user","stored")
        setIsStored(true)
    }

      setTimeout(()=>{
        setLoader(true)
      },500)
    


  return (
    <div className='container pattern-parent'>
       {loader? isStored?<PatternsContent/>:<div className="pattern-header">
             <h1>Hey! I’m Mohammed Fazil.</h1>
        <h6>I’m here to guide you with powerful interview-cracking tips and logical coding questions designed to sharpen your problem-solving skills.</h6>
        <p>Make sure you have a good understanding of JavaScript basics — because mastering patterns, logic, and algorithms starts there!</p>
        <button onClick={learningClick}>Start Learning</button>
        </div>:<div  className='text-center'> <Spinner style={{color:'white',marginTop:'200px'}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>
      }
    </div>
  )
}

export default PatternHeader
