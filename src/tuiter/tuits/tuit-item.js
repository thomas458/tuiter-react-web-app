import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({
      tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "time": "2h",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 111,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = () => {
        dispatch(deleteTuit(tuit));
        console.log(tuit);
    };
    return (
        <>
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-mid-2 col-sm-2 mt-2">
                        <img width={70} src={`/image/${tuit.image}`}/>
                    </div>
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 mt-2 px-1">
                        <div>
                            <span className="fw-bolder">{tuit.userName}<i className="fa fa-check-circle"></i> </span>
                            <span className="fg-color-gray">{tuit.handle}</span>
                            <span className="fg-color-gray"> . {tuit.time}</span>
                            <span className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 mt-1 float-end">
                                <i onClick = {deleteTuitHandler} className="fa fa-times"></i>
                            </span>
                            <br></br>
                            {tuit.tuit}
                        </div>
                        <div className="row mt-2 mb-2">
                            <TuitStats tuit={tuit}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );

}
export default TuitItem
