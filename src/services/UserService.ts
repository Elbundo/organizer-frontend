import { AddUserDTO } from '../models/AddUserDTO';
import { IUser } from '../models/User';
import { IUserInfo } from '../models/UserTaskDTO';
import { apiSlice } from './ApiService';


export const taskApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		fetchAllUser: builder.query<IUserInfo[], any>({
			query: () => ({
				url: '/users',
				method: 'GET',
			}),
			providesTags: result => ['User']
		}),
		addUser: builder.mutation<AddUserDTO, IUser>({
			query: (user) => ({
				url: '/users',
				method: 'POST',
				body: user
			}),
			invalidatesTags: ['User']
		}),
		dropPassword: builder.mutation<{ password: string }, number>({
			query: (id) => ({
				url: `/users/${id}/dropPassword`,
				method: 'PATCH',
			}),
			invalidatesTags: ['User']
		}),
		deleteUser: builder.mutation<any, number>({
			query: (id) => ({
				url: `/users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['User']
		})
	})
})

export const { useFetchAllUserQuery, useAddUserMutation, useDropPasswordMutation, useDeleteUserMutation } = taskApiSlice
