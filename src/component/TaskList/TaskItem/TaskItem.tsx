import { FC } from 'react'
import { ITask } from '../../../models/Task'
import { useChangeStatusTaskMutation, useDeleteTaskMutation } from '../../../services/TaskService'

interface TaskItemProps {
	task: ITask
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
	const [chgStatus] = useChangeStatusTaskMutation()
	const [deleteTask] = useDeleteTaskMutation()
	return (
		<div style={{ display: 'flex', gap: '20px' }}>
			<button onClick={async (e) => {
				e.preventDefault()
				let newTask: ITask = { ...task }
				newTask.status = !newTask.status
				await chgStatus(newTask)
			}} >{task.status ? 'O' : 'V'}</button>
			<div style={task.status ? { textDecoration: 'line-through' } : {}}>{task.text}</div>
			<button onClick={async (e) => {
				e.preventDefault()
				await deleteTask(task.id)
			}}>Удалить</button>
		</div>
	)
}

export default TaskItem