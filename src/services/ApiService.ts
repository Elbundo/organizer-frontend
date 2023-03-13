import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store/store'

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8080/api/v1',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.accessToken
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
		}
	}
})

// const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
// 	let result = await baseQuery(args, api, extraOptions)

// 	if (result.error?.status === 200) {
// 		const accessToken = result.data?.accessToken
// 		const user = jwt(accessToken)
// 		api.dispatch(setCredentials({ ...refreshResult.data, user }))
// 	} else {
// 		api.dispatch(logOut())
// 	}

// 	return result
// }

export const apiSlice = createApi({
	baseQuery: baseQuery,
	tagTypes: ['Task', 'User'],
	endpoints: builder => ({

	})
})