import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumnData } from "../actions";

const initialState: IColumnData = {
	columns: [],
	dataSource: [],
};

export const dataSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<IColumnData>) => {
			state.columns = action.payload.columns;
			state.dataSource = action.payload.dataSource;
		},
	},
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
