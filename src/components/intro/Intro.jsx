import React from 'react'
import "./intro.css"
import M from "../../img/Remove background (1).png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Intro = () => {
  return (
      <div>

    <div className='nav'>
            <div className='left'>
                Sultan.
            </div>
            <div className='right'>
                <ul>
                    <li><a href = "#projects">Projects</a></li>
                    <li><a href = "#skills">Skills</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    <div className = "i" >
        

        <div className="i-left">
        <div className="i-left-wrapper">

            <h2 className='i-intro'>Hello, I'm </h2>
            <h1 className='i-name'>Mohammed Sultan</h1>
            <p className='i-bio'>I am a Computer Engineering student at University of Manitoba. 
                I am passionate about Technology, Programming, Finance and Problem solving.
             I aim to learn new aspects of Technology and diversify my knowledge and expertise.
            </p>
            <div className='btn-container'>

                <button  className='btn-git'>
                    <LinkedInIcon></LinkedInIcon>
                <a href = "https://www.linkedin.com/in/mohammed-sultan-9b5a91218/"className='git' target = "_blank">
                        LinkedIn
                </a>
                </button>
                <button  className='btn-git'>
                    <GitHubIcon></GitHubIcon>
                <a href = "https://github.com/mdsultan1"className='git' target = "_blank">
                        github
                </a>
                </button>
            </div>
        </div>
        </div>
        <div className="i-right">

            <div className='img-wrapper'>
            <img src = {M} alt = "img"/>
                
                 </div>

        </div>
        
    </div>
    <h1 id = 'projects' style={{marginTop: "30px", marginBottom:"50px", textAlign: "center", color: "rgb(65,105,225)"}}>My Projects</h1>
   
    </div>
  )
}

export default Intro