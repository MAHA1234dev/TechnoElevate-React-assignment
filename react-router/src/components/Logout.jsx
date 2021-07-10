import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Logout() {
    const history=useHistory();
    return (
        <div>
            <button onClick={()=>{ history.push("/Login")}}>

            </button>
        </div>
    )
}
