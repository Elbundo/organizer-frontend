import { ITask } from '../models/Task';
import { apiSlice } from './ApiService';


export const taskApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		fetchAllTask: builder.query<ITask[], any>({
			query: () => ({
				url: '/tasks',
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
				method: 'PUT',
				body: task
			}),
			invalidatesTags: ['Task']
		}),
		deleteTask: builder.mutation<any, ITask>({
			query: (task) => ({
				url: `/tasks/${task.id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Task']
		})
	})
})

export const { useFetchAllTaskQuery, useCreateTaskMutation, useChangeStatusTaskMutation, useDeleteTaskMutation } = taskApiSlice
