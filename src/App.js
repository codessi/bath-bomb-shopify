import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPages from "./pages/ProductPages";
import Cart from './components/Cart'
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:slug">
            <ProductPages />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer /> 
      </Router>
    </div>
  );
};

export default App;
