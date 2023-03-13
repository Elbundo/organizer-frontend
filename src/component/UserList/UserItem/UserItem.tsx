import { FC } from 'react'
import { IUserTask } from '../../../models/UserTaskDTO'
import { useDeleteUserMutation, useDropPasswordMutation } from '../../../services/UserService'

interface UserItemProps {
	user: IUserTask
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	const [dropPassword] = useDropPasswordMutation()
	const [deleteUser] = useDeleteUserMutation()
	return (
		<div style={{ display: 'flex', gap: '20px' }}>
			<div>{user.name}</div>
			<div>{user.username}</div>
			<div>{user.role}</div>
			{user.tasks && <div>{user.tasks.length}</div>}
			<button onClick={async (e) => {
				e.preventDefault()
				await deleteUser(user)
			}}>Удалить</button>
			<button onClick={async (e) => {
				e.preventDefault()
				try {
					const res = await dropPassword(user).unwrap()
					alert("Пароль: " + res.password)
				} catch (error) {
					alert("Ошибка:" + error)
				}

			}}>Сбросить пароль</button>
		</div>
	)
}

export default UserItem