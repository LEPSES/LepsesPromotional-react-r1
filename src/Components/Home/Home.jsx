import React from 'react'
import image from '../../assets/banner-bg.svg'
import './Home.css'

const Home = () => {

  return (
    <div className='Outerclass' id='Home'>
         <div className='header' data-aos="fade-right">
             <h1>Dear, <br /> <span>STUDENTS</span>&nbsp;and <br /><span>EDUCATORS</span></h1>
             <p>Get ready to JOIN the LEPSES wave, because this is how we are going to revolutionize the way you teach and study.</p>
          <div>   <a href="#about" className="main-button-slider">KNOW US BETTER</a></div>
         </div>
         <div data-aos="fade-left">
         <img src={image} alt="" />
         </div>
        </div>
  )
}

export default Home