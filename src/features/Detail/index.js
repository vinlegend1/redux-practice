import React from "react";
import { useSelector } from "react-redux";
import { selectDetail } from "./slice";

const Detail = () => {
	const { name, username, email } = useSelector(selectDetail);

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
