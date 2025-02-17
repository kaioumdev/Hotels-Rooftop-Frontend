import { createSlice } from "@reduxjs/toolkit";

const isTokenPresentInCookies = () => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
    return !!token;
};

const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        return serializedState ? { user: JSON.parse(serializedState) } : { user: null };
    } catch (error) {
        console.error("Error loading user from localStorage:", error);
        return { user: null };
    }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        updateRole: (state, action) => {
            if (state.user) {
                state.user.role = action.payload.role;
                localStorage.setItem("user", JSON.stringify({ ...state.user, role: action.payload.role }));
            }
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});

export const { setUser, updateRole, logout } = authSlice.actions;
export default authSlice.reducer;
