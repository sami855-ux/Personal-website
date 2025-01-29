import { HiDeviceMobile, HiTemplate } from "react-icons/hi"
import { AiOutlineCode } from "react-icons/ai"
import PropTypes from "prop-types"
import Reveal from "../ui/Reveal"
import TextAnimate from "../ui/TextAnimate"
import BoxAnimate from "../ui/BoxAnimate"
import CardOne from "../ui/CardOne"

const Service = () => {
  return (
    <div className="w-full min-h-[70vh] mt-7 md:mt-0 md:mb-32" id="service">
      <div className="flex items-center justify-center w-full">
        <Reveal>
          <h2 className="mb-3 text-xl font-bold text-center text-transparent md:text-3xl bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text">
            My services
          </h2>
        </Reveal>
      </div>
      <TextAnimate>
        <p className="px-4 md:px-72 text-[13px] text-center font-extralight font-Poppins py-2 mb-4">
          I provide custom web application development, delivering scalable and
          user-friendly solutions tailored to meet each client's unique needs.
        </p>
      </TextAnimate>
      <section className="flex flex-col items-center justify-center w-full gap-5 md:flex-row md:px-24">
        <ServiceCard
          icon={<HiDeviceMobile size={25} />}
          serviceName="FrontEnd Development"
          left={-100}
          text={
            "As a skilled front-end developer, I create visually compelling and user-friendly interfaces that blend aesthetics and functionality, delivering exceptional digital experiences."
          }
        />
        <ServiceCard
          icon={<HiTemplate size={25} />}
          serviceName="Website Design"
          text="As a skilled front-end developer, I craft visually compelling and user-friendly interfaces that deliver exceptional digital experiences."
        />
        <ServiceCard
          icon={<AiOutlineCode size={25} />}
          serviceName="BackEnd Development"
          right={100}
          text="I have robust back-end development skills, including expertise in languages like Node.js and Python, along with experience in database management using SQL and NoSQL."
        />
      </section>
    </div>
  )
}

const ServiceCard = ({ icon, serviceName, left, right, text }) => {
  return (
    <BoxAnimate left={left ? left : null} right={right ? right : null}>
      <section className="flex items-center flex-col p-5  w-72 h-[330px] bg-[#2b2a2a] rounded-lg  ">
        <span className="flex items-center justify-center w-12 h-12 bg-[#353535] rounded-full cursor-pointer hover:bg-gradietTo transition-all duration-200 ease-out">
          {icon}
        </span>
        <CardOne heading={serviceName} desc={text}></CardOne>
        {/* <p className="py-3 font-semibold leading-relaxed text-center text-normal text-slate-50 font-Poppins">
          {serviceName}
        </p>

        <span className="px-2 pt-2 text-xs font-thin text-center font-Poppins">
          {text}
        </span> */}
      </section>
    </BoxAnimate>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.func.isRequired,
  serviceName: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Service
