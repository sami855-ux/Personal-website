import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import PropTypes from "prop-types"

const BoxAnimate = ({ children, left, right }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const iconControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      iconControls.start("current")
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={{
          animated: { x: left ? left : right, opacity: 0 },
          current: { x: 0, opacity: 1 },
        }}
        initial="animated"
        animate={iconControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

BoxAnimate.propTypes = {
  children: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
}

export default BoxAnimate
