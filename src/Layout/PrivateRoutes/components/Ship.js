import React from 'react';

const Ship = ({ship}) => {
    let {
        ship_name,
        ship_model,
        ship_type,
        home_port,
        year_built,
        image,
        url
    } = ship

    return (
        <div className="col-6 position-relative img-border">
            <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={'No pic'}></img>
            </a>
            
            <div className="image-hover">
                <p>Ship type: {ship_type}</p>
                <p>Ship model: {ship_model}</p>
                <p>Home port: {home_port}</p>
                <p>Year built: {year_built}</p>
            </div>
            <p>{ship_name}</p>
        </div>
    )
}
export default Ship;