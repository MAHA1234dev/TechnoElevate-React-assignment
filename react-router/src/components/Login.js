import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history=useHistory();
    return (
        <div>
            <h1>Login your page</h1>
            <button 
            onClick={()=>{history.push("/home")}}>
                Go to home  </button>

          
        </div>
    )
}
