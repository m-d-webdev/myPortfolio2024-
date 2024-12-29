import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className='wmia r-c-c mt50' style={{
            position: "absolute", top: "100px"
        }}>
            <div className="c-c-c">
                <img src="media/rb_2148509538-removebg-preview (1).png" alt="" className="" style={{ maxWidth: "600px", maxHeight: "500px" }} />
                <h1 style={{
                    fontSize: "40px",
                    fontWeight: "900 !important",
                    fontFamily: ' "Pacifico", serif',
                    letterSpacing: "3px"
                }}>
                    404 \ PAGE NOT FOUND !
                </h1>
            </div>
            <div className="c-c-c hmia ml50">
                <p>Sorry, the page you are looking for doesn't exist. Please check the URL or return to the homepage</p>
                <button
                    style={{
                        backgroundColor: "rgba(1,221,191,254)", fontWeight: "900"
                    }}
                    className='w300 mt50 r-c-c p10 br20'
                    onClick={()=>{
                        navigate(-1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"

                        style={{
                            transform: "rotate(-90deg)", color: "#000"
                        }}
                        className='mr20'
                        viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-120v-567l-64 63-56-56 160-160 160 160-56 56-64-63v567h-80Z" /></svg>
                    <h1
                        style={{
                            color: "#000",
                        }}>
                        Go back
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default NotFound
