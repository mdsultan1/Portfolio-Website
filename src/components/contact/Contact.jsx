import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='contact-container' id = "contact">

        <h1>Contact Me</h1>
        <div className='contact-info'>
            <div className='contact-wrapper'>
                <img src="https://img.icons8.com/color/48/000000/ringer-volume.png"/>
                 <h4>Phone Number</h4>
                <p>+1 204 881 5497</p>
            </div>
            <div className='contact-wrapper'>
                <img src="https://img.icons8.com/fluency/48/000000/new-post.png"/>
                <h4>Email</h4>
                <p>md.sultan1@outlook.com</p>
            </div>
        </div>
        <span style={{fontSize:"25px"}}>&#169; Mohammed Sultan</span>
    </div>
  )
}
export default Contact