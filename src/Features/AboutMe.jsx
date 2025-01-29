import Reveal from "../ui/Reveal"
import TextAnimate from "../ui/TextAnimate"

import me from "../me.jpg"

const AboutMe = () => {
  return (
    <div className="w-full min-h-[87vh] pt-10" id="aboutme">
      <div className="flex items-center justify-center w-full">
        <Reveal>
          <h2 className="px-2 py-2 text-xl font-bold text-center capitalize md:px-0 md:text-2xl">
            Devoted{" "}
            <span className="text-transparent font-Poppins bg-gradient-to-r from-gradientFrom to-gradietTo bg-clip-text">
              full stack developer and designer{" "}
            </span>
            from <br /> Ethiopia
          </h2>
        </Reveal>
      </div>

      <div className="flex flex-col w-full mt-8 md:flex-row space-x-9 md:px-36">
        <section className="w-[85%] mx-auto md:w-80 h-80 md:py-3 ">
          <p className="py-5 text-3xl font-bold font-Raleway">20+</p>
          <TextAnimate>
            <h2 className="text-xl font-semibold font-Poppins">
              Projects Completed
            </h2>
          </TextAnimate>
          <TextAnimate>
            <p className="py-5 text-xs text-blue-300 text-light font-edu">
              As a seasoned Full Stack Developer, I possess a comprehensive
              skill set that spans both front-end and back-end development,
              enabling me to build robust, efficient, and user-friendly web
              applications.
            </p>
          </TextAnimate>
          <img
            src={me}
            alt=""
            className="object-cover w-12 h-12 rounded-full"
          />
        </section>
        <section className="flex space-x-7">
          <img src={me} alt="" className="object-cover w-40 h-full md:w-64" />

          <div className="">
            <TextAnimate>
              <span className="pb-3 text-sm font-thin md:pb-8">
                {" "}
                My Creative Toolkit
              </span>
            </TextAnimate>
            <TextAnimate>
              <h2 className="mt-5 text-lg font-semibold leading-none md:text-2xl font-Poppins">
                The Skills behind creating <br /> the magic
              </h2>
            </TextAnimate>

            <section className="flex flex-wrap w-full gap-1 mt-2 h-fit md:gap-3 md:mt-7">
              <Tool src="sass.png" />
              <Tool src="react.png" />
              <Tool src="mongo.png" />
              <Tool src="python.png" />
              <Tool src="node.png" />
              <Tool src="js.png" />
              <Tool src="git.png" />
              <Tool src="css.png" />
              <Tool src="redux.png" />
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

const Tool = ({ src }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 p-3 bg-opacity-50 rounded-full md:w-16 md:h-16 bg-gray-700/50">
      <img
        src={src}
        alt=""
        className="object-cover rounded-full md:w-9 md:h-9"
      />
    </div>
  )
}

export default AboutMe
