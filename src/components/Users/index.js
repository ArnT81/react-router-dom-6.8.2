import React from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom';
import { usersData } from '../../usersData';

export default function Users() {
	const navigate = useNavigate();
	const users = useLoaderData();
	// const users = usersData;


	return (
		<div>
			<h1>Users</h1>
			{users.map((user, id) => {
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