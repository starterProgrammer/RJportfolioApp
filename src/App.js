import Nav from "./Components/Nav/Nav";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { themeContext } from './Context'
import { useContext } from "react";

function App() {

  const theme = useContext(themeContext)
  const darkMood = theme.state.darkMood;

  return (
    <div className="App"
      style={{
        background: darkMood ? 'black' : '',
        color: darkMood ? 'white' : ''
      }}
    >
      <Nav />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
