import React from 'react'
import { useHistory } from 'react-router-dom'
import { deleteUser } from '../../Services/auth_service';


const Navigation = () => {
    let history = useHistory();
    const listAbout =() => {
        history.push('about')
    }

    const listShips =() => {
        history.push('ships')
    }

    const listLaunches =() => {
        history.push('launches')
    }

    const listHistory =() => {
        history.push('histo')
    }


    return (
        <>
        <div className="header-container">
    
       
     
             <div className="text-center nav-bar mb-3">
             <ul>
                 <li onClick={e => listAbout()}>About</li>
                 <li onClick={e => listShips()}>Ships</li>
                 <li onClick={e => listLaunches()}>Launches</li>
                 <li onClick={e => listHistory()}>History</li>
             </ul>
             <button onClick={() => {
                  if (window.confirm("Are you sure?") === true) {
                    deleteUser();
                    history.push('/');
                  }
                }}
                className="float-right logout-btn">Log out</button>
         </div>
         </div>
         </>
    )
}

export default Navigation










