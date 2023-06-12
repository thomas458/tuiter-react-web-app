import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { Navigate } from "react-router-dom";
import Register from "./tuiter/user/register"
import Login from "./tuiter/user/login"
import Profile from "./tuiter/profile-screen"
import {Provider} from "react-redux";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./tuiter/reducers/auth-reducer";
const store = configureStore(
    {reducer: {
            who: whoReducer,
            tuits: tuitsReducer,
            user:  authReducer
        }});

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/"         element={<Navigate to="/labs/a4"/>}/>
                    <Route path="/labs/*"   element={<Labs/>}/>
                    <Route path="/hello"    element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                    {/*<Route path="/profile"  element={<Profile/>}/>*/}
                    {/*<Route path="/login"    element={<Login/>}/>*/}
                    {/*<Route path="/register" element={<Register/>}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
        </Provider>
    );
}
export default App;

