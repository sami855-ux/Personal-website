import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6"
import Reveal from "../ui/Reveal"
import IconAnimate from "../ui/IconAnimate"
import TextAnimate from "../ui/TextAnimate"

import me from "../me.jpg"

const Home = () => {
  return (
    <div className="w-full h-[70vh] md:h-[90vh]  flex justify-center items-center flex-col  md:mt-0 relative">
      <img
        src={me}
        alt="person image"
        className="flex items-center justify-center object-cover rounded-full w-52 h-52"
      />

      <Reveal>
        <h1 className="py-4 mt-8 text-2xl font-bold text-center md:text-5xl text-textcolor font-Poppins">
          <span className="text-transparent font-Poppins bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text">
            I&apos;am Samule Tale,
          </span>{" "}
          Full Stack <br />
          developer based on Ethiopia
        </h1>
      </Reveal>

      <TextAnimate>
        <p className="px-2 text-xs font-light text-center md:text-sm">
          I&apos;am a frontend and backend javascript developer , with 3 years
          of exprience in the market, I have worked with many campanies
        </p>
      </TextAnimate>

      <div className="flex items-center justify-center space-x-7 mt-7">
        <Reveal>
          <button className="px-3 py-2 text-sm cursor-pointer bg-gradient-to-r from-gradientFrom to-gradietTo text-textcolor rounded-xl font-Poppins">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=samitale86@gmail.com"
              target="_blank"
            >
              Connect with me
            </a>
          </button>
        </Reveal>
        <Reveal>
          <button className="px-6 py-2 text-sm border cursor-pointer bg-bgcolor text-textcolor rounded-xl border-slate-200 font-Poppins">
            <a
              href="https://drive.google.com/file/d/1eSFXNFPkcabwP7xshPmUcGPqIPws6I24/view"
              target="_blank"
            >
              My Resume
            </a>
          </button>
        </Reveal>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center h-16 space-x-5 md:bottom-8 left-10 md:h-52 md:w-16 w-80 md:flex-col md:space-x-0 md:space-y-5">
        <IconAnimate>
          <a href="https://www.facebook.com/sami.tale.18" target="_blank">
            <FaFacebook
              fill="#fff"
              size={17}
              className="transition duration-200 ease-out hover:origin-center hover:rotate-45"
            />
          </a>
        </IconAnimate>
        <IconAnimate>
          <a href="https://x.com/sami_tale21931" target="_blank">
            <FaTwitter
              fill="#fff"
              size={17}
              className="transition duration-200 ease-out hover:origin-center hover:rotate-45"
            />
          </a>
        </IconAnimate>
        <IconAnimate>
          <a href="https://github.com/sami855-ux" target="_blank">
            <FaGithub
              fill="#fff"
              size={17}
              className="transition duration-200 ease-out hover:origin-center hover:rotate-45"
            />
          </a>
        </IconAnimate>
        <IconAnimate>
          <a
            href="https://www.instagram.com/sami.tale.18/profilecard/?igsh=MTNzZ254cmVvcnE2OQ=="
            target="_blank"
          >
            <FaInstagram
              fill="#fff"
              size={17}
              className="transition duration-200 ease-out hover:origin-center hover:rotate-45"
            />
          </a>
        </IconAnimate>
        <IconAnimate>
          <a href="https://t.me/sami_hhtt" target="_blank">
            <FaTelegram
              fill="#fff"
              size={17}
              className="transition duration-200 ease-out hover:origin-center hover:rotate-45"
            />
          </a>
        </IconAnimate>
      </div>
    </div>
  )
}

export default Home
