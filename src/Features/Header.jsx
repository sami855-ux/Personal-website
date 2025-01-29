import { useState } from "react"
import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { HiOutlineBars3, HiXMark } from "react-icons/hi2"
import { Link } from "react-scroll"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const pervious = scrollY.getPrevious()

    if (latest > pervious && latest > 150) setHidden(true)
    else setHidden(false)
  })

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-30 flex items-center justify-between w-full h-10 px-4 md:h-16 md:px-24 bg-bgcolor"
    >
      <div className="relative flex items-center w-24 h-full">
        <h1 className="text-xl font-bold text-transparent md:text-3xl bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className=""
          >
            Sami
          </Link>
        </h1>
      </div>
      <Menu />
      <div className="items-center hidden md:flex">
        <button className="px-3 py-2 text-sm cursor-pointer bg-gradient-to-r from-gradientFrom to-gradietTo text-textcolor rounded-xl font-Poppins">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=samitale86@gmail.com">
            Connect with me
          </a>
        </button>
      </div>
      <div className="md:hidden">
        <HiOutlineBars3
          size={23}
          onClick={() => {
            setMobileMenu((curr) => !curr)
          }}
        />
      </div>
      {/* background overlay */}
      {!mobileMenu ? null : (
        <div
          className="absolute top-0 left-0 w-screen transition-all duration-150 ease-in-out h-dvh bg-gray-750/80 backdrop-blur-sm "
          onClick={() => {
            setMobileMenu(false)
          }}
        ></div>
      )}
      {/* Mobile navigation */}
      <ul
        className={`${
          mobileMenu
            ? " right-0  flex md:hidden fixed top-0 bg-slate-100/75 w-56 h-dvh flex-col  z-20 space-y-3 py-5 px-2   transition-all duration-200 ease-out overflow-hidden"
            : " right-[-100%] flex md:hidden fixed top-0 bg-slate-100/75 w-56 h-dvh flex-col  z-20 space-y-3 py-5 px-2   transition-all duration-200 ease-out overflow-hidden"
        }`}
      >
        <p className="absolute right-2 top-2">
          <HiXMark
            fill="#222"
            className="cursor-pointer"
            size={25}
            onClick={() => {
              setMobileMenu(false)
            }}
          />
        </p>

        <h2 className="w-full px-4 py-2 text-3xl font-bold font-Inter text-bgcolor h-fit">
          Menu
        </h2>

        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="py-2 pl-1 text-xs text-gray-700 cursor-pointer font-Poppins hover:bg-slate-400"
          onClick={() => {
            setMobileMenu(false)
          }}
        >
          Home
        </Link>
        <Link
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="py-2 pl-1 text-xs text-gray-700 cursor-pointer font-Poppins hover:bg-slate-400"
          onClick={() => {
            setMobileMenu(false)
          }}
        >
          AboutMe
        </Link>
        <Link
          to="project"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="py-2 pl-1 text-xs text-gray-700 cursor-pointer font-Poppins hover:bg-slate-400"
          onClick={() => {
            setMobileMenu(false)
          }}
        >
          Projects
        </Link>
        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="py-2 pl-1 text-xs text-gray-700 cursor-pointer font-Poppins hover:bg-slate-400"
          onClick={() => {
            setMobileMenu(false)
          }}
        >
          Service
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          className="py-2 pl-1 text-xs text-gray-700 cursor-pointer font-Poppins hover:bg-slate-400"
          onClick={() => {
            setMobileMenu(false)
          }}
        >
          Contact
        </Link>
      </ul>
    </motion.nav>
  )
}

const Menu = () => {
  return (
    <ul className="items-center hidden md:flex ">
      <li
        className={`text-sm text-slate-50 px-2 mx-1 cursor-pointer font-extralight capitalize font-Poppins `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className=""
        >
          Home
        </Link>
      </li>

      <li
        className={`text-sm text-slate-50 px-2 mx-1 cursor-pointer font-extralight capitalize font-Poppins `}
      >
        <Link to="aboutme" spy={true} smooth={true} offset={-50} duration={500}>
          AboutMe
        </Link>
      </li>
      <li
        className={`text-sm text-slate-50 px-2 mx-1 cursor-pointer font-extralight capitalize font-Poppins `}
      >
        <Link to="project" spy={true} smooth={true} offset={-50} duration={500}>
          Projects
        </Link>
      </li>
      <li
        className={`text-sm text-slate-50 px-2 mx-1 cursor-pointer font-extralight capitalize font-Poppins `}
      >
        <Link
          to="service"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Service
        </Link>
      </li>
      <li
        className={`text-sm text-slate-50 px-2 mx-1 cursor-pointer font-extralight capitalize font-Poppins`}
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
export default Header
