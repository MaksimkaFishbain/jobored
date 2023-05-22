import React, {FC, useEffect, useState} from "react";
import EmptyStage from "../EmptyStage";
import {Vacancy, VacancyData} from "../../types/types";
import WorkCard from "../WorkCard";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {Pagination} from "@mantine/core";


const FavoritesPage: FC = () => {



    const favoritesData = localStorage.getItem('favorites');
    const favoritesVacancies: VacancyData[] = favoritesData ? JSON.parse(favoritesData) : [];

    const [page, setPage] = useState<number>(1);
    const pageItems:VacancyData[] = favoritesVacancies.slice((page - 1) * 4, page * 4);


    return favoritesVacancies.length? (
        <div style={{padding:'20px 25%'}}>
            {pageItems.map((vacancy, key):ReactJSXElement=>{
               return <WorkCard
                    key={key}
                    id={vacancy.id}
                    nameVacancy={vacancy.nameVacancy}
                    nameFirm={vacancy.nameFirm}
                    town={vacancy.town}
                    typeOfWork={vacancy.typeOfWork}
                    paymentTo={vacancy.paymentTo}
                    paymentFrom={vacancy.paymentFrom}
                    paymentText={vacancy.paymentText}
                    currency={vacancy.currency}
                    vacancyRichText={vacancy.vacancyRichText}
               />
            })}
            {favoritesVacancies.length>4?(
                <div style={{paddingLeft:"40%", paddingTop:"40px"}}>
                    <Pagination size='lg' total={Math.ceil(favoritesVacancies.length/4)} onChange={setPage} />
                </div>
            ):null}
        </div>
    ) : (
        <EmptyStage/>
    );
};

export default FavoritesPage;
