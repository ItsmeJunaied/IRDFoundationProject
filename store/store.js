// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './darkModeSlice'; // Import dark mode reducer

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer, // Add it to the store
    },
});

export default store;
