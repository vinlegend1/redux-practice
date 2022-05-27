import { IColumnData } from "../actions";

export interface Action {
	type: "FETCH_ALL";
	payload: IColumnData;
}

const reducer = (
	state: IColumnData = { columns: [], dataSource: [] },
	action: Action
) => {
	switch (action.type) {
		case "FETCH_ALL":
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
