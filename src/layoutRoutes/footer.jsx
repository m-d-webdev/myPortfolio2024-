import React from 'react'

function Footer() {
    return (
        <footer className='wmia mt50 c-s-s bg-l p20'>
           
            <div className="wmia mt20 mb20 p20 r-c-c">
                <h1
                    style={{
                        fontSize: "22px"
                    }}
                >
                    Collaborate with a developer who understands your business goals !
                </h1>
                <img src="media/rb_2147627097.png" className='ml50 h200' alt="" />
            </div>
            <div className="wmia p20 c-s-s mt10 wmia">
                {localStorage.getItem("message-for-me") == null ?
                    <>

                        <p className='r-s-c'>Have a comment, idea, or just want to say hello? I’m here—drop me a message!</p>
                        <div className="cntTexttareaMessage p10 mt10  psr bg-third c-e-e">
                            <textarea name="" id="" placeholder='Go ahead ... '>

                            </textarea>
                            <button className='r-e-c'>
                                Send
                                <svg version="1.1" viewBox="0 0 2048 2048" width="128" height="128" xmlns="http://www.w3.org/2000/svg">
                                    <path transform="translate(186,140)" d="m0 0h22l22 3 29 7 27 9 37 15 118 49 19 8 39 16 130 54 19 8 37 15 40 17 34 14 29 12 48 20 39 16 45 19 27 11 111 46 43 18 34 14 36 15 39 16 26 11 29 12 24 10 39 16 45 19 27 11 123 51 125 52 82 34 31 13 44 18 46 19 24 10 33 14 27 13 20 12 15 10 13 11 19 19 9 12 11 18 8 15 8 20 5 15v3l2 1 1 8 2 2v94l-2 1v-5l-7-1-3 11-8 19-8 13-7 11-12 16-12 14-12 12-21 13-16 9-24 12-33 14-36 15-29 12-32 13-33 14-31 13-37 15-31 13-41 17-75 31-43 18-70 29-39 16-156 65-34 14-19 8-135 56-94 39-29 12-38 16-44 18-31 13-34 14-19 8-94 39-118 49-82 34-96 40-41 17-30 12-31 11-19 5-25 4-25 2-26-2-18-4-17-5-18-8-17-9-17-12-10-9-8-7-12-12-9-11-10-14-8-14-8-16-7-17-5-15h-1l-1-8v-73l3-8 8-29 15-57 22-86 13-51 19-74 9-35 17-66 14-58 8-30 18-71 4-16 3-5 2-1 705-1 25-2 12-4 10-6 10-9 7-11 4-10 2-10v-14l-3-11-5-12-6-9-4-5-10-7-10-4-18-2-121-1-595-1-5-2-4-9-14-54-14-55-11-43-15-58-13-52-19-74-16-64-16-62-14-56-14-53-2-1-1-5v-81l2 2 2-4 7-21 9-20 6-12 9-14 11-14 9-10 7-8 10-9 15-11 19-12 19-9 26-8 16-3zm-184 237 1 2z" />
                                    <path transform="translate(2045,964)" d="m0 0h3v7l-1-3h-2z" />
                                    <path transform="translate(0,1662)" d="m0 0h1v6h-1z" />
                                    <path transform="translate(4,389)" d="m0 0" />
                                </svg>

                            </button>
                        </div>
                    </> :
                    <>
                        <h1 className="mrauto " style={{
                            color: "var(---)", fontSize: "20px"
                        }}
                        >Thank you for your message! It’s been received and will be reviewed</h1>
                    </>

                }
            </div>
            <h1 className="r-c-c mt50 hoverEff2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='mr20'><path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                2024 Mustapha Iderkaoui. All Rights Reserved
            </h1>
        </footer>
    )
}

export default Footer
