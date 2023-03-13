import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/User';

interface AuthState {
	user: IUser | null,
	accessToken: string | null
}

const initState: AuthState = {
	user: null,
	accessToken: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: initState,
	reducers: {
		setCredentials: (state, action: PayloadAction<AuthState>) => {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
		},
		logOut: () => initState
	}
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

