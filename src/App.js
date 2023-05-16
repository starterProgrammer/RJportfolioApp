import Nav from "./Components/Nav/Nav";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
