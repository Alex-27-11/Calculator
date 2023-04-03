import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentItReducer from './reducers/CurrentItSlice';

const rootReducer = combineReducers({
	currentItReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']