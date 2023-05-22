import React, {FC, useEffect, useState} from "react";
import {Button, NumberInput, Select} from "@mantine/core";
import {GrDown} from "react-icons/gr";
import styles from "../styles/filter.module.css"
import {
    useGetAllVacanciesQuery,
    useLazyGetAllVacanciesQuery,
    useLazyGetVacanciesByFilterQuery
} from "./store/job.api/jobApi";
import {useActions} from "../customHooks/useActions";
import {useTypedSelector} from "../customHooks/useTypedSelector";
import {option} from "../types/types";
import isEqual from "lodash/isEqual";
import {useNavigate} from "react-router-dom";
import {useWindowSize} from "../customHooks/useWindowsSize";


interface IFilterState {
    paymentFrom: number | '';
    paymentTo: number | '';
    select: string | null;
}

const Filter:FC = () => {

    const {width} = useWindowSize()

    const [filterState, setFilterState] = useState<IFilterState>({
        paymentFrom: '',
        paymentTo: '',
        select: null
    });


    const [prevFilter, setPrevFilter] = useState<IFilterState>(filterState);

    const { paymentFrom, paymentTo, select } = filterState;

    const [getVacanciesByFilter,{ data}] = useLazyGetVacanciesByFilterQuery()
    const {data:allVacancies} = useGetAllVacanciesQuery({})
    const {changeVacancies, loadingCheck} = useActions()
    const {loading} = useTypedSelector(state => state)

    const getVacancies = () =>{
        if(!isEqual(prevFilter,filterState)){
            loadingCheck(!loading)
            getVacanciesByFilter([select,paymentFrom,paymentTo])
        }
    }

    const applyResetFilter = () => {
        setFilterState({
            paymentFrom: '',
            paymentTo: '',
            select: null
        });
        if (allVacancies) changeVacancies(allVacancies.objects)
    }


    useEffect(()=>{
        loadingCheck(!loading)
        setPrevFilter({...filterState})
       if (data) changeVacancies(data.objects)
    }, [data])


    return (
        <div className={styles.filter}>
            <div className={styles.headerForm}>
                <span className={styles.name}>Фильтры</span>
                <Button
                    variant='subtle'
                    color='gray'
                    size='xs'
                    onClick={applyResetFilter}
                >
                    Cбросить все ×
                </Button>
            </div>
            <label className={styles.labelForm}>Отрасаль</label>
            <Select
                allowDeselect
                onChange={(value) =>
                    setFilterState((prevState) => ({ ...prevState, select: value }))
                }
                placeholder='Выберете отрасаль'
                //rightSection={<GrDown size='1rem' style={{opacity:0.5}}/>}
                rightSectionWidth={30}
                data={option}
                size={width && width<786?'xs':'md'}
                style={{marginTop:'8px',marginBottom:'20px', fontSize:'14px'}}
                value={filterState.select}
                data-elem="industry-select"
            />

            <label className={styles.labelForm}>Отклад</label>
            <NumberInput
                value={paymentFrom}
                onChange={(value) =>
                    setFilterState((prevState) => ({
                        ...prevState,
                        paymentFrom: value || 0,
                    }))
                }
                placeholder='От'
                min={0}
                step={10000}
                size={width && width<786?'xs':'md'}
                style={{margin:'8px 0'}}
                data-elem="salary-from-input"
            />
            <NumberInput
                value={paymentTo}
                onChange={(value) =>
                    setFilterState((prevState) => ({
                        ...prevState,
                        paymentTo: value || 0,
                    }))
                }
                placeholder='До'
                min={0}
                step={10000}
                size={width && width<786?'xs':'md'}
                data-elem="salary-to-input"
            />
            <Button
                disabled={loading}
                onClick={getVacancies}
                style={{ width: 275,marginTop:'20px' }}
                data-elem="search-button"
            >
                {loading?'Фильтр применяется':'Применить'}

            </Button>
        </div>
    );
};

export default Filter;
