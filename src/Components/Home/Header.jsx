import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                style={{ marginRight: "20px" }}
                src="https://cdn3.vectorstock.com/i/1000x1000/67/12/logo-for-sport-shop-vector-26636712.jpg"
                alt="logo"
                height={50}
              />
              {/* <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg> */}
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link px-2 text-white">
                  Products
                </Link>
              </li>
              {/* <li>
                <Link to="/faq" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li> */}
              <li>
                <Link to="/support" className="nav-link px-2 text-white">
                  Support
                </Link>
              </li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <Link to="/cart">
                <button type="button" className="btn btn-warning">
                  Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
