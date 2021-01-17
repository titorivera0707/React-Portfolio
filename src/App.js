import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./style.css"

function App() {
  return (
    <Router>
        <Nav />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App