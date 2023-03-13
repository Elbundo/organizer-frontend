import { apiSlice } from './ApiService';


export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<{ accessToken: string }, any>({
			query: credentials => ({
				url: '/auth/authenticate',
				method: 'POST',
				body: { ...credentials }
			})
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/auth/logout',
				method: 'GET',
			})
		})
	})
})

export const { useLoginMutation, useLogoutMutation } = authApiSlice
