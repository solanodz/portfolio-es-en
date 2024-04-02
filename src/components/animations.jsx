"use client"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimationFunction = ({ children }) => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            },
        }
    }

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    return (
        <motion.div
            ref={ref}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 justify-around w-full  p-3 rounded-lg drop-shadow-md items-center dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative  duration-200"
        >
            {children}
        </motion.div>
    )
}

export default AnimationFunction