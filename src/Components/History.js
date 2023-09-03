
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";

import "../styles/History.css"
import { fetchData } from "../redux/actions/actions";
import { ResultComponent } from "./ResultComponent";
import { useState } from "react";

export const History = () => {

    const historyData = useSelector(state => state.historyReducer)

    const [historyClicked, setHistoryClicked] = useState(false);

    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(fetchData(e.target.innerText))
        setHistoryClicked(true);
    }


    return (
        <div>
            {!historyClicked &&
                <div className="history">
                    <h2>Search History</h2>
                    {
                        historyData.map((history) => {
                            return <NavLink className={"historyLinks"} to={`/word/${history}`} onClick={handleClick}>{history}</NavLink>
                        })
                    }
                    {historyData.length === 0 && <p>Search history is not available...</p>}
                </div>}
            {historyClicked && <ResultComponent />}
        </div>
    )
}