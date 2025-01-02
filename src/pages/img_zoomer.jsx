import { useEffect, useRef, useState } from 'react'
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
    const { img_url } = useSelector(e => e.img_zoomerReducer)
    const isWorkingOnPc = window.innerWidth > 800
    const dispatch = useDispatch()
    const cntIgm_ref = useRef()
    const imgREf = useRef()
    function handelClickOutImgZommer(e) {
        if (!cntIgm_ref.current?.contains(e.target)) {
            dispatch(close_imgZoomer())
        }
    }
    const [isWisthGtHeight, setisWisthGtHeight] = useState()
    useEffect(() => {
        if (cntIgm_ref.current) {
            setTimeout(() => {
                setisWisthGtHeight(
                    cntIgm_ref.current.getBoundingClientRect().width > cntIgm_ref.current.getBoundingClientRect().height
                )
            }, 100)

            if (imgREf.current.offsetWidth > imgREf.current.offsetHeight) {
                console.log('so heeihgt');

            }
        }
    }, [])
    return ReactDOM.createPortal(
        <div className="backendMer" onClick={handelClickOutImgZommer}>
            <div ref={cntIgm_ref} style={(!isWorkingOnPc && isWisthGtHeight) ?
                { 
                    width: window.innerHeight-100,
                    transform: "rotate(90deg)" 
                }

                : {
                    maxWidth: "90%",
                    maxHeight: "96%",
                }} className="activeCmp ">
                <img className="wmia hmia " ref={imgREf} src={img_url} alt="" />
            </div>
        </div >
        , document.getElementById("portals")
    )
}


