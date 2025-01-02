import { configureStore } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import img_zoomerReducer from './pages/img_zoomer'
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
export const AppModeSlice = createSlice({
    name: "AppModeSlice",
    initialState: {
        isVeiodPlayed: true,
        isImageChoosed: false,
        isNormalStlyeChoosed: false,

    }, reducers: {
        check_bg: (state) => {
            const Current_theme = localStorage.getItem("bg") || "video";
            if (Current_theme == "video") {
                state.isVeiodPlayed = true;
                state.isImageChoosed = false
                state.isNormalStlyeChoosed = false
            }
            else if (Current_theme == "img") {
                state.isVeiodPlayed = false;
                state.isImageChoosed = true
                state.isNormalStlyeChoosed = false
            } else {
                state.isVeiodPlayed = false;
                state.isImageChoosed = false
                state.isNormalStlyeChoosed = true
            }
        },
        Change_bg_video: (state) => {
            state.isVeiodPlayed = true;
            state.isImageChoosed = false;
            state.isNormalStlyeChoosed = false
            localStorage.setItem("bg", "video");
        },
        Change_bg_img: (state) => {
            state.isVeiodPlayed = false;
            state.isImageChoosed = true;
            state.isNormalStlyeChoosed = false
            localStorage.setItem("bg", "img");
        },
        Change_bg_normal: (state) => {
            state.isVeiodPlayed = false;
            state.isImageChoosed = false;
            state.isNormalStlyeChoosed = true;
            localStorage.setItem("bg", "none");
        }

    }
})

export const { check_bg,
    Change_bg_video,
    Change_bg_img,
    Change_bg_normal } = AppModeSlice.actions
export const { checkMode, Change_theme } = ThemeSlice.actions

// ----------------------------



export const store = configureStore({
    reducer: {
        Theme: ThemeSlice.reducer,
        img_zoomerReducer,
        AppModeReducer: AppModeSlice.reducer
    }
})


