 import React from 'react'
 
 function AddSection() {
   return (
      <div className="promo-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="card promo-add-left">
                  <div className>
                    <i className="fa fa-refresh" />
                    <p>30 Days return</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="card promo-add-right">
                  <div className>
                    <i className="fa fa-refresh" />
                    <p>30 Days return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
   )
 }
 
 export default AddSection