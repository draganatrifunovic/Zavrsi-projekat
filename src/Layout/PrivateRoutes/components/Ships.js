import React from 'react';
import { useState } from 'react';
import { getAllShips } from '../../../Services/SpaceXService/SpaceXservice';
import { useEffect } from 'react';
import Filter from './Filter';
import Ship from './Ship';
import Select from './Select';
import Pages from './Pages';
import Navigation from '../Navigation';

const Ships = () => {
    const [ships, setShips] = useState([])
    const [filterShips, setFilterShips] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6;
    const [filterShips2, setFilterShips2] = useState([])
    const [selectFilter, setSelectFilter] = useState([])

    useEffect(() => {
        getAllShips().then(res => {
            console.log(res)
            setShips(res)
            setFilterShips2(res)
            setSelectFilter(res)
        }

        )
    }, [])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentList = ships.slice(indexOfFirstItem, indexOfLastItem)

    const Paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

    }

    const handleChange = (e) => {
        if(e.target.value === ''){
            setFilterShips([])
            return
        }
        setFilterShips([1])
        let filtered = ships.filter(element => element.ship_name.toLowerCase().includes(e.target.value))
        setFilterShips2(filtered)
    }

    const handleSelect = (e) => {
        if (e.target.value === "all") {
            setFilterShips2(ships);
            return;
        }setFilterShips([1])
        let filtered = ships.filter(element => element.ship_type.toLowerCase().includes(e.target.value))
        setFilterShips2(filtered);
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    
    return (
        <div className="ships-container">
            <Navigation/>
            <div className="select-filter">
                <Select handleSelect={handleSelect} />
                <Filter handleChange={handleChange} />
            </div>
            <div className="ships-container  row no-gutters">
                {filterShips.length > 0  ? filterShips2.map(ship => <Ship key={ship.ship_id} ship={ship} />) :
                currentList.map(ship => <Ship key={ship.ship_id} ship={ship}/> )}
             </div>
            <div className="text-center">
                <Pages paginate={Paginate} itemsPerPage={itemsPerPage} totalItems={ships.length} />
            </div>
            <div>
                <button className="btn-form" onClick={() => { scrollToTop() }}><i className="fas fa-arrow-up"></i></button>
            </div>

        </div>
    )
}

export default Ships;