import Nav from "./Components/Nav/Nav";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Portfolio />
    </div>
  );
}

export default App;
