import React, { useState } from 'react'

function Btn_copy({ text }) {
    const [isCopied, setCopied] = useState(false)
    function handelCopyText() {
        if (!isCopied) {

            setCopied(true);
            navigator.clipboard.writeText(text);
            setTimeout(() => {
                setCopied(false);
            }, 5000)
        }

    }
    return (
        <span className='r-c-c ml20  BtnCopyText  br20'
            onClick={handelCopyText}
        >
            {isCopied ?
                <>
                    <svg className='pop' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    <p className='ml10 animate__animated animate__fadeInLeft'>Copied !</p>
                </>
                :
                <>

                    <svg xmlns="http://www.w3.org/2000/svg" className='' viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" /></svg>
                    <p className='ml10 animate__animated animate__fadeInLeft'>Copy</p>
                </>}
        </span>
    )
}



export default Btn_copy

