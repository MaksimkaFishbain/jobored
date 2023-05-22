
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {vacanciesActions} from "../components/store/slice/vacancySlice";
import {loadingAction} from "../components/store/slice/loadingSlice";

const allActions = {
    ...vacanciesActions,
    ...loadingAction
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)

}