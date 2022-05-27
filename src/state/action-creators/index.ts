import { Dispatch } from "react";
import { IColumnData } from "../actions";
import { Action } from "../reducers/dataReducer";

export const storeFetchedData = (data: IColumnData) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: "FETCH_ALL",
			payload: data,
		});
	};
};
