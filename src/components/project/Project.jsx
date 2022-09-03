import React from 'react'

import "./project.css"
import P2 from "../../img/Screenshot 2022-09-02 at 8.12.43 PM.png"
import P1 from "../../img/Screenshot 2022-09-02 at 8.10.56 PM.png"
const Project = () => {
  return (
    <div className='project' >  
    <div className='proj-wrapper'>
        <a href = "https://sultansfirstapp.herokuapp.com/" target="_blank">
        <img src= {P1} alt="img" />
        </a>
        <h1>E-commerce platform</h1>
        <p>
            <strong style = {{color: "green"}}> React</strong> application which includes Rest 
            API, made using <strong style={{color: "green"}}>
            NodeJs  </strong> 
            and <strong style={{color: "green"}}>MangoDb </strong> as database. The application 
            also includes admin dashboard to add and update products.
        </p>
        
    </div>
    <div className='proj-wrapper'>
        <a href='https://recipeapi-react.web.app/' target = "_blank">

         <img src={P2} alt="img" />
        </a>
         <h1>Recipe Search API</h1>
         <p><strong style = {{color: "green"}}> React</strong> application, which uses Edamam Recipe Api to provide recipe data.</p>
        
    </div>

</div>

  )
}

export default Project