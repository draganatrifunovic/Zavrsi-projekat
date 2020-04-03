import React, { useState, useEffect } from 'react'
import { getHistory } from '../../../Services/SpaceXService/SpaceXservice'
import History from './History'
import Navigation from '../Navigation'

const AllHistory = () => {
    const [historyData,setHistoryData] = useState([])

    useEffect(()=> {getHistory().then(res=> setHistoryData(res.data))},[])

    return(
        <>
         <Navigation/>
        <div className="row no-gutters p-3 justify-content-center">
            {historyData.map(history => <History key={history.id} history={history}/>)}
        </div>
        </>
    )
}
export default AllHistory;