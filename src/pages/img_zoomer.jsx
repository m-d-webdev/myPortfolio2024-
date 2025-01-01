import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

const imgZoomerSlice = createSlice({
    name: "imgZoomerSlice",
    initialState: {
        is_visible: false,
        img_url: null
    }, reducers: {
        open_imgZoomer: (state, action) => {
            state.img_url = action.payload;
            state.is_visible = true
        },
        close_imgZoomer: (state) => {
            state.is_visible = false
        }
    }
})

export const { open_imgZoomer, close_imgZoomer } = imgZoomerSlice.actions
export default imgZoomerSlice.reducer


export const Img_zoomer = () => {
    const { img_url} = useSelector(e => e.img_zoomerReducer)
    const dispatch = useDispatch()
    const cntIgm_ref = useRef()
    function handelClickOutImgZommer(e) {
        if (!cntIgm_ref.current?.contains(e.target)) {
            dispatch(close_imgZoomer())
        }
    }
    return ReactDOM.createPortal(
        <div className="backendMer" onClick={handelClickOutImgZommer}>
            <div ref={cntIgm_ref} style={{
                maxWidth: "80%",
                maxHeight: "96%",
            }} className="activeCmp ">
                <img className="wmia hmia " src={img_url} alt="" />
            </div>
        </div>
        , document.getElementById("portals")
    )
}


