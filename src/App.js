import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Categories from "./layouts/Categories";
import Navi from "./layouts/Navi";
import ProductList from "./pages/ProductList";
import Dashboard from "./layouts/Dashboard";
import { Button, Dropdown, Menu, Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
