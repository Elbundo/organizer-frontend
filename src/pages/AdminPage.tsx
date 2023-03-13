import { FC } from 'react'
import { Link } from 'react-router-dom'
import UserList from '../component/UserList/UserList'


const AdminPage: FC = () => {
	return (
		<>
			<Link to={"/"}>Главная страница</Link>
			<UserList />
		</>
	)
}

export default AdminPage