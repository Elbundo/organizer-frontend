import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../models/Task';

interface TaskState {
	tasks: ITask[];
	isLoading: boolean;
	error: string;
}

const initialState: TaskState = {
	tasks: [],
	isLoading: false,
	error: '',
}

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
	},
})

export default taskSlice.reducer;