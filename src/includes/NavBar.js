import React from 'react'

function NavBar() {
  return (
      <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><a href="#">Apple</a></li>
                  <li><a href="#">Samsung</a></li>
                  <li><a href="#">Motorola</a></li>
                  <li><a href="#">LG</a></li>
                  <li><a href="#">Others Parts</a></li>
                  <li><a href="#">Game Console</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Tools&amp;Supplies</a></li>
                  <li><a href="#">Tools&amp;Supplies</a></li>
                  <li><a href="#">Refurbishing</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      
  )
}

export default NavBar