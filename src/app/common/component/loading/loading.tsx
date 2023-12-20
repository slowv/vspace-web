import './loading.scss';
import {ReactComponent as IconLoading} from "src/assets/images/icon/sprinner.svg";
import {useAxiosLoader} from "../../../core/http";
// @ts-ignore
import {withRouter} from "react-router-dom";

export type LoadingProps = {};

export const Loading = withRouter((props: LoadingProps) => {

    const [active] = useAxiosLoader()

    return (
        <div className={`loading ${active ? 'active' : ''}`}>
            <IconLoading />
        </div>
    );
})
