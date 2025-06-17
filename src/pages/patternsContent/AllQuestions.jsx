import React, { useContext } from 'react'
import { UserContextAPI } from '../../context/UserContext'

const AllQuestions = () => {
    const {boxval,setBoxVal}=useContext(UserContextAPI)
    
  return (
    <div>
        <div className='btn-option-div'>
                <button onClick={()=>setBoxVal("patterns")}>View patterns <i class="fa-solid fa-arrow-right"></i></button>
            </div>
    </div>
  )
}

export default AllQuestions
