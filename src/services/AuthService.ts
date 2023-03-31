import { apiSlice } from './ApiService';


export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<{ accessToken: string }, any>({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: { ...credentials }
			})
		}),
		refresh: builder.mutation<{ accessToken: string }, any>({
			query: () => ({
				url: '/auth/refresh',
				method: 'POST'
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
