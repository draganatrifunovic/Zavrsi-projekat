import React  from 'react'

const History =(props)=> {
    const {history} = props;
    
    return (
        <div className="history-border col-5 ml-3 p-3 mb-3 spacex-img">
            <div className=""></div>
            <a href={history.links.wikipedia}>
                <p>{history.title}</p>
            </a>
            <p>{history.event_date_utc}</p>
            <p>{history.details}</p>

        </div>


    )
}

export default History;

