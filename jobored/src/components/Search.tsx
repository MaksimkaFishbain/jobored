import React, {FC, useEffect, useState} from 'react';
import {Button, TextInput} from "@mantine/core";
import {CiSearch} from "react-icons/ci";
import {useLazyGetVacanciesByKeywordQuery} from "./store/job.api/jobApi";

import {useActions} from "../customHooks/useActions";
import {useTypedSelector} from "../customHooks/useTypedSelector";
import {useWindowSize} from "../customHooks/useWindowsSize";

const Search:FC = () => {

    const [getVacanciesByKeyword, { data}] = useLazyGetVacanciesByKeywordQuery()

    const [keyword, setKeyword] = useState<string>('')
    const {changeVacancies, loadingCheck} = useActions()
    const {loading} = useTypedSelector(state => state)
    const [prevKeyword, setPrevKeyword] = useState<string | null>(null)
    const {width} = useWindowSize()

    const getVacancies = ():void => {
        if (prevKeyword !== keyword) {
            getVacanciesByKeyword(keyword)
            loadingCheck(!loading)
        }

    }


    useEffect(()=>{
        loadingCheck(!loading)
        setPrevKeyword(keyword)
        if(data) changeVacancies(data.objects)
    },[data])

    return (
        <div style={{width:'773px'}}>
            <TextInput
                value={keyword}
                onChange={(event) => setKeyword(event.currentTarget.value)}
                placeholder={'Введите название вакансии'}
                icon={<CiSearch/>}
                size={width && width < 768?"xs":"md"}
                data-elem="search-input"
                rightSection={
                    <Button
                        disabled={loading}
                        radius="md"
                        size='xs'
                        onClick={getVacancies}
                        data-elem="search-button"
                    >
                        {loading ? 'Загрузка' : 'Поиск'}

                    </Button>
                }
                rightSectionWidth={90}
            />
        </div>
    );
};

export default Search;
