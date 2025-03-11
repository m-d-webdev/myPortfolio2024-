import { AnimatePresence } from 'framer-motion'
import React from 'react'

const AnimateWhenVisible = ({ children, condition }) => {
    return (
        <>

            {
                condition == false &&


                <div className="" style={{ opacity: 0, visibility: "hidden" }}>
                    {children}
                </div>
            }

            <AnimatePresence>

                {
                    condition &&
                    <>
                        {children}
                    </>
                }
            </AnimatePresence>
        </>
    )
}

export default AnimateWhenVisible
