import { useState } from "react"
import { FaGithub } from "react-icons/fa6"

import Reveal from "../ui/Reveal"
import TextAnimate from "../ui/TextAnimate"
import PropTypes from "prop-types"

const Projects = () => {
  return (
    <div className="w-full min-h-[87vh] pt-16">
      <div className="flex items-center justify-center w-full">
        <Reveal>
          <h1 className="mb-5 text-xl font-bold text-center text-transparent capitalize font-Poppins md:text-2xl bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text">
            Projects I have been working on
          </h1>
        </Reveal>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 pt-0 cursor-pointer md:flex-row md:pt-8">
        <Card
          gener=" SPA website"
          title="Landing Page"
          description="Beautifull landing page using react, tailwindcss and other package"
          image="https://private-user-images.githubusercontent.com/158570827/407443215-807d505a-6f35-4696-997e-3c3c2269e309.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgwODkzMzksIm5iZiI6MTczODA4OTAzOSwicGF0aCI6Ii8xNTg1NzA4MjcvNDA3NDQzMjE1LTgwN2Q1MDVhLTZmMzUtNDY5Ni05OTdlLTNjM2MyMjY5ZTMwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyOFQxODMwMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NWFjZjFmYTNlNTg0NDdlODJhZjY2Nzc4ZWU0NDk0NDBlMDk1NWRiZjFmMjkxN2E2YmU2MTJjNTczM2ZmODg5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OnuKKM_I4Kzq8oRH0prLPuqK2uEc5GmiJk5JyQc_ruE"
          link="https://github.com/sami855-ux/Student-managment-Dashboard.git"
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
          image="https://private-user-images.githubusercontent.com/158570827/404395191-00ab910e-92d2-41b4-a5ce-ea5e8d618329.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgwODg5MjEsIm5iZiI6MTczODA4ODYyMSwicGF0aCI6Ii8xNTg1NzA4MjcvNDA0Mzk1MTkxLTAwYWI5MTBlLTkyZDItNDFiNC1hNWNlLWVhNWU4ZDYxODMyOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyOFQxODIzNDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZmIwYWY2YzM2YWU3YTQ3YjQ1ZWZjZTM3ODhiZmU5YTQ0YWU2NmFhNDBiNjAwYWQ2OWJmYTE1OTE0YzZiMTFiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pHIsDyY_X_eKlA7EPWLAHSbx9W6nvwBY-If4EQOaUEQ"
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
