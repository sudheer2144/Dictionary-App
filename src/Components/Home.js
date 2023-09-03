import { SearchComponent } from "./SearchComponent"
import { ResultComponent } from "./ResultComponent"
import { useDispatch } from "react-redux"
import { homeInitial } from "../redux/actions/actions";

export const HomeComponent = () => {
    const dispatch = useDispatch();
    dispatch(homeInitial())
    return (
        <div>
            <SearchComponent />
            <ResultComponent />
        </div>
    )
}