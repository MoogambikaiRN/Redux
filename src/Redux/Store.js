import { createStore } from "redux";
import combine from "./Reducer.js";

const store = createStore(combine);

export default store