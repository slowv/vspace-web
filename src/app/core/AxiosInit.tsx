import {useEffect} from "react";
import {axiosInstance} from "../common/utils/APIUtil";

export const AxiosInit = () => {

    useEffect(() => {
        const initAxios = axiosInstance;
    }, []);

    return (<></>);
}