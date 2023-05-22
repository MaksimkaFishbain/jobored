import { LoadingOverlay, Box } from '@mantine/core';
import React, {FC} from 'react';
import WorkCard from "./WorkCard";

const LoadingStage:FC = () => {
    return (
        <div style={{position:"absolute", zIndex:2, top:'190px'}}>
            <LoadingOverlay visible={true} overlayBlur={2} style={{zIndex:1}}/>
            <WorkCard id={1} nameVacancy={'Загрузка'} nameFirm={'Загрузска'} town={'Загрузка'} typeOfWork={'Загрузка'} paymentTo={12345} paymentFrom={12345} paymentText={'Загрузка'} currency={'Загрузка'} vacancyRichText={'Загрузка'}/>
            <WorkCard id={1} nameVacancy={'Загрузка'} nameFirm={'Загрузска'} town={'Загрузка'} typeOfWork={'Загрузка'} paymentTo={12345} paymentFrom={12345} paymentText={'Загрузка'} currency={'Загрузка'} vacancyRichText={'Загрузка'}/>
            <WorkCard id={1} nameVacancy={'Загрузка'} nameFirm={'Загрузска'} town={'Загрузка'} typeOfWork={'Загрузка'} paymentTo={12345} paymentFrom={12345} paymentText={'Загрузка'} currency={'Загрузка'} vacancyRichText={'Загрузка'}/>
            <WorkCard id={1} nameVacancy={'Загрузка'} nameFirm={'Загрузска'} town={'Загрузка'} typeOfWork={'Загрузка'} paymentTo={12345} paymentFrom={12345} paymentText={'Загрузка'} currency={'Загрузка'} vacancyRichText={'Загрузка'}/>
        </div>
    );
};

export default LoadingStage;
