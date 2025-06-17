import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { emailFunc } from '../../services/nodeMailer'
import { Spinner } from 'react-bootstrap'

const Footer = () => {

  const [data,setData]=useState({
    name:"",
    email:"",
    message:""
  })

  const [loader,setLoader]=useState(false)

  const onSendClick=async()=>{
    if(data.name&&data.email&&data.message){

      if(data.email.includes("@")){
        setLoader(true)
       try {
        const result=await emailFunc(data)
        if(result.status==200){
          toast.success("Your message has been sent!")
        }
        setData({...data,email:"",name:"",message:""})
        setLoader(false)
        window.scrollTo({top:0,behavior:'smooth'})
       } catch (error) {
        console.log(error)
       }
        
      }else{
        toast.error("Please enter a valid email!!")
      }


    }else{
      toast.error("All fields are required")
    }
  }

  
  return (
    <div className='container footer-parent'>
      {loader?<div  className='text-center'> <Spinner style={{color:'white',marginTop:'200px'}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>:
      <div className='footer-left'>
        <div className='heading-footer'>
        <div>
         <h6>CONTACT ME!</h6> 
         <p>We cant solve your problem if you don't tell us about it!</p>
         </div>
         <div>
        <Link target='_blank' to={'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAE__oSkBGXCTTASc27FPdUVxx8uRuYJn-6Q&keywords=mohammed%20fazil&origin=RICH_QUERY_SUGGESTION&position=0&searchId=eaf3419a-b15e-4371-ae9a-10871fb51ab4&sid=RWo&spellCorrectionEnabled=false'}><i class="fa-brands fa-linkedin me-3"></i></Link> 
        <Link target='_blank' to={'https://github.com/mohammedfazil2005'}> <i class="fa-brands fa-github"></i></Link> 
         </div>
         </div>
       <div className='input-footer-div'>
          <input value={data.name}  onChange={(e)=>setData({...data,name:e.target.value})} type="text" placeholder='FULL NAME' />
          <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} type="text" placeholder='EMAIL' />
          <textarea value={data.message} onChange={(e)=>setData({...data,message:e.target.value})} name="" id="" rows={7} placeholder='MESSAGE'></textarea>
         </div>
        
       <button onClick={onSendClick}>SEND</button>
      </div>
      
}

<div className="footer-right">
  <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
</div>
    </div>
  )
}

export default Footer
