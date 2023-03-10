import React from 'react';
import { useParams, useNavigate, Link, useLoaderData } from 'react-router-dom';
import { usersData } from '../../usersData';
//	COMPONENTS
import ErrorScreen from '../ErrorScreen';


export default function UserDisplay() {
	const navigate = useNavigate();
	const user = useLoaderData();
	// const { id } = useParams();
	// const user = usersData[id - 1];

	if (user.error) {
		return <ErrorScreen error={user.error} />
	}

	return (
		<div>
			<h1>UserDisplay</h1>
			<p>id: {user.id}</p>
			<p>name: {user.name}</p>
			<button
				onClick={() => navigate(-1)}
			>
				back
			</button>
			<br />
			<Link to={-1}>
				Back
			</Link>
		</div>
	)
}