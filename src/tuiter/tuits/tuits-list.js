import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {useDispatch} from "react-redux";


const TuitList = () => {
    const { tuits } = useSelector(state => state.tuits)
    //const dispatch = useDispatch();

    console.log(tuits);

    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}
                    />
                )
            }
        </ul>
    );
};
export default TuitList;