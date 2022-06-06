import React from "react";
import {useState} from "react";
// use react-router Link or NavLink
import {Link, useNavigate} from "react-router-dom";


// const Link = <a />;


const Navbar = () => {

  const navigate = useNavigate();
  const handleOnClick =(id) => {
          if(id===1){
              navigate("/products/1");
          }
          if(id===2){
            navigate("/products/2");
         }
        if(id===3){
          navigate("/products/3");
        }      
  };
  
  let [count, setCount] =useState(0);
  return (
    <div data-cy="navbar" className="navbarz">
      <Link data-cy="navbar-home-link" to="/">Home</Link>
     
      <span data-cy="navbar-cart-items-count"> 
       Cart:{count}
      </span>
      <button data-cy="navbar-login-logout-button">Login</button>

      <div>
      <Link to="/products/">Products</Link>
        <button onClick={()=> handleOnClick(1)}>Product 1</button>
        <button onClick={()=> handleOnClick(2)}>Product 2</button>
        <button onClick={()=> handleOnClick(3)}>Product 3</button>
      </div>


    </div>
      
    
  );
};

export default Navbar;
