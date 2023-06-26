import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    status: 'authenticated' | 'not-authenticated' | 'checking';
    user: any; // Reemplaza 'any' con el tipo correcto para el usuario
    errorMessage?: string;
  }

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'authenticated', // 'authenticated','not-authenticated', 'checking'
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
            state.user   = {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user   = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;