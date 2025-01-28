import { HiArrowUpRight } from "react-icons/hi2"
import PropTypes from "prop-types"

import Reveal from "../ui/Reveal"

const Contact = () => {
  return (
    <div className="w-full min-h-[85vh] md:px-24 overflow-hidden">
      <div className="flex items-center justify-center w-full">
        <Reveal>
          <h2 className="py-4 mb-5 text-xl font-bold text-center text-transparent capitalize md:text-3xl bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text">
            contact
          </h2>
        </Reveal>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:h-[60vh] px-4 md:px-36 mb-7">
          <p className="font-semibold capitalize ">Send me an email</p>
          <p className="pt-1 text-sm font-light">
            I&apos;am very responsive to any messages
          </p>

          <section className="flex flex-col w-full gap-4 mt-4">
            <div className="flex items-center w-full gap-3">
              <Input width="w-1/2" placeholder="Name" />
              <Input width="w-1/2" placeholder="Email" />
            </div>
            <Input width="w-full " placeholder="Subject" />
            <Input width="w-full " placeholder="Message" height="h-32" />
            <button className="w-40 text-sm h-9 rounded-xl bg-[#353434] border-2 border-[#353434] hover:border-[#474747] transition-all duration-200 ease-out">
              Send
            </button>
          </section>
        </div>
        <ContactCard />
      </div>
    </div>
  )
}

const Input = ({ width, placeholder, height = "h-12" }) => {
  return (
    <input
      type="text"
      className={`${height} text-sm border rounded-xl ${width} border-bgcolor pl-2 bg-[#353535] outline-none border-2  focus:border-[#474747] transition-all duration-200 ease-out`}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  width: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

const ContactCard = () => {
  return (
    <section className="h-40 md:h-24 mb-7 p-5 flex gap-5 items-center w-[400px] md:w-[600px] bg-gradient-to-r from-gradientFrom to-gradietTo rounded-xl">
      <div className="">
        <p className="pb-3 font-semibold font-Poppins">
          Let&apos;s create something amazing together!
        </p>
        <p className="text-xs font-light font-Raleway">
          Ready to bring your next project to life? Let&apos;s connect and
          discuss how can i help you to achieve your goal
        </p>
      </div>
      <button className="flex items-center justify-center h-8 gap-3 py-1 text-xs bg-black rounded-lg cursor-pointer w-52 md:w-40">
        <span className=""> Contact Me</span>{" "}
        <span className="">
          <HiArrowUpRight size={13} />
        </span>
      </button>
    </section>
  )
}
export default Contact
