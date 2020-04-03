import React, { useState, useEffect } from 'react';
import { getAbout } from '../../../Services/SpaceXService/SpaceXservice';
import Navigation from '../Navigation';

const About = () => {
    const [data,setData] = useState({});

    useEffect(() => {
        getAbout().then(res => {
            setData(res.data);
        })
    },[])
    
    return (
        <>
        <Navigation/>
        <div className="row no-gutters m-0 mt-3">
        <div className="col-12 about-container  mb-3"></div>
        <div className="col-6 p-4">
            <img alt="Elon Musk"className="elon-musk" src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg"/>
        </div>
        <div className="col-6 p-4 font-italic">
            <p>Founder od SpaceX: {data.founder}</p>
            <p>{data.summary}</p>
            <p>SpaceX count {data.employees} empolyees.</p>
            <span>Located: Hawthorne, California</span>
        </div>
        </div>
        </>

    )
}

export default About;