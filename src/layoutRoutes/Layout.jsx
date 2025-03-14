import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import '../main.css'
import { useDispatch, useSelector } from 'react-redux';
import { Img_zoomer } from '../pages/img_zoomer';
import Footer from './footer'
import { Change_bg_img, Change_bg_normal, Change_bg_video } from '../setting';
export default function Layout() {
    const isUsingPc = window.innerWidth > 800
    const { is_visible } = useSelector(e => e.img_zoomerReducer)
    const { isImageChoosed, isVeiodPlayed, isNormalStlyeChoosed } = useSelector(e => e.AppModeReducer)

    const dispatch = useDispatch()


    return (
        <div
            style={
                (isUsingPc && isImageChoosed) ? {
                    backgroundImage: "url(media/planet-outer-space-cosmos-night-lights-orbit-3840x2160-8766.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "top"
                } : {}
            }
        >
            <Header />
            {
                isUsingPc &&
                < div className="c-c-c p20 bg-l br10   MenuGetTHem">
                    <svg onClick={() => {
                        dispatch(Change_bg_video())
                    }} style={isVeiodPlayed ? { fill: "var(---)" } : {}} version="1.1" className='hoverEff2 mb20 ' viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(331,243)" d="m0 0h54l204 1h1166l33 2 21 3 26 6 27 10 25 12 18 10 19 13 14 11 13 11 21 21 9 11 11 15 13 21 9 16 13 27 13 37 6 19h2v1089l-2 1-1-4 1-2h-2v-2h-2l-1 2-4 9-6 20-6 16-9 19-13 23-10 16-14 18-9 10-7 8-14 14-11 9-14 11-10 7-13 8-20 11-32 13-24 7-26 6-22 3-11 1-24 1h-1458l-26-2-24-4-26-7-25-9-25-12-20-12-17-12-10-8-13-12-8-7-11-11-7-8-11-13-13-18-13-22-8-15-9-21-10-29-6-21-2-1v-1078h1v6h2l2-9 14-41 9-22 10-19 13-22 9-12 10-13 10-11 7-8 7-7 8-7 16-13 23-16 22-12 16-8 15-6 25-8 22-5 24-3 20-1zm64 119-76 1-38 2-24 3-17 5-21 9-11 6-14 10-11 9-10 9-9 10-12 16-10 15-10 21-6 18-3 15-2 19-1 24v929l2 40 3 22 4 16 7 16 11 21 13 18 12 13 8 8 17 13 13 8 22 11 20 7 23 5 16 2 33 2 185 1h563l561-1 97-1 26-1 18-2 24-6 17-6 23-11 17-12 10-8 15-14 9-11 11-15 8-14 8-19 4-15 4-25 1-9 1-21v-951l-1-20-3-19-5-20-6-15-11-21-11-16-9-11-5-6-8-7-14-11-13-8-14-8-17-7-21-7-20-3-28-2-201-1z" />
                        <path transform="translate(834,662)" d="m0 0h15l15 5 16 8 18 10 14 9 19 12 21 13 23 14 21 13 19 12 34 21 21 13 17 11 18 11 22 14 48 30 20 12 20 13 18 11 38 24 21 13 30 19 14 9 16 11 9 7 7 6 7 9 7 14 3 12-1 14-5 13-9 15-11 11-14 10-11 7-20 13-26 16-17 11-23 14-22 14-15 9-32 20-26 16-19 12-16 10-11 7-13 8-24 15-11 7-13 8-11 7-19 12-34 21-18 11-22 14-26 16-18 11-15 9-25 12-10 3-7 1-17-5-13-7-10-9-8-8-8-16-1-5-2-42-1-50v-231l1-282 2-23 8-16 9-10 9-8 15-8zm69 171v380l12-5 12-7 19-12 16-10 21-13 41-26 21-13 23-15 25-16 22-14 14-9 19-12 18-11 17-10 16-10 8-6-2-4-15-9-16-10-28-17-22-14-17-11-24-15-22-14-40-25-22-14-26-16-23-14-22-14-18-11z" />
                        <path transform="translate(2047,467)" d="m0 0h1v5h-3z" />
                        <path transform="translate(3,479)" d="m0 0" />
                        <path transform="translate(2047,1579)" d="m0 0" />
                        <path transform="translate(1,1560)" d="m0 0" />
                    </svg>

                    <svg onClick={() => {
                        dispatch(Change_bg_img())
                    }} style={isImageChoosed ? { fill: "var(---)" } : {}} version="1.1" className='hoverEff2 mb20 ' viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(658,170)" d="m0 0h716l40 1 41 3 41 5 29 5 28 7 26 8 24 9 17 7 15 7 17 9 14 8 14 9 19 13 12 9 13 11 11 9 21 21 7 8 11 13 10 13 10 14 11 17 16 29 13 28 12 31 8 25 8 32 6 32 4 34 3 37 1 22 1 43v686l-1 37-2 29-4 38-4 27-6 27-8 30-12 35-10 24-13 27-13 23-17 25-12 16-8 10-9 10-7 8-15 15-11 9-10 9-18 13-22 14-15 9-18 10-22 10-28 11-30 10-44 11-26 5-40 5-38 3-56 2h-660l-45-1-41-2-40-4-45-7-29-7-24-7-23-8-31-13-22-11-24-14-12-8-17-12-16-13-14-12-13-12-10-10-7-8-11-13-13-17-10-14-12-19-13-23-11-22-10-24-10-28-8-30-7-36-6-42-3-35-2-64v-692l1-34 2-31 5-44 7-38 10-37 8-24 10-25 9-20 11-22 13-22 10-15 7-10 8-11 10-13 11-12 5-6 8-7 12-12 11-9 18-14 13-9 15-10 15-9 25-14 27-12 21-8 25-8 30-8 26-5 35-5 30-3 16-1zm27 128-40 1-49 3-24 3-25 5-31 8-23 8-25 11-24 14-16 10-17 14-11 9-14 14-9 11-11 13-14 21-8 14-11 23-11 28-6 19-8 32-5 28-3 30-1 19-1 52v670l1 43 2 31 4 32 7 34 11 44 3 3 7-1 9-5 15-10 19-12 18-13 75-50 16-11 24-16 44-30 24-16 22-15 34-23 19-12 21-11 24-9 21-5 13-2 14-1h13l23 2 20 4 18 6 23 11 17 11 12 9 16 13 9 7 18 13 16 10 23 11 15 5 24 5 18 2h32l25-5 20-6 18-8 15-8 18-13 14-11 13-11 11-9 14-12 15-13 14-12 11-10 11-9 10-9 11-9 14-12 17-14 10-9 11-9 12-11 8-7 14-12 11-9 13-12 10-8 14-12 11-9 10-9 11-9 12-11 8-7 28-24 12-10 13-10 19-13 16-9 19-8 19-5 18-3 13-1h22l26 3 23 5 19 7 17 9 20 14 11 8 5 2v-394l-1-43-2-29-5-37-5-26-9-31-5-15-10-23-8-16-10-18-16-23-11-13-14-16-8-7-13-11-17-12-13-8-16-9-21-10-38-14-32-8-31-6-28-3-15-1-34-1z" />
                        <path transform="translate(747,480)" d="m0 0h38l26 3 17 4 25 10 20 11 17 12 11 9 10 9 13 14 14 19 12 21 9 21 8 26 4 26v33l-4 26-7 24-6 16-10 19-9 14-8 11-9 10-7 8-9 9-13 10-18 12-23 11-16 6-24 6-25 4-19 1-26-2-25-5-24-8-16-8-14-8-14-10-11-9-14-13-18-22-11-18-8-15-8-19-5-15-5-23-2-16v-20l4-31 6-22 7-19 8-16 6-11 8-12 10-13 12-13 4-2 1-3 8-7 18-13 25-14 21-9 18-5 17-3z" />
                    </svg>


                    <svg onClick={() => {
                        dispatch(Change_bg_normal())
                    }} style={isNormalStlyeChoosed ? { fill: "var(---)" } : {}} version="1.1" className='hoverEff2  ' viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(1e3 193)" d="m0 0h39l41 2 42 4 41 6 41 8 32 8 28 8 36 12 34 13 35 15 32 16 22 12 22 13 24 15 15 10 17 12 16 12 13 10 14 11 14 12 11 9 7 7 8 7 7 7 8 7 22 22 7 8 7 7 7 8 12 14 11 13 14 18 14 19 16 23 9 14 13 21 14 24 8 14 8 16 12 25 11 25 15 39 12 35 10 36 10 41 7 39 6 40 3 35 2 47v19l-2 51-3 34-3 23-9 51-6 27-11 42-14 43-11 29-6 15-5 13-7 14-9 20-10 19-8 15-27 45-10 15-9 13-11 15-15 20-11 14-9 11-9 10-9 11-11 11-1 2h-2l-2 4-18 18-8 7-9 9-8 7-11 10-8 7-14 12-13 10-10 7-15 11-18 13-15 10-15 9-19 12-11 6-18 10-15 8-23 11-24 11-32 13-44 15-28 8-40 10-25 5-41 7-37 5-38 3-17 1h-63l-47-3-33-4-45-8-33-7-36-10-27-8-25-9-34-13-30-13-19-9-17-9-16-8-21-12-25-15-33-22-18-13-18-14-11-9-13-11-14-12-12-11-8-7-38-38-7-8-24-28-11-14-12-15-26-36-11-17-17-28-14-25-12-23-14-29-14-33-11-29-12-36-7-24-9-37-6-27-7-43-5-43-2-29-1-24v-37l2-39 3-31 4-29 9-52 8-33 10-36 12-36 12-32 10-24 9-19 11-23 14-27 12-21 10-16 8-13 17-25 10-13 8-11 21-28 11-13 7-8 7-7 7-8 9-9 6-7 16-16 6-5 12-12 8-7 7-7 11-9 8-7 14-11 38-28 27-18 28-17 26-15 27-14 23-11 38-16 35-13 27-9 41-11 26-6 37-7 41-6 33-3zm-23 141-43 4-39 6-35 7-34 9-28 9-20 7-25 10-29 13-30 15-14 8-17 10-13 8-15 10-14 10-18 13-14 11-11 9-11 10-11 9-15 15-8 7-6 6v2h-2l-7 8-7 7-9 11-7 7-9 11-11 13-10 13-12 17-8 12-12 19-8 13-16 28-18 36-11 26-14 37-11 34-8 30-6 31-7 44-4 36-1 17v65l2 29 5 38 9 48 6 26 12 40 9 26 13 32 12 26 15 30 14 24 9 15 9 14 13 19 14 18 11 14 11 13 9 10 7 8 9 10 14 15 12 11 15 14 8 7 14 12 14 11 16 12 18 13 17 11 13 8 24 14 22 12 42 20 40 16 43 14 41 10 32 6 36 5 49 4 38 1 41-2 39-4 44-7 31-7 37-10 33-11 34-13 25-11 34-17 27-16 10-6 19-12 17-12 10-7 18-13 12-10 11-9 10-10 8-7 3-2v-2h2l5-5 7-6 7-8 11-11 7-8 11-12 7-8 8-9 8-10 8-11 9-12 18-26 9-15 21-36 8-16 10-21 11-25 11-29 11-33 12-45 7-36 7-48 2-22 1-20v-58l-2-31-5-42-6-36-7-30-10-36-11-33-10-26-9-21-16-33-15-28-12-20-14-22-11-16-16-21-11-14-12-14-13-15-8-9h-2l-2-4-16-16h-2l-1-3-8-7-14-13-8-7-16-13-16-12-15-11-24-16-24-15-26-15-14-8-28-13-36-15-37-13-19-6-42-11-36-7-44-6-19-2-17-1z" />
                        <path transform="translate(1021,473)" d="m0 0 36 1 41 4 38 6 27 6 25 7 24 8 37 15 19 9 22 12 14 8 18 11 13 9 10 7 16 12 22 18 13 12 8 7 9 9 8 7 7 8 12 13 11 14 13 17 11 15 9 13 8 13 12 20 8 14 11 23 9 20 11 29 8 24 11 44 5 28 4 30 3 36v47l-3 32-7 48-6 28-10 35-9 26-11 28-11 23-7 14-11 19-11 18-13 19-10 14-12 16-11 13-9 11-12 12-6 7-6 5-5 5-17 16-14 11-12 10-19 14-11 7-17 11-26 15-21 11-31 14-30 11-25 8-30 8-36 7-42 6-30 3h-25l-16-8-5-6-4-11-1-153v-561l1-335 3-11 6-9 7-4z" />
                    </svg>


                </div>
            }
            <main className='main_layout_style'>
                <Outlet />
                {
                    is_visible &&
                    <Img_zoomer />
                }
                <Footer />
                {
                    isVeiodPlayed && window.innerWidth > 800 &&
                    <video className='NackgVider' src="media/215598.mp4" muted autoPlay loop></video>
                }
                {
                    (isVeiodPlayed || isImageChoosed) && window.innerWidth > 800 &&
                    <div className="wmia mt50" style={{ minHeight: "1300px" }}>
                        <h1 style={{ color: "#fff" }}>enjoy the view  </h1>
                    </div>
                }

            </main>

        </div >
    )
}
