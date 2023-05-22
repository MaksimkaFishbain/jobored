import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import Search from "../Search";
import Filter from "../Filter";
import WorkCard from "../WorkCard";
import {useLazyGetAllVacanciesQuery} from "../store/job.api/jobApi";
import {useTypedSelector} from "../../customHooks/useTypedSelector";
import {useActions} from "../../customHooks/useActions";
import {Vacancy} from "../../types/types";
import {Pagination} from '@mantine/core';
import LoadingStage from "../LoadingStage";
import NotFoundVacancies from "../NotFoundVacancies";
import {useWindowSize} from "../../customHooks/useWindowsSize";
import MobileFilter from "../MobileFilter";





const Home:FC = () => {

    const [page, setPage] = useState<number>(1);
    const [getVacancites, {data}] = useLazyGetAllVacanciesQuery()
    const {vacancies, loading} = useTypedSelector(state => state)
    const pageItems:Vacancy[] = vacancies.slice((page - 1) * 4, page * 4);
    const {changeVacancies, loadingCheck} = useActions()

    const {width} = useWindowSize()

    useLayoutEffect(() => {
        getVacancites({})
    }, []);

    useEffect(() => {
        loadingCheck(false);
        if (data) changeVacancies(data.objects);
    }, [data]);



    const checkPayment = (paymentTo:number ,paymentFrom:number, currency:string):string =>{
        let pattern:string = ''
        if(!paymentTo && paymentFrom){
            pattern = `от ${paymentFrom}`
        } else if (!paymentFrom && paymentTo){
            pattern = `до ${paymentTo}`
        } else if (!paymentTo && !paymentFrom){
            return 'з/п не указана'
        } else if(paymentFrom === paymentTo) {
            pattern = `${paymentFrom}`
        } else {
            pattern = `от ${paymentFrom} - ${paymentTo}`
        }

        return `з/п ${pattern} ${currency}`
    }


    const renderVacancies = (
        vacanciesData: Vacancy[],
        vacancyList:Vacancy[],
        setPage:React.Dispatch<React.SetStateAction<number>>
    ):React.ReactNode => {
            if (vacanciesData.length) {
                return (
                    <>
                        {vacanciesData.map((vacancy, key: number) => (
                            <WorkCard
                                key={key}
                                id={vacancy.id}
                                nameVacancy={vacancy.profession}
                                nameFirm={vacancy.firm_name}
                                town={vacancy.town.title}
                                typeOfWork={vacancy.type_of_work.title}
                                paymentTo={vacancy.payment_to}
                                paymentFrom={vacancy.payment_from}
                                paymentText={checkPayment(vacancy.payment_to, vacancy.payment_from, vacancy.currency)}
                                vacancyRichText={vacancy.vacancyRichText}
                                currency={vacancy.currency}
                            />
                        ))}
                        <div style={{paddingLeft:"40%", paddingTop:"40px"}}>
                            <Pagination size='lg' total={3} onChange={setPage} />
                        </div>
                    </>
                );
            } else {
                return <NotFoundVacancies />;
            }
    };

    return (
        <div style={{display:"flex", padding:width && width > 768?"40px 162px":"20px 50px"}}>
            {width && width > 768? <Filter/> : null}
            <div style={{paddingLeft:"28px"}}>
                <Search/>
                {loading?(<LoadingStage/>):renderVacancies(pageItems,vacancies, setPage)}
            </div>
            {width && width < 768? <MobileFilter/> : null}
        </div>
    );
};

export default Home;