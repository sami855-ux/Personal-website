import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import PropTypes from "prop-types"

const MenuAnimate = ({ children }) => {
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
          animated: { y: 20, opacity: 0 },
          current: { y: 0, opacity: 1 },
        }}
        initial="animated"
        animate={iconControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

MenuAnimate.propTypes = {
  children: PropTypes.func.isRequired,
  time: PropTypes.number,
}

export default MenuAnimate
