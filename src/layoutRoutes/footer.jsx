import React, { useRef, useEffect, useState, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

import Lottie from 'react-lottie'
import animationDat from "./Animation - 1731398071278.json"
function Footer() {

    const [messageToMesinle, setSinglemessageToMe] = useState('')
    const isWorkingOnPc = window.innerWidth > 800


    const [GetWriterFunction_VSBL, setGetWriterFunction_VSBL] = useState(false)
    const GetWriterFunction = useMemo(() =>
        () => {


            const [MessageToMe, setMessageToMe] = useState({
                message: messageToMesinle,
                writerName: "",
                writerFunction: ""
            })
            const [messageSent, setmessageSent] = useState(false)
            const [isSendingMes, setisSendingMes] = useState(false)


            const handelSubmitForm = async () => {
                setisSendingMes(true);
                await addDoc(collection(db, "messages"), MessageToMe).then(res => {
                    console.log(res);
                    localStorage.setItem("message-for-me", 'sent');
                    setisSendingMes(false);
                    setmessageSent(true)
                }).catch(er => {
                    console.log(er);

                })


            }


            const [cardStyle, setCardStyle] = useState({
                maxWidth: "600px"
            })
            return ReactDOM.createPortal(
                <div className='backendMer p10'>
                    <div style={cardStyle} className="activeCmp wmia h400 br20 bg-l p20 c-p-c psr">
                        {
                            isSendingMes ?
                                <div className="loader2"></div>
                                :
                                <>
                                    {
                                        messageSent ?
                                            <>
                                                <Lottie options={{
                                                    loop: false,
                                                    autoplay: true,
                                                    animationData: animationDat,
                                                }} height={100} width={100} />

                                                <h1 className='w400' style={{ textAlign: "center" }}>Thank you! Your feedback has been successfully submitted</h1>

                                                <button onClick={() => setGetWriterFunction_VSBL(false)} className='w100 p10 ' style={{ color: "#fff", backgroundColor: "var(---)" }}>Done</button>
                                            </>
                                            :
                                            <>
                                                <h2 style={{ textAlign: "center" }}>Thank you for your valuable feedback! If you’d like, you can also share your name and job title with us ?  </h2>
                                                <div className=" LabelInpInfo mt50" style={{ maxWidth: "400px" }}>
                                                    <input
                                                        value={MessageToMe.writerName}
                                                        onChange={(e) => {
                                                            setMessageToMe(cur => ({ ...cur, writerName: e.target.value }))
                                                        }}

                                                        className='fw900' type="text" name="name" id="name" placeholder='' />
                                                    <label htmlFor="name" className='fw600'>Your name </label>
                                                    <svg version="1.1" viewBox="0 0 2048 2048" className='iconeLabelInpinfo' xmlns="http://www.w3.org/2000/svg">
                                                        <path transform="translate(613,988)" d="m0 0 18 2 14 4 17 7 22 12 48 30 14 9 17 11 21 12 14 7 33 15 34 15 19 8 26 8 30 7 25 4 43 4h30l49-5 29-6 36-10 28-11 41-18 20-9 16-8 20-11 17-11 44-28 28-17 21-11 21-7 13-2h20l36 3 31 4 23 5 29 9 21 8 29 14 17 9 19 12 12 9 14 11 14 12 13 12 15 16 11 13 10 13 13 18 16 26 12 22 11 23 11 25 14 33 9 24 9 28 14 56 9 40 7 43 7 53 4 41 4 68 1 30v34l-2 29-5 41-5 24-11 36-8 19-14 28-11 18-14 19-11 13-9 11-15 15-11 9-10 8-15 11-19 12-29 15-29 12-21 7-29 8-21 5-6 1-1 2h-2l-1 2v-2l-8-1v3h-1099v-2l-21-5-40-11-27-8-24-10-21-10-19-11-17-12-14-11-14-12-20-20-9-11-13-16-10-15-12-21-14-29-9-25-9-32-5-25-3-23-2-26v-62l3-66 5-51 9-68 8-42 8-35 13-50 6-19 7-20 10-24 12-28 13-29 14-28 14-23 11-17 14-19 9-10 5-7h2l2-4 12-13 15-15 11-9 18-14 12-9 14-9 26-14 19-9 24-9 23-7 25-6 25-4 39-4zm-19 121-39 6-24 6-19 7-14 6-22 12-12 8-9 7-10 8-9 8-12 15v2h-2l-8 11-13 16-11 16-13 21-15 31-16 36-10 26-11 39-9 36-11 51-5 34-6 54-3 33-3 55v57l4 36 6 27 9 27 8 16 7 13 12 16 11 12 15 15 13 10 17 11 19 10 20 8 19 6 24 5 29 3 37 2 66 1h172l728-1 43-2 25-3 26-6 27-9 20-9 17-10 14-10 13-11 3-2v-2l4-2 7-8 13-16 12-19 9-19 6-17 6-26 3-20 3-33v-44l-2-52-3-41-7-56-8-51-8-36-10-39-9-31-6-17-12-29-13-29-10-19-8-14-11-16-14-19-10-13-11-13-9-10-11-10-20-14-18-10-15-8-21-8-16-5-15-4-19-3-14-1-3 2-6-1 1-2-8-1-12 5-10 5-32 21-22 14-17 11-13 8-28 16-23 12-19 9-28 11-27 10-32 10-54 13-24 4-44 4-29 2h-12l-49-3-33-4-24-5-50-13-30-10-18-7-27-11-22-10-19-10-27-15-38-24-40-26-20-12-10-4-4-1z" />
                                                        <path transform="translate(908)" d="m0 0h207l1 5h-4l-4-1h-6l-6 2h-7l31 6 27 7 31 10 27 10 19 9 19 10 18 10 21 13 16 12 17 14 11 9 13 11 20 18 22 24 9 11 12 15 9 12 14 20 9 15 13 24 10 19 12 27 13 40 8 30 5 26 4 35 2 27v43l-3 41-4 29-6 27-10 36-12 35-8 16-10 21-18 32-11 17-16 21-9 12-12 14-9 11-6 7-6 5-7 8-11 9-5 5-10 9-11 9-14 12-17 12-14 9-23 13-34 18-20 9-30 10-42 12-30 6-41 5-33 3h-25l-49-4-35-5-17-4-24-7-29-9-21-8-25-12-32-17-17-10-12-8-16-12-13-11-22-18-14-12-16-16-7-8-11-13-11-14-11-13-12-16-11-17-12-21-13-25-8-16-10-24-9-28-10-34-5-26-3-23-4-46v-34l5-52 4-26 6-25 7-24 12-36 12-28 13-24 11-20 6-9 6-11 11-15 10-13 4-5h2l2-4 12-14 9-11 8-8 7-8 4-4h2v-2l8-7 28-24 11-9 19-14 18-11 17-10 28-15 19-9 27-10 19-6 25-7 19-5 11-1-1-5-8-1zm17 5m70 116-23 1-27 3-26 5-28 8-29 10-26 13-16 10-11 6-18 13-22 18-13 12-6 5-4 4v2l-4 2-7 8-12 14-11 13-12 16-10 16-6 10-6 11-8 16-8 18-7 19-9 34-5 26-3 25-1 11v41l3 34 4 25 10 38 8 24 13 28 14 25 10 15 10 13 14 17 7 8 12 14 12 12 11 9 10 9 14 11 16 12 24 14 10 6 23 11 17 7 25 8 30 7 31 4 21 2 17 1h16l34-3 25-3 23-5 24-7 21-7 28-13 25-14 11-7 16-11 10-8 16-13 13-12 6-5 7-8 8-8 14-16 8-10 9-12 10-15 14-26 11-22 7-18 12-42 4-18 3-24 2-27v-44l-4-36-5-26-7-25-11-32-15-31-16-27-12-17-10-13-9-11-10-11-1-2h-2l-2-4-8-8-8-7-10-9-14-11-19-14-21-13-18-10-16-8-24-10-23-7-32-8-30-4-33-2z" />
                                                        <path transform="translate(441,2045)" d="m0 0 7 2v1h-9v-2z" />
                                                        <path transform="translate(1571,2046)" d="m0 0 1 2-2-1z" />
                                                        <path transform="translate(904)" d="m0 0 2 1z" />
                                                        <path transform="translate(1110,5)" d="m0 0" />
                                                    </svg>
                                                </div>
                                                <div className="LabelinpSelect mt20" style={{ maxWidth: "400px" }}>
                                                    <select
                                                        id='job'
                                                        name='job'
                                                        value={MessageToMe.writerFunction}
                                                        onChange={(e) => {
                                                            setMessageToMe(cur => ({ ...cur, writerFunction: e.target.value }))
                                                        }}
                                                    >
                                                        <option value="">Select a job</option>
                                                        <option value="frontend_developer">Frontend Developer</option>
                                                        <option value="backend_developer">Backend Developer</option>
                                                        <option value="full_stack_developer">Full Stack Developer</option>
                                                        <option value="software_engineer">Software Engineer</option>
                                                        <option value="web_developer">Web Developer</option>
                                                        <option value="mobile_developer">Mobile Developer</option>
                                                        <option value="data_scientist">Data Scientist</option>
                                                        <option value="data_engineer">Data Engineer</option>
                                                        <option value="machine_learning_engineer">Machine Learning Engineer</option>
                                                        <option value="devops_engineer">DevOps Engineer</option>
                                                        <option value="system_administrator">System Administrator</option>
                                                        <option value="database_administrator">Database Administrator</option>
                                                        <option value="cloud_engineer">Cloud Engineer</option>
                                                        <option value="security_engineer">Security Engineer</option>
                                                        <option value="ux_ui_designer">UX/UI Designer</option>
                                                        <option value="game_developer">Game Developer</option>
                                                        <option value="qa_engineer">QA Engineer</option>
                                                        <option value="software_architect">Software Architect</option>
                                                        <option value="technical_writer">Technical Writer</option>
                                                        <option value="ai_engineer">AI Engineer</option>
                                                        <option value="web_designer">Web Designer</option>
                                                        <option value="business_analyst">Business Analyst</option>
                                                        <option value="other">Other , Not to say </option>
                                                    </select>
                                                    <label htmlFor="job" className='fw600'>Your job </label>
                                                    <svg version="1.1" viewBox="0 0 2048 2048" className='iconeLabelInpinfo' xmlns="http://www.w3.org/2000/svg">
                                                        <path transform="translate(745,119)" d="m0 0 607 1 29 2 20 3 24 7 24 11 16 10 12 9 13 11 8 8 11 14 10 14 12 22 9 23 5 22 2 21 1 44v97h302l33 1 22 3 16 4 16 6 19 9 12 8 12 9 10 9 8 7 9 11 9 12 8 13 8 16 10 23 4 11h2v389l-3-1-1-5-4 2-9 26-12 25-11 20-11 15-13 17-9 10-4 8-2 6v25l-1 112-1 497-1 28-2 23-4 20-7 19-9 19-7 11-10 13-7 9h-2l-2 4-13 12-13 10-13 8-16 8-16 6-22 5-21 3-24 2-54 1h-1460l-19-1-26-4-21-6-19-8-17-10-13-10-12-10v-2l-3-1-7-8-10-11-9-13-9-15-7-15-6-18-4-18-2-16-1-16-1-40v-617l-4-7-9-11-12-15-16-23-12-21-8-17-11-31-2 1-1-3 1-4-2-1-2-6v-9-2-360h2l1-5 10-23 9-19 14-22 12-14 9-10 9-8 17-12 15-9 19-9 16-5 15-3 8-1 19-1h275l47 1v-39l1-90 2-27 4-20 8-24 8-16 12-21 10-13 11-12 9-9 11-9 13-9 21-12 19-8 17-5 24-4 16-1zm7 121-70 1-16 2-9 4-11 7-5 4-10 13-7 14-2 7-2 20-1 50v76l69 1h737l1-22 1-102-2-21-5-16-7-11-9-10-8-6-14-7-8-2-15-1-189-1zm-570 318-19 2-10 4-10 7-10 9-7 10-4 13-2 15v283l2 21 4 18 7 17 12 20 11 14 12 13 6 6h2v2l11 9 15 12 20 14 23 14 26 14 24 12 18 8 32 13 24 9 43 14 42 12 56 14 47 10 43 8 45 7 44 6 115 13h10l1-11v-21l2-32 3-12 7-11 7-9 9-8 12-7 14-2 44-1h250l19 1 12 3 10 6 8 7 10 13 5 10 3 14 1 60h10l82-9 74-9 60-10 43-8 57-13 43-11 44-13 36-12 32-12 31-13 39-19 23-13 21-13 17-12 14-11 10-8 13-12 9-9 9-11 11-17 8-15 3-9 4-19 2-19v-294l-4-14-6-11-8-10-11-9-10-5-10-2-24-1zm-180 394m197 223v530l1 48 3 14 7 14 7 8 14 10 10 4 9 2 9 1 521 1h70l927-1 17-1 13-3 12-6 12-9 7-9 4-9 2-8 2-22v-424l2-136-1-2-9 3-18 8-15 7-39 17-29 11-47 16-44 13-30 8-57 14-75 15-81 13-45 6-82 9-37 4-10 2-4 8-6 20-10 23-15 25-9 12-12 13-7 7-11 9-11 8-21 12-14 6-29 9-25 5-18 2h-34l-20-2-19-4-24-8-23-11-15-10-12-9-13-11-9-9-9-11-10-14-10-17-8-18-8-24-3-7-3-4-3-1-35-3-37-4-113-14-95-16-61-13-48-12-41-12-49-16-34-13-37-15-29-13-24-11-10-5zm739 32-3 2v67l3 24 3 12 8 16 9 11h2v2l13 10 11 5 19 5 7 1h25l16-3 15-5 13-8 7-5v-2l4-2 8-10 6-12 5-21 1-7 1-75-2-4-3-1z" />
                                                        <path transform="translate(3,976)" d="m0 0 3 3-3-1z" />
                                                        <path transform="translate(0,966)" d="m0 0 3 1-1 2z" />
                                                        <path transform="translate(2046,970)" d="m0 0h2v2h-2z" />
                                                        <path transform="translate(0,572)" d="m0 0" />
                                                        <path transform="translate(2047,563)" d="m0 0" />
                                                        <path transform="translate(8,974)" d="m0 0" />
                                                        <path transform="translate(3,974)" d="m0 0" />
                                                        <path transform="translate(7,973)" d="m0 0" />
                                                        <path transform="translate(8,972)" d="m0 0" />
                                                        <path transform="translate(2,971)" d="m0 0" />
                                                        <path transform="translate(1,970)" d="m0 0" />
                                                        <path transform="translate(1,963)" d="m0 0" />
                                                        <path transform="translate(3,957)" d="m0 0" />
                                                    </svg>

                                                </div>

                                                <div className="wmia r-e-c mt50 " onClick={handelSubmitForm} style={{ maxWidth: "500px" }}>
                                                    <button className='mr20'>
                                                        Message share only
                                                    </button>
                                                    <button onClick={handelSubmitForm} disabled={MessageToMe.writerName == "" || MessageToMe.writerFunction == ""} className='bl p5 w200 '>Share</button>
                                                </div>
                                            </>
                                    }

                                </>
                        }




                    </div>
                </div>
                , document.getElementById("portals")
            )
        }, [messageToMesinle])

    const footerRef = useRef(null)
    useEffect(() => {
        if (footerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    } else {
                        entry.target.classList.remove('active')
                    }
                }, {
                threshold: .5
            }
            )

            observer.observe(footerRef.current)

        }

    }, [])
    return (
        <footer ref={footerRef} className='wmia portfolioSection mt50 c-s-s bg-l br20 p20'>

            <div className={`wmia mt20 mb20 p20 ${isWorkingOnPc ? "r-p-c" : "c-c-c"} `}>
                <h1
                    className={`${isWorkingOnPc ? "" : "mb20"} `}
                    style={{
                        fontSize: "22px", textAlign: "center"
                    }}
                >
                    Collaborate with a developer who understands your business goals !
                </h1>
                <img src="media/rb_2147627097.png" className={`${isWorkingOnPc ? "ml50 h200" : " h200"} `} alt="" />
            </div>
            <div className={`wmia   ${isWorkingOnPc ? "r-p-c p10" : "c-c-c"}  mt50 `}>
                <div className="wmia c-s-s">

                    {localStorage.getItem("message-for-me") == null ?
                        <>
                            <p className='r-s-c ' style={{ maxWidth: "900px" }} >
                                If you have any feedback, whether it's comments, encouragement, or criticism after exploring this site, feel free to drop me a message—I truly see it as a help. Thank you!
                            </p>
                            <div className="cntTexttareaMessage p10 mt10  psr bg-third c-e-e">
                                <textarea onChange={(e) => {
                                    setSinglemessageToMe(e.target.value)
                                }} name="" id="" placeholder='Go ahead ... '>
                                </textarea>
                                <button
                                    disabled={messageToMesinle.length < 10}
                                    onClick={() => {
                                        setGetWriterFunction_VSBL(true)
                                    }} className='r-e-c'>
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
                                color: "var(---)", fontSize: "20px",textAlign:'center'
                            }}
                            >Thank you for your message! It’s been received and will be reviewed</h1>
                        </>

                    }
                </div>
                <div className="c-c-c " style={isWorkingOnPc ? { width: "40%"  } : {width:"100%" ,marginTop:"20px"}}>
                    <img style={{ maxWidth: "100%", maxHeight: "400px" }} src="media/rb_17635.png" alt="" />
                    <p className='fw600'>Feedback</p>
                </div>
            </div>

            <h1 className="r-c-c mt50 hoverEff2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='mr20'><path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                2024 Mustapha Iderkaoui. All Rights Reserved
            </h1>

            {
                GetWriterFunction_VSBL &&
                <GetWriterFunction />
            }
        </footer>
    )
}

export default Footer
