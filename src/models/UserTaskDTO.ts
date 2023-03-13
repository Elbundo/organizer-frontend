import { IUser } from './User'
import { ITask } from './Task'

export interface IUserTask {
	id: number
	username: string
	name: string
	role: string
	tasks: ITask[]
}