import React, {FC, useState} from 'react';
import Filter from "./Filter";




const MobileFilter:FC = () => {

    const [showFilter, setShowFilter] = useState<boolean>(false)



    return (
        <div
            style={
            {
                width:'40px',
                position:"fixed",
                color:"white",
                backgroundColor:"#5E96FC",
                writingMode:'vertical-lr',
                left:0,
                fontSize:'16px',
                padding:'5px',
                zIndex:500

            }}
        >
            <span
                onClick={()=>setShowFilter(!showFilter)}
            >{showFilter?'Закрыть фильтры':'Показать фильтры'}
            </span>
            {showFilter && (
                <div style={{writingMode:'horizontal-tb'}}>
                    <Filter />
                </div>
            )}
        </div>
    );
};

export default MobileFilter;
