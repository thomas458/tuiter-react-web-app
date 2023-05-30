import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import TuitSummaryList from "./tuit-summary-list";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div>
            <Nav />
            <div className="row d-flex">
                <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-sm-9 col-md-9 col-lg-6 col-xl-6 col-xxl-6">
                    <Routes>
                        <Route path="/home" element={<HomeScreen/>} />
                        <Route path="/explore" element={<ExploreScreen/>} />
                        <Route path="/notifications" element={<h1>Notifications</h1>}/>
                        <Route path="/bookmarks" element={<BookmarksScreen/>} />
                        <Route path="/profile" element={<ProfileScreen/>} />

                    </Routes>
                </div>
                <div className="col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-inline">
                    <WhoToFollowList/>
                    {/*<WhoToFollowListItem />*/}
                    {/*<WhoToFollowListItem who={{*/}
                    {/*    userName: "Tesla",*/}
                    {/*    handle: "tesla",*/}
                    {/*    avatarIcon: "tesla.png" }} />*/}
                    {/*<WhoToFollowListItem who={{*/}
                    {/*    userName: "SpaceX",*/}
                    {/*    handle: "spacex",*/}
                    {/*    avatarIcon: "spacex.png", }} />*/}
                </div>
            </div>
        </div>
    );
}
export default Tuiter;