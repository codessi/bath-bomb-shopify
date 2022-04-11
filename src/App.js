import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPages from "./pages/ProductPages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/products/:slug">
            <ProductPages />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <p>Footer </p>
      </Router>
    </div>
  );
};

export default App;
