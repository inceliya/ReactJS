import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counter from "./slices/counter";
import users from "./slices/users";
import topic from "./slices/topic";

const rootReducer = combineReducers({
    users,
    counter,
    topic
})

export const store = configureStore({
  reducer: rootReducer,
});