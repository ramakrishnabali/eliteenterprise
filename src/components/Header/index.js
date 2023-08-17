import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

import "./index.css"

const Header = ()=>(
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
            <div class="dropdown">
              <p className="dropdown-toggle header-links" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
              </p>

              <ul class="dropdown-menu drop">
              <Link to="/team"  className="header-sub-links dropdown-item">
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


            {/* <p className=""></p> */}
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
                <h1 className="header-links">Cart (0)</h1>
            </div>
        </div>
     </div>


    {/* <div className=""> */}
    <nav className="navbar bg-body-tertiary small-device-header">
      <div className="container-fluid">
        <div className="header-small">
          <input className="header-search" type="text" />
          <div className="search-icon">
              <BsSearch />
          </div>
          <div className="header-cart">
              <div className="header-cart-icon-container">
                  <BsCart3 className="cart-icon"/>
              </div>
              <h1 className="header-links">(0)</h1>
              </div>
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
            <h1 className="header-heading">Elite Enterprise</h1>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
              <Link to="/"  className="header-links">
                Home
             </Link>
              </li>
              <li className="nav-item">
              <Link to="/about"  className="header-links">
                About
             </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className=" header-links dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </Link>
                <ul className="dropdown-menu">
                    <Link to="/team"  className="header-links dropdown-item">
                      <li className="">
                        Team
                      </li>
                  </Link>
                  <Link to="/"  className="header-links dropdown-item">
                      <li className="">
                        Blogs
                      </li>
                  </Link>
                </ul>
              </li>
              <li className="nav-item">
              <Link to="/shop"  className="header-links">
                Shop
             </Link>
              </li>
              <li className="nav-item">
              <Link to="/"  className="header-links">
                Brands
             </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item">
              <Link to="/contactus"  className="header-links">
                Support
             </Link>
              </li>
            </ul>
            {/* <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
    {/* </div> */}
</>
)

export default Header