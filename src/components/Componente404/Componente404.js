import React from 'react'
import { Link } from "react-router-dom"

function Componente404(){
        return (
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/error404.png?alt=media&token=b1c7b19f-0476-483a-b102-ef7bc813aa97" alt="error 404"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
        );
}

export default Componente404;