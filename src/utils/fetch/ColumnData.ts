export const fetchColumnData = async () => {
	const response = await fetch("http://localhost:5000/");
	const data = await response.json();

	return data;
};
