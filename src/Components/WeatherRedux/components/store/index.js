import {createStore, applyMiddleware} from "redux";
import reducers from "./../reducers";
import thunk from "redux-thunk";

const initialState = {
    city: "Mexico,mx"
};

export const store = createStore(
    reducers, initialState,  applyMiddleware(thunk)
);
