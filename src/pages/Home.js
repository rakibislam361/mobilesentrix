import React from 'react';
import AddSection from '../includes/AddSection';
import BrandSlider from '../includes/BrandSlider';
import Footer from '../includes/Footer';
import HomeSlider from '../includes/HomeSlider';
import Header from './../includes/Header';
import NavBar from './../includes/NavBar';

const Home = () => {
  return (
   <>
      <Header/>
      <NavBar/>
      <HomeSlider/>
      <AddSection/>
       
        <div className="maincontent-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="latest-product">
                  <div className="single-product-widget">
                    <h2 className="product-wid-title">FEATURE PRODUCT</h2>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="product-images">
                          <div className="product-main-img">
                            <img src="assets/img/product-thumb-4.jpg" alt="" className />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-wid-product">
                          <span className="border">
                            <a href="single-product.html">
                              <img src="assets/img/product-thumb-4.jpg" alt="" className="product-thumb" />
                            </a>
                          </span>
                          <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                          <div className="product-wid-price">
                            <ins>$400.00</ins><br />
                          </div>
                          <div className="product-qty">
                            <div className="input-group" style={{width: '36%'}}>
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                  <span className="glyphicon glyphicon-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" defaultValue={1} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="glyphicon glyphicon-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="single-wid-product">
                          <a href="single-product.html"><img src="assets/img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                          <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>
                          <div className="product-wid-price">
                            <ins>$400.00</ins>
                          </div>
                          <div className="product-qty">
                            <div className="input-group" style={{width: '36%'}}>
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                  <span className="glyphicon glyphicon-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" defaultValue={1} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="glyphicon glyphicon-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="single-wid-product">
                          <a href="single-product.html"><img src="assets/img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                          <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                          <div className="product-wid-price">
                            <ins>$400.00</ins>
                          </div>
                          <div className="product-qty">
                            <div className="input-group" style={{width: '36%'}}>
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                  <span className="glyphicon glyphicon-minus" />
                                </button>
                              </span>
                              <input type="text" name="quant[1]" className="form-control input-number" defaultValue={1} min={1} max={10} />
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                  <span className="glyphicon glyphicon-plus" />
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="latest-product">
                  <div className="single-product-widget">
                    <h2 className="product-wid-title">NEW PRODUCT</h2>
                    <hr />
                    <div className="single-wid-product">
                      <span className="border">
                        <a href="single-product.html">
                          <img src="assets/img/product-thumb-4.jpg" alt="" className="product-thumb" />
                        </a>
                      </span>
                      <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                      <div className="product-wid-price">
                        <ins>$400.00</ins><br />
                      </div>
                      <div className="product-qty">
                        <div className="input-group" style={{width: '36%'}}>
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                              <span className="glyphicon glyphicon-minus" />
                            </button>
                          </span>
                          <input type="text" name="quant[1]" className="form-control input-number" defaultValue={1} min={1} max={10} />
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                              <span className="glyphicon glyphicon-plus" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="single-wid-product">
                      <a href="single-product.html"><img src="assets/img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                      <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>
                      <div className="product-wid-price">
                        <ins>$400.00</ins>
                      </div>
                      <div className="product-qty">
                        <div className="input-group" style={{width: '36%'}}>
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                              <span className="glyphicon glyphicon-minus" />
                            </button>
                          </span>
                          <input type="text" name="quant[1]" className="form-control input-number" defaultValue={1} min={1} max={10} />
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                              <span className="glyphicon glyphicon-plus" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="single-wid-product">
                      <a href="single-product.html"><img src="assets/img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                      <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                      <div className="product-wid-price">
                        <ins>$400.00</ins>
                      </div>
                      <div className="product-qty">
                        <div className="input-group" style={{width: '36%'}}>
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                              <span className="glyphicon glyphicon-minus" />
                            </button>
                          </span>
                          <input type="text" name="quant[1]" className="form-control input-number" defaultValue={1} min={1} max={10} />
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                              <span className="glyphicon glyphicon-plus" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <BrandSlider/>
      <Footer/>
      </>
  );
}

export default Home;
