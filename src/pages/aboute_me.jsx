import React from 'react'
import { Link } from 'react-router-dom'

function Aboute_me() {
    return (
        <div className='wmia  p10 r-p-c'>
            <div className="c-s-s" style={{
                width: "40%"
            }}>
                <h1 className='WELCOMING_TEXT_STYLE w600 '>
                    Welcome! I'm mustapha iderkoui, and I build ideas into digital realities.
                </h1>
                <h2
                    style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        marginBottom: "20px",
                        fontWeight: "900"
                    }}
                >
                    A Full Stack Developer with a knack for creating intuitive and efficient web solutions.
                </h2>
                <p className=''>I specialize in creating dynamic and responsive web applications using React, Node.js, and Laravel.</p>
                <button className='w200 r-c-c mt20 mb20 br20 p10 bg--'
                    style={{cursor:"pointer"}}
                >
                    <strong> more about me </strong>
                    <svg version="1.1" viewBox="0 0 2048 2048" className='ml10' xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(961)" d="m0 0h119l2 2 33 7 28 8 26 9 30 13 19 10 20 12 22 15 14 11 10 8 12 11 10 9 7 7 7 8 10 11 13 17 9 12 10 15 14 24 8 16 10 22 11 30 8 29 6 29 3 23 1 12v54l-3 32-4 23-6 24-7 23-9 24-9 21-14 27-8 13-12 18-12 17-13 16-7 8-5 6h-2l-2 4-8 8-8 7-10 10-11 8-6 6h-2v3l10 3 27 11 16 7 21 10 18 10 21 12 18 11 21 14 17 12 20 15 10 8 14 12 20 18 8 8 8 7 11 11 6 1 13-4 10-5 40-15 36-14 16-5 13-2h10l14 3 14 7 10 9 7 9 7 14 2 8 1 9v206l1 9 9 4 26 9 19 9 15 9 16 12 12 11 11 11 9 11 10 14 8 13 10 22 8 24 5 25 1 13v23l-2 21-5 20-10 28-8 15-11 18-9 12-11 13-10 10-14 11-15 10-23 12-29 11-12 4-1 183-1 54-2 13-5 12-11 13-8 6-14 7-35 14-74 28-46 17-48 18-70 26-31 12-29 11-24 9-70 26-37 14-32 12-38 14-34 13-37 14-30 11-5 2 1 3h-34l-35-14-23-9-33-12-40-15-203-76-88-33-29-11-43-16-29-11-43-16-24-9-49-19-19-9-11-8-7-8-7-11-3-12-1-8-2-52v-182l-6-3-17-5-21-9-15-8-16-11-14-11-23-23-11-15-12-20-10-21-8-24-5-25-1-12v-18l2-19 4-21 9-27 12-25 10-16 9-11 10-12h2v-2l8-7 7-7 16-12 17-10 17-8 20-7 14-5 1-1 1-144 1-70 2-17 7-14 8-10 7-7 14-9 11-4h16l19 4 24 8 31 12 42 16 14 5 5-1 5-4 7-9 11-9 14-14 8-7 15-13 17-13 18-13 17-12 15-10 17-10 20-12 28-15 20-9 19-8 24-10 4-1-3-5-7-7-11-8-9-9-6-5-7-8-10-10v-2h-2l-9-11-10-13-15-20-13-21-9-16-13-26-14-36-6-19-6-24-5-29-3-31v-49l2-21 6-35 9-35 8-23 10-24 8-16 12-23 16-24 11-16 10-13 12-13 6-7 16-16 8-7 12-11 20-15 15-10 25-15 29-15 26-11 30-10 32-8 10-2h4zm116 1m-59 119-34 2-24 4-21 6-17 6-18 8-16 8-13 8-16 11-10 8-11 9-25 25-9 11-7 9-7 11-10 17-8 15-10 23-7 20-4 14-4 20-3 26v36l3 26 5 24 5 18 11 28 8 16 10 18 12 17 7 9 9 11 9 10 14 14 11 9 18 13 23 14 15 8 26 11 23 7 23 5 28 3h44l17-2 24-5 23-7 20-8 16-7 18-10 17-11 14-10 13-11 12-11 14-14 7-9 9-12 10-15 14-26 10-25 8-25 6-30 2-18v-40l-2-22-5-26-6-22-12-30-10-19-11-19-13-18-12-14-9-10-10-10-14-11-13-10-17-11-18-10-24-11-30-10-17-4-20-3-36-2zm-11 679-43 3-24 3-34 6-30 7-30 9-27 9-29 12-25 12-19 10-24 14-31 21-20 14-17 11-8 6v2l24 11 25 10 31 12 16 6 30 11 28 11 35 13 33 12 23 9 40 15 29 11 34 13 15 6 11 4h9l19-8 30-11 26-10 61-23 26-10 34-13 24-9 26-10 52-19 20-7 34-13 18-8v-3l-4-5-12-8-13-10-10-7-24-16-19-12-21-12-27-14-25-11-35-13-29-9-36-9-26-5-38-5-39-3zm-563 195v26l-1 55v38l2 6 16 8 17 9 10 8 9 8 8 10 8 14 8 20 2 20v189l-1 26-3 16-5 13-8 14-9 12-10 10-16 10-17 8-10 5-1 132v49l1 6 19 7 28 10 90 34 37 14 29 11 27 10 29 11 17 6 43 16 26 10 16 6 30 11 42 16 44 16 30 13 9 4h2v-711l-8-4-73-28-40-15-37-14-50-19-27-10-35-13-43-16-31-12-35-13-50-19-52-19-27-11-7-3zm1156 1-28 11-64 24-43 16-19 7-40 15-38 14-42 16-95 35-48 18-31 12-23 8-35 13-9 4-1 3-1 79v593l1 38 9-3 28-11 69-26 31-12 29-11 30-11 73-28 29-11 30-11 29-11 76-28 36-13 28-10 18-7 3-3 1-154v-30l-8-5-16-7-12-8-10-9-12-12-9-13-8-18-4-20-1-15v-184l1-23 3-15 11-25 8-11 10-11 10-7 21-11 14-7 1-2 1-123zm-1226 244-23 2-17 4-10 4-11 8-10 9-10 16-5 11-3 14-1 8v9l4 20 8 17 8 11 6 7h2v2l9 6 18 7 25 5 22 2h9l5-3 1-8 1-33v-104l-2-12-2-2zm1270 1v152l2 7 7 1h11l27-2 15-3 13-5 11-6 10-9 9-10 8-15 3-10 2-15v-15l-3-15-5-13-8-12-9-10-12-9-10-5-12-4-16-2z" />
                        <path transform="translate(1107)" d="m0 0h9v3h-6z" />
                        <path transform="translate(946)" d="m0 0h7v3l-4 1-3-1z" />
                        <path transform="translate(1e3 2047)" d="m0 0 4 1z" />
                        <path transform="translate(1084,1)" d="m0 0 3 1z" />
                        <path transform="translate(1103)" d="m0 0 2 1-2 1z" />
                        <path transform="translate(957)" d="m0 0 3 1z" />
                        <path transform="translate(955)" d="m0 0" />
                    </svg>

                </button>
                <div className="r-w-c mt10" style={{ fontSize: "15px" }}>
                    Feel free to <Link to={'/projects'} className='ml5 mr5' style={{ padding: "0", color: "var(---)", fontWeight: "900" }}>check out my work</Link> or <Link to={'/contact'} style={{ padding: "0", color: "var(---)", fontWeight: "900" }} className='ml5 mr5'>get in touch</Link>
                </div>

            </div>
            <div className="c-c-c "
                style={{
                    width: "40%"
                }} >
                <img className='MyImageStyle' src="media/pexels-linkedin-2182970.jpg" alt="" />
                <p className='mt10'>this is my Profile Picture</p>

            </div>
        </div>
    )
}

export default Aboute_me
