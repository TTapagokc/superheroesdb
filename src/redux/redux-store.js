import ModelsReduser from "./Models-Reduser";
import ModelsInfoReduser from "./ModelsInfo-Reduser";
import { combineReducers, createStore } from "redux";

let redusers = combineReducers({
    ModelsPage: ModelsReduser,
    ModelsInfo: ModelsInfoReduser,
});

let store = createStore(redusers);

window.store = store;
export default store;