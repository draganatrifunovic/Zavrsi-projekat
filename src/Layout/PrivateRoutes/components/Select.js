import React from 'react';

const Select = ({handleSelect}) =>{
    return(
        <>
            <select onChange={e => handleSelect(e)}>
                <option value="all">All</option>
                <option value="tug">Tug</option>
                <option value="cargo">Cargo</option>
                <option value="barge">Barge</option>
                <option value="high">High Speed Craft</option>
            </select>
        </>
    )
}

export default Select;