import React, { useEffect } from 'react'
import video from '../../assets/personVideo.mp4'
import coder from '../../assets/coder.png'
import './Header.css'
import { Link } from 'react-router-dom'
import Service from '../services/Service'
import Footer from '../../components/footer/Footer'

const Header = () => {
   
    

    return (
        <>
        <div className='container header-container'  >
            <div className='header-content-div' >
                <h1>Learn JavaScript <br /> Patterns <span>Easily!!</span></h1>
                <h2><p>The interactive way to master <br /> loops, logic, and pattern printing </p> <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /></h2>
                <div>
                  <Link to={'/patterns'}><button>Learn now!</button></Link>
                </div>
                {/* <div>
                   
                    <img src="https://www.mindrops.com/images/nodejs-image.webp" alt="" />
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                </div> */}
            </div>
            <div></div>
            <div>
                {/* <video src={video} autoPlay loop muted></video> */}
                <img src={coder} alt="" className='coder-img' />
            </div>
        </div>

        <Service/>
        <hr style={{color:'white',marginTop:'40px'}}/>
        <Footer/>
       
    
        </>
    )
}

export default Header
