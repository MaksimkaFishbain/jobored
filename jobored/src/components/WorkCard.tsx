import React, {FC, useEffect, useState} from 'react';
import {HiOutlineLocationMarker} from "react-icons/hi";
import {CiStar} from "react-icons/ci";
import styles from "../styles/workCard.module.css"
import {Link} from "react-router-dom";
import {Vacancy, VacancyData} from "../types/types";
import {GiRoundStar} from "react-icons/gi";
import {useLocalStorage} from "@mantine/hooks";
import {useWindowSize} from "../customHooks/useWindowsSize";





const WorkCard:FC<VacancyData> = (props) => {

    const [favorites, setFavorites] = useLocalStorage<VacancyData[]>({key:'favorites', defaultValue:[]})
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    useEffect(() => {
        setIsFavorite(favorites.some((favorite) => favorite.id === props.id));
    }, [favorites, props.id]);

    const toggleFavorites = ():void=>{
        if (isFavorite){
            setFavorites(favorites.filter((vacancy) => vacancy.id !== props.id));
        } else {
            setFavorites([...favorites, props])
        }
        setIsFavorite(!isFavorite)
    }





    return (
        <div className={styles.card}
             data-elem={`vacancy-${props.id}`}

        >
            <div className={styles.cardHeader}>
                <Link to={`/vacancy/${props.id}`} state={{props, favorite: isFavorite}}>
                    <h2>{props.nameVacancy} {props.nameFirm}</h2>
                </Link>
                <div
                    data-elem={`vacancy-${props.id}-shortlist-button`}
                    style={{display:"flex", width:'25px',height:'25px',marginLeft:'20px', cursor:"pointer"}}
                    onClick={()=>toggleFavorites()}
                >
                    {isFavorite?<GiRoundStar style={{width:'22px',height:'22px', fill: '#5E96FC'}}/>:<CiStar style={{width:'22px',height:'22px'}}/> }
                </div>
            </div>
            <ul className={styles.cardInfo}>
                <li>{props.paymentText}</li>
                <li>{props.typeOfWork}</li>
            </ul>
            <div className={styles.locationsInfo}>
                <HiOutlineLocationMarker style={{opacity:0.4}}/>
                <span>{props.town}</span>
            </div>
        </div>
    );
};

export default WorkCard;
