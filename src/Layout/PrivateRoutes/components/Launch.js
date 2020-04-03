import React from 'react'

const Launch = (props) => {
    const {launch} = props
 

    return (
    <div className="launch col-3 text-center mt-4">
        <img src={launch.links.mission_patch} alt="launch"></img>
        <p>{launch.mission_name}</p>
        <p>{launch.launch_year}</p>
        
        
    </div>)

}

export default Launch;