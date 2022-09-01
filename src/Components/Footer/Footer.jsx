import React from 'react'
import './Footer.css'
import { useState } from 'react';
import {FaCaretDown} from "react-icons/fa";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Who Are You?");
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      user: "",
    }
  );
  
  console.log(user);
  let name,value;
  const getUserData = (e) => {
     name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value ,});
  }
  const postData = async (e) => {
    e.preventDefault();
    // const  {name, email, user}=user;
    if(user.name && user.email && user.user)
    {
    const response = await fetch('https://lepses-promotion-backend-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name:user.name,
          email:user.email,
          user:user.user,
      }),
    }
    );
    if(response)
    {
      setUser(  {
        name: "",
        email: "",
        user: "",
      });
      alert("Thank you for your interest. We will get back to you soon!");
    }
  }
  else
  {
    alert("Please fill all the fields");
  }
    console.log(user); 
  };
  const options=['School Student','College Student','Educator'];
  return (
    <div className="Footer-Outer" id='Launch'>
      <div className="Footer-Inner">
        <h1>Get <span>Notified</span> For <span>Launch</span></h1>
        <div className='Footer-para'>
          <p>Be the first, to witness the revolution on a regular basis. And Guess what?
            It's FREEEEE.
             &nbsp;We know we are biased, but we have been facing this problem for a long time. This product is revolutionary and will change the way you do things.</p>
        </div>
        <form className='contact-card'>      
          <div className='inner-contact-card'>
  <input name="name"
   type="text" 
   className="feedback-input" 
   placeholder="Name"
   onChange={getUserData}
   value={user.name}
   required=""
    />   
  <input 
  name="email" 
  type="text" 
  className="feedback-input" 
  placeholder="Email" 
  onChange={getUserData}
  value={user.email}
  />
  
  <div className="dropdown">
                      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                     {selected}
                        <span><FaCaretDown/></span>
                      </div>
                      {isActive && (
                      <div className="dropdown-content">
                      {
                        options.map((option)=>(
                          <option onClick={(e)=>{
                            setSelected(option)
                            setIsActive(false)
                            user.user=option;
                          }} className="dropdown-item">
                         {option}
                        </option>
                        ))}
                      </div>
                      )}
                    </div>
                    <div className="submit-div">
  <input 
  type="submit" 
  className="submit-form" 
  value="SUBMIT"
  onClick={postData}/>
  </div>
  </div>
</form>
      </div>
      <div className="footer-details">
        <div className="footer-set1">
         <div className="section-1">
          <h1>Company</h1>
          <p>Lepses Private Limited</p>
          <p>Career Opportunities</p>
          <p>News</p>
         </div>
         <div className="section-2">
          <h1>Community</h1>
          <p>Support</p>
          <p>Commnity Guidelines</p>
          <p>Safety Center</p>
         </div>
        </div>
        <div className="footer-set2">
        <div className="section-3">
          <h1>Legal</h1>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Terms and Conditions</p>
         </div>
         <div className="section-4">
          <h1>Team</h1>
          <p>Team Lepses</p>
          <p>How The Journey Began</p>
         </div>
        </div>
      </div>
    </div>
  )
}
export default Footer