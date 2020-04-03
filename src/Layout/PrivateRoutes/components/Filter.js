import React from 'react' 

const Filter = ({handleChange}) => {


    return(
        <input className="filter-input" type="text" placeholder="Filter Ship by name.." onChange={e => handleChange(e)}/>
    )
}

export default Filter;