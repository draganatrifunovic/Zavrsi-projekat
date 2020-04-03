import Axios from 'axios';

const getAllShips = () => {
    return Axios.get('https://api.spacexdata.com/v3/ships').then(res=> res.data)
}

const getAbout = () => {
    return Axios.get('https://api.spacexdata.com/v3/info');
}

const getAllLauches = () => {
    return Axios.get('https://api.spacexdata.com/v3/launches').then(res => res)
}

const getHistory = () => {
    return Axios.get('https://api.spacexdata.com/v3/history').then(res=>res)
}

export {getAllShips, getAbout,getAllLauches,getHistory}