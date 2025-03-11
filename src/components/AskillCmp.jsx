import { useEffect, useRef, useState } from 'react'
import AnimateWhenVisible from '../components/AnimateWhenVisible'
import { motion } from 'framer-motion'
const AskillCmp = ({ s ,i }) => {
    const [isShowenHome, setShowenHome] = useState(false)
    const SkillRef = useRef(null);
    useEffect(() => {
        if (SkillRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setShowenHome(true)
                    } else {
                        setShowenHome(false)
                    }
                }, {

                threshold: 1
            }
            )
            observer.observe(SkillRef.current)

        }
    }, []);
    return (

        <>
            <div className="" ref={SkillRef}></div>

            <motion.div
                initial={{scale:.3 ,opacity:0}}
                exit={{scale:.3 ,opacity:0}}
                animate={{scale:1 ,opacity:1 ,transition:{delay:i*.2 ,duration:.6,type:"spring"}}}
                className="SkillElemHome c-s-s p10 br10 psr">
                <div style={{
                    borderBottom: "solid 1px var(--border-color )"
                }} className="wmia pb10 r-s-e">
                    <div className="r-c-c">{s.svgs}</div>
                    <h1 className='ml20 Skil_title'>{s.title}</h1>
                </div>
                {
                    s.desc &&
                    <p className='mt20'>{s.desc}</p>
                }
                {
                    s.desc_jsx && s.desc_jsx
                }
            </motion.div>
        </>

    )
}

export default AskillCmp
