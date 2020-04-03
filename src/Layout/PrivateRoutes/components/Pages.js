import React from 'react';

const Pages=({itemsPerPage,totalItems,paginate})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className="pagination-list">
                {pageNumbers.map(number=>
                    <li key={number} className="pagination-item"><a href="#" onClick={()=>paginate(number)}>
                        {number}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )

}
export default Pages;
