import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "../reducers/tuits-reducer.js"
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    };

    const unlikeTuitHandler = (tuit) => {
        dispatch(unlikeTuit(tuit));
    };

    return (
        <>
            <div className="col-3 wd-icon-size">
                <span>
                <i className="far fa-comment mx-2 fg-color-gray"></i>{tuit.replies}
                </span>
            </div>

            <div className="col-3 wd-icon-size">
                <span>
                    <i className="fa fa-retweet mx-2 fg-color-gray"></i>{tuit.retuits}
                </span>
            </div>

            <div className="col-3 wd-icon-size">

                {
                    tuit.liked && <span onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                    }>
                    <i className="fa fa-heart mx-2" style={{color : "red"}}></i> {tuit.likes}
                </span>
                }
                {
                    !tuit.liked && <span onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }))
                    }>
                     <i className="fa fa-heart mx-2 fg-color-gray"></i> {tuit.likes}
                </span>
                }

            </div>

            <div className="col-3 wd-icon-size">
                <i className="fa fa-share-alt mx-2 fg-color-gray"></i>
            </div>
        </>
    )
}
export default TuitStats;