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
            </main>
        </div>
    )
}
