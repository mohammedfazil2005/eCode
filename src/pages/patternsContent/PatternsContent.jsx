import React, { useContext, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './PatternsContent.css'
import  { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import AllPatterns from './AllPatterns';
import AllQuestions from './AllQuestions';
import { UserContextAPI } from '../../context/UserContext';




const PatternsContent = () => {

  const [value,setValue]=useState("")
  const {boxval,setBoxVal}=useContext(UserContextAPI)

  const onBoxClick=()=>{
    if(boxval!="") {
    document.querySelector(".patterns-content-parent").style.display="none"

    }
  }

  useEffect(()=>{
    onBoxClick()
  },[boxval])
     
  return (
    <>

    <div className='container patterns-content-parent'>
      <div onClick={()=>setBoxVal("questions")}>
        <h1>Interview <span>Questions</span></h1>
        <button onClick={()=>setBoxVal("questions")}>View <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /> </button>
      </div>
      <div onClick={()=>setBoxVal("patterns")}>
        <h1>Javascript <span>Patterns</span></h1>
        <button onClick={()=>setBoxVal("patterns")}>View <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /></button>
      </div>
    </div>

    {boxval=="patterns"?<AllPatterns/>:boxval=="questions"?<AllQuestions/>:""}
   
    
  </>
  )
}

export default PatternsContent
