import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import '../main.css'
import { useDispatch, useSelector } from 'react-redux';
import { Img_zoomer } from '../pages/img_zoomer';
import Footer from './footer'
export default function Layout() {
    const { is_visible } = useSelector(e => e.img_zoomerReducer)

    return (
        <div>
            <Header />
            <main className='main_layout_style'>
                <Outlet />
                {
                    is_visible &&
                    <Img_zoomer />
                }
                <Footer />
                <video className='NackgVider' src="media/215598.mp4" muted autoPlay loop></video>
                {
                    window.innerWidth > 800 &&
                    <div className="wmia mt50" style={{ minHeight: "1300px" }}>
                        <h1 style={{ color: "#fff" }}>enjoy the view  </h1>
                    </div>
                }

            </main>
        </div>
    )
}
