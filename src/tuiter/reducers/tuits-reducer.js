import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: {tuits: tuits},
    reducers: {
        likeTuit(state, action) {
            let index = state.tuits.findIndex(tuit => tuit._id === action.payload._id)
            console.log(index);
            state.tuits[index].liked = true;
            state.tuits[index].likes += 1;
        },
        unlikeTuit(state, action) {
            let index = state.tuits.findIndex(tuit => tuit._id === action.payload._id)
            console.log(index);
            state.tuits[index].liked = false;
            state.tuits[index].likes -= 1;
        },
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload._id);
            state.tuits.splice(index, 1);
            console.log(action.payload);
        }

    }
});

export const {likeTuit, unlikeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;