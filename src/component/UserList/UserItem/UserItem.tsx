import { FC } from 'react'
import { IUserInfo } from '../../../models/UserTaskDTO'
import { useDeleteUserMutation, useDropPasswordMutation } from '../../../services/UserService'

interface UserItemProps {
	user: IUserInfo
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	const [dropPassword] = useDropPasswordMutation()
	const [deleteUser] = useDeleteUserMutation()
	return (
		<div style={{ display: 'flex', gap: '20px' }}>
			<div>{user.name}</div>
			<div>{user.login}</div>
			<div>{user.role}</div>
			<div>{user.countTasks}</div>
			<button onClick={async (e) => {
				e.preventDefault()
				await deleteUser(user.id)
			}}>Удалить</button>
			<button onClick={async (e) => {
				e.preventDefault()
				try {
					const res = await dropPassword(user.id).unwrap()
					alert("Пароль: " + res.password)
				} catch (error) {
					alert("Ошибка:" + error)
				}

			}}>Сбросить пароль</button>
		</div>
	)
}

export default UserItem