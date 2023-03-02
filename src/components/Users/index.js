import React from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom';
import { usersData } from '../../usersData';
//	COMPONENTS
import ErrorScreen from '../ErrorScreen';


export default function Users() {
	const navigate = useNavigate();
	const users = useLoaderData();
	// const users = usersData;

	if (users.error) {
		return <ErrorScreen error={users.error} />
	}

	else if (users.length === 1) {
		return (
			<div
				style={{ margin: 10, cursor: 'pointer' }}
				onClick={() => {
					navigate(`/users/${users[0].id}`)
				}}
			>
				{users[0].name}
			</div>
		)
	}

	else {
		return (
			<div>
				<h1>Users</h1>
				{users.length > 1 && users.map((user, id) => {
					return (
						<div
							key={id}
							style={{ margin: 10, cursor: 'pointer' }}
							onClick={() => {
								navigate(`/users/${user.id}`)
							}}
						>
							{user.name}
						</div>
					)
				})}
			</div>
		)
	}
}