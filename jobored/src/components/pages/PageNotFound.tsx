import React, {FC} from 'react';

const PageNotFound:FC = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div>
                <img style={{margin:"0 250px"}} src='../image/man-found.png' alt='картика на странице 404'/>
                <h1>Ты помоему что-то перепутал,такой страницы не существует</h1>
                <h2>Удачи, если продолжишь искать :)</h2>
            </div>
        </div>
    );
};

export default PageNotFound;
