import { configureStore } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "Theme",
    initialState: {
        isLightMode: null,
    }, reducers: {
        checkMode: (state) => {
            const Current_theme = localStorage.getItem("theme") || "light";
            if (Current_theme == "light") {
                state.isLightMode = true;
                document.body.classList.remove('darkMore')
            }
            else {
                state.isLightMode = false;
                document.body.classList.add('darkMore')
            }
        },
        Change_theme: (state) => {
            if (state.isLightMode) {
                state.isLightMode = false;
                localStorage.setItem("theme", 'dark')
                document.body.classList.add('darkMore')
            }
            else {
                state.isLightMode = true;
                localStorage.setItem("theme", 'light')
                document.body.classList.remove('darkMore')
            }
        }
    }
})

export const { checkMode, Change_theme } = ThemeSlice.actions

// ----------------------------



export const store = configureStore({
    reducer: {
        Theme: ThemeSlice.reducer
    }
})


