import { useState } from "react"
import { FaGithub } from "react-icons/fa6"
import PropTypes from "prop-types"

import Reveal from "../ui/Reveal"
import TextAnimate from "../ui/TextAnimate"

import projectOne from "../../public/proj1.png"
import projectTwo from "../../public/proj2.png"

const Projects = () => {
  return (
    <div className="w-full min-h-[87vh] pt-16" id="project">
      <div className="flex items-center justify-center w-full">
        <Reveal>
          <h1 className="mb-5 text-xl font-bold text-center text-transparent capitalize font-Poppins md:text-2xl bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text">
            Projects I have been working on
          </h1>
        </Reveal>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 pt-0 cursor-pointer md:flex-row md:pt-8 flex-wrap">
        <Card
          gener=" SPA website"
          title="Landing Page"
          description="Beautifull landing page using react, tailwindcss and other package"
          image={projectTwo}
        />
        <Card
          gener=" Mobile App"
          title="Tour and Travel App"
          description="You can find any ethiopian exotic places here."
          image="websitetwo.png"
          link="https://github.com/sami855-ux/Tour-Mobile-App-Main.git"
        />
        <Card
          gener="Website"
          title="E-commerce Website App"
          description="Dynamic website for purchasing any items"
          image={projectOne}
          link="https://github.com/sami855-ux/E-commerce-Website.git"
        />
        <Card
          gener="website system"
          title="Student Management System"
          description="Amazing management system with React, context API and much more packages"
          image="websitetwo.png"
          link="https://github.com/sami855-ux/Student-managment-Dashboard.git"
        />
      </div>
    </div>
  )
}

const Card = ({ gener, title, description, image, link }) => {
  const [enter, setEnter] = useState(false)
  return (
    <TextAnimate>
      <section className="overflow-hidden rounded-lg w-72 h-72 bg-gray-800/25">
        <div
          className="relative w-full h-48 bg-gray-300"
          onMouseEnter={() => {
            setEnter(true)
          }}
          onMouseLeave={() => {
            setEnter(false)
          }}
        >
          <img src={`${image}`} alt="" className="object-cover w-full h-full" />
          <section
            className={`${
              enter
                ? "opacity-100 absolute top-0 left-0 w-full h-full bg-gray-900/75 transition-all duration-200 ease-in-out flex items-center justify-center"
                : "opacity-0 absolute top-0 left-0 w-full h-full bg-gray-900/75 transition-all duration-200 ease-in-out flex items-center justify-center"
            }`}
          >
            <a href={`${link}`} target="_blank">
              <FaGithub fill="#fff" size={25} className="cursour-pointer" />
            </a>
          </section>
          <span className="absolute w-24 h-6 py-1 text-xs text-center rounded-lg bg-slate-50 text-bgcolor -bottom-2 left-5">
            {gener}
          </span>
        </div>
        <h2 className="pt-4 text-sm font-semibold text-center">{title}</h2>
        <p className="w-full px-4 pt-2 text-xs font-light text-center ">
          {description}
        </p>
      </section>
    </TextAnimate>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  gener: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}

export default Projects
