import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice of state for loading
const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload; // Update the loading state
        },
    },
});

// Export the actions to use them in components
export const { setLoading } = loadingSlice.actions;

// Configure the Redux store
const store = configureStore({
    reducer: {
        loading: loadingSlice.reducer, // Add the loading slice to the store
    },
});

export default store;