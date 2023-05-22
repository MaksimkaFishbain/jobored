import React, {FC, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from "../../styles/cardInfo.module.css";
import {CiStar} from "react-icons/ci";
import {HiOutlineLocationMarker} from "react-icons/hi";
import DOMPurify from 'dompurify';
import {VacancyData} from "../../types/types";
import {GiRoundStar} from "react-icons/gi";
import loadingStage from "../LoadingStage";


const CardPage:FC = () => {

    const location = useLocation();
    const {props:vacancy, favorite} = location.state
    const [isFavorite, setIsFavorite] = useState<boolean>(favorite)
    const cleanVacancyRichText:string = DOMPurify.sanitize(vacancy.vacancyRichText)
    const storedVacancies = localStorage.getItem('favorites');
    const favoritesList: VacancyData[] = storedVacancies ? JSON.parse(storedVacancies) : [];

    const addToFavorites = () => {
        if (isFavorite) {
            const updatedFavorites = favoritesList.filter(favoriteVacancy => favoriteVacancy.id !== vacancy.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            favoritesList.push(vacancy);
            localStorage.setItem('favorites', JSON.stringify(favoritesList));
        }

        setIsFavorite(!isFavorite);
    }

    return (
        <div style={{padding:'40px 0'}}
             data-elem={`vacancy-${vacancy.id}`}
        >
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h1>{vacancy.nameVacancy} {vacancy.nameFirm}</h1>
                    <div
                        style={{cursor:"pointer"}}
                        onClick={addToFavorites}
                        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
                    >
                        {isFavorite?<GiRoundStar style={{width:'22px',height:'22px', fill: '#5E96FC'}}/>:<CiStar style={{width:'22px',height:'22px'}}/>}
                    </div>
                </div>
                <ul className={styles.cardInfo}>
                    <li>{vacancy.paymentText}</li>
                    <li>{vacancy.typeOfWork}</li>
                </ul>
                <div className={styles.locationsInfo}>
                    <HiOutlineLocationMarker style={{opacity:0.4}}/>
                    <span>{vacancy.town}</span>
                </div>
            </div>

            <div
                className={styles.vacancyInfo}
                dangerouslySetInnerHTML={{__html: cleanVacancyRichText}}
            >

            </div>
        </div>
    );
};

export default CardPage;
