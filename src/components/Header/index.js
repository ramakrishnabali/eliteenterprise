import { useContext } from "react";
import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import cartContext from "../../cartContext";

import "./index.css"

const Header = ()=>{

  const {number} = useContext(cartContext)
  return(
  <>
    <div className="header-container"> 
      <h1 className="header-heading">Elite Enterprise</h1> 
      <div className="header-sub-container"> 
        <Link to="/"  className="header-links">
          <p>Home</p>
        </Link>
        <Link to="/about"  className="header-links">
            <p>About</p>
        </Link>
        <div className="dropdown">
          <p className="dropdown-toggle header-links" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          </p>

          <ul className="dropdown-menu drop">
          <Link to="/team"  className="dropdown-item header-sub-links">
                  <li>
                    Team
                  </li>
              </Link>
              <Link to="/blog" className="header-sub-links dropdown-item">
                  <li>
                    Blogs
                  </li>
              </Link>
          </ul>
        </div>
        <Link to="/shop"  className="header-links">
            <p className="header-links">Shop</p>
        </Link>
        {/* <p className="header-links">Brands</p> */}
        <Link to="/contactus"  className="header-links">
            <p className="header-links">Support</p>
        </Link>
        <input className="header-search" type="text" />
        <div className="search-icon">
            <BsSearch />
        </div>
        <div className="header-cart">
            <div className="header-cart-icon-container">
                <BsCart3 className="cart-icon"/>
            </div>
            <h1 className="header-links">Cart({number})</h1>
        </div>
      </div> 
    </div> 

    <div className="header-container-small">

        <div className="dropdown">
          <p className="dropdown-toggle header-links" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          </p>

          <ul className="dropdown-menu drop">
              <Link to="/"  className="dropdown-item header-sub-links">
                  <li>
                    Home
                  </li>
              </Link>
              <Link to="/about" className="header-sub-links dropdown-item">
                  <li>
                    About
                  </li>
              </Link>
              <Link to="/shop"  className="dropdown-item header-sub-links">
                  <li>
                    Shop
                  </li>
              </Link>
              <Link to="/team"  className="dropdown-item header-sub-links">
                  <li>
                    Team
                  </li>
              </Link>
              <Link to="/blog"  className="dropdown-item header-sub-links">
                  <li>
                    Blog
                  </li>
              </Link>
              <Link to="/contactus"  className="dropdown-item header-sub-links">
                  <li>
                    Support
                  </li>
              </Link>

          </ul>
        </div>

        <div className="header-small">
              <div className="search-sub">
                <input className="header-search" type="text" />
                <div className="search-icon">
                      <BsSearch />
                </div>
              </div>
              <div className="header-cart">
                  <div className="header-cart-icon-container">
                      <BsCart3 className="cart-icon"/>
                  </div>
                  <h1 className="header-links">({number})</h1>
              </div>
        </div>
    </div>
</>)
}

export default Header