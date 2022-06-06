import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        
        {
          <div>
        <Navbar />    
        <Home />
        <Login/>
        <Routes>
          <Route path="products/*" element ={<Products/>} >
              <Route path=":id" element ={<Product/>} />
          </Route>
      </Routes>
          </div>
        }
    
    </div>
  );
}

export default App;
