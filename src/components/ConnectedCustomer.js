import React from 'react'

function ConnectedCustomer() {
  return (
    <section className="connected-customer"> 
    <div className="connected-customer-img" >
      <img  src="./images/Image.png" alt="" />
    </div>
    <div className="connected-customer-text">
      <h3>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</h3>
      <div className="connect-services">
          <div className="more">
            <h4>We connect our customers with the best?</h4>
            <img src="./images/down-arrow.png" alt="" />
          </div>
          <div className="line1"></div>
          <div className="more">
            <h4>Android research & development rockstar? </h4>
            <img src="./images/down-arrow.png" alt="" />
          </div>
          <div className="line1"></div>
      </div>
    </div>
  </section>
  )
}

export default ConnectedCustomer