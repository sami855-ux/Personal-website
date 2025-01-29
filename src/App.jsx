import AboutMe from "./Features/AboutMe"
import Contact from "./Features/Contact"
import Header from "./Features/Header"
import Home from "./Features/Home"
import Projects from "./Features/Projects"
import Service from "./Features/Service"

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Service />
      <Contact />
      {/* <RouterProvider router={router} /> */}
    </div>
  )
}

export default App
