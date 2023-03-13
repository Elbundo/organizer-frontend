import { FC } from 'react';
import { Link } from 'react-router-dom';


const Forbidden: FC<Request> = (req) => {
	return (
		<>
			<div>Доступ закрыт!</div>
			<Link to={"/"}>Назад!</Link>
		</>
	)
}

export default Forbidden