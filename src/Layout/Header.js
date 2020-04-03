import React from 'react'
import '../index.css'

const Header = () => {
    return (
        <>
        <header className="header-container">
           
            <div>
            <button className="float-right logout-btn">Log out</button>
            </div>
       
        </header>
             <div className="text-center nav-bar">
             <ul>
                 <li>About</li>
                 <li>Ships</li>
                 <li>Launches</li>
                 <li>History</li>
             </ul>
         </div>
         </>
    )
}

export default Header