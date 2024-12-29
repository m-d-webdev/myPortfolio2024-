import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import '../main.css'
import Footer from './footer'
export default function Layout() {
    return (
        <div>
            <Header />
            <main className='main_layout_style'>
                <Outlet />
            </main>
           <Footer />
        </div>
    )
}
