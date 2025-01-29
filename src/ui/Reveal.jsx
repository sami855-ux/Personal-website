import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import PropTypes from "prop-types"

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          right: 0,
          background: "#f3a940",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  )
}

Reveal.propTypes = {
  width: PropTypes.string,
  children: PropTypes.func.isRequired,
}

export default Reveal
