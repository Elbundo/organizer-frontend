import { ITask } from '../models/Task';
import { apiSlice } from './ApiService';


export const taskApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		fetchAllTask: builder.query<ITask[], string>({
			query: (type) => ({
				url: `/tasks?type=${type}`,
				method: 'GET',
			}),
			providesTags: result => ['Task']
		}),
		createTask: builder.mutation<ITask, ITask>({
			query: (task) => ({
				url: '/tasks',
				method: 'POST',
				body: task
			}),
			invalidatesTags: ['Task']
		}),
		changeStatusTask: builder.mutation<ITask, ITask>({
			query: (task) => ({
				url: '/tasks',
				method: 'PATCH',
				body: task
			}),
			invalidatesTags: ['Task']
		}),
		deleteTask: builder.mutation<any, number>({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Task']
		})
	})
})

export const { useFetchAllTaskQuery, useCreateTaskMutation, useChangeStatusTaskMutation, useDeleteTaskMutation } = taskApiSlice
