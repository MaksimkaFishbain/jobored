import React, {FC} from 'react';

const NotFoundVacancies:FC = () => {
    return (
        <div style={{display:'flex', height:"700px", justifyContent:"center", alignItems:"center"}}>
            <img src='../image/notfound.svg' alt='ничего не найдено'/>
            <h1>По вашему запросу ничего не найдено :(</h1>
        </div>
    );
};

export default NotFoundVacancies;
