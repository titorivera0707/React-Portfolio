import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./style.css"
import "./components/images/19742.jpg"

function App() {
  return (
    <Router className="body">
        <body>
        <Nav />
        <div className="containerr">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
      </body>
    </Router>
  );
}

export default App