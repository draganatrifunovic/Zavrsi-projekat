import React, { useState, useEffect } from 'react';
import { getAllLauches } from '../../../Services/SpaceXService/SpaceXservice';
import Launch from './Launch';
import Navigation from '../Navigation';

const LaunchList =()=> {
    const[launches,setLaunches] = useState([]);

    useEffect(()=> {
        getAllLauches().then(res => {setLaunches(res.data);
                                    
        
        })
    },[])


    return (
        <>
        <Navigation/>
        <div className="launch-list row no-gutters">
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
        </>)
}
export default LaunchList;