import React from 'react'
import './Footer.css'

const Footer = () => {
  
  return (
    <div className='container footer-parent'>
      <div className='footer-left'>
         <h6>CONTACT ME!</h6> 
         <p>We cant solve your problem if you don't tell us about it!</p>
         <div>
          <input type="text" placeholder='FULL NAME' />
          <input type="text" placeholder='EMAIL' />
          <textarea name="" id="" rows={7} placeholder='MESSAGE'></textarea>
         </div>
         <button>SEND</button>
      </div>
      <div className='footer-right'>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  )
}

export default Footer
