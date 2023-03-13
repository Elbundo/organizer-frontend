import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/ApiService';
import authReducer from './reducers/authSlice'
import taskSlice from './reducers/taskSlice';
import taskReducer from './reducers/taskSlice'

const rootReducer = combineReducers({
	[apiSlice.reducerPath]: apiSlice.reducer,
	auth: authReducer,
	task: taskReducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']