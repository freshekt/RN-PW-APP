import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {WritableDraft} from "immer/src/types/types-external";
import {scalarOptions} from "yaml";
import Str = scalarOptions.Str;
import {state} from "sucrase/dist/types/parser/traverser/base";
import {RootState} from "../store";

export interface AuthState {
    token: string,
    userId: number,
    userName: string,
    isLoading: boolean
}

export const  initialState: AuthState = {
    token: '',
    userId: 0,
    userName: '',
    isLoading: false
}



export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setToken: (state: WritableDraft<AuthState>, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToken } = counterSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default counterSlice.reducer;