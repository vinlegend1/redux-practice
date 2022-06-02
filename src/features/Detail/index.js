import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDetail, set } from "./slice";

const Detail = () => {
	const { name, username, email } = useSelector(selectDetail);
	const disptach = useDispatch();
	const { id } = useParams();

	const fetchUser = async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`
		);
		disptach(set(await response.json()));
	};

	useEffect(() => {
		if (!name || !username || !email) {
			fetchUser();
		}
	}, []);

	return (
		<>
			{name ? (
				<div>
					<h2>{name}</h2>
					<div>username: {username}</div>
					<div>email: {email}</div>
				</div>
			) : null}
		</>
	);
};

export default Detail;
