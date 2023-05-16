import Nav from "./Components/Nav/Nav";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Service />
      <Experience />
      <Work />
    </div>
  );
}

export default App;
