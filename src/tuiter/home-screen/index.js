import TuitList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

function HomeScreen() {
    //const { tuits } = useSelector(state => state.tuits)

    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitList/>
        </>

)
}
export default HomeScreen;