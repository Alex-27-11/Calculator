import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CurrentItState {
	it: string;
	mode: boolean;
}

const initialState: CurrentItState = {
	it: '',
	mode: false,
}

export const CurrentItSlice = createSlice({
	name: 'CurIt',
	initialState,
	reducers: {
		addCurIt(state, action: PayloadAction<string>) {
			state.it = action.payload;
		},
		togleMode(state, action: PayloadAction<boolean>) {
			state.mode = action.payload;
		}
	}
})

export default CurrentItSlice.reducer;