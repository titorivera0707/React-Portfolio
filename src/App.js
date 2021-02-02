import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/ProjectsPage";
import Initial from "./pages/Initial";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./style.css"
import "./components/images/19742.jpg"

function App() {
  return (
    <Router>
        <Nav />
        <div className="containerr">
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Projects} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App