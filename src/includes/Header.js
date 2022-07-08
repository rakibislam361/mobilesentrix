import React from 'react'

function Header() {
  return (
     <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="user-menu">
                  <table>
                    <tbody><tr>
                        <td>
                          <a href="./"><img src="assets/img/logo.png" /></a>
                        </td>
                        <td>
                          <div className="search">
                            <form action>
                              <input type="text" className="form-control" placeholder="What are looking for?" />
                              <button className="button">
                                <i className="fa fa-search" aria-hidden="true" />
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              <div className="col-md-6">
                <div className="user-menu" style={{paddingTop: '20px'}}>
                  <table style={{justifyContent: 'center'}}>
                    <tbody><tr>
                        <td style={{textAlign: 'center'}}>
                          <u>
                            <li>
                              <i className="fa fa-gear fa-2x" /><br />
                              <a href="#">Service</a>
                            </li>
                          </u>
                        </td>
                        <td style={{textAlign: 'center', borderLeft: '1px solid #dedede'}}>
                          <ul>
                            <li style={{width: '94px'}}>
                              <i className="fa fa-user fa-2x" /><br />
                              <a href="#">My Account</a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul>
                            <li>
                              <div className="offer-timer" id="demo" style={{color: 'white'}} />
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul>
                            <li>
                              <div className="shopping-item">
                                <table>
                                  <tbody><tr>
                                      <td>
                                        <ul><i className="fa fa-shopping-cart fa-2x" style={{color: '#333'}} /></ul>
                                      </td>
                                      <td style={{borderLeft: '1px solid #dedede'}}>
                                        <ul>
                                          <li> <span>$10.00</span></li>
                                        </ul>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </div>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
              {/* <div class="col-md-4">
                    <div class="header-right">
                        <ul class="list-unstyled list-inline">
                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">currency :</span><span class="value">USD </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li class="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"><span class="key">language :</span><span class="value">English </span><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
          </div>
      </div>
      
  )
}

export default Header