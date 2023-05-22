import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mantine/core";

const EmptyStage:FC = () => {
    const navigate = useNavigate()

    return (
        <div style={{width:'327px',position:"absolute",top:'204px',left:'557px'}}>
            <img src='../image/man.svg' alt='Картинка пустой страницы'/>
            <h1 style={{fontSize:'24px',lineHeight:'29px'}}>Упс, здесь еще ничего нет!</h1>
            <Button variant="light"
                    style={{width:'164px', height:'42px',margin:'0 20%'}}
                    onClick={()=>navigate('/')}
            >
                    Поиск вакансий
            </Button>

        </div>
    );
};

export default EmptyStage;
