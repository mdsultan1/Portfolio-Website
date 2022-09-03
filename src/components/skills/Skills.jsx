import React from 'react'
import "./skills.css"

const Skills = () => {
  return (
    <div className='skills' id = "skills">

<h1> My Skills </h1>

    <div className='skills-wrapper' >
        
        <div className='logo-wrapper'>
            <img src="https://img.icons8.com/color/96/000000/python--v1.png" alt = "img"/>
            <p>Python</p>
        </div>
        
        <div className='logo-wrapper'>
             <img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt = "img"/>
             <p>Node.js</p>

        </div>
        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt = "img"/>

        <p>Javascript</p>
        </div>
        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/nolan/64/express-js.png" alt = "img"/>
        <p>Express Js</p>

        </div>
        
        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/ultraviolet/96/000000/react--v1.png" alt = "img"/>
        <p>React</p>
        </div>

        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt = "img"/>
        <p>Html</p>
        </div>

        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/color/96/000000/css3.png" alt = "img"/>
        <p>Css</p>
        </div>

        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt = "img"/>
        <p>Bootstrap</p>
        </div>

        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt = "img"/>
        <p>Mongodb</p>
        </div>
        <div className='logo-wrapper'>
        <img src="https://img.icons8.com/color/96/000000/git.png" alt = "img"/>
        <p>Git</p>
        </div>

    </div>
    </div>
  )
}

export default Skills