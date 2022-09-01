import React from 'react'
import './Usp.css'
import left from '../../assets/left-bg-decor.svg'
import Left from '../../assets/left-image.svg'
import image1 from '../../assets/feature-college.svg'
import image2 from '../../assets/feature-school.svg'
import image3 from '../../assets/features-educators.svg'
const Usp = () => {
 
  return (
    <div className='Cover'>
    <div className='images'>
    <img className='Image'src={left} alt="" />
    <img src={Left} className='Image1'alt="" />
    </div>
    <div className='data'>
    <div className='carddata'>
       
        <img src={image2} alt="" />
         <div className='content' id='content-customize'>
             <h2 id='content-heading'>Customised Profile System</h2>
             <p>For every individual who is in search of custom powers. Bringing you the most advanced custom profile system, focused on growth.</p>
             </div>
    </div>
    <div className='carddata' >
       
        <img src={image1} alt="" />
         <div className='content'>
             <h2 id='content-heading'>Only Interest Based</h2>
             <p>We only serve and share what is good for you. Free from #Influence, good for #Health.</p>
             </div>
    </div>
    <div className='carddata' id='shift' >
       
        <img src={image3} alt="" />
         <div className='content'id='content-customize'>
             <h2 id='content-heading'>Where we are now?</h2>
             <p>We are in development phase but working hard to make it done as soon as possible. Many reasons to choose, many to wait, we are coming soon.</p>
             </div>
    </div>
    </div>
    </div>
  )
}

export default Usp